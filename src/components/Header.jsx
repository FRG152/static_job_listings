import Filter from "./Filter";

const Header = ({ selection, setSelection }) => {
  return (
    <div className="relative bg-DesaturatedDarkCyan">
      <figure>
        <img src="../../images/bg-header-desktop.svg" alt="bg-img" />
      </figure>
      <Filter selection={selection} setSelection={setSelection}></Filter>
    </div>
  );
};

export default Header;
