import React from "react";
//IMPORT COMPONENTS SECTION

//IMPORT MATERIAL UI SECTION
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ToolBar = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.rootHeader}>
        <div>
          <Button href="https://www.instagram.com/elpincheaziel/">
            <InstagramIcon
              sx={{ fontSize: 55 }}
              className={classes.InstaIcon}
            ></InstagramIcon>
          </Button>
        </div>

        <div className={classes.btnsHeader}>
          <Button
            size="large"
            variant="text"
            href="https://upsrj.edu.mx/sistemaintegral/web/alumnos.php"
          >
            <Typography variant="h6" color="#ffffff">
              Site
            </Typography>
          </Button>
          <Button
            size="large"
            variant="text"
            href="https://sites.google.com/upsrj.edu.mx/iswvirtual/c-home/c-3rd-term/c-visual-programming"
          >
            <Typography variant="h6" color="#ffffff">
              SAI
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ToolBar;

const useStyle = makeStyles({
  rootHeader: {
    display: "flex",
    paddingTop: "15px",
    paddingBottom: "15px",
    backgroundColor: "#457979",
    justifyContent: "space-around",
  },
  InstaIcon: {
    color: "white",
  },
  btn: {
    color: "red",
  },
  btnsHeader: {
    paddingTop: "5px",
  },
});
