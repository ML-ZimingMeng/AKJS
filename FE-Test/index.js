async function run() {
  for (let i = 1; i <= 5; i++) {
    const exam = require(`./exams/${i}`);
    const testResult = await exam();
    console.log(`第 ${i} 题结果: ${testResult}`);
  }
}

run();
