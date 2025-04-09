import { useState } from "react";

const LoginForm = () => {
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
                console.log("Status:", res.status);
                console.log("Message:", data.message);
                console.log("User:", data.user);
            } else {
                alert(data.message);
            }            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username"
            name="username"
            value={formData.username}
            placeholder="john"
            onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input 
            type="text" 
            id="password"
            name="password"
            value={formData.password}
            placeholder="john123" 
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default LoginForm;