import { useDispatch, useSelector } from "react-redux";
import css from "./WaterForm.module.css";
import {
  selectTodayPercentage,
  selectTodayWater,
} from "../../redux/water/selectors";
import { addWater, editWater } from "../../redux/water/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import clsx from "clsx";
import icons from "../../img/icons.svg";
import { selectUser } from "../../redux/auth/selectors";

const validationSchema = Yup.object({
  amount: Yup.number()
    .min(50, "Amount must be at least 50 ml")
    .max(5000, "Amount shouldn't be more then 5L")
    .required("Amount is required"),
  time: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format")
    .required("Time is required"),
  manualAmount: Yup.number()
    .min(50, "Amount must be at least 50 ml")
    .integer("Manual amount should be an integer")
    .required("Manual amount is required"),
});

const WaterForm = ({ type, id, handleClose }) => {
  const [customValid, setCustomValid] = useState(false);
  const dispatch = useDispatch();
  const selectedPercentage = useSelector(selectTodayPercentage);
  const user = useSelector(selectUser);
  const dailyRequirement = user?.dailyRequirement;
  const dayWaterArray = useSelector(selectTodayWater);

  const waterPortion = dayWaterArray.find(({ _id }) => _id === id);
  const selectedTime = waterPortion?.time;
  const selectedAmount = waterPortion?.amount;

  //Для синхронізації верхнього верхнього та нижнього полів
  const [counterValue, setCounterValue] = useState(() => {
    if (type === "add") return 50;
    return selectedAmount;
  });

  const setCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const currentDate = new Date().toISOString().split("T")[0];
  const selectedDate = selectedTime?.split("T")[0];

  const convertTimestampToIso = (timestamp, day) => {
    const [hours, minutes] = timestamp.split(":");
    const paddedHours = hours.padStart(2, "0");
    const paddedMinutes = minutes.padStart(2, "0");
    return `${day}T${paddedHours}:${paddedMinutes}:00`;
  };

  //for add type
  const INITIAL_VALUES = {
    amount: counterValue,
    time: setCurrentTime(),
    manualAmount: counterValue,
  };

  if (type === "edit") {
    const [hours, minutes, seconds] = selectedTime.split("T")[1].split(":");
    const formattedTime = [hours, minutes].join(":");
    INITIAL_VALUES.time = formattedTime;
  }

  const handleSubmit = (values) => {
    const data = {
      // Якщо в полі вводу мл, так їх і передаємо, якщо літри, переводимо в мл
      amount: Number(values.manualAmount), //Збираємо саме мануал, бо він в мл
      time: convertTimestampToIso(values.time, selectedDate),
    };
    if (type === "add") {
      (data.time = convertTimestampToIso(values.time, currentDate)),
        (data.percentage = Math.round(
          selectedPercentage + (data.amount * 100) / dailyRequirement
        ));
      data.percentage = data.percentage > 100 ? 100 : data.percentage;
      dispatch(addWater(data)).unwrap().then(handleClose);
      return;
    }

    dispatch(editWater({ _id: id, ...data }))
      .unwrap()
      .then(handleClose);
  };

  const handleCounterChange = (increment, setFieldValue) => {
    let newValue = counterValue + increment;
    if (newValue < 0) newValue = 50; // Мінімум
    if (newValue > 5000) newValue = 5000;
    setCounterValue(newValue);
    setFieldValue("amount", newValue);
    setFieldValue("manualAmount", newValue);
    handleChange(newValue);
  };
  const handleChange = (value) => {
    if (value < 50) {
      setCustomValid(true);
    } else {
      setCustomValid(false);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <Form className={css["water-tracker-form"]}>
          <div className={css["field-group"]}>
            <label htmlFor="amount" className={css["water-label"]}>
              Amount of water:
            </label>
            <div className={css["counter-container"]}>
              <button
                type="button"
                disabled={!counterValue}
                className={css["counter-btn"]}
                onClick={() => handleCounterChange(-50, setFieldValue)}
              >
                <svg className={css.counterMinusBtn} width={19} height={3}>
                  <use href={`${icons}#icon-vector`}></use>
                </svg>
              </button>
              <div className={css["counter-display"]}>
                {counterValue >= 1000
                  ? `${(counterValue / 1000).toFixed(2)} L`
                  : `${counterValue} ml`}
              </div>
              <button
                type="button"
                className={css["counter-btn"]}
                onClick={() => handleCounterChange(50, setFieldValue)}
              >
                <svg className={css.counterPlusBtn} width={19} height={19}>
                  <use href={`${icons}#icon-plus`}></use>
                </svg>
              </button>
            </div>
            <Field
              type="hidden"
              name="amount"
              value={values.amount}
              className={clsx(
                css["field-input"],
                touched.recordingTime &&
                  errors.recordingTime &&
                  css["field-error"]
              )}
            />
            <ErrorMessage
              name="amount"
              component="div"
              className={css["error-message"]}
            />
          </div>

          <div className={css["field-group"]}>
            <label htmlFor="time" className={css["water-label"]}>
              Recording time:
            </label>
            <Field
              type="time"
              name="time"
              value={values.time}
              className={clsx(
                css["field-input"],
                touched.recordingTime &&
                  errors.recordingTime &&
                  css["field-error"]
              )}
              onChange={(e) => {
                setFieldValue("time", e.target.value);
              }}
            />
            <ErrorMessage
              name="time"
              component="div"
              className={css["error-message"]}
            />
          </div>

          <div className={css["field-group"]}>
            <label htmlFor="manualAmount" className={css["water-label-group"]}>
              Enter the value of water used:
            </label>
            <Field
              type="number"
              name="manualAmount"
              value={values.manualAmount}
              className={clsx(
                css["field-input"],
                touched.recordingTime &&
                  errors.recordingTime &&
                  css["field-error"]
              )}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10) || 0;
                const clampedValue = Math.min(5000, value); // Обмеження
                setCounterValue(clampedValue);
                setFieldValue("amount", clampedValue);
                setFieldValue("manualAmount", clampedValue);
                handleChange(value);
              }}
            />
            <ErrorMessage
              name="manualAmount"
              component="div"
              className={css["error-message"]}
            />
          </div>

          <button
            type="submit"
            className={css["submit-btn"]}
            disabled={customValid}
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default WaterForm;
