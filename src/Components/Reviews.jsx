import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = ({ currentReview }) => {
  const { name, job, image, text } = currentReview;
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
          <button className=""><FaChevronLeft/></button>
          <button><FaChevronRight/></button>
        </div>
        <button className="">Surprise me</button>
      </div>
    </article>
  );
};

export default Reviews;
