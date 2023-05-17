import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

const Filter = ({ selection, removeAll, removeSelection }) => {
  return (
    <>
      {selection.length > 0 && (
        <div className="bg-White absolute left-0 right-0 -bottom-[18%] flex items-center justify-between drop-shadow-md rounded-sm min-h-[60px] mx-5 px-4 py-2">
          <ul className="flex items-center flex-wrap gap-2">
            {selection?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => removeSelection(index)}
                  className="bg-LightGrayishCyanBg text-DesaturatedDarkCyan font-bold flex items-center justify-start gap-x-2"
                >
                  <span className="text-DesaturatedDarkCyan text-[1rem] pl-2">
                    {item}
                  </span>
                  <IconContext.Provider
                    value={{
                      size: "30px",
                      color: "white",
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
          <button
            type="button"
            onClick={() => removeAll()}
            className="h-[25px] text-[1.2rem] font-bold text-DesaturatedDarkCyan hover:border-b-2 hover:border-DesaturatedDarkCyan"
          >
            clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
