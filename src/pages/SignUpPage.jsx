import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Logo from '../components/Logo/Logo';

const SignUpPage = () => {
  return (
    <>
      <div>
        <Logo />
        <SignUpForm />
      </div>
      <div>
        <AdvantagesSection />
      </div>
    
    </>
  );
};

export default SignUpPage;
