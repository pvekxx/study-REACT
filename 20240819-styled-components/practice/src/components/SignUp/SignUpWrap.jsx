import React, { useEffect, useState } from 'react'
import Inputbox from '../Common/InputBox'
import { LoginBtn } from '../Common/SubmitBtn'
import { BoxStyled } from '../Common/InputBox.styled'
import { useNavigate } from 'react-router-dom'

const SignUpWrap = () => {
    const navigate = useNavigate()

    const [users, setUser] = useState([])
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const FormBtnHandler = (e) => { // 회원가입 버튼
        e.preventDefault()
        setUser([...users, { id, pw }])
        // navigate('/login')
    }

    useEffect(() => {
        console.log(users)
    })

    return (
        <div>
            <form onSubmit={FormBtnHandler}>
                <BoxStyled>
                    <Inputbox labelName="ID" inputType="text" kk={(e) => setId(e.target.value)} />
                </BoxStyled>
                <BoxStyled>
                    <Inputbox labelName="PW" inputType="password" onChange={(e) => setPw(e.target.value)} />
                </BoxStyled>
                <LoginBtn>회원가입</LoginBtn>
            </form>
        </div>
    )
}

export default SignUpWrap
