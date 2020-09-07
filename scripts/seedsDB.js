const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/portfolioMern"
);
// {
//   name: "",
//   title: "",
//   specialties: '',
//   education: '',
//   other: '', 
//   hours: '',
// rating: 79,
//   img: '../../Images/sAsprey.jpg',
//   date: new Date(Date.now())
// },
const ResumeSeed = [
  {
    name: 'Moshe Stern',
    DOB: 1994-11-18,
    Headline: "I'm a Full Stack Web Developer and Israeli Military veteran with a life-long dedication to learning through life experience. Effective at creative thinking and problem solving under pressure to accomplish any task. Technical training experience building live applications using Node js, Express, Mysql & MongoDB databases, React, and more. My passion is learning new technologies and understanding how to dive deep into them to create useful, working products to be used by consumers. I am excited to leverage these skills as a part of a team to build better products and experiences.",
    // Resume: ,
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'JavaScript', 'JQuery', 'Restful API', 'Ajax', 'Axios'],
    timeline: [
      {
        Title: 'Churchland Psychological Center',
        Catagory: 'Work',
        DateStarted: 2020-04-01,
        DateEnded: 2020-07-01,
        Role: 'Web Developer',
        DescriptionA: 'Designed, and maintain website',
        DescriptionB: "Longer Info if i have it",
        Skills: ['GitHub', 'JavaScript', 'React', 'Node'],
        Website: 'https://',
        CodeLink: 'htttps://',
        Image: 'https://',
      },
      {
        Title: 'The Chevra',
        Catagory: 'Work',
        DateStarted: 2020-04-01,
        DateEnded: 2020-07-01,
        Role: 'Web Solutions / Logistical Coordinator',
        DescriptionA: 'Designed, and maintain website',
        DescriptionB: "Longer Info if i have it",
        Skills: ['Wix', 'JavaScript', 'SalesForce', 'Google Sheets'],
        Website: 'https://www.chevra.net',
        // CodeLink: 'htttps://',
        Image: 'https://',
      }
    ],
    Products: [
{
  Title: "Full Stack Websites",
  Price: 500
},
{
  Title: "Front-End Design",
  Price: 250
}
    ] 
  }
  ]



const resourcesSeed = [
  // {
  //   catagory: "about",
  //   heading: "About Us",
  //   subtitle: "from the creator of GraphicKnowvel",
  //   body1:
  //     "We are a Philadelphia based company serving the needs of small businesses in need of a little cash.",
  //     body2:
  //     "View our values and mission statment to learn more.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "howitWorks",
  //   heading: "What are your hours?",
  //   body1:
  //     "Each of our therapists has their own hours, please check their bio on the staff page for more information. The business office is open M-F 9am to 5pm. If you are experiencing a clinical emergency and cannot reach your therapist, please call the answering service at 757-671-3152 to be connected with the therapist on call.",
  //     rating: 2,
  //   date: new Date(Date.now())
  // },
  // {
  //   catagory: "privacypolicy",
  //   heading: "The Dead Zone",
  //   body1:
  //       "Please reproduce and share!",
  //     body2:
  //     "See terms of use",
  //     rating: 1,
  //           date: new Date(Date.now())
  // },
  // {
  //   catagory: "termsofuse",
  //   heading: "Terms of Use",
  //   body1:
  //     "Terms of use the sale of this product is not limited in any way.",
  //     body2:
  //     "No Copyright as of yet.",
  //     rating: 1,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "missionstatement",
  //   heading: "Mission Statement",
  //   body1:
  //     "Partnering with small businesses to help them grow by providing honest, transparent, and consultive funding solutions tailored to the individual needs of each business.",
  //     rating: 3,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "values",
  //   heading: "Core Values",
  //   body1:
  //     "Be Honest and Transparent, Understand Each Client's Unique Needs, Look Out For Client's Best Interest, Client Success Is our Sucess, and Believe In Each And Every patient.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "faq",
  //   heading: "Does an application cost money?",
  //   body1:
  //     "No! It will always be free",
  //     rating: 3,
  //   date: new Date(Date.now())
  // },
  {
    catagory: "schedule",
    heading: "How do I schedule an appointment?",
    body1:
      "Please call the main business office at 757-483-3404 and our office staff will take your information and help match you to the appropriate therapist. All of our therapists manage their own schedules, so the therapist will contact you directly to schedule your first appointment.",
      rating: 4,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "insurance",
    heading: "What insurance do you accept?",
    body1:
      "We accept most insurance plans including Anthem Blue Cross Blue Shield, Tricare, Optima, and United Behavioral among many others.",
      rating: 3,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "howmuch",
    heading: "How much will I have to pay for therapy?",
    body1:
      "Most of our clients use insurance to cover the cost of therapy, and the cost will vary depending on your particular plan. You can contact your insurance company to inquire about your benefits, copayments, and deductible",
      rating: 2,
      display: true,
    date: new Date(Date.now())
  },
    {
    catagory: "medicine",
    heading: "Can you prescribe medication for my depression or anxiety?",
    body1:
      "No, we don’t have a psychiatrist on staff and do not offer this service. If your therapist feels that medication might be warranted then an appropriate referral will be made.",
      rating: 1,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "teletherapy",
    heading: "In view of the present Coronavirus Pandemic, Churchland Psychological Center offers REMOTE THERAPY (“Teletherapy”) as an option to all of our patients. This option is covered by almost all insurance companies.",
    body1:"Teletherapy is an option we offer to all of our patients under certain circumstances. Certainly, at present, in 2020, the world is faced with the Coronavirus pandemic, requiring that we stay at home is much as possible, and therefore offering this service allows each patient to continue their therapy without leaving their home. Each therapist in the practice uses the medium that they are most comfortable with and which best suits the patient’s preferences. We can conduct sessions over the Internet where the patient and therapist can see each other and communicate much as they would in the office, allowing the patient to either use their computer, tablet, or smart phone to connect with the therapist. Other options include Facetime, Skype, Zoom, Doxy, and others. Some methods of connecting are more secure than others. For example, both Zoom and Doxy are fully HIPAA compliant, meaning the highest level of security is offered to prevent any possible access by anybody other than the patient and therapist talking with each other. Skype and FaceTime offer less security, but are still acceptable. In some cases, for example, if a patient does not have a computer or smart phone, we can simply have the session conducted by telephone, as this is now permitted under the current health crisis, when normally it is not a covered service. Thus, there are many options available for the therapist to connect with his or her patient. Government regulations have been eased to allow for as much remote therapy as possible",
    rating: 5,
    display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "editform",
    heading: "Form Submition",
    display: false,
    body1:  "Please click on the appropriate link below and the forms will be sent to you within one business day."
  }
];
db.Staff
  .remove({})
  .then(() => db.Staff.collection.insertMany(staffSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into staff!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Resources
  .remove({})
  .then(() => db.Resources.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into FAQ's!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
