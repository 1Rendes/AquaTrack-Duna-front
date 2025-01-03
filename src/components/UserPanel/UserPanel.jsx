import { useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar";

import css from "./UserPanel.module.css";
import { selectUser } from "../../redux/auth/selectors";

const UserPanel = () => {
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userpanel}>
      <h2 className={css.greeting}>
        Hello<span className={css.userName}>, {name}!</span>
      </h2>
      <UserBar userName={name} />
    </div>
  );
};

export default UserPanel;
