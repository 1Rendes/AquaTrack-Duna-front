import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <HomeWrapper>
      <SignUpForm />
      <AdvantagesSection />
    </HomeWrapper>
  );
};

export default SignUpPage;
