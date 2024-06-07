import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            dolore voluptas harum ipsum at labore libero magnam placeat dolorum
            necessitatibus?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src="/images/main.svg" alt="logo" className="job people" />
      </div>
    </Wrapper>
  );
}

export default Landing;
