import { useEffect, useState } from "react";

const ScrambleText = ({ text, speed = 100, erase = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let index = erase ? text.length : 0;

    const updateText = () => {
      if (!erase && index < text.length) {
        // Scrambling Effect
        let scrambled = "";
        let scrambleInterval = setInterval(() => {
          scrambled =
            text.substring(0, index) +
            characters[Math.floor(Math.random() * characters.length)];
          setDisplayedText(scrambled);
        }, speed / 5);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          setDisplayedText(text.substring(0, index + 1)); // Reveal correct letter
          index++;
          updateText();
        }, speed);
      } else if (erase && index > 0) {
        // Erasing Effect
        setTimeout(() => {
          setDisplayedText(text.substring(0, index - 1)); // Remove last letter
          index--;
          updateText();
        }, speed);
      }
    };

    updateText();
  }, [text, speed, erase]);

  return <span>{displayedText}</span>;
};

export default ScrambleText;
