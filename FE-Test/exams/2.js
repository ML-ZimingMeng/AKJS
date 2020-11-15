const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 实现一个函数生成器，接收一个原函数和一组 index，生成一个新函数
 * 调用新函数时，按照 index 数组中定义的顺序将参数传入原函数中
 *
 */

function createRearFunc(func, indexes) {
  return function () {
    let argus = Array.from(arguments);
    let nums = [];
    for (let i = 0; i < argus.length; i++) {
      nums[indexes[i]] = argus[i]
    }
    return func(...nums);
  }
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    const originalFunc = function (a, b, c) {
      return [a, b, c];
    };
    const f = createRearFunc(originalFunc, [2, 0, 1]);
    // 按照 [2, 0, 1] 定义的顺序
    // ['foo', 'bar', 'fiz'] 分别应该作为原函数的第 2/0/1 个参数传入
    assert.deepEqual(f('foo', 'bar', 'fiz'), ['bar', 'fiz', 'foo']);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
