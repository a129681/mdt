const { exec } = require('child_process')
var workerProcess = exec('cd ./bin && yarn init -y', {})

workerProcess.stdout.on('data', function(data) {
  console.log('stdout: ' + data)
})

workerProcess.stderr.on('data', function(data) {
  console.log('stderr: ' + data)
})
