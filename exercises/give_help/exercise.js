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

// Mess with std out stream.  Must be done *before* comparestdout
exercise.addProcessor(function (mode, callback) {

  // There are some lines we don't want to compare
  function shouldTestLine(l) {
    return (
      l.length > 0                  //pointless to compare empty lines
      && l.indexOf('Usage:') == -1  //This line contains the name of the submission file
      )
  }

  //use through2 to intercept stdout and replace it with a stream that's been cleaned up for testing
  function cleanOutput(dirtyStream, lineValidator) {
    var cleanStream = through2( function(buf, enc, callback){
      var lines = buf.toString().split('\n');
      var cleanStr = lines.filter(lineValidator).join('\n');
      this.push(cleanStr);
      callback()
    });

    dirtyStream.pipe(cleanStream);
    return cleanStream;
  };

  this.submissionStdout = cleanOutput(this.submissionStdout, shouldTestLine);
  if (mode == 'verify') {
    this.solutionStdout = cleanOutput(this.solutionStdout, shouldTestLine);
  }
  process.nextTick(callback);
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
