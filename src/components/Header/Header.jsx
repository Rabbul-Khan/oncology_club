import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-10">
      <img
        src="https://oncologyclub.org/assets/view/images/logo01.png"
        alt=""
        className="h-auto w-full max-w-60 "
      />
      <SearchBar />
    </header>
  );
};

export default Header;
