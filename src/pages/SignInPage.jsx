import SignInForm from "../components/SignInForm/SignInForm";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import Logo from '../components/Logo/Logo';

const SignInPage = () => {
  return (
    <>
      <div>
        <Logo />
        <SignInForm />
      </div>
      <div>
        <AdvantagesSection />
      </div>
    </>
  );
};

export default SignInPage;
