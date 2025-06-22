import "./Log.css"
const LoginButton = (props) => {
  return (
    <div className="log-container">
      <button className='login-button' onClick={() => props.useState(!props.isLoggedIn)}>
        Login 
      </button>
    </div>
  )
}

export default LoginButton
