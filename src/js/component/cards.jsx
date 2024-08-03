import React from "react";

/* Sección de tarjetas */

const Cards = () => {
    return(
        <div className = "d-flex flex-wrap p-3" style={{ display: 'flex', justifyContent: 'space-around'}}>
			{[1, 2, 3, 4].map((index) => (
			  <div className="p-2" key={index} style={{ width: '320px' }}>
				<img src={`https://via.placeholder.com/500x325`} alt="Placeholder" style={{ width: '100%' }} />
				<h3>Card title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<button>Find Out More!</button>
			  </div>
			))}
		  </div>
    )
}

export default Cards;