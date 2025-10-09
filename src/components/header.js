// src/components/Header.js
import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <h1>Your Name - Web Developer</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
)

export default Header
