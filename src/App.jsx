import React from 'react'
import AppRouter from './components/AppRouter.jsx'
import css from './Styles/style.scss'

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
        <section className="hero is-info is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Rodrigo Arriaza
              </h1>
              <h2 className="subtitle">
                Web developer
              </h2>
            </div>
          </div>
        </section>
        <section>
          <AppRouter />
        </section>
      </div>
    )
  }
}
