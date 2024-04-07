import { useState } from "react";

const ShowHideApp = () => {
  const [isFirstName, setIsFirstName] = useState(false);
  const [isLastName, setIsLastName] = useState(false);

  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-[#fa7257] to-[#fc63a7]">
      <h1 className="text-center text-white text-3xl font-bold mb-10">
        Show/Hide
      </h1>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsFirstName(!isFirstName)}
            className="bg-white p-2 rounded-lg text-[#dd1264] font-bold"
          >
            {isFirstName ? "Hide" : "Show"} First Name
          </button>
          {isFirstName && (
            <p className="bg-[#fddddb] my-5 h-20 flex items-center justify-center w-56 rounded-lg text-black font-bold text-2xl">
              Jayapraksh
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => setIsLastName(!isLastName)}
            className="bg-white p-2 rounded-lg text-[#dd1264] font-bold"
          >
            {isLastName ? "Hide" : "Show"} Last Name
          </button>
          {isLastName && (
            <p className="bg-[#fddddb] my-5 h-20 flex items-center justify-center w-56 rounded-lg text-black font-bold text-2xl">
              Panabaka
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowHideApp;
