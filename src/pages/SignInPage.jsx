import SignInForm from "../components/SignInForm/SignInForm";
import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import HomeWrapper from "../components/HomeWrapper/HomeWrapper";
import { useEffect } from "react";
import { currentUser } from "../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsLoading, selectIsLoggedIn } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader.jsx";

const SignInPage = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthIsLoading);

  useEffect(() => {
    if (!isLoggedIn) dispatch(currentUser());
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <HomeWrapper>
      <SignInForm />
      <AdvantagesSection />
    </HomeWrapper>
  );
};

export default SignInPage;
