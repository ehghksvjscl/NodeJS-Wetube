import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)
}

const handleHome = (req, res) => {
    res.send("안녕 홈 화면이야!")
}

const handleProfile = (req,res) => {
    res.send("프로파일 화면!")
}
app.listen(PORT,handleListening)

app.get('/', handleHome)
app.get('/profile',handleProfile)