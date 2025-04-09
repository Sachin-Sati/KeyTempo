import { useState } from "react";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/register', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData),
            });
            const data = res.json();
            console.log(data);
            if(res.ok) {
                alert("User Registered Successfully!");
            } else {
                alert(`Status: ${res.status}`);
            }           
        } catch (error) {
            console.error(error); 
        }

    }
    return (
        <div className="card-container">
            <div className="card shadow p-4 custom-card">
            <div className="card-body">
                    <h5 className="card-title mb-3">Register</h5>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="username">Username:</label>
                        <input
                        className="form-control" 
                        type="text" 
                        id="username"
                        name="username" 
                        placeholder="John"
                        value={formData.username}
                        onChange={handleChange}
                        />
                        <br />
                        <label className="form-label" htmlFor="email">Email: </label>
                        <input
                        className="form-control" 
                        type="text" 
                        id="email"
                        name="email" 
                        placeholder="johndoe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <br />
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input 
                        className="form-control"
                        type="text" 
                        id="password"
                        name="password" 
                        value={formData.password}
                        placeholder="john123"
                        onChange={handleChange}
                        />
                        <br />
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;