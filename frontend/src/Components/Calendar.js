import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="calendar"
        placeholderText="Masukkan Tanggal"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}
export default Calendar;
