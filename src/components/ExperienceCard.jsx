import textureImage from "../assets/images/gray-paper-texture.jpg";

const ExperienceCard = ({ title, subtitle, duration, description }) => {
  return (
    <div className="max-w-xl left-5 p-2 px-4 rounded-md relative bg-[#0b090a] scale-90">
      <div className="flex flex-row justify-between">
        <h3 className="text-l font-bold text-light-lime-green">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      <p className="text-gray-500 text-xs italic">{duration}</p>
      <p className="mt-2 text-justify">{description}</p>
    </div>
  );
};

export default ExperienceCard;
