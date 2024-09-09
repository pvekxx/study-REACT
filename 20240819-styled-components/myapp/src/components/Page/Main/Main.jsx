import { Header, Body, Footer } from "./Main.styled";
import { Link } from "react-router-dom";

const Main = () => {
    return (<>
        {/* 태그 사이에 넣은 div는 children={}으로 전달되어 자식의 내용으로 포함해줌 */}
        <Header><div>안녕하세요</div></Header>
        <Body>
            <Link to={'/login'}>로그인 페이지로 이동</Link>
        </Body>
        <Footer />
    </>)
}

export default Main;