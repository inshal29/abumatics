import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image1 from "../assets/solutions.png";
import image2 from "../assets/expert.png";
import image3 from "../assets/innovative.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Custom Technology Solutions",
    description:
      "We provide tailored solutions for businesses of all sizes, from custom software to integrated systems that meet your unique needs.",
    image: image1,
  },
  {
    title: "Expert Team of Developers",
    description:
      "Our team of experienced developers uses the latest technologies to build solutions that are both innovative and reliable.",
    image: image2,
  },
  {
    title: "Innovative Designs",
    description:
      "We focus on creating user-friendly, innovative designs that provide seamless experiences across platforms and devices.",
    image: image3,
  },
];

const featureList: string[] = [
  "Customization",
  "Expertise",
  "Scalability",
  "Support",
  "Innovation",
  "Security",
  "Agility",
  "Affordability",
  "Experience",
];


export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
