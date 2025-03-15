const ImageCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-60 h-80 bg-light-lime-green px-3 pt-8 rounded-md overflow-hidden clip-diagonal-top-right">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-56 h-52 object-cover rounded-md"
      />

      {/* Title Overlay */}
      <div className=" text-black text-center">
        <h3 className="py-6 text-lg font-bold">[ {title} ]</h3>
      </div>
    </div>
  );
};

export default ImageCard;
