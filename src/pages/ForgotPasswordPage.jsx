import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import HomeWrapper from '../components/HomeWrapper/HomeWrapper';

const ForgotPasswordPage = () => {
  return (
    <>
      <HomeWrapper>
        <ForgotPassword />
        <AdvantagesSection onPage="forgot" />
      </HomeWrapper>
    </>
  );
};

export default ForgotPasswordPage;
