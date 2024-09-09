import styled from "styled-components";

export const BoxStyled = styled.div`
    & > div {
        /* background-color: red */
    }

    &>div>div>label {
        font-size: 18px;
    }

    & >div>div>input {
        box-sizing: border-box;
        width: 300px;
        height: 28px;
        border: 0;
        border-bottom: 1px solid;
    }

    & >div>div>input:hover{
        border:1px solid;
    }
`