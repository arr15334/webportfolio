import React from 'react'
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
                <section className="hero is-info is-medium" id='contact'>
                    <div className="hero-body">
                        <div className="container">
                            <h2 className="title">
                                Contact
                            </h2>
                            <div className='columns'>
                                <div className='column'>
                                    <a href="https://github.com/arr15334">
                                    <figure className='image is-128x128'>
                                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="" />                                
                                    </figure>
                                    
                                    </a>
                                </div>
                                <div className='column'>
                                    <a href="https://www.linkedin.com/in/rodrigo-arriaza-alonzo-554228138/">
                                        <figure className='image is-128x128'>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
                                        </figure>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
