import {Component} from 'react'

import './index.css'

class BrowserHistory extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt=" app logo"
            className="img"
          />
          <div className="bg2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="img2"
            />
            <input
              type="search"
              className="search"
              placeholder="Search history"
            />
          </div>
        </div>

        <div className="bg3">
          <div className="bg4">
            <ul></ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
