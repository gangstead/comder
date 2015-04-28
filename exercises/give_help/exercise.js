var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , through2      = require('through2')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)



exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'


  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = ['-h']

  process.nextTick(callback)
})

// Mess with std out stream.  Must be done *before* comparestdut
exercise.addProcessor(function (mode, callback) {
  //use through or through2 to intercept stdout //TODO SWG
  function cleanOutput() {return through2( function(buf, enc, callback){
    var lines = buf.toString().split('\n');

    function shouldTestLine(l) {
      return (l.length > 0 && l.indexOf('Usage:') == -1)
    }

    this.push(lines.filter(shouldTestLine).join('\n'));
    // if(line.length > 0
    //   && line.indexOf('Usage:') != 0 ){
    //     this.push(line)
    // }
    //this.push(line);
    callback()
  })};

  var dirtySubmissionOut = this.submissionStdout;
  var dirtySolutionOut = this.solutionStdout;
  this.submissionStdout = cleanOutput();
  this.solutionStdout = cleanOutput();
  dirtySubmissionOut.pipe(this.submissionStdout);
  dirtySolutionOut.pipe(this.solutionStdout);
  process.nextTick(callback);
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
