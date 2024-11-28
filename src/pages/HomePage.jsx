// import { Link } from "react-router-dom";
import WelcomeSection from "/src/components/WelcomeSection/WelcomeSection.jsx";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";

const HomePage = () => {
  return (
    <div >
      <HomeWrapper>
        <WelcomeSection />
        <AdvantagesSection />
      </HomeWrapper>
    </div>
  );
};

export default HomePage;
