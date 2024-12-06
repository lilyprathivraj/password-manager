import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    visible: false,
    userDetailsList: [],
    displayList: [],
  }

  submit = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newDetails],
      displayList: [...prevState.userDetailsList, newDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  check = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  }

  remove = id => {
    this.setState(prevState => ({
      userDetailsList: prevState.userDetailsList.filter(
        eachItem => eachItem.id !== id,
      ),
      displayList: prevState.userDetailsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  search = event => {
    this.setState(prevState => ({
      displayList: prevState.userDetailsList.filter(eachItem =>
        eachItem.website.includes(event.target.value),
      ),
    }))
  }

  website = event => {
    this.setState({
      website: event.target.value,
    })
  }

  username = event => {
    this.setState({
      username: event.target.value,
    })
  }

  password = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {displayList, website, username, password, visible} = this.state
    const count = displayList.length
    return (
      <div className="bg-container">
        <div className="row">
          <img
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="password-manager"
          />
        </div>
        <div className="row form-container">
          <form onSubmit={this.submit}>
            <h1>Add New Password</h1>
            <div>
              <img
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                placeholder="Enter Website"
                type="text"
                onChange={this.website}
                value={website}
              />
            </div>
            <div>
              <img
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                placeholder="Enter Username"
                type="text"
                onChange={this.username}
                value={username}
              />
            </div>
            <div>
              <img
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                placeholder="Enter Password"
                type="password"
                onChange={this.password}
                value={password}
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <div>
            <img
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-manager"
            />
          </div>
        </div>
        <div className="password-container">
          <div className="row">
            <div className="row">
              <h1>Your Passwords</h1>
              <p>{count}</p>
            </div>
            <div>
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                type="search"
                onChange={this.search}
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="checkBox-container">
            <input id="checkBox" type="checkBox" onChange={this.check} />
            <label htmlFor="checkBox">Show Passwords</label>
          </div>
          <>
            {count === 0 ? (
              <>
                <img
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <p>No Passwords</p>
              </>
            ) : (
              <ul className="row">
                {displayList.map(eachItem => (
                  <PasswordItem
                    userDetails={eachItem}
                    remove={this.remove}
                    key={eachItem.id}
                    visible={visible}
                  />
                ))}
              </ul>
            )}
          </>
        </div>
      </div>
    )
  }
}
export default PasswordManager
