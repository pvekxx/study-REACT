import React, { useEffect, useState } from 'react'
import InputBox from '../Common/InputBox'
import { LoginBtn } from '../Common/SubmitBtn'
import { LoginFormUnder } from './FormUnderText'
import { BoxStyled } from '../Common/InputBox.styled'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const loginBtnHandler = (e) => { // 로그인 버튼
        e.preventDefault()
        console.log(id);
        console.log(pw);
    }


    return (
        <div>
            <form onSubmit={loginBtnHandler}>
                <BoxStyled>
                    <InputBox labelName="ID" inputType="text" onChange={(e) => setId(e.target.value)} />
                </BoxStyled>
                <BoxStyled>
                    <InputBox labelName="PW" inputType="password" onChange={(e) => setPw(e.target.value)} />
                </BoxStyled>
                <LoginBtn>로그인</LoginBtn>
            </form>
            <LoginFormUnder>
                <Link to={'/signup'}>
                    Create Account
                </Link>
            </LoginFormUnder>
        </div>
    )
}

export default LoginForm
