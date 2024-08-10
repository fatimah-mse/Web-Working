import { Link } from 'react-router-dom'
import './NavBar.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'

export default function NavBar() {

  return (
    <>
      <Navbar expand='lg' className="FM-nav px-3 shadow" fixed="top">
        <Container>
          <Link to="/" className='FM-navbar-logo text-decoration-none fs-4 m-0'><img className='mb-2 ms-4' src="./web-icon-logo.png" />كيف يعمل الويب</Link>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
          <Navbar.Offcanvas className='sidebar'
            id='offcanvasNavbar-expand-lg'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement="end">
            <Offcanvas.Header className='me-auto' closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/api" className='nav-link me-lg-3 fs-5'>API</Link>
                <Link to="/url-page" className='nav-link me-lg-3 fs-5'>الروابط التي زرتها مسبقاً</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}