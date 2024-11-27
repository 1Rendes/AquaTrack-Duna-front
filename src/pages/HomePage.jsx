// import { Link } from "react-router-dom";
import WelcomeSection from "/src/components/WelcomeSection/WelcomeSection.jsx";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";

const HomePage = () => {
  return (
    <div>
      <div>
        <WelcomeSection />
      </div>
      <div>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default HomePage;
