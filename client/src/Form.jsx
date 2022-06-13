import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "react-fast-grid";
import DatePicker from "react-datepicker";
import { Line } from "react-chartjs-2";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThreeFieldForm from "./ThreeFieldForm";
import Read from "./Read";
import Update from "./Update";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Form() {
  const [deleteDate, setDeleteDate] = useState(new Date(Date.now()));
  const [currentTab, setCurrentTab] = useState("read");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState();
  const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const [form, setForm] = useState();

  const [mean, setMean] = useState({
    averageGlucose: 0,
    averageIntakeCarbs: 0,
    averageMedicationDose: 0,
  });

  const [bloodGlucose, setBloodGlucose] = useState([1, 2, 3, 4]);
  const [medicationDose, setMedicationDose] = useState([1, 2, 3, 4]);
  const [carbIntake, setCarbIntake] = useState([1, 2, 3, 4]);

  const [dates, setDates] = useState([]);
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Carb intake in grams",
        data: carbIntake,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const data2 = {
    labels: dates,
    datasets: [
      {
        label: "Blood glucose in mg",
        data: bloodGlucose,
        fill: false,
        backgroundColor: "rgb(0, 12, 200)",
        borderColor: "rgba(0, 12, 200, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const baseUrl = "/MyWebsite/rest/records";

  const [allData, setAllData] = useState([]);

  function fetchAllData() {
    axios
      .get(baseUrl, {
        params: {
          userId: userId,
        },
        auth: {
          username: "user",
          password: "user",
          userId: userId,
        },
      })
      .then((response) => {
        console.log(response);
        setAllData(response.data);
      })
      .catch((resp) => {
        console.log(resp);
      });
  }

  function createData(body) {
    axios
      .post(baseUrl, body, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 201) alert("ID: " + body.id);
      })
      .catch((error) => {
        if (error.status == 401 || error.status == 403)
          alert("That command is only for admins");
        else alert("Not modified");
      });
  }

  function updateData(body) {
    axios
      .put(baseUrl + "/" + body.recordId, body, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200)
          alert("Entry update successfully for date: " + body.date);
        else {
          alert(
            "Entry for id " +
              body.recordId +
              " did not exist. New entry added for id " +
              body.recordId
          );
        }
      })
      .catch((error) => {
        if (error.status == 401 || error.status == 403)
          alert("That command can only be used by admins!");
        else alert("Entry for date " + body.recordId + " does not exist");
      });
  }
  function deleteData(body) {
    axios
      .delete(baseUrl + "/" + body, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        alert("Entry for date " + body + " successfully deleted");
      })
      .catch((error) => {
        if (error.status == 401 || error.status == 403)
          alert("That command can only be used by admins!");
        else alert("An entry for date " + body + " does not exist!");
      });
  }

  function changeCharts(data) {
    console.log(data);
    let bloodGlucose = [];
    let carbIntake = [];
    let medicationDose = [];
    let dates = [];
    data.forEach((el) => {
      dates.push(el.date);
      bloodGlucose.push(el.glucoseBlood);
      carbIntake.push(el.intakeCarbs);
      medicationDose.push(el.medicationDose);
    });
    dates = dates.map((date) => {
      let newDate = new Date(date);
      return newDate.toLocaleDateString("en-gb", dateOptions);
    });
    setDates(dates);
    setBloodGlucose(bloodGlucose);
    setCarbIntake(carbIntake);
    setMedicationDose(medicationDose);
  }

  const Delete = () => {
    const [recordId, setRecordId] = useState();
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "50px",
          marginRight: "50px",
          borderRight: "#000 solid",
        }}
      >
        <h1>Delete data</h1>
        <span style={{ display: "block-inline" }}>Record ID </span>
        <input
          type="text"
          id="text"
          onChange={(e) => {
            setRecordId(e.target.value);
          }}
        />
        <br></br>
        <button
          form="login"
          onClick={() => {
            deleteData(recordId);
          }}
          className="btn"
          style={{ background: "#90ee90" }}
        >
          {" "}
          Submit
        </button>
      </div>
    );
  };

  useEffect(() => {
    fetchAllData();
    let component = null;
    console.log(currentTab);
    switch (currentTab) {
      case "read":

      default:
        component = <></>;
    }
    setForm(component);
  }, [currentTab]);

  return (
    <>
      <div className="grid-container">
        <div
          className="grid-item grid-item-1"
          // style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#b3e5fc" }} className={"col"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: "50px",
              marginRight: "50px",
              borderRight: "#000 solid",
            }}
          >
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab("create");
              }}
            >
              Create_data
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab("read");
              }}
            >
              Read data
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab("update");
              }}
            >
              Update_data
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCurrentTab("delete");
              }}
            >
              Delete data
            </a>
          </div>
          <div style={{ display: currentTab === "read" ? true : "none" }}>
            <Read
              username={username}
              password={password}
              setMean={setMean}
              baseUrl={baseUrl}
              changeCharts={changeCharts}
              userId={userId}
              setUserId={setUserId}
            />
          </div>
          <div style={{ display: currentTab === "delete" ? true : "none" }}>
            <Delete />
          </div>
          <div style={{ display: currentTab === "update" ? true : "none" }}>
            <Update
              id={2}
              text={"Update data"}
              submitFunction={updateData}
            ></Update>
          </div>
          <div style={{ display: currentTab === "create" ? true : "none" }}>
            <ThreeFieldForm
              id={1}
              text={"Create data"}
              submitFunction={createData}
            ></ThreeFieldForm>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <form id="login" onSubmit={(e) => e.preventDefault()}>
              <h6>
                Type in the credentials that will be used to send the request
              </h6>
              <span>Username</span>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
              <br></br>
              <span>Password</span>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </form>
          </div>

          <div className="grid-item grid-item-3">
            <div className="grid-item mean">
              <h1>Average data:</h1>
              <p>
                Blood glucose: <b>{mean.averageGlucose.toFixed(2)}</b>
              </p>
              <p>
                Carb Intake: <b>{mean.averageIntakeCarbs.toFixed(2)}</b>
              </p>
              <p>
                Medication dose: <b>{mean.averageMedicationDose.toFixed(2)}</b>
              </p>
            </div>
          </div>
        </div>

        <div className="grid-item grid-item-2 carb-intake">
          <div className="header">
            <h4 className="title">Carb Intake</h4>
          </div>
          <Line data={data} options={options} />
        </div>

        <div className="grid-item grid-item-3 blood-glucose">
          <div className="header">
            <h4 className="title">Blood Glucose</h4>
          </div>
          <Line data={data2} options={options} />
        </div>
      </div>
      <div style={{ padding: 15 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 1050, marginLeft: "auto" }}
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Record Id</TableCell>
                <TableCell align="left">User</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Glucose level</TableCell>
                <TableCell align="left">Carb intake</TableCell>
                <TableCell align="left">Medication Dose</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.recordId}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.glucoseBlood} mg/dL</TableCell>
                  <TableCell align="left">{row.intakeCarbs} grams</TableCell>
                  <TableCell align="left">{row.medicationDose} grams</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Form;
