

const Login = () => {

    const [action,setAction] = useState("Login");
    <i class="bi bi-person-fill"></i>
  return (
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img src="" alt="" />
            <input type="ID Number" placeholder='ID' />
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="Password" placeholder='PIN' />
        </div>
      </div>
      <div className="forgot-password">Forgot Pin <span>Click Here!</span></div>
      <div className="submit-container">
        <div className={"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login
