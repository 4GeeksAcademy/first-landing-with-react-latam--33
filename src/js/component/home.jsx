import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		  {/* Barra de navegación */}
		  	<Navbar expand="lg" className="bg-dark text-white" >
				<Container>
					<Navbar.Brand href="#home" className="text-white">Start Bootsrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
						<Navbar.Collapse id="basic-navbar-nav" className="lg-d-flex justify-content-end ">
							<Nav>
								<Nav.Link href="#home" className="text-white">Home</Nav.Link>
								<Nav.Link href="#link" className="text-white">About</Nav.Link>
								<Nav.Link href="#link" className="text-white">Services</Nav.Link>
								<Nav.Link href="#link" className="text-white">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
				</Container>
			</Navbar>
  

	
		  {/* Encabezado con llamada a la acción */}
		  <header style={{ textAlign: 'center', padding: '50px' }}>
			<h1>A Warm Welcome!</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<button>Call to action!</button>
		  </header>
	
		  {/* Sección de tarjetas */}
		  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
			{[1, 2, 3, 4].map((index) => (
			  <div key={index} style={{ width: '23%' }}>
				<img src={`https://via.placeholder.com/500x325`} alt="Placeholder" style={{ width: '100%' }} />
				<h3>Card title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<button>Find Out More!</button>
			  </div>
			))}
		  </div>
	
		  {/* Pie de página */}
		  <footer style={{ textAlign: 'center', padding: '20px' }}>
			<p>Copyright © Your Website 2024</p>
		  </footer>
		</div>
	  );
	};

export default Home;
