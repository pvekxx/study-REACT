import React, { Component } from 'react'
// import Card from './card/Card'
import Todobox from './card/Todobox'

export default class Body extends Component {
    render() {
        return (
            <div id='body'>
                {/* {this.props.content.map((e) => <Card text={e.id} title={"두번째 카드"} >
                    <div>나는 자식이야</div>
                </Card>)} */}

                <h1>투두 리스트</h1>
                {this.props.content.map((e, index) => <Todobox key={e.id} index={index} title={e.title} detail={e.detail} />)
                }


                {/* 할일 리스트 만들기 */}

                {/* <Card text={"456"} title={"첫번째 카드"} >
                    <div>나는 자식이야</div>
                </Card> */}

                {/* <Card text={"123"} title={"두번째 카드"} > */}
                {/* 나는 자식이야 */}
                {/* // children으로 감 <div>태그 안붙여도 결국 내용만 감 */}
                {/* </Card> */}
            </div >
        )
    }
}
