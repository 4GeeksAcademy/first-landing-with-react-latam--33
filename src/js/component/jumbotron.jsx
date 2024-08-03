import React from "react";

/* Encabezado con llamada a la acción */
const Jumbotron = () => {
    return (
        <header className="bg-secondary bg-opacity-25 m-4 py-5 px-4 rounded">
            <h2 className="display-3 fw-bold">A Warm Welcome!</h2>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita voluptatem ipsam beatae unde eligendi rerum,
                impedit nesciunt iusto reprehenderit magnam ratione debitis quae rem neque?</p>
            <button className="btn btn-primary btn-lg" role="button">Call to action!</button>
        </header>
    )
}

export default Jumbotron;