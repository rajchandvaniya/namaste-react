import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantData } from "./data";

const Header = () => {
    return (
        <div className="header">
            <img src="data:image/png;base64,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" />
            <ul>
                <li><h3>Home</h3></li>
                <li><h3>About</h3></li>
                <li><h3>Contact Us</h3></li>
                <li><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png" /></li>
            </ul>
        </div>
    );
}

const RestaurantCard = ({
    name,
    cuisines,
    area,
    cloudinaryImageId,
    avgRating
}) => {
    return (
        <div className="restaurant-card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p style={{color: "gray"}}>{cuisines.slice(0, 3).join(", ")}</p>
            <p className="location-rating">
                <span>{area}</span>
                <span>{avgRating} <img style={{height: "15px", width: "15px"}} src="data:image/png;base64,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" /></span>
            </p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            {restaurantData.cards.map( restaurant => {
                return (
                    <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                );
            })}
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            Copyright ?? 2023 - Prabodham Foods
        </div>
    );
}

const AppLayout = () => {
    return (<>
        <Header />
        <Body />
        <Footer />
    </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);