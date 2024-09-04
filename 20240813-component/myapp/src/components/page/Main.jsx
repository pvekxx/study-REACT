import React, { Component } from 'react' // rcc
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Body content={[
                    { id: 1 },
                    { id: 2 },
                    { id: 3 }]} /> */}
                <Body content={[
                    { id: "1", title: "제목1", detail: "내용1" },
                    { id: "2", title: "제목2", detail: "내용2" }
                ]} />
                <Footer />
            </div>
        )
    }
}
