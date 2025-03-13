const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200">
      <div className="p-4 m-4">Home</div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">[About ]</li>
          <li className="px-4">[Projects ]</li>
          <li className="px-4">[Skills ]</li>
          <li className="px-4">[Contact ]</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
