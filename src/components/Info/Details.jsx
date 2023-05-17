import { BsDot } from "react-icons/bs";

const Details = ({ postedAt, contract, location }) => {
  return (
    <ul className="flex items-center gap-x-4 border-DarkGrayishCyan border-t-[1px] pt-4 my-2 sm:border-none">
      <li className="text-DarkGrayishCyan">{postedAt}</li>
      <li className="text-DarkGrayishCyan">
        <BsDot></BsDot>
      </li>
      <li className="text-DarkGrayishCyan">{contract}</li>
      <li className="text-DarkGrayishCyan">
        <BsDot></BsDot>
      </li>
      <li className="text-DarkGrayishCyan">{location}</li>
    </ul>
  );
};

export default Details;
