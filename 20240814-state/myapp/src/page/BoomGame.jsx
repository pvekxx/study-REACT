import { Component } from "react";
import Boom from "../component/Boom";
import Retry from "../component/Retry";

export default class BoomGame extends Component { // default 로 내보내면 하나만 내보내서 {BoomGame} 처럼 객체 안에 안담아서 내보낸다.
    constructor() {
        super()
        this.state = {
            over: false, // 게임 오버
            count: 0, // 현재 점수
            boom: Math.floor(Math.random() * 9), // 벌칙 폭탄
            boomCount: 9 // 니열할 폭탄의 개수
        }
    }
    // 상태변수의 생명주기에 따라서 코드를 실행시키고싶을때 를 위해서 개발자에게 함수를 제공한다.
    componentDidMount() {
        // 최초에 한번 호출 // 뭐하나 하고 체크용으로 하나하나 디버깅하면서 작업 중요
        console.log(this.state)
    }

    componentDidUpdate() {
        // 상태 변수가 변경되면 호출해야할 로직
        console.log("게임 매니저 상태 변경")
        console.log(this.state)
    }

    componentWillUnmount() {
        // 컴포넌트가 화면에서 보이지 않게 된 경우
    }

    setCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }

    gameOver = () => {
        this.setState({ ...this.state, over: true });
    }

    setBoom = () => {
        // 폭탄 초기화 render에서 over값이 false일때 실행시킬 함수임
        // this.setState({ ...this.state, over: false })
        const howMany = this.state.boomCount;
        return (Array(howMany).fill(null).map((e, index) => <Boom
            key={index}
            setValue={index === this.state.boom ? this.gameOver : this.setCount} // 셋 밸류 : 인덱스와 벌칙폭탄 일치시 게임오버 트루로 상태 변경. 아니면 점수 증가
        // gameOver={this.gameOver} // 게임오버 : 게임오버시킴 디스함수실행
        // over={this.state.over} // 오버 : 게임오버인지 아닌지
        />))
        {/* props로 gameOver() 값을 전달 */ }
    }

    setAllInit = () => {
        this.setState({
            ...this.state,
            over: false,
            count: 0,
            boom: Math.floor(Math.random() * 9)
        })
    }

    render() {
        return (<div className="boom-game-manager">
            <span>{this.state.count}</span>
            {this.state.over ? <><div>게임 오버</div></> : this.setBoom()}
            {/* {this.state.over ? <div>게임 오버</div> : <this.setBoom />} */}
            <Retry
                setInit={this.setAllInit}// 변경된 state값 초기화
            />
        </div>
        )
    }
}

// 1 게임 매니저v
// 2 폭탄v
// 3 게임 매니저의 역할 분리(게임 점수v, 게임 오버v, 랜덤한 지뢰의 값v)
// 4 폭탄의 열할(활성화인지 비활성화인지v)

// 게임 재시작 버튼 만들기