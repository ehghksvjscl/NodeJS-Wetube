#1 
install express

#2
create gitignore file
create README.md

#3
mod pacage.json -> start command add 
mod index.js -> add handleListening fun and const port

#4
add get method /
add get method /profile

#5
bable이란? 

바벨은 자바스크립트 표준인 ECMAScript(이하 ES)의 최신 문법으로 작성된 코드를 실행할 수 있는 이전 버전 문법으로 변환해주는 트랜스파일러이다. (core-js 등의 주요 폴리필도 포함하고 있다.)

bable install 
 - @babel/core
 - @babel/node
 - @babel/preset-env
 - add file bablerc

 ```
{
  "presets": ["@babel/preset-env"]
}
```

#6 nodemon 
nodemon이란: 소스 저상시 자동으로 node 재시작

npm install nodemon -D

    - D 옵션 : 개발 환경에만 적용

mod package.json

#7 express 미들웨어 정의(중간에 실행 시키는 함수)

#8 install outher 미들웨어

- morgan
- helmet
- body-parser
- cookie-parser

#9 setting router.js
- 라우터 초기세팅 진행 app.js , init.js , router.js

#10 MVC
M : data
V : how does the data look
C : function that loos for the data

#11 Router 정리

#12 Controller 정리

#13 View 정의(pug 사용)