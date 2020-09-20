const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
    // blob 데이터 다운로드
    const {data : vidoeFile} = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(vidoeFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();
}

const startRecording = () => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable",handleVideoData);
    recordBtn.addEventListener("click",stopRecording);
}

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click",stopRecording);
    recordBtn.addEventListener("click",getVideo);
    recordBtn.innerHTML = "녹화 시작";
}

const  getVideo = async() => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1920, height: 1080 }
        })
        videoPreview.srcObject = stream;
        videoPreview.play();
        videoPreview.muted = true;
        recordBtn.innerHTML = "녹화 중지";
        streamObject = stream;
        startRecording(stream);
    } catch (error) {
        recordBtn.innerHTML = "녹화 불가";
    } finally {
        recordBtn.removeEventListener("click",getVideo);
    }
}

function init() {
    recordBtn.addEventListener("click",getVideo)
}

if(recorderContainer) {
    init();
}