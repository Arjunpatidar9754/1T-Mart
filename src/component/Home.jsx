import React from "react";
import Products from "./Products";

const Home = () => {

    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" className="card-img" alt="Background" height={550} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;