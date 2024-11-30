import { useSelector } from "react-redux";
import { selectDayWater } from "../../redux/water/selectors";
import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

// import { Scrollbar } from "react-scrollbars-custom";

const WaterList = () => {
  const dayWaterList = useSelector(selectDayWater);

  return (
    <div className={css.waterlist}>
      {dayWaterList.length === 0 && (
        <p>No information on water consumption for the selected day</p>
      )}

      <ul className={css.waterlistPortions}>
        {dayWaterList.map((item) => (
          <li className={css.item} key={item._id}>
            <WaterItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaterList;
