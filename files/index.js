const { exec } = require('child_process');

// 运行 Gost 服务端
const gostCommand = './gost -L=socks5://:20000?bind=true';

exec(gostCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`错误输出: ${stderr}`);
    return;
  }
  console.log(`标准输出: ${stdout}`);
});
