import React, { useEffect, useState } from "react";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Update({ id, text, submitFunction }) {

    const dateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    const [recordId, setRecordId] = useState();
    const [name, setName] = useState();
    const [glucoseBlood, setGlucoseBlood] = useState();
    const [medicationDose, setMedicationDose] = useState();
    const [intakeCarbs, setIntakeCarbs] = useState();


    const datePatch = new Date(Date.now());
    const [date, setDate] = useState(datePatch);
    return (
        <div style={{ display: "flex", flexDirection: "column", paddingRight: "50px", marginRight: "50px", borderRight: "#000 solid" }}>
            <h1>{text}</h1>
            <span style={{ display: "block-inline" }}>Date </span>
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                name="startDate"
                dateFormat="dd/MM/yyyy"
                autoComplete="off"

            />

            <span>Record ID</span>
            <input type="text" id={"userid" + id} onChange={(e)=>setRecordId(e.target.value)}/>
            <span>User ID</span>
            <input type="text" id={"userid" + id} onChange={(e)=>setName(e.target.value)}/>
            <span>Blood glucose</span>
            <input type="text" id={"blood" + id} onChange={(e)=>setGlucoseBlood(e.target.value)}/>
            <span>Carb intake</span>
            <input type="text" id={"carbon" + id} onChange={(e)=>setIntakeCarbs(e.target.value)}/>
            <span>Medication dose</span>
            <input type="text" id={"medication" + id} onChange={(e)=>setMedicationDose(e.target.value)}/> <br></br>
            <button onClick={(e) => {

                e.preventDefault();
                if (date) {

                    let data = {
                        name: name,
                        glucoseBlood: glucoseBlood,
                        intakeCarbs: intakeCarbs,
                        medicationDose: medicationDose,
                        date: date,
                        recordId:recordId
                    }
                    if (data.name && data.glucoseBlood && data.intakeCarbs && data.medicationDose && data.date && data.recordId) {
                        submitFunction(data)
                    }
                    else {
                        alert("Please put in all the data before submitting!")
                    }
                } else {
                    alert("Write in the date before submitting")
                }
            }} className="btn" style={{ background: "#90ee90" }} > Submit</button>
        </div>
    )
}

export default Update;