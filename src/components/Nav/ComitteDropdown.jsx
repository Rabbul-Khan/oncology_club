import { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';

const ComitteDropdown = () => {
  const [openComitte, setOpenComitte] = useState(false);
  const handleOpenComitte = () => {
    setOpenComitte(!openComitte);
  };
  return (
    <li>
      <button
        className="w-full px-6 py-4 font-bold text-left shadow-md"
        onClick={() => handleOpenComitte()}
      >
        {openComitte ? (
          <div className="flex items-center justify-between hover:text-orange-500">
            EC Committe
            <PiCaretUpBold />
          </div>
        ) : (
          <div className="flex items-center justify-between hover:text-orange-500">
            EC Committe
            <PiCaretDownBold />
          </div>
        )}
      </button>
      {openComitte ? (
        <ul>
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">Members</a>
          </li>
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">News and Updates</a>
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default ComitteDropdown;
