import css from "./ChooseDate.module.css";
import { months } from "./../../constants/constants.js";

const ChooseDate = ({ currentDay }) => {
  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const formattedDate = `${parseInt(day, 10)}, ${
      months[parseInt(month, 10) - 1]
    }`;

    return formattedDate;
  };

  return (
    <h2 className={css.choosedate}>
      {currentDay === today ? "Today" : formatDate(currentDay)}
    </h2>
  );
};

export default ChooseDate;
