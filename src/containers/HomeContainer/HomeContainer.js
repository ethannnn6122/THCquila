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
                        <p className='text-muted'>By Infused Culture</p>
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
                {/* Content Section */}
                <Container className="mb-5 mt-4">
                    <Row className="align-items-stretch">
                        {/* Text Column: Removed 'justify-content-center' to ensure top alignment */}
                        <Col md={6} className="mb-4 mb-md-0">
                            <h2>Our Story</h2>
                            <br/>
                            <p className="text-muted" style={{ lineHeight: '1.8' }}>
                                <strong>Infused Culture</strong> presents <em>THCquila</em>. It started with a simple idea: High spirits and good vibes belong together. We noticed that the tequila lovers and the cannabis connoisseurs were often the same people at the party—so we built a brand just for them. THCquila isn't a drink; it's a statement. It’s apparel infused with the prickly edge of the desert and the chill of the West Coast. Bold graphics, vintage textures, and a unapologetic love for the cross-fade.
                            </p>
                        </Col>
                        
                        {/* Image Column */}
                        <Col md={6}>
                            <div className={classes.imageWrapper}>
                                <img 
                                    src={`${import.meta.env.BASE_URL}THCquilaLogo.png`}
                                    alt="THCquila Story" 
                                    className={classes.storyImage}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default HomeContainer;