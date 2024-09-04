import React, { Component } from 'react'

export default class Todobox extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            cmplt: false
        }
    }

    componentDidUpdate() {
        console.log("업데이트")
        console.log(this.state)
    }

    cmpltTodo = () => {
        this.setState({ ...this.state, cmplt: !this.state.cmplt })
    }

    render() {
        return (
            <div>
                <input type='checkbox' onChange={this.cmpltTodo}></input>
                <span>
                    {this.props.index + 1}번 할 일
                </span>
                -
                <span>
                    {this.props.title}
                </span>
                -
                <span>
                    {this.props.detail}
                </span>
                -
                <span>
                    {this.state.cmplt ? "완료" : "미완료"}
                </span>
            </div>
            // <div>
            //     <input type='checkbox' onChange={this.cpltTodo}></input>
            //     <span>
            //         {this.props.id}번
            //     </span>
            //     -
            //     <span>
            //         {this.props.title}
            //     </span>
            //     -
            //     <span>
            //         {this.props.detail}
            //     </span>
            //     -
            //     <span>
            //         {this.state.cplt ? "완료" : "미완료"}
            //     </span>
            // </div>
        )
    }
}
