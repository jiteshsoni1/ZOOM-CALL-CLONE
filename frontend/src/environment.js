let IS_PROD = true;
const server = IS_PROD ?
    "https://zoom-call-clone-backend.onrender.com":
    "http://localhost:8000"

export default server;