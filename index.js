import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)
}

const handleHome = (req, res) => {
    res.send("안녕 홈 화면이야!")
}

const handleProfile = (req,res) => {
    res.send("프로파일 화면!");
}

const betweenHome = (req,res,next) => {
    console.log("미들 웨어");
    next();
}
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})); 
app.use(helmet()); // 보안과 관련된 미들웨어
app.use(morgan("dev")); // 통신 정보 관련 미들웨어

app.get('/',handleHome);
app.get('/profile',handleProfile);

app.listen(PORT,handleListening);