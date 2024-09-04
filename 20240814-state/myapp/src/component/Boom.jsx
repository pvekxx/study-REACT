import { Component } from "react"
import BoomImg from '../image/boom.png'
import BoomActiveImg from '../image/boomActive.jpeg'

export default class Boom extends Component {
    constructor() {
        super()
        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        // console.log("폭탄 최초에 한번 호출")
        // console.log(this.state.isActive);
    }

    componentDidUpdate() {
        // console.log("폭탄 상태 업데이트");
        // console.log(this.state.isActive);
    }

    onClickHandler = () => {
        if (this.state.isActive) return // 트루면 더 눌리지 않게 반환
        // if (this.props.over === true) return // 프롭스로 받은 게임오버이면 반환
        this.setState({ ...this.state, isActive: true }) // 눌리면 트루로 만들고,
        this.props.setValue(); // 프롭스로 받은 ()실행  일치시 게임오버. 아니면 점수 증가
    }

    render() {
        return (
            // onClickHandler() 이렇게 호출하면 안되고 함수의 값으로
            <div onClick={this.onClickHandler}>
                <img src={this.state.isActive ? BoomActiveImg : BoomImg} alt="" />
            </div>
        )
    }
}