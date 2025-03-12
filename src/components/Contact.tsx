import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  // ✅ Correct TypeScript Typing for Form Submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget; // Explicitly type as HTMLFormElement
    const formData = new FormData(form);
    formData.append("access_key", "ea1a634a-e6be-4475-bb80-e255bf45985c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        alert("Message sent successfully!");
        form.reset(); // ✅ Correctly resets the form
      } else {
        console.log("Error", res);
        alert("Message sending failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Hire Me...!
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+916281544893"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  +91 6281544893
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:sreedharpadigela222@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  sreedharpadigela222@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  Tirupati, Andhra Pradesh, India
                </span>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/SreeTechie03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sreedhar-padigala-572980267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
