import { useSelector } from "react-redux";
import { selectDayWater, selectTodayWater } from "../../redux/water/selectors";
import WaterItem from "../WaterItem/WaterItem";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import css from "./WaterList.module.css";

const WaterList = ({ choosenDay }) => {
  const dayWaterList = useSelector(selectDayWater);
  const todayWaterList = useSelector(selectTodayWater);
  const today = new Date().toISOString().split("T")[0];
  const renderList = choosenDay === today ? todayWaterList : dayWaterList;

  return (
    <div>
      <ScrollMenu
        scrollContainerClassName={css.horizontalScrollContainer}
        LeftArrow={null}
        RightArrow={null}
        wheel={true}
      >
        <div className={css.waterlist}>
          {renderList.length === 0 && (
            <p>No information on water consumption for the selected day</p>
          )}

          <ul className={css.waterlistPortions}>
            {renderList.map((item) => (
              <li className={css.item} key={item._id}>
                <WaterItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </ScrollMenu>
    </div>
  );
};

export default WaterList;
