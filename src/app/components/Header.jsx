import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    // <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-4 w-100'>
    //     <div className="container navbar-container">
    //         <a href='/' className='navbar-brand brand'>NBA Stats</a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
    //             <span className="navbar-toggler-icon header-span"></span>
    //         </button>
    //         <div className='collapse navbar-collapse' id="navmenu">
    //             <ul className='navbar-nav ml-auto'>
    //                 <li className='nav-item px-3'>
    //                     <a href='#Todays-Games' rel="noreferrer" className='nav-link'>Todays Games</a>
    //                 </li>
    //                 <li className='nav-item px-3'>
    //                     <a href='#NBA-Stats' rel="noreferrer" className='nav-link'>NBA Players Stats</a>
    //                 </li>
    //                 {/* <li className='nav-item px-3'>
    //                     <a href='#Avg-table' rel="noreferrer" className='nav-link'>Season Averages</a>
    //                 </li>
    //                 <li className='nav-item px-3'>
    //                     <a href='#L5Avg-table' rel="noreferrer" className='nav-link'>L5 GP Averages</a>
    //                 </li>
    //                 <li className='nav-item px-3'>
    //                     <a href='#Home-Away-Table' rel="noreferrer" className='nav-link'>Home/Away Averages</a>
    //                 </li> 
    //                 <li className='nav-item px-3'>
    //                     <a href='#Stats-table' rel="noreferrer" className='nav-link'>Per game</a>
    //                 </li>            */}
    //             </ul>
    //         </div>
    //     </div>
    // </nav>

    // <Navbar className='py-4' bg="dark" expand="lg">
    //     <Container>
    //       <div className='d-flex justify-content-between'>
    //       <Navbar.Brand className='text-light' href="#home">NBA Stats</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="me-auto">
    //                 <Nav.Link className='text-secondary ps-5' href="#home">Upcoming Games</Nav.Link>
    //                 <Nav.Link className='text-secondary' href="#link">NBA Players Stats</Nav.Link>
    //             </Nav>
    //         </Navbar.Collapse>
    //       </div>
            
    //     </Container>
    // </Navbar>


      <Navbar expand="lg" className="bg-dark py-4">
        <Container>
          <Navbar.Brand className='text-light' href="#">NBA Stats</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light' />
          <Navbar.Collapse id="nbasic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav>
              <Nav.Link className='text-light me-5' href='#Todays-Games'>Upcoming Games</Nav.Link>
              <Nav.Link className='text-light' href='#Stats-table'>NBA Players Stats</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
