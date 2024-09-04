import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        console.log(props)
        super(props) // 부모의 생성자를 호출해야함
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // 최초 생성시 한번
        console.log("최초에 한번");

    }

    componentDidUpdate() {
        // 업데이트 될때마다. 상태변수 변경될 때마다.
        console.log("업데이트");
        console.log(this.state.count) // 아래쪽에 작성하면 콘솔로그가 바로찍히기때문에 state변경 이전 값이 밀려서 찍힘. 여기서 찍으세요 
    }

    // componentWillUnmount() {
    //     // 컴포넌트가 사라지면. 삭제되면. 보이지 않게 되면.
    //     console.log("사라졌어");

    // }

    incrementCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <div className='card'>
                    <div className="title">{this.props.title}</div>
                    <div className="content">
                        <p>{this.props.text}</p>
                        <p>{this.props.children}</p>
                        <button onClick={this.incrementCount}>카운트 증가</button>
                        <div>카운트 : {this.state.count}</div>
                    </div>
                </div>
            </>
        )
    }
}
