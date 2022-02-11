import React from 'react'

export const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand text-uppercase" href="./"><h1 className="fs-5">{brand}</h1></a>
        </div>
    </nav>
  )
}

export default Navbar


