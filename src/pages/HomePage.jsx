import WelcomeSection from "/src/components/WelcomeSection/WelcomeSection.jsx";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";

const HomePage = () => {
  return (
    <HomeWrapper>
      <WelcomeSection />
      <AdvantagesSection />
    </HomeWrapper>
  );
};

export default HomePage;
