const Details = ({ postedAt, contract, location }) => {
  return (
    <ul className="flex items-center gap-x-4 border-DarkGrayishCyan pb-4 my-2">
      <li className="text-DarkGrayishCyan">{postedAt}</li>
      <li className="text-DarkGrayishCyan">.</li>
      <li className="text-DarkGrayishCyan">{contract}</li>
      <li className="text-DarkGrayishCyan">.</li>
      <li className="text-DarkGrayishCyan">{location}</li>
    </ul>
  );
};

export default Details;
