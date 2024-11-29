import UserPanel from "../UserPanel/UserPanel";
import Calendar from "../Calendar/Calendar.jsx";
import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterdetailedinfo}>
      <UserPanel />
      <Calendar/>
    </div>
  );
};

export default WaterDetailedInfo;
