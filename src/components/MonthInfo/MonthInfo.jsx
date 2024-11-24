import React from 'react';
import PropTypes from 'prop-types';
import css from './MonthInfo.module.css';
import { useTranslation } from 'react-i18next';

const MonthInfo = ({ selectedDate }) => {
  const { t } = useTranslation();

  const getMonthName = (monthNumber) => {
    const months = [
      t('description.month.January'),
      t('description.month.February'),
      t('description.month.March'),
      t('description.month.April'),
      t('description.month.May'),
      t('description.month.June'),
      t('description.month.July'),
      t('description.month.August'),
      t('description.month.September'),
      t('description.month.October'),
      t('description.month.November'),
      t('description.month.December'),
    ];
    return months[monthNumber] || 'Invalid month';
  };

  return (
    <div className={css.header}>
      {getMonthName(selectedDate.month)}, {selectedDate.year}
    </div>
  );
};

MonthInfo.propTypes = {
  selectedDate: PropTypes.object.isRequired,
};

export default MonthInfo;
