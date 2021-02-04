const path = require('path');
const { spawn } = require('child_process');

describe('logger behaviour', () => {
  it('logs out multiple params - 2 strings', done => {
    const testAppFilePath = path.join(__dirname, 'index.js');
    const testApp = spawn('node', [testAppFilePath]);

    testApp.stdout.on('data', data => {
      const stdoutData = JSON.parse(data.toString());
      expect(stdoutData.msg).toBe('param1 param2');
      testApp.kill('SIGINT');
      done();
    });
  });
});
