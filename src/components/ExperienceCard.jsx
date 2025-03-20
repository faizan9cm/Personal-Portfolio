const ExperienceCard = ({
  title,
  subtitle,
  duration,
  description,
  onClick,
}) => {
  return (
    <div
      className="max-w-xl left-5 p-2 px-4 rounded-md relative bg-[#111111] scale-90 hover:shadow-md hover:shadow-[#00ffcc] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row justify-between">
        <h3 className="text-l font-bold text-[#00ffcc]">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      <p className="text-gray-500 text-xs italic">{duration}</p>
      <p className="mt-2 text-justify">{description}</p>
    </div>
  );
};

export default ExperienceCard;
