import CustomButton from "./CustomButton";
import Header from "./Header";
import photoGalleryBG from "../assets/about_bg.png";

const PhotoGallery = () => {
  return (
    <section className="relative">
      <div className="flex gap-16 justify-center items-center  py-10 pl-20 overflow-x-hidden max-w-[2000px] m-auto">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
          style={{
            background: `url(${photoGalleryBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#040404]/50 -z-10" />
        <div className="flex flex-col gap-6 max-w-[491px]">
          <Header heading="Instagram" subHeading="Photo Gallery" />
          <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <CustomButton>View More</CustomButton>
        </div>

        <div className="flex relative overflow-x-hidden w-full gap-6">
          <div className="testimonial-scroll flex gap-6 items-stretch">
            <img
              src="https://picsum.photos/id/100/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/110/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/120/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/130/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/140/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/145/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/160/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/170/200/300?grayscale"
              alt="random"
            />
          </div>
          <div className="testimonial-scroll flex gap-6 items-stretch">
            <img
              src="https://picsum.photos/id/100/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/110/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/120/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/130/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/140/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/145/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/160/200/300?grayscale"
              alt="random"
            />
            <img
              src="https://picsum.photos/id/170/200/300?grayscale"
              alt="random"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
