const ImageCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-50 h-70 bg-light-lime-green px-2 pt-6 rounded-md overflow-hidden clip-diagonal-top-right">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-50 h-50 object-cover rounded-md"
      />

      {/* Title Overlay */}
      <div className="flex justify-center">
        <h3 className="py-3 text-black text-lg font-bold">[ {title} ]</h3>
      </div>
    </div>
  );
};

export default ImageCard;
