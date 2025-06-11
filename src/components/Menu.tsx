import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      expand="lg"
      className="rounded-3 d-flex justify-content-center"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Crear Libro
          </NavLink>
        </li>
      </ul>
    </Navbar>
  )
}

export default Menu
