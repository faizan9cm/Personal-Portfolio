const ExperienceCard = ({
  title,
  subtitle,
  duration,
  description,
  onClick,
}) => {
  return (
    <div
      className="max-w-xl p-2 px-4 rounded-md relative bg-[#111111] scale-100 sm:scale-90 hover:shadow-md hover:shadow-[#00ffcc] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="text-l font-bold text-[#00ffcc]">{title}</h3>
        <p className="text-gray-400 text-sm whitespace-normal">{subtitle}</p>
      </div>
      <p className="text-gray-500 text-xs italic whitespace-normal">
        {duration}
      </p>
      <p className="mt-2 text-justify break-words">{description}</p>
    </div>
  );
};

export default ExperienceCard;
