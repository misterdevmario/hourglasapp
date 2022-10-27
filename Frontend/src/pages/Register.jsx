import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
  });

  const onChange =(e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit =(e)=>{
    e.preventDefault()
  }

  const { name, password, password2 } = formData;
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Create User</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input type="text" className="form-control" id='name' name = 'name' value ={name} placeholder='User name' onChange={onChange} />
          </div>
          <div className="form-group">
          <input type="password" className="form-control" id='name' password = 'name' value ={password} placeholder='User password' onChange={onChange} />
          </div>
          <div className="form-group">
          <input type="password2" className="form-control" id='name' password2 = 'name' value ={password2} placeholder='Confirm user password' onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
