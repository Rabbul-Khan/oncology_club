import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-[50rem] justify-end items-center shadow-xl">
      <GoSearch className="p-2 text-5xl bg-white rounded-s-md" />
      <input
        className="w-full px-6 py-3 bg-white focus:outline-none"
        placeholder="Search for Abstracts, Guidelines, Meetings"
      />
      <button className="px-2 py-3 font-bold text-white bg-orange-500 rounded-md min-w-20 hover:bg-orange-700">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
