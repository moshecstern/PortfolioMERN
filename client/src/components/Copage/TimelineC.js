import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "../layout/Timeline";
import {
  Grid,
  CssBaseline,
  Typography,
  Link,
  Container,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
// import e from "express";

const useStyles = makeStyles((theme) => ({
  h1theme: {
    color: theme.palette.secondary,
    paddingLeft: 40,
    margin: 20,
    marginTop: 40,
    fontSize: 40,
    textAlign: "center",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  },
  secondaryheader: {
    textAlign: "center",
  },
  buttongroup: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 5,
    marginBottom: 5,
  },
  timeline: {
    marginRight: 45,
    marginLeft: 50,
  },
}));

// const TimelineInfo = [
//     {
//       Catagory: "Work Experience",
//     DateL:"April 2020 - July 2020",
//     Title:"Churchland Psychological Center",
//     SubText:"Because it's awesome!",
//     SubText2:"Collect, Discover and Explore Comics and Superheros"
//     },
//     {

//   DateL:"April 2020 - July 2020",
//   Title:"The Chevra",
//   SubText:"Because it's awesome!",
//   // SubText2:"Collect, Discover and Explore Comics and Superheros"
//     }
//   ]
// const [MyCatagory, SetMyCatagory] = React.useState("all")
// const myTimeline= TimelineInfo.filter(MyT => MyT.Catagory === MyCatagory)
//   // TimelineInfo.Catagory === MyCatagory)

const TimelineC = (props) => {
  const classes = useStyles();

  const [Catagory, setCatagory] = React.useState("Experience");
  const [Myurl, seturl] = React.useState(
    "/api/experience/catagory/" + Catagory
  );
  const [{ data: mydata, loading }, randomtext] = useAxios({
    headers: {
      "Content-Type": "application/json",
    },
    url: Myurl,
    //   url: "/api/experience/all"
    // url: "/api/experience/catagory/"+ Catagory,
    // headers: { Authorization: `JWT ${accessString}` }
  });
  async function searchExperience(EX) {
    // event.preventDefault()
    //     if(EX === 'Fulltimeline'){
    // seturl("/api/experience/all")
    //     }
    console.log(EX);
    setCatagory(EX);
    randomtext();
  }

  // React.useEffect(() => {
  //     randomtext()
  // }, [])

  if (loading) {
    return <></>;
  }
  return (
    <>
      {/* {console.log(mydata)} */}
      <Typography className={classes.h1theme}>Experience</Typography>
      {/* buttons for All, education, Experiences, Projects/ Clients */}
      <ButtonGroup
        className={classes.buttongroup}
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button onClick={() => searchExperience("clients")}>Clients</Button>
        <Button onClick={() => searchExperience("Experience")}>
          Experience
        </Button>
        <Button onClick={() => searchExperience("Education")}>Education</Button>
        <Button onClick={() => searchExperience("Fulltimeline")}>
          Full Timeline
        </Button>
      </ButtonGroup>

      <hr />
      <Container maxWidth="md">
        <Timeline
          className={classes.timeline}
          // TimelineInfo={TimelineInfo}
          TimelineInfo={[mydata]}
          Loading={loading}
          // Catagory={Catagory}
        />
      </Container>
    </>
  );
};
export default TimelineC;
