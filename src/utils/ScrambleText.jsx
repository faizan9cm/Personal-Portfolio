import { useEffect, useState } from "react";

const ScrambleText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let index = 0;

    const revealNextLetter = () => {
      if (index < text.length) {
        let scrambled = "";
        let scrambleInterval = setInterval(() => {
          scrambled =
            text.substring(0, index) +
            characters[Math.floor(Math.random() * characters.length)];
          setDisplayedText(scrambled);
        }, speed / 5);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          setDisplayedText(text.substring(0, index + 1)); // Reveal correct character
          index++;
          revealNextLetter();
        }, speed);
      }
    };

    revealNextLetter();
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default ScrambleText;
