import Company from "./Card/Company";
import Details from "./Card/Details";
import Requirements from "./Card/Requirements";
import Logo from "./Card/Logo";

function Card({ data, selection, setSelection }) {
  return (
    <div
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      className="relative drop-shadow-md rounded-md p-4 mx-5 my-10 lg:flex lg:items-center lg:justify-between lg:px-12"
    >
      <div className="lg:flex lg:items-center lg:gap-x-4">
        <Logo img={data.logo} />
        <div>
          <Company
            company={data.company}
            newOffert={data.new}
            featured={data.featured}
          />
          <span className="font-extrabold">{data.position}</span>
          <Details
            postedAt={data.postedAt}
            contract={data.contract}
            location={data.location}
          />
        </div>
      </div>
      <Requirements
        selection={selection}
        setSelection={setSelection}
        role={data.role}
        level={data.level}
        languages={data.languages}
      />
    </div>
  );
}

export default Card;
