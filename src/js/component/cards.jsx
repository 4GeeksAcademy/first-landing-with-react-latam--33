
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Cards = () => {
    return (
        <Container fluid className="py-2 mr-5">
            <Row className="g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {[1, 2, 3, 4].map((index) => (
                     <Col key={index}>
                         <div className="border border-light p-3 text-center h-100">
                             <img src={`https://via.placeholder.com/500x325`} alt="Placeholder" className="img-fluid mb-3" />
                             <h3>Card title</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                             <div className="d-flex justify-content-center">
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




