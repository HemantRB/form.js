import React from 'react'
// import Dashboard from "./components/dashboard"
import { useForm } from "react-hook-form"
import "./App.css"
function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
  
    
    <div className="App">
    <div>
      <h2>Vendor Administration Form</h2>
    </div>
      <div className="card border-0 container py-5 shadow p-4 w-150 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor=" vendor fullname">vendor Full Name</label>
            <input type="text"
              className="form-control"
              id="vendor fullname"
              {...register('vendor fullname')}
              />
              </div>	
        
          <div className="form-group">
            <label htmlFor="vendor email">vendor Email address</label>
            <input type="vendor email"
              className="form-control"
              id="vendor email"
              {...register('vendor email')}
            />
          </div>
          <div className="form-group">
            <label htmlFor=" vendor phone">vendor Phone Number</label>
            <input type="text"
              className="form-control"
              id="vendor phone"
              {...register('vendor phone')}

            />
          </div>
          <div className="form-group">
            <label htmlFor="vendor address">vendor address</label>
            <input type="vendor address"
              className="form-control"
              id="vendor address"
              {...register('vendor address')}

            />
          </div>
          <div className="form-group">
            <label htmlFor="email">vendor speciality</label>
            <input type="vendor speciality"
              className="form-control"
              id="vendor speciality"
              {...register('vendor speciality')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">vendor status</label>
            <input type="vendor status"
              className="form-control"
              id="vendor status"
              {...register('vendor status')}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                id="male"
                value="male"
                {...register("gender")}


              />
              <label className="form-check-label" htmlFor="male">male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                id="female"
                value="female"
                {...register("gender")}


              />
              <label className="form-check-label" htmlFor="female">female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                id="other"
                value="other"
                {...register("gender")}

              />
              <label className="form-check-label" htmlFor="other">other</label>
            </div>
            <div className="form-group">
              <select className="custom-select" name="state" {...register('state')}>
                <option value="">Select your state</option>
                <option value="Wardha">Wardha</option>
                <option value="Amravati">Amravati</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register('terms & condition')} />
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
              </div>
              <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="updates"  {...register('update contact and address')}/>
                <label className="form-check-label" htmlFor="updates">send me latest updated address and contact details</label>
              </div>
              </div>
            </div>

            <div>
              <button type="submit"
                className="btn btn-primary cancel" >
                submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
