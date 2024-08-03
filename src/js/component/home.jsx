import React from "react";
import Nvbar from "./navbar.jsx"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from "./jumbotron.jsx";
import Cards from './cards.jsx';

>>>>>>> main
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
		  {/* Barra de navegación */}
		  <Nvbar></Nvbar>
    
		  {/* Hero Section */}
			<Jumbotron></Jumbotron>

    {/* Sección de tarjetas */}
      <Cards></Cards>

// 			<div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
// 				{[1, 2, 3, 4].map((index) => (
// 					<div key={index} style={{ width: '23%' }}>
// 						<img src={`https://via.placeholder.com/500x325`} alt="Placeholder" style={{ width: '100%' }} />
// 						<h3>Card title</h3>
// 						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// 						<button>Find Out More!</button>
// 					</div>
// 				))}
// 			</div>

			{/* Pie de página */}
			<footer style={{ textAlign: 'center', padding: '20px' }}>
				<p>Copyright © Your Website 2024</p>
			</footer>
		</div>
	);
};

export default Home;
