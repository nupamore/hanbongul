
import Hangul from 'hangul-disassemble'
import dic from './widthMap'

const downVowels = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ']
const SPACE = '　'
const QUESTION = '？'


function changeChar(input) {
  const len = dic[input] ? dic[input].length : null
  const rand = Math.floor(Math.random() * len)

  if (len) return dic[input][0].char
  else if (input.match(/[ㄱ-힣]/)) return QUESTION
  else return input
}


export function hanbongulize(hangul) {
  const lines = ['', '', '']

  const hanguls = hangul.split('')
  const disassembled = Hangul.disassemble(hangul)

  if (!disassembled) return ''

  disassembled.forEach(char => {
    if (char && typeof char === 'object') {
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
        lines[1] += SPACE + last
        lines[2] += SPACE + SPACE
      }
    }
    // 한글이 아닐 경우
    else if (typeof char === 'string') {
      lines[0] += changeChar(char)
      lines[1] += SPACE
      lines[2] += SPACE
    }
  })

  return lines.reduce((p, n) => p + '\n' + n)
}

// browser
if (typeof window !== 'undefined') {
  window.hanbongulize = hanbongulize
}
