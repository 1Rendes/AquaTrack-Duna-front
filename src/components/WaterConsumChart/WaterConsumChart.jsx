import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";

import css from "./WaterConsumChart.module.css";
import { selectMonthWater } from "../../redux/water/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { useState } from "react";
import icons from "../../img/icons.svg";

const WaterConsumChart = ({ currentMonth }) => {
  const daysWater = useSelector(selectMonthWater);
  const { dailyRequirement } = useSelector(selectUser);
  const dailyWaterNorm = dailyRequirement / 1000;

  const [rangeStart, setRangeStart] = useState(0);

  const percentages = daysWater.map((item) => item.percentage);

  const valueInLiters = percentages.map(
    (percentage) => (percentage / 100) * dailyWaterNorm
  );

  // Получаем текущий месяц
  const [year, month] = new Date().toISOString().split("T")[0].split("-");
  const todayMonth = [year, month].join("-");

  // Фильтрация дней в зависимости от текущего месяца
  const filteredDays =
    currentMonth === todayMonth
      ? daysWater.filter((item) => parseInt(item.day.split("-")[2], 10))
      : daysWater;

  const last7Days = filteredDays.slice(rangeStart, rangeStart + 7);

  // Подготовка данных для Recharts
  const chartData = last7Days.map((item) => ({
    date: parseInt(item.day.split("-")[2]),
    value: valueInLiters[filteredDays.indexOf(item)] || 0,
  }));

  // Всплывающая подсказка на точках
  const content = ({ payload }) =>
    payload.length ? (
      <div className={css.tooltip}>
        {((payload[0].value || 0) * 1000).toFixed(0)} ml
      </div>
    ) : null;

  // Отрисовываем шкалу с литрами
  const ticks = Array.from(
    { length: Math.ceil(dailyWaterNorm / 0.5) + 1 },
    (_, i) => i * 0.5
  );

  const handlePrevWeek = () => {
    setRangeStart((prev) => Math.max(0, prev - 7));
  };

  const handleNextWeek = () => {
    setRangeStart((prev) => Math.min(filteredDays.length - 7, prev + 7));
  };

  let ref = useRef(null);
  let size = useComponentSize(ref);
  let { Width, Height } = size;

  return (
    <div className={css.statistic} ref={ref}>
      <div className={css.controls}>
        <button
          onClick={handlePrevWeek}
          disabled={rangeStart === 0}
          className={rangeStart === 0 ? css.disabled : ""}
        >
          <svg className={css.iconCalendarLeft}>
            <use href={`${icons}#icon-chevron-down`}></use>
          </svg>
        </button>
        <button
          onClick={handleNextWeek}
          disabled={rangeStart + 7 >= filteredDays.length}
          className={rangeStart + 7 >= filteredDays.length ? css.disabled : ""}
        >
          <svg className={css.iconCalendarRight}>
            <use href={`${icons}#icon-chevron-down`}></use>
          </svg>
        </button>
      </div>
      <ResponsiveContainer width="100%" height="100%" aspect={Width / Height}>
        <ComposedChart data={chartData} margin={{ right: 14, left: -10 }}>
          <Tooltip content={content} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickSize={15}
          />
          <YAxis
            type="number"
            domain={[0, dailyWaterNorm]}
            ticks={ticks}
            tickLine={false}
            axisLine={false}
            tickCount={Math.ceil(dailyWaterNorm / 0.5) + 1}
            tickFormatter={(value) => `${value.toFixed(1)} L`}
            tickSize={12}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9be1a0" stopOpacity={1} />{" "}
              <stop offset="100%" stopColor="#9be1a0" stopOpacity={0} />{" "}
            </linearGradient>
          </defs>
          <Area
            type="linear"
            dataKey="value"
            stroke="#87d28d"
            fill="url(#colorUv)"
            dot={{
              stroke: "#87d28d",
              strokeWidth: 1,
              fill: "#FFFFFF",
              r: 7,
            }}
            activeDot={{
              r: 8,
              fill: "#FFFFFF",
              stroke: "#87d28d",
              strokeWidth: 2,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterConsumChart;
