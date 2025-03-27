import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VisitCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let visitCount = localStorage.getItem("visitCount") || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
    setCount(visitCount);
  }, []);

  return (
    <div className="flex items-center justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-20 px-2 py-1 text-xl text-black font-bold font-mono bg-[#67f82e] rounded-sm"
      >
        Hits: {count}
      </motion.div>
    </div>
  );
};

export default VisitCounter;
