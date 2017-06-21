
import Hangul from 'hangul-disassemble'
import dictionary from './dictionary.txt'

// 사전 파싱
const dic = {}
dictionary.split('\n\n').forEach(str => {
  const rules = str.split('\n')
  dic[rules[0]] = rules[1].split(', ')
})

const downVowels = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ']
const SPACE = '　'


function changeChar(input) {
  const len = dic[input] ? dic[input].length : null
  const rand = Math.floor(Math.random() * len)

  if (len) return dic[input][rand]
  else if (input.match(/[ㄱ-힣]/)) return '?'
  else return input
}


function hanbongulize(hangul) {
  const lines = ['', '', '']

  const hanguls = hangul.split('')
  const disassembled = Hangul.disassemble(hangul)

  disassembled.forEach(char => {
    if (typeof char === 'object') {
      const first = changeChar(char.first)
      const vowel = changeChar(char.vowel)
      const last = changeChar(char.last || SPACE)

      lines[0] += first
      // 아래방향 모음일 경우
      if (downVowels.includes(char.vowel)) {
        lines[1] += vowel
        lines[2] += last
      }
      // 오른쪽방향 모음일 경우
      else {
        lines[0] += vowel
        lines[1] += last + SPACE
        lines[2] += SPACE + SPACE
      }
    }
    // 한글이 아닐 경우
    else if (typeof char === 'string') {
      lines[0] += char
      lines[1] += SPACE
      lines[2] += SPACE
    }
  })

  return lines.reduce((p, n) => p + '\n' + n)
}


// export
if (typeof window === 'undefined') {
	module.exports = { hanbongulize }
}
else {
	window.hanbongulize = hanbongulize
}
