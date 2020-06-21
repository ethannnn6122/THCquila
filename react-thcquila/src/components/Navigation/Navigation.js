import React from 'react';
import classes from  './Navigation.module.css';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav} from 'react-bootstrap';

// Container Imports
import HomeContainer from '../../containers/HomeContainer/HomeContainer';
import ShopContainer from '../../containers/ShopContainer/ShopContainer';
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
  
const Navigation = () => {
    return (
        <>
            <Navbar className={classes.NavWrapper} variant="dark">
                <LinkContainer to='/' exact><Navbar.Brand>THCquila</Navbar.Brand></LinkContainer>
                <Nav className={classes.NavLink} >
                    <LinkContainer to='/' exact><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to='/shop' ><Nav.Link>Shop</Nav.Link></LinkContainer>
                    <LinkContainer to='/contact' ><Nav.Link>Contact</Nav.Link></LinkContainer>
                </Nav>
                <LinkContainer to='/shop/cart' exact className="ml-auto"><Button className={classes.StyledButton}><i className="fas fa-cart-plus"></i> My Cart</Button></LinkContainer>
            </Navbar>
            <Route path="/" exact component={HomeContainer}/>
            <Route path="/shop" component={ShopContainer}/>
            <Route path="/contact" component={ContactContainer}/>
        </>
    )
}

export default Navigation;