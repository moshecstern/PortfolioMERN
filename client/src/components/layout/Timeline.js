import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Infoimeline = props => {
// export default function CustomizedTimeline() {
  const classes = useStyles();
  const [MyCatagory, SetMyCatagory] = React.useState();
// const [MyIcon, setMyIcon] = React.useState([props.TimelineInfo.Icon])

{/* {Info.Catagory &&
<Typography varient="h1">{Info.Catagory}</Typography>} */}

  return (
    <Timeline align="alternate">
      {/* {props.TimelineInfo.filter(Info => Info.Catagory === MyCatagory ( */}
    {props.TimelineInfo.map(Info =>(
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           {Info.DateL}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          {/* <TimelineDot> */}
          <TimelineDot color="primary">
            {/* <FastfoodIcon /> */}
            {/* <LaptopMacIcon /> */}
      
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {Info.Title}
              
            </Typography>
            <Typography>{Info.SubText}</Typography>
            <Typography>{Info.SubText2}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      ))}
      {/* <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Feb 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Graphic Know-vel
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Collect, Discover and Explore Comics and Superheros</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
             Liberty Coffee 
            </Typography>
            <Typography>Because you need Coffee</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Contact me, Let's Work Togeather!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
export default Infoimeline