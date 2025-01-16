import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "100+",
      description: "Happy Clients",
    },
    {
      quantity: "50+",
      description: "Successful Projects",
    },
    {
      quantity: "5+",
      description: "Countries Served",
    },
    {
      quantity: "10+",
      description: "Years of Experience",
    },
  ];

  // Create an intersection observer for the statistics section
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger the animation only once
    threshold: 0.5,     // Trigger when 50% of the section is in view
  });

  return (
    <section id="statistics" className="py-12" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            {/* CountUp animation for quantity */}
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {inView && (
                <CountUp
                  start={0}
                  end={parseInt(quantity.replace('+', ''))} // Extract number from the string
                  duration={2} // Duration of animation in seconds
                  suffix={quantity.includes('+') ? '+' : ''} // Add '+' symbol if necessary
                  separator="," // Add thousands separator
                />
              )}
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

