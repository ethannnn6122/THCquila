import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Default extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>Page not Found</h2>
                        <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Default;