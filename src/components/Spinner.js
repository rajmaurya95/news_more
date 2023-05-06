import React, { Component } from 'react'
import Loading from "./spinner.gif";

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Loading} width={"70px"} height={"70px"} alt="loader" />
            </div>
        )
    }
}
