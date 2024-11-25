import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { Toaster } from "react-hot-toast";
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
      <Toaster position="top-right" />
    </>
  );
};

export default SignUpPage;
