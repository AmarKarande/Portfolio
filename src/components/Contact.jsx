import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaEnvelope, FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://getform.io/f/bmdmrmga", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setShowPopup(true); // ✅ Show popup
        formRef.current.reset(); // ✅ Clear form fields
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  return (
    <section className="py-12 px-4 sm:px-8 bg-grey-50 text-black" id="contact">
      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              🎉 Message Sent!
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you for contacting me. I'll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* ✅ Contact Info (same as before) */}
        <div>
          <h3
            className="text-2xl font-bold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Talk to <span className="text-indigo-600">me</span>
          </h3>

          <div className="space-y-6">
            <div
              className="flex items-start gap-4 p-5 border rounded-lg shadow hover:shadow-md transition duration-300"
              data-aos="fade-up"
            >
              <FaEnvelope className="text-red-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-500">karandeamar45@gmail.com</p>
                <a
                  href="mailto:karandeamar45@gmail.com"
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-5 border rounded-lg shadow hover:shadow-md transition duration-300"
              data-aos="fade-up"
            >
              <FaWhatsapp className="text-green-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-gray-500">+91 8669438298</p>
                <a
                  href="https://wa.me/918669438298?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-5 border rounded-lg shadow hover:shadow-md transition duration-300"
              data-aos="fade-up"
            >
              <FaTelegramPlane className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Telegram</h4>
                <p className="text-sm text-gray-500">@AmarKarande</p>
                <a
                  href="https://t.me/amarkarande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Form */}
        <div>
          <h3
            className="text-2xl font-bold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Write me your <span className="text-indigo-600">project</span>
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            data-aos="fade-up"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Describe your project"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition text-sm"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
