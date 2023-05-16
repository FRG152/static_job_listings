import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

const Filter = ({ selection, setSelection }) => {
  const removeSelection = (index) => {
    const newArr = [...selection];
    newArr.splice(index, 1);
    setSelection(newArr);
  };
  return (
    <>
      {selection.length > 0 && (
        <ul className="absolute left-0 right-0 -bottom-[10%] h-[60px] drop-shadow-md rounded-sm bg-White flex items-center gap-x-2 mx-5 px-4 py-2">
          {selection?.map((item, index) => {
            return (
              <li
                onClick={() => removeSelection(index)}
                className="bg-LightGrayishCyanBg text-DesaturatedDarkCyan flex items-center justify-center gap-x-2 font-bold "
                key={index}
              >
                <span className="text-DesaturatedDarkCyan text-[0.9rem] pl-2">
                  {item}
                </span>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "30px",
                    className:
                      "bg-DesaturatedDarkCyan transition-all hover:bg-VeryDarkGrayishCyan",
                  }}
                >
                  <div>
                    <IoClose />
                  </div>
                </IconContext.Provider>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Filter;
