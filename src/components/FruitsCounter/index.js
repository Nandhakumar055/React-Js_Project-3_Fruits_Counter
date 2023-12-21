import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  increaseMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
    console.log('Click Mango')
  }

  increaseBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="main-card-container">
          <h1 className="heading">
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>{' '}
            bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                className="fruit-button"
                onClick={this.increaseMangoCount}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                className="fruit-button"
                onClick={this.increaseBananaCount}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
