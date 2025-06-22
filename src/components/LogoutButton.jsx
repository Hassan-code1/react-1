import "./Log.css"
const LogoutButton = (props) => {
  return (
    <div className="log-container">
      <button className='logout-button' onClick={() => {props.useState(!props.isLoggedIn)}}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
