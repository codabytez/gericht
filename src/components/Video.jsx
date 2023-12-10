import { useRef, useState } from "react";
import meal from "../assets/meal.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="h-screen relative">
          <video
            ref={vidRef}
            src={meal}
            type="video/mp4"
            loop
            controls={false}
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div
              className="w-[100px] h-[100px] rounded-[50%] border cursor-pointer flex items-center justify-center hover:scale-125 transition-all duration-300 "
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            >
              {playVideo ? (
                <BsPauseFill color="#fff" fontSize={30} />
              ) : (
                <BsFillPlayFill color="#fff" fontSize={30} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
