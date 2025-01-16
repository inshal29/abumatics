import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { WebDevelopmentIcon, PhotographyIcon, EcommerceIcon, AdvertisementIcon, SocialMediaIcon, DataEntryIcon, InventoryIcon } from "./Icons"; // Replace with actual icons if available
import services from "../assets/Services.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Create stunning, responsive websites tailored to your brand's identity and goals.",
    icon: <WebDevelopmentIcon />, // Use an appropriate icon for Web Development
  },
  {
    title: "Photography and Videography",
    description:
      "Capture your moments with professional-grade photography and videography services.",
    icon: <PhotographyIcon />, // Use an appropriate icon for Photography
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Build and manage your online store with ease, featuring user-friendly design and functionality.",
    icon: <EcommerceIcon />, // Use an appropriate icon for E-commerce
  },
  {
    title: "Advertisements",
    description:
      "Reach your target audience with impactful and creative ad campaigns.",
    icon: <AdvertisementIcon />, // Use an appropriate icon for Advertisements
  },
  {
    title: "Social Media Management",
    description:
      "Elevate your online presence with strategic social media management and content creation.",
    icon: <SocialMediaIcon />, // Use an appropriate icon for Social Media
  },
  {
    title: "Data Entry Services",
    description:
      "Streamline your business operations with efficient and accurate data entry solutions.",
    icon: <DataEntryIcon/>, // Use an appropriate icon for Data Entry
  },
  {
    title: "Inventory and Product Listing Management",
    description:
      "Keep your e-commerce operations seamless with organized inventory and product listing management.",
    icon: <InventoryIcon />, // Use an appropriate icon for Inventory
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our{" "}
            </span>
            Services
          </h2>

          <img
  src={services}
  className="w-[300px] md:w-[500px] lg:w-[600px] object-contain block lg:hidden"
  alt="Services Visual"
  loading="lazy"
/>


          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Providing comprehensive solutions to meet your business needs with quality and efficiency.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card
              key={title}
              className="group relative transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>
                <div>
                  <CardTitle className="group-hover:text-primary transition-all">
                    {title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-muted-foreground transition-all text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            ))}
          </div>
        </div>

         {/* Image Section */}
         <img
  src={services}
  className="w-[300px] md:w-[500px] lg:w-[600px] object-contain hidden md:block"
  alt="Services Visual"
  loading="lazy"
/>
      </div>
    </section>
  );
};
