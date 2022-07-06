const InfoPopUp = ({ children }) => {
  return (
    <div
      className="absolute p-0 sm:p-4 top-12 -left-40 sm:-left-28 rounded-xl shadow-lg z-10 scale-0 origin-top
                 group-hover:scale-100 bg-gray-500 dark:bg-gray-600 
                 before:content-[''] before:absolute before:z-20 before:-top-8 before:left-[9.5rem] sm:before:left-[6.5rem]
                 before:border-[1rem] before:border-solid before:border-transparent before:border-b-gray-500 before:dark:border-b-gray-600 
                 transition-all duration-200 ease-in-out"
    >
      {children}
    </div>
  );
};

export default InfoPopUp;
