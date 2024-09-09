import React from 'react'
// rafce

const MyPage = ({ loginInfo }) => {
    return (
        <div>
            여기는 마이페이지 내 아이디는 : {loginInfo?.uid}
            {/* ? 옵션 체이닝 있으면 읽고 없으면 읽지마. */}
        </div>
    )
}

export default MyPage
