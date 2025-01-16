import { Button } from "./ui/button";

export const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gradient-to-r from-primary/20 via-muted to-primary/10 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 gap-12 lg:gap-16 place-items-center">
        {/* Contact Details Section */}
        <div className="lg:col-start-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            Get In Touch
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              We'd Love to Hear from You
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mt-4 mb-8 text-center sm:text-left">
            Have a question or need assistance? Feel free to reach out to us through the form below or contact us via the details provided.
          </p>

          <div className="text-muted-foreground space-y-4">
            <p className="text-lg text-center sm:text-left">Email: <span className="text-primary">support@abumatics.com</span></p>
            <p className="text-lg text-center sm:text-left">Phone: <span className="text-primary">+91 86608 22267</span></p>
            <p className="text-lg text-center sm:text-left">Address: Abumatics, Moulana Azad Road, Bhatkal 581320</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-6 lg:col-start-2">
          <h3 className="text-2xl font-semibold text-center sm:text-left mb-4">Send Us a Message</h3>
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-muted/50">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                required
                placeholder="Write your message here"
              ></textarea>
            </div>

            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
