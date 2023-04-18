import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/leftNav/LeftNav';
import RightNav from '../pages/Shared/rightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LeftNav />
                        </Col>
                        <Col lg={6}>
                            <h3>Main content is coming</h3>
                        </Col>
                        <Col lg={3}>
                            <RightNav />
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </div>
    );
};

export default Main;