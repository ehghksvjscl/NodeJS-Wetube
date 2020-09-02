## pages:
- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video


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

#14 Node.js 템플릿 엔진 (pug) 설치
- install
- app.set("view engine","pug")

#15 One single source of truth(한 곳에서만 정보를 보관)
- 버그를 최소화 하는 법칙
- 템플릿 작성(layout,partials)

#16 특정 변수를 View로 넘기는법 (미들웨어 사용)
- 미들웨어.js create
- 시용 #{변수명}

#17 쿼리 파라미터
- 참고 videoControllers.js

#18 sample data db.js create

#19 mixin 템플릿

#20 routes.js에서 id 넘기기(함수 사용)  

#21 mongodb , dotenv install

#22 create model : Video

#23 create model : Comments

#24 async, try catch

#25 multer install 
- multer은 파일을 업로드 하면 경로를 던져주는 미들웨어이다.
- 참고 : https://www.npmjs.com/package/multer

#26 upload video 
- multipart/form-data로 보낸 파일을 받는다.
- middlewares.js에서 multer로직을 작성.