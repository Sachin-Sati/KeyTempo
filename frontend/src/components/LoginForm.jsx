import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/login', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData),
            })
            const data = await res.json();
            if(res.ok) {
                alert(data.message);
                navigate('/home');
            } else {
                alert(data.message);
            }            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="card-container">
          <div className="card shadow p-4 custom-card">
          <div className="card-body">
                    <h5 class="card-title mb-3">Login</h5>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="username"
                        name="username"
                        value={formData.username}
                        placeholder="john"
                        onChange={handleChange}
                        />
                        <label className="form-label mt-3" htmlFor="password">Password:</label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="john123" 
                        onChange={handleChange}
                        />
                        <button className="btn btn-success mt-3">Submit</button>
                    </form>         
                </div>    
          </div>
        </div>
    )
}

export default LoginForm;