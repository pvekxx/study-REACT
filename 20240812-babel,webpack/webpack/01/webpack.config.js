const path = require("path")
// npx webpack을 실행하면
// webpack의존성에서 webpack.config.js파일을 찾고 import해서
// 속성값을 사용해서 컴파일 한다.
// 키값은 동일하게 해줘야한다.
module.exports = {
    entry: "./src/index.js",
    mode: "development", // 개발 모드
    output: {
        filename: "bundle.js", // react에서 빌드를 하면 dist 폴더에 bundle.js로 작성이 된다.
        // 생성할 경로
        path: path.join(__dirname, "dist") // 의존성 위치에서 상대경로로 찾아가기때문에. path로 작성
    }
}