import './App.css'

import {Component} from 'react'

class App extends Component {
  state = {
    isSave: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  render() {
    const {isSave} = this.state
    const isSaveClassName = isSave ? 'save' : 'edit'
    const buttonText = isSave ? 'edit' : 'save'
    return (
      <div className="app-container">
        <div className={`container ${isSaveClassName}`}>
          <h1 className="heading">Editable Text Input</h1>
          <input type="text" />
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

// Replace your code here

export default App
