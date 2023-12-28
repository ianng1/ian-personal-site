import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to='/resume.pdf' download="resume" className="button -primary">Resume &rarr;</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)