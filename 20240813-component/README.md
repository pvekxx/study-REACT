# CRA

## CRA 설치 명령어
```js
npx create-react-app 프로젝트명

```

## CRA 구성

1. public : 정적 파일들이 있는 폴더 (코드등 추가되지 않고 변경되지 않는 파일들)
2. src : 소스코드를 모아두는 폴더. 동적인 파일도 포함
- src/index.js : 루트 파일 , 진입점(entry)

## 테스트 환경 실행
- npm start : 메모리 상에 빌드 내용을 가지고 기본적으로 3000번 포트에 `테스트환경`을 구축해준다.


## 빌드 운영 배포
```sh
npm run build (package-json 참고)
```

## src/index.js
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode> : 로그 조사 엄격 모드 (콘솔로그같은거 두번씩 뜸)
```

### 아토믹 패턴
> 원자 분자 유기물(헤더 푸터 사이드바) 템플릿(동적으로 생성되는 for문으로) 페이지

## 컴포넌트
> UI의 단위 UI를 나눠서 구성 레이아웃 구성

### 리액트의 리렌더링
> 부모 컴포넌트가 리렌더링이 일어나면 모든 자식 컴포넌트는 `리렌더링` 된다.
> 태그 사이에 내용으로 전달된 `컴포넌트`는 리렌더링이 일어나지 않는 경우가 발생 할 수 있다. (안된다..)

