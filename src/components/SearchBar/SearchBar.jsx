import React, {useState} from 'react';
import {DatePicker, Input, Select} from 'antd'
import {useFormik} from 'formik'
import dayjs from 'dayjs';
import s from './SearchBar.module.scss'
const SearchBar = ({config}) => {
    const formik = useFormik(config)
    const [personOptions,
        setPersonOptions] = useState([
        {
            value: 1,
            label: "1 человек"
        }, {
            value: 2,
            label: "2 человек"
        }, {
            value: 3,
            label: "3 человека"
        }, {
            value: 4,
            label: "4 человека"
        }
    ])
    const {RangePicker} = DatePicker
    const disabledDate = (current) => {
        return current && current < dayjs().startOf('day');
    }
    const handleDatesChange = (value) => {
        formik.setFieldValue("dates", value)
    }

    return (
        <form onSubmit={formik.handleSubmit} className={s.searchbar}>
            <Input
                name='destination'
                value={formik.values.destination}
                placeholder="Выберите город"
                onChange={formik.handleChange}
                className={s.sb__input}/>
            <RangePicker
                name='dates'
                value={formik.values.dates}
                onChange={handleDatesChange}
                className={s.sb__rangepicker}
                placeholder={["Дата заезда", "Дата выезда"]}
                format="DD.MM.YYYY"
                disabledDate={disabledDate}></RangePicker>
            <Select
                className={s.sb__select}
                options={personOptions}
                placeholder="Кол-во чел."/>
            <button
                type='submit'
                className={s.sb__btn_search}
                onClick={formik.handleSubmit}>Поиск</button>
        </form>
    );
};

export default SearchBar;