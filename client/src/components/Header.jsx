import { NavLink } from 'react-router-dom'

function Header() {
  
  
  return (
    <header>
      <h3>Edson's Porfolio</h3>

      <nav>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header