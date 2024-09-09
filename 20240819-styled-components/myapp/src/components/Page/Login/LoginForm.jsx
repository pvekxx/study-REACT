import { useRef } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 초기화를 한번 해서 사용해야 한다.
const LoginForm = ({ children, loginInfo }) => {
    // console.log(props)
    // props.children

    // 태그의 선택 3가지의 방법
    // 첫째 form으로 했을때 name값을 활용
    // 둘째 상태변수로 선언해서 onchange가 될 때마다 상태변수 업데이트 - 상태변수가 바껴있으니까 가져와서 쓴다
    // 셋째 ref를 사용하는 방법 태그 선택

    // ref : 태그의 레퍼런스, 태그의 인스턴스에 접근 할 수 있게 해주는 레퍼런스
    // 초기에 인스턴스에 접근 하기전에 할당할 초기값을 ()넣어주자 !
    // 이제는 좀 사용성이 떨어진다.(최적화 관련) 커스텀 훅을 사용하는게 좀 더 좋다.
    // 상태변수로 관리하는게 좀 더 효율적
    // currnet키에 인스턴스가 할당된다.
    // 초기값에 인스턴스가 할당된다.
    const uidInput = useRef(null); // ref초기화
    const upwInput = useRef(null); // ref초기화

    const navigate = useNavigate() // 초기화

    const loginHandler = (e) => {
        e.preventDefault() // 리액트에선 새로고침 무조건 막아야 함
        const user = {
            uid: "soon",
            password: "123"
        } // 임시값암
        if (user.uid === uidInput.current.value && user.password === upwInput.current.value) { // 일치하면
            loginInfo.setLoginInfo(user); // 셋인포에 유저를 담고
            navigate('/mypage') // 마이페이지로 이동
        }
    }

    useEffect(() => {
        console.log(uidInput.current.value)
    }, [uidInput]) // 태그를 주시하게 한다 ?

    return (
        <form onSubmit={loginHandler}>
            {children}
            {/* 위에서 태그 사이에 주는 거 받을때 칠드런 */}
            <label htmlFor="">아이디</label>
            <input type="text" ref={uidInput} />
            <label htmlFor="">비밀번호</label>
            <input type="password" ref={upwInput} />
            <button>로그인</button>
        </form>
    )
}

export default LoginForm