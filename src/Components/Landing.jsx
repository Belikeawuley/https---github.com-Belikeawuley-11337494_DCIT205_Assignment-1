import user_icon from '../assets/person-fill.svg'
import password_icon from '../assets/lock-fill.svg'
import user_icon from '../assets/person-fill.svg'
import password_icon from '../assets/lock-fill.svg'


const Landing = ({category}) => {
const Login = () => {
 const [action,setAction] = useState("Login");
    <i className="bi bi-person-fill"></i>
  return (
    <div>
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="ID Number" placeholder='ID' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="Password" placeholder='PIN' />
        </div>
      </div>
      <div className="forgot-password">Forgot Pin <span>Click Here!</span></div>
      <div className="submit-container">
        <div className={"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  )
}
}

export default Landing
