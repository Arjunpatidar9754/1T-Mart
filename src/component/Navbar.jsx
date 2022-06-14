import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNavbar = () => {
    const state = useSelector((state)=> state.handleCart);
    return (
        <>
            <Navbar className="navbar-form navbar-fixed-top" bg="light" expand="lg" style={{ position:'sticky', top:'0', zIndex: '1000' }}>
                <Container >
                    <Navbar.Brand className="me-5" href="#"><span className="fw-bolder me-n1 fst-italic space-left2 space-right2 text-danger">1T </span>mart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-center" id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/contact" >
                                Contact
                            </NavLink>
                        </Nav>
                        <NavLink className="btn btn-outline-dark me-2" to={`/login`} >Login</NavLink>
                        <NavLink className="btn btn-outline-dark me-2" to={`/register`} >Register</NavLink>
                        <NavLink className="btn btn-outline-dark me-2" to={`/cart`} >Cart({state.length})</NavLink>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;