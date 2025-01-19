import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services do you offer?",
    answer: "We specialize in providing web development, SEO optimization, branding, and digital marketing solutions tailored to meet your business needs.",
    value: "item-1",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "You can get started by contacting us through our Contact Us page. Our team will guide you through the process and discuss your requirements in detail.",
    value: "item-2",
  },
  {
    question:
      "How much do your services cost?",
    answer:
      "Our pricing varies depending on the scope of the project.",
    value: "item-3",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are fully responsive and optimized to look great and function perfectly on all devices.",
    value: "item-4",
  },
  {
    question:
      "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer post-project support and maintenance services to ensure everything runs smoothly.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact-us"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
