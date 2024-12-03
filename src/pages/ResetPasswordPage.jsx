import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';
import HomeWrapper from '../components/HomeWrapper/HomeWrapper';
import ResetPassword from '../components/ResetPassword/ResetPassword';

const ResetPasswordPage = () => {
  return (
    <>
      <HomeWrapper>
        <ResetPassword />
        <AdvantagesSection onPage="reset" />
      </HomeWrapper>
    </>
  );
};

export default ResetPasswordPage;
