import { Button } from "./ui/button";
import techIllustration from "../assets/techillustration2.png";
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">

      {/* Text and Button Section */}
      <div className="text-center lg:text-start space-y-6 lg:order-1">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Innovate with us
        </p>
        <main className="font-bold">
  <h1 className="text-6xl md:text-8xl gradient-text">
    Abumatics
  </h1>
  <h2 className="text-3xl md:text-4xl mt-4 text-gray-500">
    Your Digital Technology Partner
  </h2>
</main>


        {/* Image Section for Mobile (Before Text on Mobile) */}
      <div className="lg:hidden order-1 mb-6">
        <img
          src={techIllustration}
          alt="Technology Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        />
      </div>

        {/* Paragraph Text */}
        <p className="text-xl text-gray-600 md:w-10/12 mx-auto lg:mx-0">
          Empowering your business with cutting-edge technology solutions
        </p>

        {/* Button Section */}
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Contact us</Button>
        </div>
      </div>

      {/* Image Section for Desktop (Before Text on Larger Screens) */}
      <div className="hidden lg:block lg:order-2">
        <img
          src={techIllustration}
          alt="Technology Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>

    </section>
  );
};


