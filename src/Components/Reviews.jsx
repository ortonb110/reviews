import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "../Components/data";
import { useState } from "react";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const prevChangeHandler = () => {
    setIndex((index) => {
      let newIndex = data.length - 1;
      if (index === 0) {
        return newIndex;
      } else {
        newIndex = index - 1;
        return newIndex;
      }
    });
  };

  const nextChangeHandler = () => {
    setIndex((index) => {
      let newIndex = 0;
      if (index === 3) {
        return newIndex;
      } else {
        newIndex = index + 1;
        return newIndex;
      }
    });
  };

  const surpriseMeHandler = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      if (index === 3) {
        setIndex(index - 1);
      } else {
        setIndex(index + 1);
      }
    } else {
      setIndex(randomNumber);
    }
  };

  return (
    <article className="bg-white w-[38rem] space-y-[1rem] flex flex-col py-[3rem] px-[2rem] text-center items-center border-[1px] shadow-xl rounded-lg">
      <img
        src={image}
        alt={name}
        className=" w-[8rem] rounded-full h-[8rem] object-cover"
      />
      <div>
        <h2 className="capitalize font-bold tracking-wider text-[2rem]">
          {name}
        </h2>
        <h4 className="uppercase text-blue-500 tracking-wider text-[1.2rem]">
          {job}
        </h4>
      </div>
      <p>{text}</p>
      <div>
        <div className="space-x-[1rem]">
          <button className="" onClick={prevChangeHandler}>
            <FaChevronLeft />
          </button>
          <button onClick={nextChangeHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button
          onClick={surpriseMeHandler}
          className="text-blue-500 border-[1px] border-blue-500 px-[1.5rem] py-[0.4rem] rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-200"
        >
          Surprise me
        </button>
      </div>
    </article>
  );
};

export default Reviews;
