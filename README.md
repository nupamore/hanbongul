# 한본글
일본어로 한글 표현하기  

## Install
``` sh
$ npm install hanbongul
```

## Usage

### browser
``` html
<script src="dist/hanbongul.js"></script>
<script>
  hanbongulize('어둠에 삼켜져라!')
</script>
```
### node
``` js
const hanbongulize = require('hanbongul').hanbongulize
hanbongulize('어둠에 삼켜져라!')
```

## Build
치환표는 `src/dictionary.txt`이며, `npm test`를 실행하면 글자의 길이를 계산하여 `src/widthMap.js`파일이 만들어집니다.

``` sh
# 패키지 설치
$ npm install

# 치환표 수정
$ npm test

# 번들 파일 생성
$ webpack
```
