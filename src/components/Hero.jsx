import Section from "./Section";
import Button from "./Button";
import landscapeImage from "../assets/img/landscape-cover.jpg";
import portraitImage from "../assets/img/portrait-cover.jpg";

const Hero = () => {
  const btn_shopNow = () => {
    //* TODO
  };

  return (
    <Section className="relative" padded={false}>
      <img
        className="w-full max-h-[calc(100dvh-5.75rem)] object-none object-[45%_65%]"
        src={landscapeImage}
        alt="Hero Background"
        srcSet={`${portraitImage} 1023w, ${landscapeImage} 1920w`}
        sizes="(max-width: 1023px) 1023px, 1920px"
      />
      <div className="w-64 absolute top-1/2 left-48 -translate-y-1/2 flex flex-col items-start gap-y-12">
        <h1 className="text-5xl uppercase">Precision, Legacy, Timepieces.</h1>
        <Button className="uppercase" handleClick={btn_shopNow}>
          Shop Now
        </Button>
      </div>
    </Section>
  );
};

export default Hero;
