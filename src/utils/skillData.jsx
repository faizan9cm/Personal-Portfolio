// Function to get the icon from the public folder

const icons = import.meta.glob("/src/assets/images/skills-icons/*.png", {
  eager: true,
});

const getIcon = (skillName) => {
  return (
    icons[`/src/assets/images/skills-icons/${skillName.toLowerCase()}.png`]
      ?.default || ""
  );
};

// Categorized skills with proficiency levels (0-100), icons, and colors
export const skills = {
  "AI Engineer": [
    { name: "Python", level: 90, icon: getIcon("python"), color: "#FFD43B" },
    {
      name: "TensorFlow",
      level: 85,
      icon: getIcon("tensorflow"),
      color: "#FF6F00",
    },
    { name: "PyTorch", level: 80, icon: getIcon("pytorch"), color: "#EE4C2C" },
    { name: "OpenCV", level: 75, icon: getIcon("opencv"), color: "#5C3EE8" },
    {
      name: "LangChain",
      level: 70,
      icon: getIcon("langchain"),
      color: "#00A67E",
    },
    {
      name: "HuggingFace",
      level: 65,
      icon: getIcon("huggingface"),
      color: "#FFD700",
    },
    { name: "OpenAI", level: 60, icon: getIcon("openai"), color: "#10A37F" },
    { name: "YOLO", level: 55, icon: getIcon("yolo"), color: "#00C7B7" },
  ],
  "Software Engineer": [
    { name: "Java", level: 85, icon: getIcon("java"), color: "#007396" },
    { name: "Git", level: 90, icon: getIcon("git"), color: "#F05032" },
    { name: "Docker", level: 85, icon: getIcon("docker"), color: "#2496ED" },
    { name: "AWS", level: 70, icon: getIcon("aws"), color: "#FF9900" },
  ],
  "Web Developer": [
    { name: "HTML", level: 95, icon: getIcon("html"), color: "#E34F26" },
    { name: "CSS", level: 90, icon: getIcon("css"), color: "#1572B6" },
    {
      name: "JavaScript",
      level: 85,
      icon: getIcon("javascript"),
      color: "#F7DF1E",
    },
    { name: "React", level: 80, icon: getIcon("react"), color: "#61DAFB" },
    {
      name: "Tailwind",
      level: 85,
      icon: getIcon("tailwind"),
      color: "#06B6D4",
    },
    { name: "Node.js", level: 75, icon: getIcon("nodejs"), color: "#339933" },
    { name: "Flask", level: 70, icon: getIcon("flask"), color: "#3d3d3d" },
    { name: "Django", level: 65, icon: getIcon("django"), color: "#06452d" },
  ],
  "Data Science": [
    { name: "NumPy", level: 90, icon: getIcon("numpy"), color: "#4D77CF" },
    { name: "Pandas", level: 85, icon: getIcon("pandas"), color: "#150458" },
    {
      name: "Matplotlib",
      level: 80,
      icon: getIcon("matplotlib"),
      color: "#11557C",
    },
    {
      name: "Scikit-learn",
      level: 75,
      icon: getIcon("scikit-learn"),
      color: "#F7931E",
    },
    { name: "Excel", level: 70, icon: getIcon("excel"), color: "#217346" },
    { name: "Power BI", level: 65, icon: getIcon("powerbi"), color: "#F2C811" },
    { name: "MySQL", level: 60, icon: getIcon("mysql"), color: "#4479A1" },
    { name: "MongoDB", level: 55, icon: getIcon("mongodb"), color: "#47A248" },
  ],
};
