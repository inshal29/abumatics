import { Statistics } from "./Statistics";
import aboutimg from "../assets/About.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          
          {/* Image Section */}
          <img
            src={aboutimg}
            alt="About"
            className="w-full sm:w-[300px] object-contain rounded-lg mx-auto"
          />
          
          {/* Text Section */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At <strong>Abumatics</strong>, we empower businesses with innovative digital solutions that drive growth and success. Our team specializes in providing cutting-edge technology services tailored to meet the unique needs of each client. From custom software development to AI-driven solutions, we help businesses transform and thrive in the digital world.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Our Mission:</strong> To deliver scalable and secure technology solutions that help businesses succeed in a rapidly evolving digital landscape.
              </p>
            </div>

            {/* Statistics Component */}
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
