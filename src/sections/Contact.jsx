import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import ShootingStars from "../components/ShootingStars";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: import.meta.env.VITE_CONTACT_NAME,
          from_email: formData.email,
          to_email: import.meta.env.VITE_CONTACT_EMAIL,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      {/* Layered deep-space background: particles + shooting stars */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <ShootingStars
        className="absolute inset-0 -z-40"
        quantity={5}
        minSpeed={10}
        maxSpeed={20}
        minDelay={600}
        maxDelay={2800}
        starLength={100}
        starWidth={2}
        colors={["#ffffff", "#7a57db", "#33c2cc", "#d4c4fb", "#ea4884"]}
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Enhanced glassmorphic contact card */}
      <div className="contact-card flex flex-col items-center justify-center w-full max-w-md p-5 sm:p-7 mx-auto rounded-2xl">
        <div className="flex flex-col items-start w-full gap-3 sm:gap-4 mb-6">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Whether you're looking to build AI-driven applications, scalable software solutions, or discuss potential opportunities, feel free to reach out.
          </p>

          {/* Quick Contact Links */}
          <div className="flex flex-col gap-2 w-full pt-1">
            <a
              href="mailto:shubhrajyotimohanty2002@gmail.com"
              className="flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-neutral-200 hover:bg-white/10 hover:border-lavender/40 transition-colors min-w-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-lavender shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="truncate">shubhrajyotimohanty2002@gmail.com</span>
            </a>

            <a
              href="https://x.com/SJ_Mohanty02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-neutral-200 hover:bg-white/10 hover:border-lavender/40 transition-colors min-w-0"
            >
              <img src="/assets/socials/x.png" className="size-4 shrink-0" alt="X logo" />
              <span className="truncate">x.com/SJ_Mohanty02</span>
            </a>
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 sm:mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts or project details..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="contact-submit-btn w-full py-3.5 text-base sm:text-lg font-medium text-center rounded-lg cursor-pointer active:scale-98 transition-transform"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
