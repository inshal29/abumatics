import { Button } from "./ui/button";
import techIllustration from "../assets/techillustration2.png";
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Innovate with us
        </p>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline gradient-text">
              Abumatics
            </span>{' '}
          </h1>
          <h2 className="inline">
            <span className="inline gradient-text">
              Your Digital Technology Partner
            </span>
          </h2>
        </main>
        <p className="text-xl text-gray-600 md:w-10/12 mx-auto lg:mx-0">
        Empowering your business with cutting-edge technology solutions
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Contact us</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      <div className="shadow"></div>

      <div className="hidden lg:block">
        <img
          src={techIllustration}
          alt="Technology Illustration"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
};
