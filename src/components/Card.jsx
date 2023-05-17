import Company from "./Info/Company";
import Details from "./Info/Details";
import Requirements from "./Info/Requirements";
import Logo from "./Info/Logo";

const Card = ({ id, data, addFilter }) => {
  return (
    <div
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      className={`relative rounded-md p-4 mx-5 my-10 lg:flex lg:items-center lg:justify-between lg:px-12 ${
        id == 0 ? "border-l-4 border-l-DesaturatedDarkCyan" : ""
      }`}
    >
      <div className="lg:flex lg:items-center lg:gap-x-4">
        <Logo img={data.logo} />
        <div>
          <Company
            company={data.company}
            newOffert={data.new}
            featured={data.featured}
          />
          <span className="cursor-pointer font-extrabold hover:text-DesaturatedDarkCyan">
            {data.position}
          </span>
          <Details
            postedAt={data.postedAt}
            contract={data.contract}
            location={data.location}
          />
        </div>
      </div>
      <Requirements
        role={data.role}
        level={data.level}
        languages={data.languages}
        addFilter={addFilter}
      />
    </div>
  );
};

export default Card;
