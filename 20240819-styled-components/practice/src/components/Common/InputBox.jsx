import React from 'react'
import LoginLabel from './Label';
import LoginInput from './Input';

const LoginBox = ({ labelName, inputType, onChange }) => {
    return (
        <div>
            <LoginLabel labelName={labelName} />
            <LoginInput inputType={inputType} onChange={onChange} />
        </div>
    )
}

export default LoginBox
