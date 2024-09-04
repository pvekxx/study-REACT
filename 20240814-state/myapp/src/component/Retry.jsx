import React, { Component } from 'react'

export default class Retry extends Component {

    onClickHandler = () => {
        console.log("재시작")
        this.props.setInit()

    }


    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>재시작</button>
            </div>
        )
    }
}
