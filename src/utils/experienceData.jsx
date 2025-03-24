const certificate = import.meta.glob("/src/assets/images/experiences/*.jpg", {
  eager: true,
});

// Function to get the certificates
const getCertificate = (certificateImage) => {
  const formattedName = certificateImage.replace(/\s+/g, "-").toLowerCase(); // Ensure matching format
  const certificatePath = `/src/assets/images/experiences/${formattedName}.jpg`;

  // console.log("Searching for:", certificatePath);
  // console.log("Available keys:", Object.keys(certificate));

  if (!certificate[certificatePath]) {
    console.error(`Certificate image not found: ${certificateImage}`);
    return certificate["/src/assets/images/experiences/fallback.jpg"]?.default;
  }

  return certificate[certificatePath].default;
};

export const experience = [
  {
    title: "Freelance Data Engineer",
    subtitle: "Azure Power",
    duration: "Dec 2024 - Jan 2025",
    description:
      "As a freelance Data Engineer at Azure Power, I optimized the inverter performance analysis process, significantly improving data processing efficiency and reporting speed.",
    extraDetails: [
      "Automated data aggregation and processing from 60-65 Excel files using Python (NumPy, Pandas), reducing processing time from over 1 hour to 12-15 minutes.",
      "Calculated key performance indicators (KPIs) such as EMP, EP, Expected Generation, and Delta, streamlining performance analysis for multiple sites.",
      "Rewrote the data processing pipeline, optimizing workflows and automating report generation for faster analysis and decision-making.",
    ],
  },

  {
    title: "Data Analyst Intern",
    subtitle: "RetroFox International Shipping LLP",
    duration: "Jun 2024 - Nov 2024",
    description:
      "Analyzed large datasets related to export logistics, sales, and supply chain performance to identify key trends and optimize operations. Developed reports and dashboards to track shipment performance, sales KPIs, and market segmentation insights.",
    extraDetails: [
      "Managed and analyzed datasets on freight costs, delivery times, and inventory turnover.",
      "Created reports and dashboards to monitor export activities and sales KPIs.",
      "Conducted customer and market segmentation to optimize regional sales strategies.",
      "Applied predictive analytics for demand forecasting and inventory optimization.",
      "Developed interactive data visualizations using Excel and Power BI for stakeholders.",
    ],
  },

  {
    title: "Competitive Programming Intern",
    subtitle: "AMU - Dept. of Computer Science",
    duration: "Mar 2023 - May 2023",
    ImageSrc: getCertificate("cp"),
    description:
      "Solved 200+ DSA problems of varying difficulty across platforms including Coding Ninjas CodeStudio, LeetCode, and GeeksforGeeks.",
    extraDetails: [
      "Strengthened problem-solving skills and algorithmic thinking through hands-on practice.",
      "Gained experience in data structures, algorithms, and competitive programming techniques.",
    ],
  },
];
