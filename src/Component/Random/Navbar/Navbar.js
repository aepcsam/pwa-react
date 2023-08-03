import React from 'react'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">Logo</div>
            <div className="navbar_nav">
                <ul>
                    <li className="nav_item active">
                        <a href="/" className="nav_link">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="/" className="nav_link">Service</a>
                    </li>
                    <li className="nav_item">
                        <a href="/" className="nav_link">Contact</a>
                    </li>
                    <li className="nav_item">
                        <a href="/" className="nav_link">About</a>
                    </li>
                </ul>
            </div>
            <div className="search">
                <input type="serach" className="search" />
            </div>

        </div>
    )
}

export default Navbar