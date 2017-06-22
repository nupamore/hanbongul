
const phantom = require('phantom')
const fs = require('fs')
const dictionary = fs.readFileSync('src/dictionary.txt').toString()

// 파라미터 전달
function evaluate(page, func) {
  var args = [].slice.call(arguments, 2)
  var fn = 'function() { return (' + func.toString() + ').apply(this, ' + JSON.stringify(args) + ');}'
  return page.evaluate(fn)
}

// 백엔드 렌더링
function render(dictionary) {
  // 문자 가로 크기 구하기
  function getTextWidth(text) {
    var metrics = ctx.measureText(text)
    return metrics.width
  }

  document.body.innerHTML = '<canvas>'
  var canvas = document.querySelector('canvas')
  var ctx = canvas.getContext('2d')
  ctx.font = '10px "メイリオ", "Meiryo", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "Osaka", "IPA Pゴシック", "IPA PGothic", sans-serif'

  var dic = {}
  dictionary.split(/\n\n/).forEach(function(str) {
    var rules = str.split(/\n/)
    dic[rules[0]] = rules[1].split(', ')
    .map(function(char) {
      return {
        char: char,
        width: getTextWidth(char)
      }
    })
    .sort(function(a, b) {
      return b.width - a.width
    })
  })
  document.body.innerText = JSON.stringify(dic, null, 2)
}


(async function() {
  const instance = await phantom.create()
  const page = await instance.createPage()
  await page.open('about:blank')

  evaluate(page, render, dictionary)

  const content = await page.property('plainText')
  fs.writeFileSync('src/widthMap.js', 'export default ' + content)

  await instance.exit()
}());
