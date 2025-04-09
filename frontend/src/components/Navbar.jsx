import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark mt-0 sticky-top'>
            <div className="container-fluid">
                <a className='navbar-brand' href='/home'>KeyTempo</a>
                <button
                className="navbar-toggler"
                type="button"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <span class="material-symbols-outlined">close</span>
                    ) : (
                        <span className="navbar-toggler-icon"></span>
                    )}
                    
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className='nav-link' href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="/register">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;