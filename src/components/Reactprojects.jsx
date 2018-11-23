import React from 'react'
import Maze from './ReactProjects/Maze.jsx'
import Calculator from './ReactProjects/Calculator.jsx'
import Memory from './ReactProjects/Memory.jsx'
import css from '../Styles/style.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0
        }
    }
    render() {
        return (
            <div>
                <section className='calculatorSection'>
                    <Calculator />
                </section>
                <section className='mazeSection'>
                    <div className='mazeContainer'>
                        <Maze />
                    </div>
                </section>
                <section className='memorySection'>
                    <Memory />
                </section>
            </div>
        )
    }
}
