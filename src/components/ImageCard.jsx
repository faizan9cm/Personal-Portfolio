const ImageCard = ({ imageSrc, title }) => {
  return (
    <div className="relative w-[55vw] sm:w-[45vw] h-[80vw] sm:h-[75vw] max-w-[210px] sm:max-w-[190px] max-h-[320px] sm:max-h-[280px] bg-light-lime-green rounded-md clip-diagonal-top-right flex flex-col justify-center items-center">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="mt-4 w-[60vw] sm:w-[40vw] h-[70vw] sm:h-[55vw] 
             max-w-[195px] sm:max-w-[180px] max-h-[220px] sm:max-h-[220px] 
             object-cover rounded-md overflow-hidden"
      />

      {/* Title Overlay */}
      <div className="flex justify-center">
        <h3 className="py-4 sm:py-4 md:py-6 text-black text-lg font-bold">
          [ {title} ]
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;
