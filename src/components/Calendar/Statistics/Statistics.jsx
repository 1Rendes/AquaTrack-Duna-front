import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from "recharts";
import css from "./Statistics.module.css";

//import { useSelector } from "react-redux";
///////////import { selectLast7Days } from "../../../redux/water/selectors";



const CustomDot = ({
  cx,
  cy,
  payload,
  strokeWidthProp,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [radius, setRadius] = useState(window.innerWidth < 768 ? 4 : 9);

  const [strokeWidth, setStrokeWidth] = strokeWidthProp;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStrokeWidth(2);
        setRadius(6);
      } else {
        setStrokeWidth(3);
        setRadius(9);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setStrokeWidth]);

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill="#fff"
      stroke="#87D28D"
      strokeWidth={strokeWidth}
      onMouseEnter={() => onMouseEnter({ ...payload, cx, cy })}
      onMouseLeave={onMouseLeave}
    />
  );
};

// const MyXAxis = (props) => <XAxis {...props} />;
// const MyYAxis = (props) => <YAxis {...props} />;

const Statistics = ({ data }) => {
  const [activePayload, setActivePayload] = useState(null);
  const [strokeWidth, setStrokeWidth] = useState(
    window.innerWidth < 768 ? 2 : 3
  );

  const handleMouseEnter = (payload) => {
    setActivePayload(payload);
  };

  const handleMouseLeave = () => {
    setActivePayload(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 12, right: 12 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9BE1A0" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#9BE1A0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tick={{ dy: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            height={150}
            tick={{ dx: -11 }}
            axisLine={false}
            tickLine={false}
          />
          <Area
            dataKey="precent"
            stroke="#9BE1A0"
            strokeWidth={strokeWidth}
            fillOpacity={1}
            fill="url(#colorUv)"
            isAnimationActive={false}
            dot={
              <CustomDot
                strokeWidthProp={[strokeWidth, setStrokeWidth]}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            }
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={css["close-dialog"]}>
        {activePayload && (
          <div
            className={css.dialog}
            style={{
              left: `${activePayload.cx}px`,
              top: `${activePayload.cy - 55}px`,
            }}
          >
            <div className={css["dialog-arrow"]} />
            <p>{activePayload.precent}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
};

export default Statistics;