

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge, bg-light text-dark">UG Reports</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li class="nav-item">
          <a class="nav-link" onClick={()=>setcategory("login")}>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"onClick={()=>setcategory("dashboard")}>Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"onClick={()=>setcategory("grades")}>Grades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"onClick={()=>setcategory("alert")}>Alert</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"onClick={()=>setcategory("missinggradeform")}>MissingGradeForm</a></li>
            <li><a className="dropdown-item"onClick={()=>setcategory("instructorcontact")}>InstructorContact</a></li>
            <li><a className="dropdown-item"onClick={()=>setcategory("helpandsupport")}>HelpandSupport</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
