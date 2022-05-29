/* eslint-disable */

import React from "react"

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'kim'
        }
    }

    changeName = () => {
        this.setState({
            name: "park"
        })
    }

    render() {
        return (
            <>
                <div>프로필입니다. {this.state.name}</div>
                <button className="btn" onClick={ this.changeName }>이름바꾸기</button>
            </>
            
        )
    }
}