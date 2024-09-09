import React from 'react'

const LoginInput = ({ inputType, onChange }) => {
    return (
        <div>
            <input type={inputType} onChange={onChange} />
        </div>
    )
}

export default LoginInput