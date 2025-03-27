// Function to get the projects banner
const banner = import.meta.glob("/src/assets/images/projects/*.png", {
  eager: true,
});

const getBanner = (projectBanner) => {
  const bannerPath = `/src/assets/images/projects/${projectBanner.toLowerCase()}.png`;

  if (!banner[bannerPath]) {
    console.error(`Project banner not found: ${projectBanner}`);
    return banner["/src/assets/images/projects/fallback.png"].default;
  }

  return banner[bannerPath].default;
};

export const projectList = [
  {
    title: "Cyberpunk-Themed Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    desc: "Designed, developed, and deployed a futuristic, cyberpunk-inspired personal portfolio with a one-page scrolling layout using React, Tailwind CSS, and Framer Motion",
    extraDetails:
      "A futuristic, neon-lit portfolio showcasing AI, ML, and full-stack projects with glitch effects, parallax scrolling, and immersive interactions. The website features: Glitch effects and animated section transitions for a dynamic user experience. Parallax scrolling and interactive hover effects to enhance visual depth. Custom background music toggle with sci-fi sound effects. Optimized for responsiveness across mobile and desktop while preserving the cyberpunk aesthetic.",
    sourceLink: "https://github.com/faizan9cm/Personal-Portfolio",
    link: "https://faizan9cm.vercel.app/",
    imageSrc: getBanner("portfolio"),
  },
  {
    title: "Medical Chatbot",
    tech: "Python, LangChain, Flask, Meta Llama 3, Pinecone",
    desc: "This is an end-to-end medical chatbot using Retrieval-Augmented Generation (RAG) to extract and retrieve information from medical PDFs. Powered by Llama 3.3 LLM and integrated with Streamlit, it stores embeddings in Pinecone for efficient similarity search, ensuring accurate and context-aware responses.",
    extraDetails:
      "RAG-based chatbot for enhanced medical document retrieval. PDF processing pipeline to extract and index content. Pinecone vector database for efficient similarity search. Llama 3.3 LLM for intelligent and context-aware responses. Streamlit UI for an interactive and user-friendly experience.",
    sourceLink: "https://github.com/faizan9cm/Medical-Chatbot",
    link: "",
    imageSrc: getBanner(""),
  },
  {
    title: "Speech Recognition Assistant",
    tech: "Python, NLP, BiLSTM, TensorFlow, Keras, HTML, CSS, JavaScript, ChartJs",
    desc: "The project integrates advanced (NLP) features with speech-to-text transcription and real-time emotion detection capabilities. A Flask-based web application displays detected emotions with corresponding emojis and a histogram.",
    extraDetails:
      "Speech-to-Text Transcription: Converts spoken language into text with high accuracy. Real-Time Emotion Detection: Analyzes speech and detects emotions dynamically. BiLSTM Model with TensorFlow/Keras: Achieves 80% accuracy through deep learning. Flask-Based Web App: Displays detected emotions with emojis and a histogram. Interactive Visualization: Provides graphical insights into emotion distribution.",
    sourceLink:
      "https://github.com/faizan9cm/Unified-Speech-Recognition-Assistant",
    link: "",
    imageSrc: getBanner("usra"),
  },
  {
    title: "FuncRAG",
    tech: "Python, FastAPI, FAISS, Sentence-Transformers, PyTorch",
    desc: "A production-ready API that transforms natural language commands into executable Python code using RAG techniques and vector similarity search.",
    extraDetails:
      "Function Registry: Comprehensive collection of automation functions for application control, system monitoring, and command execution. Dynamic Code Generation: Creates executable Python scripts with proper imports and error handling. FAISS Vector Search: Efficient semantic matching of user prompts to functions. Custom Function Registration: API endpoint for adding new functions at runtime. Session Management: Maintains conversation history for contextual interactions.",
    sourceLink: "https://github.com/faizan9cm/funcrag",
    link: "",
    imageSrc: getBanner("registering-custom-function"),
  },
  {
    title: "Question Answering RAG Web App",
    tech: "Python, BeautifulSoup, Claude API, PyTorch, Flask, FIASS",
    desc: "This RAG-based application scrapes and chunks text from Wikipedia about 'Luke Skywalker,' stores embeddings in Faiss, and uses Claude API to answer user queries interactively.",
    extraDetails:
      "Wikipedia Scraping & Text Chunking: Extracts structured information from Wikipedia. Faiss Vector Search: Stores embeddings for efficient similarity-based retrieval. Claude API Integration: Generates accurate responses to user queries. Interactive Web Interface: Users can ask questions via a simple web UI. Flask API Support: Allows querying via Postman or other API tools.",
    sourceLink: "https://github.com/faizan9cm/RAG-Web-App",
    link: "",
    imageSrc: getBanner(""),
  },
];
