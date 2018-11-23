import React from 'react'
import css from '../../Styles/memory.scss'

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Memory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theBands: [
                  'beatles.PNG', 'clash.jpg', 'kiss.png', 'lennon.jpg', 'lynyrdskynyrd.jpg', 'nirvana.jpg', 'radiohead.jpg', 'springsteen.jpg',
                  'beatles.PNG', 'clash.jpg', 'kiss.png', 'lennon.jpg', 'lynyrdskynyrd.jpg', 'nirvana.jpg', 'radiohead.jpg', 'springsteen.jpg'
                ],
      shuffledBands: [],
      foundCards: [],
      flippedBands: [],
      tries: 0
    },
    this.initialize()
  }

  handleClick(name, index) {
    if(this.state.flippedBands.length == 2){
      setTimeout(() => {
        this.check()
      }, 650)
    } else {
      let band = {
        name,
        index
      }

      let foundCards = this.state.foundCards
      const bands = this.state.flippedBands
      const previousValue = this.state.tries

      foundCards[index].hidden = false

      bands.push(band)

      this.setState({
        flippedBands: bands,
        foundCards: foundCards,
        tries: previousValue + 0.5
      })

      if(this.state.flippedBands.length == 2){
        setTimeout(() => {
          this.check()
        }, 650)
      }
    }
  }

  check () {
    let foundCards = this.state.foundCards
    if ((this.state.flippedBands[0].name === this.state.flippedBands[1].name) && (this.state.flippedBands[0].index != this.state.flippedBands[1].index)){
      foundCards[this.state.flippedBands[0].index].found = true
      foundCards[this.state.flippedBands[1].index].found = true
    } else {
      foundCards[this.state.flippedBands[0].index].hidden = true
      foundCards[this.state.flippedBands[1].index].hidden = true
    }

    this.setState({
      foundCards: foundCards,
      flippedBands: []
    })
  }

  initialize() {
    let foundCards = [];
    this.state.shuffledBands = this.randomize(this.state.theBands)
    this.state.shuffledBands.map((name,index) => {
      foundCards.push({
        name: name,
        hidden: true,
        found: false
      })
    })
    this.state.foundCards = foundCards
  }

  randomize (orderedList) {
    const totalCards = orderedList.length
    let copyList = orderedList.slice()
    let randomizedList = []

    while (randomizedList.length !== totalCards) {
      const rnd = getRandomInt(0, copyList.length - 1)
      const newCard = copyList.splice(rnd, 1)
      randomizedList.push(newCard[0])
    }
    return randomizedList
  }

  render() {
    return (
        <div className='memoryGame'>
          <h1>Awesome Memory Band Game</h1>
          <h2>Tries: {Math.floor(this.state.tries)}</h2>
          <div className="board">
              {
                this.state.foundCards.map((band, index) => {
                  return <Card band={band.name} click={ () => {this.handleClick(band.name, index)} } hidden={band.hidden} found={band.found}/>
                })
              }
          </div>
        </div>

      )
  }

}

class Card extends React.Component {
  constructor(props) {
      super(props)
      this.state = {

      }
    }
  clicked (band){
    this.props.click(band)
    console.log(band);
  }
  render(){
    return (
      <div className={"card" + (!this.props.hidden ? ' flipped' : '') + (this.props.found ? ' found' : '')} onClick={() =>
            //console.log(this.props)
            this.clicked(this.props.band)
          }>
        <div className="front">
          X
        </div>
        <div className="back">
          <img src={"https://raw.githubusercontent.com/arr15334/memory-react/master/images/" + this.props.band}/>
        </div>
      </div>
    )
  }
}
