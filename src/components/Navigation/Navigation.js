import classes from './Navigation.module.css';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// Container Imports
import HomeContainer from '../../containers/HomeContainer/HomeContainer';
import ShopContainer from '../../containers/ShopContainer/ShopContainer';
import ContactContainer from '../../containers/ContactContainer/ContactContainer';
import Default from '../Default';

const Navigation = () => {
    // Check path to conditionally render Cart button
    const location = useLocation();
    
    // Modernized "Cart" button with icon
    const cartButton = (
        <LinkContainer to='/shop/cart'>
            <Button className={classes.CartButton}>
                <i className="fas fa-shopping-cart mr-2"></i> 
                My Cart
            </Button>
        </LinkContainer>
    );

    return (
        <>
            <Navbar className={classes.NavWrapper} variant="dark" expand="lg" sticky="top">
                <LinkContainer to='/'>
                    <Navbar.Brand className={classes.Logo}>
                        <img className={classes.NavImg} src={`${import.meta.env.BASE_URL}logo192.png`}/> Infused Culture
                    </Navbar.Brand>
                </LinkContainer>
                {/* Mobile Toggle Button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <hr className={classes.Hr}/>
                    <Nav className="mr-5 align-items-left">
                        <LinkContainer to='/' exact>
                            <Nav.Link className={classes.NavLink}>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/shop'>
                            <Nav.Link className={classes.NavLink}>Shop</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link className={classes.NavLink}>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/* Show Cart button only inside Shop or if you prefer everywhere, remove the condition */}
                    <div className="d-flex mt-3 mt-lg-0">
                         {location.pathname.includes("/shop") ? cartButton : null}
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/" exact component={HomeContainer}/>
                <Route path="/shop" component={ShopContainer}/>
                <Route path="/contact" component={ContactContainer}/>
                <Route component={Default}/>
            </Switch>
        </>
    )
}

export default Navigation;