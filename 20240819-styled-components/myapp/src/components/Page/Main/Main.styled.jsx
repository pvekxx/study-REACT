import styled from "styled-components"

// styled.생성할 태그 명`css의 구문` (태그를 생성.)
// &는 부모 & > 선택자 부모 바로 아래있는 자식요소
export const Body = styled.div`
    width : 100%;
    min-height : 500px;
    background-color: blue;
    /* 고유한 클래스 컴포넌트 안에 있으면 ! 아래 스타일 적용 */
    & > form {
        display: block;
        width: 500px;
        min-height: 400px;
        margin: auto;
    }
    .name {
        
    }
`

export const Header = styled.div`
    width: 100%;
    min-height: 80px;
    background-color: ${props => props.color || `rebeccapurple`} ;
    display: flex;
    justify-content:center;
    align-items: center;
    // props를 받아서 (key=value) 꺼내씀 있으면 || 앞에 없으면 뒤에
`

export const Footer = styled.div`
    width: 100%;
    min-height: 150px;
    background-color: red;
`