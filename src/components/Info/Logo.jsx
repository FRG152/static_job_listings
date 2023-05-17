const Logo = ({ img }) => {
  return (
    <figure className="absolute left-[3%] -top-[12%] sm:static">
      <img className="w-[60px] sm:w-auto" src={img} alt="img" />
    </figure>
  );
};

export default Logo;
