import { Link } from "react-router-dom";
import WelcomeSection from "/src/components/WelcomeSection/WelcomeSection.jsx";
  

const HomePage = () => {
  return (
    <div>
      <WelcomeSection />
      {/* <p>HomePage</p>
      <Link to="/signin">Go to SignIn Page</Link>
      <Link to="/signup">Go to SignUp Page</Link> */}
    </div>
  );
};

export default HomePage;
