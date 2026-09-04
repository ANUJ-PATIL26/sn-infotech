const { spawn } = require('child_process');
console.log('Starting Wix publish process...');

const child = spawn('wix', ['publish', '-y'], {
  stdio: ['pipe', 'inherit', 'inherit'],
  shell: true,
});

child.stdin.write('\n');
child.stdin.end();
child.on('close', (code) => {
  console.log(`Wix publish process exited with code ${code}`);
  process.exit(code);
});
