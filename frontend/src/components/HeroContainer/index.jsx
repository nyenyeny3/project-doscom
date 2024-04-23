import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const HeroContent = ({ img, title, description }) => {
  const [overlay, setOverlay] = useState(true);

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <div
      className="hero-content max-w-[900px] relative flex-col gap-12 rounded-xl transition-all lg:flex-row hover:-translate-y-1 hover:shadow-lg after:absolute after:contents after:bg-violet-600 even:flex-row-reverse"
      onMouseEnter={handleOverlay}
      onMouseLeave={handleOverlay}
    >
      <div className="img relative mt-12">
        <img
          src={img}
          className="min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] aspect-square object-cover rounded-md shadow-3xl"
        />
        <div
          className={`absolute ${
            overlay ? "-top-5 -left-5" : "top-0 left-0"
          } -z-50 w-[300px] h-[300px] bg-violet-700 rounded-md transition-all`}
        ></div>
      </div>
      <div>
        <Link to={"/post/:title"}>
          <h1 className="text-5xl font-bold">{title}</h1>
        </Link>
        <p className="py-6">{description}</p>
        <Button type={"button"} message={"Read more"} />
      </div>
    </div>
  );
};

export default HeroContent;