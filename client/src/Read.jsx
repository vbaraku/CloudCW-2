import React, { useEffect, useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Read = ({baseUrl, setMean, setMedian, changeCharts, username, password, userId, setUserId}) => {
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();

    const dateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    function getData(event) {

        event.preventDefault();
        if (document.getElementById("allData").checked) getAllData();
        if (document.getElementById("means").checked){
            // console.log("test")
            getMeans();
        } 
    }
    function getAllData() { 


        if (startingDate && endingDate) {
            console.log(startingDate.getTime());
            axios.get(baseUrl, {
                params: {
                    from: startingDate.getTime(),
                    to: endingDate.getTime(),
                    userId: userId,
                },
                auth:{
                    username: username,
                    password: password
                }
            }
            ).then((response) => {
                changeCharts(response.data)
            })
        } else {
            axios.get(baseUrl,{
                params:{
                    userId: userId,
                },
                auth:{
                    username: username,
                    password: password,
                    userId: userId
                }
            }).then((response) => {
                
                console.log(response)
                changeCharts(response.data)
            }).catch((resp)=>{
            console.log(resp)
            
        })
        }


    }
    function getMeans() {
        if (startingDate && endingDate) {
            axios.get(baseUrl + "/average", {
                params: {
                    from: startingDate.getTime(),
                    to: endingDate.getTime()
                },
                auth:{
                    username: username,
                    password: password
                }
            }).then((response) => {
                setMean(response.data);
            })
        } else {
            axios.get(baseUrl + "/average",{
                params:{
                    userId: userId,
                },
                auth:{
                    username: username,
                    password: password
                }
            }).then((response) => {
                console.log(response.data)
                setMean(response.data);
            })
        }
    }

    // function getMedian() {

    //     if (startingDate && endingDate) {
    //         axios.get(baseUrl + "/median", {
    //             params: {
    //                 startDate: startingDate.toLocaleDateString("en-gb", dateOptions).replaceAll("/", "-"),
    //                 endDate: endingDate.toLocaleDateString("en-gb", dateOptions).replaceAll("/", "-")

    //             }
    //         }).then((response) => {
    //             setMedian(response.data);
    //         })
    //     } else {
    //         axios.get(baseUrl + "/median").then((response) => {
    //             setMedian(response.data);
    //         })
    //     }
    // }
    return (
        <div style={{ display: "flex", flexDirection: "column", paddingRight: "50px", marginRight: "50px", borderRight: "#000 solid" }}>
            <h1>Read data</h1>
            <span style={{ display: "block-inline" }}>Starting date </span>
            <DatePicker
                selected={startingDate}
                onChange={(date) => setStartingDate(date)}
                name="startDate"
                dateFormat="dd/MM/yyyy"
                autoComplete="off"

            />

            <span style={{ display: "block-inline" }}>Ending date</span>
            <DatePicker
                selected={endingDate}
                onChange={(date) => setEndingDate(date)}
                name="startDate"
                dateFormat="dd/MM/yyyy"
                autoComplete="off"
            />
            <span>User ID</span>
            <input type="text" id={"userIdRead"} onChange={(e)=>{setUserId(e.target.value)}}/>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <input type="checkbox" id="allData" value="allData" defaultChecked={true}/>
                    <label for="allData" style={{ paddingLeft: "10px" }}>All data</label>
                </div>
                <div>
                    <input type="checkbox" id="means" />
                    <label for="means" style={{ paddingLeft: "10px" }}>Include average blood glucose and carb intake</label>
                </div>
                {/* <div>
                    <input type="checkbox" id="median" />
                    <label for="meanCarb" style={{ paddingLeft: "10px" }}>Average carbon</label>
                </div> */}
            </div>
            <br></br>
            <button form="login" onClick={getData} className="btn" style={{ background: "#90ee90" }} > Submit</button>
        </div>
    )
}

export default Read;