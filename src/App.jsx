import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
`;
const App = () => {
  return (
    <div>
      <Button>Click Me</Button>
      <Landing />
    </div>
  );
};
export default App;
