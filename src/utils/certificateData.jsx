// Function to get the doc banner
const banner = import.meta.glob("/src/assets/images/docs/*.jpg", {
  eager: true,
});

const getBanner = (bannerName) => {
  const jpgPath = `/src/assets/images/docs/${bannerName}.jpg`;

  if (!banner[jpgPath]) {
    console.error(`Doc banner not found: ${bannerName}`);
    return banner["/src/assets/images/docs/fallback.jpg"].default;
  }

  return banner[jpgPath].default;
};

const certificationsData = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.ai-Coursera",
    date: "Apr 2024",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/78UBV2WTBKBN",
  },
  {
    title: "AI Workshop on Introduction to DL",
    issuer: "IEEE Computer Society, ZHCET, AMU",
    date: "Dec 2022",
    certificateLink:
      "https://docs.google.com/spreadsheets/d/1wWhElMHfiijqIkfU6CN302pS6J5f7zaZ/htmlview",
  },
  {
    title: "AI Workshop on Introduction to NLP",
    issuer: "IEEE Computer Society, ZHCET, AMU",
    date: "May 2023",
  },
  {
    title: "Workshop on Robotic Bot",
    issuer: "ASME Student Section, ZHCET, AMU",
    date: "Feb 2023",
  },
  {
    title: "ICECI Volunteer",
    issuer: "Dept. of Computer Science, AMU",
    date: "Feb 2023",
  },
  {
    title: "Analyze text with Azure AI Language",
    issuer: "Microsoft",
    date: "Feb 2024",
  },
  {
    title: "AWS Summit",
    issuer: "AWS",
    date: "May 2023",
  },
  {
    title: "Python Programming for Beginners",
    issuer: "Udemy",
    date: "Aug 2023",
    certificateLink:
      "https://www.udemy.com/certificate/UC-bc19c618-bd2d-45d7-a61c-1e886cbdd01a/",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM-Coursera",
    date: "May 2023",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/certificate/59EMV8SN4KU3",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM-Coursera",
    date: "Apr 2023",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/certificate/J2B8534T8JXY",
  },
  {
    title: "Coding for Everyone C and C++",
    issuer: "UCSC-Coursera",
    date: "Apr 2023",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/6L3G6GKLEB48",
  },
];

export const certifications = certificationsData.map((cert) => ({
  ...cert,
  imageSrc: getBanner(cert.title), // Automatically pass title
}));
