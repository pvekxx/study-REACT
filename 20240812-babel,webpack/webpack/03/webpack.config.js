const path = require("path")

const WebpackPlugin = require("html-webpack-plugin");
// WebpackPlugin : html 생성. 설정 속성을 줄 수 있는 플러그인

module.exports = {
    mode: "development", // 개발 모드

    entry: "./src/index.js", // 진입점. 이 파일 부터 시작 root

    // 모듈의 규칙 설정
    module: {
        rules: [
            {
                // 읽을 파일 확장자 js 와 jsx
                test: /\.(js|jsx)$/, // js랑 jsx 둘다 읽겠다
                // 읽어올 파일중에 제외할 속성
                // exclude 제외할 폴더
                exclude: /node_modules/,
                // JSX 문법을 작성 하는데
                // babel-loader를 사용해서 javascript로 변환하자.
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    // 사용할 플러그인 설정
    plugins: [
        // WebpackPlugin을 사용해서 html을 생성
        new WebpackPlugin({
            // template 변환할 html의 경로
            template: "src/index.html",
            // 번들링해서 생성될 html의 이름
            filename: "index.html"
        })
    ],

    // 번들링 내보낼 속성
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    }
}

// css로더를 추가해보기

// 목표 중요한것 바벨과 웹팩이 어떠한 목적성을 가지고 사용되는지
// 어떤 역할을 담당하고 있는지 내부 파악