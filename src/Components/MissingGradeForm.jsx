

const MissingGradeForm = () => {
  return (
    <div>
      <form className="row g-2">
  <div className="col-md-6">
  <label className="visually-hidden" for="autoSizingInput">Course name</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder="Calculus 1"></input>
    </div>
    <div class="col-md-6">
  <label className="visually-hidden" for="specificSizeInput">Instructor name</label>
  <input type="text" className="form-control" id="specificSizeInputInstructorName" placeholder="Dr.Sam"></input>
  </div>
  <div className="col-12">
    <label for="inputLetter" className="form-label">Expected Grade</label>
    <input type="text" className="form-control" id="inputLetter" placeholder="B"></input>
  </div>
  <div className="col-12">
    <label for="inputEssay" className="form-label">Explanation field</label>
    <input type="text" className="form-control" id="inputEssay" placeholder="Haven't seen my Calculus 1 grade since last semester."></input>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputText" class="form-label">Text</label>
    <input type="text" class="form-control" id="exampleInputText"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default MissingGradeForm
