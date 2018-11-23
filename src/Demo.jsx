import React from 'react'
import Axios from 'axios'
import css from './style.scss'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            joke: ''
        }

        this.axiosDemo = this.axiosDemo.bind(this)
    }

    axiosDemo() {
        return Axios.get('http://api.icndb.com/jokes/random')
            .then((data) => {
                const responseData = data.data || ''
                const joke = responseData.value.joke || ''
                this.setState({joke})
            })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Demo axios</h1>
                </div>
                <div className="button-container">
                    <button onClick={() => { this.axiosDemo() }}>Ver chiste</button>
                </div>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}
