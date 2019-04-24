import React from "react";

const Form = props => (
  <div className='container form'>
    <div className='row align-items-center justify-content-center'>
      <div className=' col-10 col-md-6 col-sm-8'>
        <form onSubmit={props.getWeather}>
          <h2 className='text-center subtext'>Add a city and country</h2>
          <input
            type='text'
            class='form-control mb-2'
            name='city'
            placeholder='City'
          />
          <input
            type='text'
            class='form-control mb-2'
            name='country'
            placeholder='Country'
          />
          <button className='btn btn-primary align-items-right'>Submit</button>
        </form>
      </div>
    </div>
  </div>
);
export default Form;
