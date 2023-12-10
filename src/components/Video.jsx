import restaurant from "../assets/restaurant.png";

const Video = () => {
  return (
    <>
      <section className="relative overflow-x-hidden">
        <img
          src={restaurant}
          alt="restaurant"
          className="w-auto h-[763px] bg-center bg-cover object-cover object-center mx-auto"
        />
        <svg
          className="absolute top-[calc(322px-60px)] left-[calc(50%-60px)] hover:cursor-pointer hover:scale-110 transition-all select-none hover:invert"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="59.5" stroke="#DCCA87" />
          <path d="M76 61.5L52 76V47L76 61.5Z" fill="white" />
        </svg>
      </section>
    </>
  );
};

export default Video;
