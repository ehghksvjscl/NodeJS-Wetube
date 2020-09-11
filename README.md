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

#27 change multer url (uploads/video)

#28 How to controll Mongodb
 - use wetube
 - show collections
 - db.videos.remove

 #29 video Detail 수정(video 정보 가져오기[파람값])
 - console.log(req.params.id) / 라우터에 이미 :id를 지정 했기 떄문에 가져올 수 있다.
 - const {} 형태로 id 값 가져오기
 - video 변수 지정 await 적용 findByid를 통해 가져오기 (https://mongoosejs.com/docs/api.html#model_Model.findById) 참고
 - try catch문으로 예외처리 (비디오 id가 없을 경우) catch일 경우 error home으로 redirect하기 
 - videoDetail 템플릿 수정  
    1. 동영상 .video__player / src = `/${video.fileUrl}`
    2. link / a .video__info / href=routes.editVideo [/:id/edit] / text = 비디오 수정
    3. title .video__info .video__title / h5
    4. views .video__info .video__views . span
    4. description .video__info .video__description p

#30 editVideo Mod
 - editVideo 수정 (routes.js) if => return /videos/${id}/edit elss EDIT_VIDEO
 - videoDitail의 editVideo 부분 수정
 - videoRouter.js editVideo 부분 수정
 - C : editVideo Post function add Get Modify / videoRouter.js 주석으로 구분 및 editVideo 수정(post,get)
 - C : get [ geteditVideo / const {파람} /  #29번 처럼 / ] / 템플릿 Title,Description = 수정(video.title,description) / from 수정 video.id
 - C : post [ update code 짜기 ] 
      - Model.findOneAndUpdate() 사용 참고 : https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
      - try redirect routes.videoDitail catch redirect routes.home

#31 Delete Video 
 - routes.js 수정 / return `/videos/${id}/delete`
 - videoDetail 탬플릿 수정
 - videoRouter.js 수정
 - Delete Video

#32 sort home 
- home sort DESC and two video 

#33 Search
- let video [] = ~~~
- videoController.js Search 기능 추가 (find({title: ${regex: searchingBy, $options: "i"}})
    - "i" : 옵션은 덜 민감하게 검색
- search 템플릿 if 추가 (비디오 길이 검사 후 없으면 메시지 뿌리기 / h5)
- videoDetail 탬플릿에 comments추가 .video.comments / if 문으로 분기(span) .video__commnet-number 1 comment / else ${video.comments.lenght} commendts / 해당 부분은 영어권 나라에 해당 하므로 커스텀

#34 Webpack
- mpn install webpack webpack-cli
- package.json 수정 스크립트 { dev:server , dev:assets}
- assets 폴더 생성 -> 현재 프로젝트 참고(주의 사항 : webpack.config.js는 ES6를 사용하지 못하고 옛날 JS를 써야 하는다는 점)
- 이해가 잘 안감. (참고 사이트 : https://webpack.js.org/concepts/#loaders)
- 설정할게 많음....

#35 SCSS
