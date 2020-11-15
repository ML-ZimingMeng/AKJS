const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 重新排列一个字符串，使得每个相邻字符都不同，列出所有情况
 *
 * --- 说明 ---
 *
 * - 字符串只包含小写字母或者数字
 */

function reorganize(str) {
  // 使用笨办法，生成所有字符串，再剔除重复的串
  const res = new Set();
  const visited = {};
  function dfs(path) {
    if (path.length === str.length) return res.add(path);
    for (let i = 0; i < str.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(path + str[i]);
      visited[i] = false;
    }
  }
  dfs('');
  let ans = [...res];
  let words = [];
  for (let word of ans) {
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        break;
      } else {
        if (i === word.length - 1) {
          words.push(word);
        }
      }
    }
  }
  return words.sort();
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepStrictEqual(reorganize('aabb').sort(), ['abab', 'baba']);
    assert.deepStrictEqual(reorganize('aaabbbb').sort(), ['bababab']);
    assert.deepStrictEqual(
      reorganize('aabbbc').sort(), 
      ['ababcb','abcbab','bababc','babacb','babcab','babcba','bacbab','bcabab','bcbaba','cbabab']
    );
    assert.deepStrictEqual(reorganize('1bbbbb'), []);
    return '通过';
  } catch (ex) {
    return '不通过';
  }
};
