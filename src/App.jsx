import Alert from "./Components/Alert"
import Dashboard from "./Components/Dashboard"
import Grades from "./Components/Grades"
import HelpandSupport from "./Components/HelpandSupport"
import InstructorContact from "./Components/InstructorContact"
import Landing from "./Components/Landing"
import Login from "./Components/Login"
import MissingGradeForm from "./Components/MissingGradeForm"
import Navbar from "./Components/Navbar"

const App = () => {
  const [category,setcategory] = useState("general");
  return (
    <div>
      <Navbar setcatedgory={setcategory}/>
      <Landing category={category}/>
  </div>
  )
}

export default App
