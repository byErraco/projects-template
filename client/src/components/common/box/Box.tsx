const Box = ({ subtitle, title, children }) => {
  return (
    <div className=" bg-gray-100 px-8 pt-16 pb-16 relative">
      {subtitle ? <h2 className="text-xs mb-1">TITLE</h2> : ""}
      {title ? (
        <h1 className="title-font sm:text-2xl text-xl  mb-3">
          Raclette Blueberry Nextious
        </h1>
      ) : (
        ""
      )}
      {children}
      {/* <p className="mb-3">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p> */}
    </div>
  );
};

export default Box;
