import css from "./ChooseDate.module.css";

const ChooseDate = ({ currentDay }) => {
  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

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
