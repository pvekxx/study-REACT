import { Component } from "react";

export default class Header extends Component { // export는 {Header}이렇게 객체에 담아서 내보냄 default는 한개만 내보낼때
    render() {
        return (
            <div id="header">
                헤더 영역
            </div>
        )
    }
}