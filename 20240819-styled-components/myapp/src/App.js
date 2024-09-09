import { useState } from "react";
import Login from "./components/Page/Login/Login";
import Main from "./components/Page/Main/Main";
import MyPage from "./components/Page/MyPage/MyPage";
import { Routes, Route, Navigate } from "react-router-dom"
import Detail from "./components/Detail/Detail";
import Shop from "./components/Shop/Shop";

function App() {
  // 전역에서 필요한 로그인 정보. 모든 컴포넌트가 필요함
  // 전역 상태 배우기 전에는 여기서 작성. 전역상태를 뭐뭐를 사용해야 할까 설계를 하는 사고를 키우자.
  const [loginInfo, setLoginInfo] = useState(null);

  // 컴포넌트가 컴포넌트를 반환
  // 리다이렉트를 시키는 컴포넌트
  // 고차 컴포넌트
  const Redirect = () => {
    // 이거 제일 문제 경로가 http://localhost:3000/mypage 인데 로그인 컴포넌트가 뜸.
    // 이러면 url을 관리할 수가 없지.

    // Navigate 컴포넌트 확용
    // 리다이렉트 Navigate라는 컴포넌트를 통해서 리다이렉트 시킴
    if (loginInfo) return <MyPage loginInfo={loginInfo} /> // 트루
    return (<Navigate to={'/login'} />) // 펄스

  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login loginInfo={{ loginInfo, setLoginInfo }} />} />
        {/* 바깥{}은 자바스크립트를 사용할것, 안쪽 {}은객체를 생성해서 전달하겠다. */}
        <Route path="/mypage" element={<Redirect />} />
        <Route path="/shop" element={<Shop />} />
        {/* 상세페이지에서 상태변수로 다루게 되면 공유가 안됨 */}
        <Route path="/detail/:num" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
