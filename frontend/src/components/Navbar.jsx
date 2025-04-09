const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark mt-0 sticky-top'>
            <div className="container-fluid">
                <a className='navbar-brand' href='/home'>KeyTempo</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ms-auto">
                        <a className='nav-link' href="/home">Home</a>
                        <a className='nav-link' href="/login">Login</a>
                        <a className='nav-link' href="/register">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;