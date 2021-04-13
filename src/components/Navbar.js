import React from 'react';
import logo from './assets/images/logo_red.png';



const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="index.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="about.html" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="services.html" className="nav-link">Services</a>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">Products</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a href="./products.html" className="dropdown-item"> Categories</a>
                                <div className="dropdown-divider"></div>
                                <a href="./products_lists.html" className="dropdown-item">specific feature</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    
                </div>
        </div>
    </nav>
     /*Setup Account modal */
     
        
    )
}

export default Navbar;