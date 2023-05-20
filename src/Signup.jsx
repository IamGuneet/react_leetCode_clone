import "./login.css"
export default function SignUp() {
  return (
    <div>
    <h1>SignUp</h1>
       <div className="form-container">
      <input type="text" placeholder="email" className="login-input"/>
      <input type="text" placeholder="password" className="login-input"/> 
      <button className="login-button">SIGNUP</button>
    </div>
    </div>
  )
}
