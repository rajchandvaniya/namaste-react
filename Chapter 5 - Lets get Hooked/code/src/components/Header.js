import { CART_IMAGE_URL, PRABODHAM_LOGO_IMAGE } from "../constants";

const Header = () =>{
    return (
        <div className="header">
            <img src={PRABODHAM_LOGO_IMAGE} />
            <ul>
                <li><h3>Home</h3></li>
                <li><h3>About</h3></li>
                <li><h3>Contact Us</h3></li>
                <li><img src={CART_IMAGE_URL} /></li>
            </ul>
        </div>
    );
}

export default Header;