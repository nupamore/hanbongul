
const dic = {
  ' ': '　',

  'ㄱ': 'フ',
  'ㄴ': 'し',
  'ㄷ': '匸',
  'ㄹ': '己',
  'ㅁ': 'ロ',
  'ㅂ': '廿',
  'ㅅ': '人',
  'ㅇ': 'O',
  'ㅈ': 'ス',
  'ㅊ': '大',
  'ㅋ': 'ヲ',
  'ㅌ': 'E',
  'ㅍ': '立',
  'ㅎ': '云',

  'ㅏ': 'ﾄ',
  'ㅑ': 'I=',
  'ㅓ': '-I',
  'ㅕ': 'ツ',
  'ㅣ': 'I',
}

function hanbongulize(hangul) {
  const origin = hangul
  const disassembled = Hangul.disassemble(hangul, true)

  const hanbongul = disassembled.map(char => {
    return char.map(c => dic[c] || '?').reduce((p, n) => p + n)
  })
  .reduce((p, n) => p + n)

  return hanbongul
}
