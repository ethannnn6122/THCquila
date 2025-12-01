import { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import classes from './HomeContainer.module.css';

class HomeContainer extends Component {
    render() {
        return (
            <>
                {/* Modern Hero Section */}
                <div className={classes.heroSection}>
                    <Container>
                        <h1 className="display-4 font-weight-bold mb-3 mt-5">Welcome to THCquila</h1>
                        <p className="lead mb-4" style={{ opacity: 0.9 }}>
                            Premium merchandise for the modern lifestyle.
                        </p>
                        <Route>
                            <LinkContainer to="/shop">
                                <Button size="lg" className={classes.shopBtn}>
                                    Shop Now
                                </Button>
                            </LinkContainer>
                        </Route>
                    </Container>
                </div>
                {/* Content Section - Stacked on Mobile, Row on Desktop */}
                <Container className="mb-5 mt-4">
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4 mb-md-0">
                            <h2 className="mb-3 text-blue">Our Story</h2>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                Ipsum in sunt tempor magna magna est ea do eu fugiat ex. Non exercitation proident deserunt irure laborum deserunt et dolor est nisi.
                                Duis aliqua excepteur adipisicing ullamco velit. Est in ex aliqua dolor qui amet voluptate exercitation commodo et non amet voluptate consectetur.
                            </p>
                        </Col>
                        <Col md={6} className="mb-4 mb-md-0">
                            <img 
                                src="https://picsum.photos/id/111/800/600" 
                                alt="Lifestyle" 
                                className="img-fluid rounded shadow-lg"
                                style={{ objectFit: 'cover' }} 
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default HomeContainer;