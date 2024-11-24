import SignInForm from "../components/SignInForm/SignInForm";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import { Toaster } from "react-hot-toast";

const SignInPage = () => {
  return (
    <>
      <div>
        <SignInForm />
      </div>
      <div>
        <AdvantagesSection />
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default SignInPage;
