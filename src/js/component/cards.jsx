import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center" >
                {[1, 2, 3, 4].map((index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                        <div className="border border-light pb-2 text-center h-100">
                            <img src={`https://via.placeholder.com/500x325`} alt="Placeholder" className="img-fluid" style={{ border: 'none' }} />
                            <h3 className="py-3">Card title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="d-flex justify-content-center pb-2">
                                <button className="btn btn-primary">Find Out More!</button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cards;