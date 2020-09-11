import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import {Link} from 'react-router-dom';
// import Container from '@material-ui/core/Container';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
import ContactUs from './ContactUs'
// import Header from '../../components/Material-ui/Header';
import MainFeaturedPost from '../layout/MainFeaturedPost';
import FeaturedPost from '../layout/FeaturedPost';
import Dbparagraph from '../layout/Dbparagraph'
import Timeline from '../layout/Timeline'
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import Main from '../../components/Material-ui/Main'; 
// import Sidebar from '../../components/Material-ui/Sidebar';
// import Footer from '../../components/Material-ui/Footer';
// import About from '../../components/Features/Resources'
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import MoreTabs from '../../components/AppBar/MoreTabs';
import MainIMG from '../../Images/oceanHealthcare.jpg'
import whoweareIMG from '../../Images/whoweare.png'
import locationsIMG from '../../Images/mainIMG.jpg'
import {
  Grid,
  CssBaseline,
  Typography,
  Link,
  Container,
  Button
} from "@material-ui/core";
// import Cookies from 'js-cookie';

// const jwtDecode = require('jwt-decode');

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
      sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
      },
      sidebarSection: {
        marginTop: theme.spacing(3),
      },
      h1theme: {
        color: theme.palette.secondary,
        paddingLeft: 40,
        margin: 20,
        marginTop: 40,
        fontSize: 40,
        textAlign: 'center',
        padding: 10,
        [theme.breakpoints.down('md')]: {
          fontSize: 30,
        }
      },
      secondaryheader: {
        textAlign: 'center',
        
      },
      buttongroup:{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 5,
        marginBottom: 5,

      },
      timeline: {
        marginRight: 45,
        marginLeft: 50
       
      }

}));

// Need to ADD Top Projects, Top Products (web & physical), Bio, Top Blogs, 







// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

const mainFeaturedPost = {
  title: 'Moshe C Stern',
  description:
    "Full Stack Web Developer",
    image: MainIMG,
  // image: 'https://oceanservice.noaa.gov/facts/ocean-human-health.jpg',
  imgText: 'Moshe C Stern',
  linkText: 'Our Forms',
  linkdInLink: 'https://www.linkedin.com/in/moshe-stern-413205176/',
};

const featuredPosts = [
  {
    title: 'Freelance',
    // catagory: 'myapplication',
    // date: 'Check',
    description:
      "Hire me to build a technology based product for you. Web Development, Database Management, and Cloud Services.",
    // image: whoweareIMG,
    // imageText: 'Image Text',
    link: '/who'
  },
  {
    title: 'professional',
    // catagory: 'application',
    // date: 'Apply Now',
    description:
      'Web & Software Development: Hard working & dedicated to making you the best',
    // image: 'https://source.unsplash.com/random',
    // image: locationsIMG,
    // imageText: 'Image Text',
    link: '/where'
  },
  {
    title: 'Products',
    // catagory: 'application',
    // date: 'Apply Now',
    description:
      'Online retailer AllStern, All products are created or researched by me',
    // image: 'https://source.unsplash.com/random',
    // image: locationsIMG,
    imageText: 'Image Text',
    link: '/where'
  },
  {
    title: 'Blog',
    // catagory: 'application',
    // date: 'Apply Now',
    description:
      'A host of interesting topics to explore, add and comment',
    // image: 'https://source.unsplash.com/random',
    // image: locationsIMG,
    imageText: 'Image Text',
    link: '/where'
  }

//
// 

  // {
  //   title: 'Forms',
  //   // catagory: 'myapplication',
  //   date: 'Hippa Complient',
  //   description:
  //     'Swiftly and Securly fill out our forms online',
  //   image: 'https://source.unsplash.com/random',
  //   imageText: 'Forms',
  //   link: '/forms'
  // },
  // {
  //   title: 'Payment',
  //   // catagory: 'myapplication',
  //   // date: 'Hippa Complient',
  //   description:
  //     'Conveniently & Securely Pay Here',
  //   image: 'https://source.unsplash.com/random',
  //   imageText: 'Pay',
  //   link: '/pay'
  // },
  // {
  //   title: 'Forum',
  //   // catagory: 'myapplication',
  //   // date: 'Hippa Complient',
  //   description:
  //     'FAQs & More',
  //   image: 'https://source.unsplash.com/random',
  //   imageText: 'Forum',
  //   link: '/forum'
  // }
];


// const sidebar = {
//   title: 'Contact Us',
//   description:
//     'Churchland Psychological Center 3101 American Legion Road, Suite 21B Chesapeake, VA 23321',
//     // Email Us
//     number: '(757) 483-3404 (for all offices)',
//     email: 'cpc3210@yahoo.com',
    
//     // Other locations',
//   archives: [
//     { title: 'About', url: 'about' },
//     { title: 'How it Works', url: 'howitworks' },
//     { title: 'Teletherapy', url: 'teletherapy' },
//     { title: 'Blog', url: 'blog' },
//     { title: 'Faq', url: 'faq' },
//     { title: 'Reviews', url: 'reviews' },
//     { title: 'Values', url: 'values' },
//     { title: 'Privacy Policy', url: 'privacypolicy' },
//     { title: 'Terms of Use', url: 'termsofuse' },
//     { title: 'Contact', url: 'contact' },
//     { title: 'Mission Statement', url: 'missionstatement' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };
const TimelineInfo = [
  {
    Catagory: "Work Experience",
  DateL:"April 2020 - July 2020",
  Title:"Churchland Psychological Center",
  SubText:"Because it's awesome!",
  SubText2:"Collect, Discover and Explore Comics and Superheros"
  },
  {
    
DateL:"April 2020 - July 2020",
Title:"The Chevra",
SubText:"Because it's awesome!",
// SubText2:"Collect, Discover and Explore Comics and Superheros"
  }
]
// const [MyCatagory, SetMyCatagory] = React.useState("all")
// const myTimeline= TimelineInfo.filter(MyT => MyT.Catagory === MyCatagory)
//   // TimelineInfo.Catagory === MyCatagory)


export default function AboutPage(props) {
  // console.log(props.match.params.name)
  const classes = useStyles();
  // const [selectedDashboard, setSelectedDashboard] = React.useState('about')
const [Catagory, setCatagory] = React.useState('Experience')

// Axios Call using Catagory as filter to find experiences and fill timeline props
// const [{ data: mydata, loading }, randomtext] = useAxios({
//   headers: {
//     'Content-Type': 'application/json'
// },
//   url: "/api/experience/catagory/"+Catagory,
//   // headers: { Authorization: `JWT ${accessString}` }
// });
async function searchExperience(EX) {
  setCatagory(EX);
  // randomtext()
}

  return (
    <>
    {/* <MoreTabs /> */}
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="lg"> */}
      <br />
        {/* <Header title="Blog" sections={sections} /> */}

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

<Typography className={classes.h1theme}>
  Experience
</Typography>
{/* buttons for All, education, Experiences, Projects/ Clients */}
<ButtonGroup className={classes.buttongroup} color="secondary" aria-label="outlined secondary button group">
  <Button onClick={()=> searchExperience('clients')}>Clients</Button>
  <Button onClick={()=> searchExperience('Experience')}>Experience</Button>
  <Button onClick={()=> searchExperience('Education')}>Education</Button>
  <Button onClick={()=> searchExperience('Fulltimeline')}>Full Timeline</Button>
</ButtonGroup>

<hr/>
<Container maxWidth="md">
<Timeline className={classes.timeline}
// TimelineInfo={TimelineInfo}
// TimelineInfo={mydata}
Catagory={Catagory}
 />
</Container>

          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
          <Dbparagraph catagory={"edithome"}/>
          {/* <Typography variant="h1" component="h2" className={classes.h1theme}>
  Contact Us
</Typography>
<Typography variant="h2" component="h2" className={classes.secondaryheader}>

 <Link target="_blank" 
                rel="noopener noreferrer" 
                href="https://hushforms.com/contactcpc"
                underline="always"
                >
        Click this link to contact us 
      </Link>
</Typography> */}
          {/* <ContactUs /> */}
          {/* <Grid container spacing={5} className={classes.mainGrid}> */}
            {/* <Main title={"Welcome"} tab={"/aboutus"} />  */}
            {/* {props.selectedDashboard === "about" && <About />} */}
            {/* {sidebar.archives.map(arch => ( */}
            {/* <Grid item xs={12} md={4}> */}
      {/* <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {sidebar.title}
        </Typography>
        <Typography>{sidebar.description}</Typography>
        <Typography>{sidebar.number}</Typography>
        <Typography>{sidebar.email}</Typography>
      </Paper> */}
      {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Resources
      </Typography>
      {sidebar.archives.map(archive => (
        <Button display="block" variant="outlined" onClick={(e)=> setSelectedDashboard(archive.url)} key={archive.title}>
          {archive.title}
        </Button>
      ))} */}
      {/* {sidebar.archives.map(archive => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
        {/* <Button display="block" key={archive.title} onClick={(e)=> setSelectedDashboard(archive.url)}>{archive.title}</Button> */}
      {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {sidebar.social.map(network => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))} */}
    {/* </Grid> */}
    
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          {/* </Grid> */}
        </main>
      {/* </Container> */}
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
    </>
  );
}
// export default About;