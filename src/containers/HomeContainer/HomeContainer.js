import React, {Component} from 'react';
import {Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class HomeContainer extends Component {
    render() {
        return(
            <>
                <Jumbotron>
                    <h1>Welcome to THCquila</h1>
                    <p>
                        Check out all the THCquila merchandise in our store
                    </p>
                    <Route>
                        <LinkContainer to="/shop" ><Button variant="primary">Shop Now</Button></LinkContainer>
                    </Route>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <p>Ipsum in sunt tempor magna magna est ea do eu fugiat ex. Non exercitation proident deserunt irure laborum deserunt et dolor est nisi.
                            Duis aliqua excepteur adipisicing ullamco velit. Est in ex aliqua dolor qui amet voluptate exercitation commodo et non amet voluptate consectetur.
                            Minim adipisicing consectetur consequat excepteur. Ipsum in sunt tempor magna magna est ea do eu fugiat ex. Non exercitation proident deserunt irure laborum deserunt et dolor est nisi.
                            Duis aliqua excepteur adipisicing ullamco velit. Est in ex aliqua dolor qui amet voluptate exercitation commodo et non amet voluptate consectetur.
                            Minim adipisicing consectetur consequat excepteur.</p>
                        </Col>
                        <Col>
                            <img src="https://picsum.photos/id/111/400/200" alt="img1" />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
    
}

export default HomeContainer;