import React from 'react'
import axios from 'axios'
import css from '../../Styles/maze.scss'

export default class Maze extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 8,
      height: 12,
      maze: [[null]],
      player: {
        x: 0,
        y: 0,
        facing: 'down'
      },
      end: {x: 0, y: 0}
    }
    this.moveRight = this.moveRight.bind(this)
    this.moveDown = this.moveDown.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    // this.checkWon = this.checkWon.bind(this)
    this.buildMaze()
  }

  buildMaze() {
    let url = 'http://34.210.35.174:3001?w=' + this.state.width + '&h=' + this.state.height + '&type=json';
    return Promise.resolve()
      .then(() => {
        return axios.get(url)
      })
      .then((res) => {
        const mazeData = res.data || ''
        console.log(mazeData)
        let parsedMaze = []
        let newPlayer = []
        let xGoal = 0
        let yGoal = 0

        for (let i = 0; i < mazeData.length; i++) {
          parsedMaze.push([])
          newPlayer.push([])
          for (let j = 0; j < mazeData[i].length; j++) {
            if (mazeData[i][j] === '+' || mazeData[i][j] === '-' || mazeData[i][j] === '|') {
              parsedMaze[i].push('w')
            } else if (mazeData[i][j] === 'p') {
              parsedMaze[i].push('p')
            } else if (mazeData[i][j] === 'g') {
              parsedMaze[i].push('X')
              xGoal = j
              yGoal = i
            } else {
              parsedMaze[i].push('m')
            }
             if (mazeData[i][j] === 'p') {
              newPlayer[i].push('p')
              this.setState({
                player: {x:j, y:i, facing:'down'}
              })
             } else {
                newPlayer[i].push({})
            }
          }
        }

        // parsedMaze[parsedMaze.length - 2][parsedMaze.length - 2] = 'X'
        console.log(parsedMaze)
        this.setState({
          maze: parsedMaze,
          end: {
            x: xGoal,
            y: yGoal
          }
        })
      })
  }

  handleKeyDown (evt) {
    if (evt.key === 'a' || evt.key ==='ArrowLeft') {
      this.moveLeft()
    } else if (evt.key === 's' || evt.key === 'ArrowDown') {
      this.moveDown()
    } else if (evt.key === 'd' || evt.key === 'ArrowRight') {
      this.moveRight()
    } else if (evt.key === 'w' || evt.key === 'ArrowUp') {
      this.moveUp()
    }
  }

  moveRight () {
    const player = {
      x: this.state.player.x,
      y: this.state.player.y
    }
    console.log(player)
    const maze = this.state.maze
    const playerPos = maze[player.y][player.x + 1]
    const newPosition = {
      x: this.state.player.x + 1,
      y: this.state.player.y,
      facing: 'right'
    }
    if (playerPos !== 'w') {
      maze[player.y][player.x] = 'm'
      maze[newPosition.y][newPosition.x] = 'p'
      if (playerPos === 'X') alert('You have won')
      this.setState({
        player: newPosition,
        maze
      })
    }
  }

  moveDown () {
    const player = {
      x: this.state.player.x,
      y: this.state.player.y
    }
    const maze = this.state.maze
    const playerPos = maze[player.y + 1][player.x]
    const newPosition = {
      x: this.state.player.x,
      y: this.state.player.y + 1,
      facing: 'down'
    }
    if (playerPos !== 'w') {
      maze[player.y][player.x] = 'm'
      maze[newPosition.y][newPosition.x] = 'p'
      if (playerPos === 'X') alert('You have won')
      this.setState({
        player: newPosition,
        maze
      })
    }
  }

  moveUp() {
    const player = {
      x: this.state.player.x,
      y: this.state.player.y
    }
    const maze = this.state.maze
    const playerPos = maze[player.y - 1][player.x]
    const newPosition = {
      x: this.state.player.x,
      y: this.state.player.y - 1,
      facing: 'up'
    }
    if (playerPos !== 'w') {
      maze[player.y][player.x] = 'm'
      maze[newPosition.y][newPosition.x] = 'p'
      if (playerPos === 'X') alert('You have won')
      this.setState({
        player: newPosition,
        maze
      })
    }
  }

  moveLeft() {
    const player = {
      x: this.state.player.x,
      y: this.state.player.y
    }
    const maze = this.state.maze
    const playerPos = maze[player.y][player.x - 1]
    const newPosition = {
      x: this.state.player.x - 1,
      y: this.state.player.y,
      facing: 'left'
    }
    if (playerPos !== 'w') {
      maze[player.y][player.x] = 'm'
      maze[newPosition.y][newPosition.x] = 'p'
      if (playerPos === 'X') alert('You have won')
      this.setState({
        player: newPosition,
        maze
      })
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Morty Maze</h1>
        </div>
        <div className="maze" onKeyDown={this.handleKeyDown.bind(this)} tabIndex="0" autoFocus>
          {
            this.state.maze.map((row) => {
              return (
                row.map((block) => {
                  if (block === 'w') {
                    return(<div className='wall'>_</div>)
                  } else if (block === 'X') {
                    return(<div className='goal'>♥</div>)
                  } else if (block === 'p') {
                    return(
                    <div className={'player '+this.state.player.facing}>
                    </div>
                    )
                  } else {
                    return(<div className='other'>_</div>)
                  }
                })
              )
            })
          }
        </div>
      </div>
      
    )
  }
}
