import AboutDropdown from './AboutDropdown';
import ComitteDropdown from './ComitteDropdown';
import EventsDropdown from './EventsDropdown';

const Nav = () => {
  return (
    <aside className="w-1/4 min-h-screen border-r border-black max-w-60 min-w-40">
      <nav>
        <ul>
          <li className="py-4 pl-6 font-bold shadow-md hover:text-orange-500">
            <a href="#">Home</a>
          </li>
          <AboutDropdown />
          <ComitteDropdown />
          <EventsDropdown />
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
