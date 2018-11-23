import React from 'react'
import css from '../Styles/style.scss'

export default class Otherprojects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0
        }
    }
    render() {
        return (
            <div>
                <section className="hero is-success is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h2 className="title">
                                Other plain javascript projects
                            </h2>
                            <div className='columns'>
                                <div className='column pro'>
                                    <h1 className='subtitle'> <a href="https://agile-oasis-50322.herokuapp.com/"> YelpCamp </a> </h1>
                                </div>
                                <div className='column pro'>
                                    <h1 className='subtitle'> <a href="https://pacific-savannah-11119.herokuapp.com/"> Color guessing game </a> </h1>
                                </div>
                                <div className='column pro'>
                                    <h1 className='subtitle'> <a href="https://agile-bayou-89183.herokuapp.com/blogs"> Blogapp </a> </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='exp'>
                    <div className='container'>
                        <h1 className='title' id='expe'>Experience</h1>

                        <div className='columns'>
                            <div className='column'>
                                <div className="card tarjeta">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="../../images/ms-icon-310x310.png" alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4">MHFile</p>
                                                <p className="subtitle is-6">Fullstack developer</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Develop and maintance of new features in <a href="https://www.mhfile.com"> MHFile</a> webapp and API
                                    <br />
                                            <time datetime="2018-1-1">Jan 2018 - April 2018</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='column'>
                                <div className="card tarjeta">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/1200px-Logo_Bayer.svg.png" alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4">Bayer</p>
                                                <p className="subtitle is-6">IT Trainee</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            Help support new innovative projects and automatization tasks
                                    <br />
                                            <time datetime="2018-1-1">Jun 2018 - Today</time>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                 
                </section>
            </div>
        )
    }
}
