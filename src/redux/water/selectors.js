import { createSelector } from "@reduxjs/toolkit";
import { selectUser } from "../auth/selectors";

export const selectDayWater = (state) => state.water.dayWater;
export const selectMonthWater = (state) => state.water.monthWater;
export const selectWaterIsLoading = (state) => state.water.isLoading;

//має використовувати Аліна Жуліна для відмалювання прогрес-бара + дівчата, які займаються модалками на редагування/додавання
// Отримуєте це значення через сonst percentage = useSelector(selectPercentage);
// При сабміті передаєте це значення в об'єкт-параметр санки, яку діспатчите, разом з об'єктом своїх полів форми
//Наприклад dispatch(addWater({percentage, ...values})) , де values - об'єкт з такими ключами:
//{
//amount: має бути число! не рядок! значення в мл(не в літрах)
// time: стрінг такого формату YYYY-MM-DDThh:mm:ss (наприклад, "2024-11-27T10:59:59")
//}
export const selectPercentage = createSelector(
  [selectUser, selectDayWater],
  (user, waterPortions) => {
    const percentage = Math.round(
      (waterPortions.reduce((acc, item) => acc + item.amount, 0) * 100) /
        user.dailyRequirement
    );
    return percentage > 100 ? 100 : percentage;
  }
);
