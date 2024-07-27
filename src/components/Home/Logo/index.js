import "./index.scss";
import LogoImage from "../../../assets/Logo.png";

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo" src={LogoImage} alt="React" />
        </div>
    );
}

export default Logo;
