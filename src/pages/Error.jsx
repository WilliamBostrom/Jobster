import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src="/images/not-found.svg" alt="not founrd" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
