import "./searchBar.scss";

type Props = {
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = (props: Props) => {
  return (
    <div className="searchbar">
      <span className="close" onClick={() => props.setOpen(false)}>
        X
      </span>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchBar;
