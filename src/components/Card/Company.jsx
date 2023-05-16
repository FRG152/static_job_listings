const Company = ({ company, newOffert, featured }) => {
  return (
    <div className="flex gap-x-6 my-2">
      <ul className="flex items-center gap-x-2 pt-4 sm:p-0">
        <li className="font-bold text-DesaturatedDarkCyan mr-2">{company}</li>
        {newOffert && (
          <li className="text-[0.9rem] font-bold text-LightGrayishCyan bg-DesaturatedDarkCyan rounded-3xl px-2 py-1">
            NEW!
          </li>
        )}
        {featured && (
          <li className="text-[0.9rem] font-bold text-LightGrayishCyan bg-VeryDarkGrayishCyan rounded-3xl px-2 py-1">
            FEATURED
          </li>
        )}
      </ul>
    </div>
  );
};

export default Company;
