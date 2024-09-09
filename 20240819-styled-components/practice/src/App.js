import LoginPage from "./components/Login/LoginPage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUp/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
