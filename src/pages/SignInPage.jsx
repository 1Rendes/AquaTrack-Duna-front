import SignInForm from "../components/SignInForm/SignInForm";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";

const SignInPage = () => {
  return (
    <HomeWrapper>
      <SignInForm />
      <AdvantagesSection />
    </HomeWrapper>
  );
};

export default SignInPage;
