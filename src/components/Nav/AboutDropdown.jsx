import { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import AwardsDropdown from './AwardsDropdown';

const AboutDropdown = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleOpenAbout = () => {
    setOpenAbout(!openAbout);
  };
  return (
    <li>
      <button
        className="w-full px-6 py-4 font-bold text-left shadow-md"
        onClick={() => handleOpenAbout()}
      >
        {openAbout ? (
          <div className="flex items-center justify-between hover:text-orange-500">
            About Us
            <PiCaretUpBold />
          </div>
        ) : (
          <div className="flex items-center justify-between hover:text-orange-500">
            About Us
            <PiCaretDownBold />
          </div>
        )}
      </button>
      {openAbout ? (
        <ul>
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">Our Mission</a>
          </li>
          <AwardsDropdown />
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">Projects</a>
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default AboutDropdown;
