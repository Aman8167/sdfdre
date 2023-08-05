import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="form-group">
              <input type="search" className="form-control" placeholder="Search" />
            </div><br></br><br></br><br></br><br></br>
      <div className="col-md-11">
        <div className="custom-card ml-4">
          <div className="row">
            <div className="col-sm-5">
               <div class="card-body">
                <p>
                  Booking id-#123<br></br>
                  customer Details-<br></br>
                  Pickup Address

                </p>
               </div>
            </div>
            <div className="col-sm-5">
              <div className="card-body1">
              <select class="form-select w-40" aria-label="Default select example">
  <option selected>Action</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select><br></br><br></br>
<button type="button" class="btn btn-warning">Update</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div><br></br>
    <div className="row justify-content-center">
    
      <div className="col-md-11">
        <div className="custom-card ml-4">
          <div className="row">
            <div className="col-sm-5">
               <div class="card-body">
                <p>
                  Booking id-#123<br></br>
                  customer Details-<br></br>
                  Pickup Address

                </p>
               </div>
            </div>
            <div className="col-sm-5">
              <div className="card-body1">
              <select class="form-select w-40" aria-label="Default select example">
  <option selected>Action</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select><br></br><br></br>
<button type="button" class="btn btn-warning">Update</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
  );
}

export default App;
