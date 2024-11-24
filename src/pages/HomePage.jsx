import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to="/signin">Go to SignIn Page</Link>
      <Link to="/signup">Go to SignUp Page</Link>
    </div>
  );
};

export default HomePage;
