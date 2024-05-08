import { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';

const AwardsDropdown = () => {
  const [openAwards, setOpenAwards] = useState(false);

  const handleOpenAwards = () => {
    setOpenAwards(!openAwards);
  };
  return (
    <li>
      <button
        className="w-full px-6 py-4 font-bold text-left shadow-md"
        onClick={() => handleOpenAwards()}
      >
        {openAwards ? (
          <div className="flex items-center justify-between pl-6 hover:text-orange-500">
            Awards
            <PiCaretUpBold />
          </div>
        ) : (
          <div className="flex items-center justify-between pl-6 hover:text-orange-500">
            Awards
            <PiCaretDownBold />
          </div>
        )}
      </button>
      {openAwards ? (
        <ul>
          <li className="py-4 pl-16 font-bold shadow-md hover:text-orange-500">
            <a href="#">2023</a>
          </li>
          <li className="py-4 pl-16 font-bold shadow-md hover:text-orange-500">
            <a href="#">2024</a>
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default AwardsDropdown;
