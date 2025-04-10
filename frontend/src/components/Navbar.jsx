import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isLoggedIn, logout} = useContext(AuthContext);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark mt-0 sticky-top'>
            <div className="container-fluid">
                <a className='navbar-brand fs-2' href='/'>KeyTempo</a>
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
                    <ul className="navbar-nav ms-auto d-flex gap-4">
                        <li className="nav-item">
                            <a className='nav-link fs-5' href="/">Home</a>
                        </li>
                        {!isLoggedIn ? (
                            <>
                            <li className="nav-item">
                                <a className='nav-link fs-5' href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link fs-5' href="/register">Register</a>
                            </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <a className='nav-link fs-5' href="#" onClick={logout}>Logout</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;