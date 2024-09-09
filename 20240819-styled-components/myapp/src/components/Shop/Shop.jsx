import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
    // 더미 데이터
    // 전역 상태에 있다 가정
    const Item = [
        { count: 10, name: "예쁜 셔츠", num: 10010 }, // 수량, 이름, 고유값
        { count: 9, name: "벙거지 모자", num: 10001 },
        { count: 11, name: "찢어진 바지", num: 20001 }
    ]

    return (
        <div>
            여기는 상점
            {Item.map((el, index) => <div><Link to={`/detail/${el.num}`}>{el.name} 구매로 이동</Link></div>)}
        </div>
    )
}

export default Shop