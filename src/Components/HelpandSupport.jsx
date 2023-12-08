

const HelpandSupport = () => {
  return (
    <div>
      <div classname="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxwidth:"345px"}}>
  <img src={src} style={{height:"200px",width:"360px"}} classname="card-img-top" alt="..."></img>

  <div classname="card-body">
    <h5 classname="card-title">{FAQ.slice(0,50)}</h5>
    <p classname="card-text">Get to know about your grades and solution to any technical problem.</p>
    <a href="#" classname="btn btn-primary">Visit</a>
  </div>
</div>

<div classname="card" aria-hidden="true">
  <img src="..." classname="card-img-top" alt="..."></img>
  <div classname="card-body">
    <h5 classname="card-title placeholder-glow">
      <span classname="placeholder col-6"></span>
    </h5>
    <p classname="card-text placeholder-glow">
      <span classname="placeholder col-7"></span>
      <span classname="placeholder col-4"></span>
      <span classname="placeholder col-4"></span>
      <span classname="placeholder col-6"></span>
      <span classname="placeholder col-8"></span>
    </p>
    <a classname="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
    </div>
  )
}

export default HelpandSupport
