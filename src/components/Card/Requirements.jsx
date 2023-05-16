const Requirements = ({ selection, setSelection, languages, role, level }) => {
  const selectionEvent = (e) => {
    let check = selection.some(() => {
      return [...selection].includes(e.target.innerHTML);
    });
    if (!check) setSelection([...selection, e.target.innerHTML]);
  };
  return (
    <ul className="flex flex-wrap gap-4 mt-4 lg:m-0">
      <li
        onClick={(e) => selectionEvent(e)}
        className="bg-LightGrayishCyanBg text-DesaturatedDarkCyan rounded-sm font-bold transition-all cursor-pointer p-2 hover:bg-DesaturatedDarkCyan hover:text-LightGrayishCyan"
      >
        {role}
      </li>
      <li
        onClick={(e) => selectionEvent(e)}
        className="bg-LightGrayishCyanBg text-DesaturatedDarkCyan rounded-sm font-bold transition-all cursor-pointer p-2 hover:bg-DesaturatedDarkCyan hover:text-LightGrayishCyan"
      >
        {level}
      </li>
      {languages?.map((value, index) => (
        <li
          onClick={(e) => selectionEvent(e)}
          className="bg-LightGrayishCyanBg text-DesaturatedDarkCyan rounded-sm font-bold transition-all cursor-pointer p-2 hover:bg-DesaturatedDarkCyan hover:text-LightGrayishCyan"
          key={index}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Requirements;
