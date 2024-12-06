import './index.css'

const PasswordItem = props => {
  const {userDetails, remove, visible} = props
  const {id, website, username, password} = userDetails
  const trigerRemove = () => {
    remove(id)
  }
  return (
    <li>
      <div className="row">
        <div>
          <h1>{username[0].toUpperCase()}</h1>
        </div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <div>
            {visible ? (
              <p>{password}</p>
            ) : (
              <img
                alt="stars"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              />
            )}
          </div>
        </div>
        <div>
          <button onClick={trigerRemove} type="button" data-testid="delete">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordItem
