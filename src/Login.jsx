import "./login.css"
export default function Login() {
  return (
    <div>
    <h1>Login</h1>
       <div className="form-container">
      <input type="text" placeholder="email" className="login-input"/>
      <input type="text" placeholder="password" className="login-input"/> 
      <button className="login-button">Sign in</button>
    </div>
    </div>
  )
}
