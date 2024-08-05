import React from "react";
import Nvbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx";
import Cards from './cards.jsx';
import Footer from './footer.jsx'

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

			{/* Pie de página */}
			<Footer></Footer>
		</div>
	);
};

export default Home;
