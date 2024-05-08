import { useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';

const EventsDropdown = () => {
  const [openEvents, setOpenEvents] = useState(false);
  const handleOpenEvents = () => {
    setOpenEvents(!openEvents);
  };
  return (
    <li>
      <button
        className="w-full px-6 py-4 font-bold text-left shadow-md"
        onClick={() => handleOpenEvents()}
      >
        {openEvents ? (
          <div className="flex items-center justify-between hover:text-orange-500">
            Events
            <PiCaretUpBold />
          </div>
        ) : (
          <div className="flex items-center justify-between hover:text-orange-500">
            Events
            <PiCaretDownBold />
          </div>
        )}
      </button>
      {openEvents ? (
        <ul>
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">Upcoming</a>
          </li>
          <li className="py-4 pl-12 font-bold shadow-md hover:text-orange-500">
            <a href="#">Previous Events</a>
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default EventsDropdown;
