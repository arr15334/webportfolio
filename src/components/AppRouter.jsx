import React from 'react'
import Vueprojects from './Vueprojects.jsx'
import Reactprojects from './Reactprojects.jsx'
import Otherprojects from './Otherprojects.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import css from '../Styles/router.scss'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeClass: ''
    }
  }

  activateClass(c) {
    this.setState({
      activeClass: c
    })
    console.log('clase: ' + c);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <div className='container'>
                <li onClick={() => { this.activateClass('vue') }} className={this.state.activeClass === 'vue' ? 'activeHeader' : ''}>
                  <Link to="/rodrigoarriaza/contact">Contact</Link>
                </li>
                <li onClick={() => { this.activateClass('react') }} className={this.state.activeClass === 'react' ? 'activeHeader' : ''}>
                  <Link to="/rodrigoarriaza/react">React</Link>
                </li>
                <li onClick={() => { this.activateClass('other') }} className={this.state.activeClass === 'other' ? 'activeHeader' : ''}>
                  <Link to="/rodrigoarriaza/other">Other</Link>
                </li>
              </div>
            </ul>
          </nav>

          <Route exact path="/rodrigoarriaza/contact" component={Vueprojects} />
          <Route path="/rodrigoarriaza/react" component={Reactprojects} />
          <Route path="/rodrigoarriaza/other" component={Otherprojects} />
        </div>
      </Router>
    )
  }
}
