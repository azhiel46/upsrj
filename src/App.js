import React from "react";
//IMPORT COMPONENTS SECTION
import ToolBar from "./ToolBar";
//IMPORT RESOURCE SECTION
import Horario from "./Resources/Horario.png";
import LogoBis from "./Resources/LogoBis.png";
//IMPORT MATERIAL UI SECTION
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div>
        <ToolBar />
      </div>

      <div className={classes.rootHeader}>
        <Button href="https://upsrj.edu.mx/">
          <img src={LogoBis} />
        </Button>
      </div>

      <div className={classes.horario}>
        <img src={Horario} />
      </div>

      <div className={classes.btnClases}>
        <Button size="large" variant="contained" disableElevation>
          Clases
        </Button>
      </div>
    </div>
  );
};

export default App;

const useStyle = makeStyles({
  rootHeader: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "25px",
  },
  horario: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px",
  },
  btnClases: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },
});
