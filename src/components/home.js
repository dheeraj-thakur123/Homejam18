import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainComp from './main'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={3}><div className="home_Text">
                            Home</div></Col>
                        <Col sm={7} className="main_Page">
                            <MainComp />
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;