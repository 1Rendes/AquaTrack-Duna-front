import * as Yup from "yup";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import css from "./UserSettingsForm.module.css";
import { selectUser } from "../../redux/auth/selectors";
import icons from "../../img/icons.svg";
import { editUser } from "../../redux/auth/operations";

const UserSettingsForm = () => {
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const dispatch = useDispatch();

  const {
    name,
    email,
    weight,
    activityLevel,
    gender,
    dailyRequirement,
    photo,
  } = useSelector(selectUser);

  const validationSchema = Yup.object({
    name: Yup.string().min(2),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    weight: Yup.number().nullable().max(500, "Weight must not exceed 500 kg"),
    activityLevel: Yup.number()
      .nullable()
      .max(24)
      .integer("Activity level must be a whole number"),
    gender: Yup.string().required(),
    dailyRequirement: Yup.number().required().positive(),
    photo: Yup.string().nullable(),
  });

  const initialValues = {
    name,
    email,
    weight: weight || 0,
    activityLevel: activityLevel || 0,
    gender,
    dailyRequirement,
    photo,
  };

  // Форматування мілілітри у літри і назад

  const formatMillilitersToLiters = (milliliters) =>
    (milliliters / 1000).toFixed(1);

  const litersToMilliliters = (liters) => liters * 1000;

  // Обчислення водного балансу

  const calculateWaterIntake = (weight, activityLevel, gender) => {
    return gender === "female"
      ? (weight * 0.03 + activityLevel * 0.4).toFixed(1)
      : (weight * 0.04 + activityLevel * 0.6).toFixed(1);
  };

  // Завантаження фото попереднього перегляду

  const handlePhotoFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("photo", file);
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  // Відправка форми

  const handleSubmit = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value === photo) return;
      formData.append(key, value);
    });

    dispatch(editUser(formData));
  };

  const firstLetter = name ? name.slice(0, 1) : "";

  return (
    <div className={css.usersettingsform}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => {
          return (
            <Form>
              <div>
                <div className={css.settings}>
                  {previewPhoto ? (
                    <img
                      name="photo"
                      src={previewPhoto}
                      alt={`${name} photo`}
                      className={css.userPhoto}
                    />
                  ) : photo ? (
                    <img
                      name="photo"
                      src={photo}
                      alt={`${name} photo`}
                      className={css.userPhoto}
                    />
                  ) : (
                    <span className={css.userPhotoInitial}>{firstLetter}</span>
                  )}

                  <div className={css.fileInputPhoto}>
                    <label htmlFor="photo" className={css.fileInputPhotoLabel}>
                      <svg className={css.iconUpload} width={21} height={20}>
                        <use href={`${icons}#icon-upload`}></use>
                      </svg>
                      Upload a photo
                    </label>

                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={(e) => handlePhotoFileChange(e, setFieldValue)}
                    />
                  </div>
                </div>

                <div className={css.settingsForm}>
                  <div>
                    <div className={css.blokInputNameEmail}>
                      <label className={css.settingsTitleText}>
                        Your gender identity
                      </label>
                      <div className={css.radioBtnContainer}>
                        <label className={css.radioBtnLabel}>
                          <Field
                            type="radio"
                            name="gender"
                            value="female"
                            className={css.btn}
                          />
                          <span className={css.radioBtn}></span>
                          <span className={css.textInput}>Woman</span>
                        </label>
                        <label className={css.radioBtnLabel}>
                          <Field
                            type="radio"
                            name="gender"
                            value="male"
                            className={css.btn}
                          />
                          <span className={css.radioBtn}></span>
                          <span className={css.textInput}>Man</span>
                        </label>
                      </div>
                    </div>

                    <div className={css.blokInputNameEmail}>
                      <div className={css.blokNameEmail}>
                        <label htmlFor="name" className={css.settingsTitleText}>
                          Your name
                        </label>
                        <Field
                          id="name"
                          name="name"
                          className={`${css.inputStyle} ${css.textInput}`}
                        />
                      </div>
                      <div
                        className={`${css.blokNameEmail} ${css.inputErrorMessage}`}
                      >
                        <label
                          htmlFor="email"
                          className={css.settingsTitleText}
                        >
                          Email
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className={`${css.inputStyle} ${css.textInput}`}
                        />
                        <div className={css.errorMessage}>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={css.errorText}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={css.containerInfo}>
                      <p className={css.settingsTitleText}>My daily norma</p>
                      <div className={css.infoFormulaContainer}>
                        <div className={css.infoFormula}>
                          <p className={css.textInput}>For Woman:</p>
                          <p className={css.formulaText}>
                            V=(M*0,03) + (T*0,4)
                          </p>
                        </div>
                        <div className={css.infoFormula}>
                          <p className={css.textInput}>For Man:</p>
                          <p className={css.formulaText}>
                            V=(M*0,04) + (T*0,6)
                          </p>
                        </div>
                      </div>
                      <p className={css.infoText}>
                        <span className={css.infoSimbol}>*</span> V is the
                        volume of the water norm in liters per day, M is your
                        body weight, T is the time of active sports, or another
                        type of activity commensurate in terms of loads (in the
                        absence of these, you must set 0)
                      </p>
                      <p className={css.textInput}>
                        <span className={css.infoSimbol}>! </span>Active time in
                        hours
                      </p>
                    </div>
                  </div>

                  <div className={css.kilogramContainer}>
                    <div className={css.blokInputNameEmail}>
                      <div
                        className={`${css.blokNameEmail} ${css.inputErrorMessage}`}
                      >
                        <label htmlFor="weight" className={css.textInput}>
                          Your weight in kilograms:
                        </label>
                        <Field
                          id="weight"
                          name="weight"
                          type="number"
                          className={`${css.inputStyle} ${css.textInput}`}
                        />
                        <div className={css.errorMessage}>
                          <ErrorMessage
                            name="weight"
                            component="div"
                            className={css.errorText}
                          />
                        </div>
                      </div>

                      <div
                        className={`${css.blokNameEmail} ${css.inputErrorMessage}`}
                      >
                        <label
                          htmlFor="activityLevel"
                          className={`${css.textInput} ${css.required}`}
                        >
                          The time of active participation in sports:
                        </label>
                        <Field
                          id="activityLevel"
                          name="activityLevel"
                          type="number"
                          className={`${css.inputStyle} ${css.textInput}`}
                        />
                        <div className={css.errorMessage}>
                          <ErrorMessage
                            name="activityLevel"
                            component="div"
                            className={css.errorText}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={css.containerWater}>
                      <div>
                        <p className={`${css.textInput} ${css.required}`}>
                          The required amount of water in liters per day:&nbsp;
                          <strong className={css.infoSimbol}>
                            {formatMillilitersToLiters(
                              calculateWaterIntake(
                                values.weight,
                                values.activityLevel,
                                values.gender
                              ) * 1000
                            )}
                            L
                          </strong>
                        </p>
                      </div>

                      <div
                        className={`${css.blokNameEmail} ${css.requirement}`}
                      >
                        <label
                          htmlFor="dailyRequirement"
                          className={css.settingsTitleText}
                        >
                          Write down how much water you will drink:
                        </label>
                        <Field
                          id="dailyRequirement"
                          name="dailyRequirement"
                          type="number"
                          step="0.1"
                          min="0"
                          value={formatMillilitersToLiters(
                            values.dailyRequirement
                          )}
                          onChange={(e) =>
                            setFieldValue(
                              "dailyRequirement",
                              litersToMilliliters(e.target.value)
                            )
                          }
                          className={`${css.inputStyle} ${css.textInput}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={css.BtnSave}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UserSettingsForm;
