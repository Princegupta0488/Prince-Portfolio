import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="Contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold">
            Start a <span className="text-teal-400">Conversation</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Let’s build something amazing together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">

          <form className="space-y-6 bg-gray-900 p-8 md:p-10 rounded-2xl border border-gray-800">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input className="bg-black border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:border-teal-500"
                placeholder="Your Name" />

              <input className="bg-black border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:border-teal-500"
                placeholder="Your Email" />

            </div>

            <input className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-teal-500"
              placeholder="Subject" />

            <textarea rows="6"
              className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:border-teal-500"
              placeholder="Message"
            ></textarea>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-8 py-3 bg-teal-500 text-black font-semibold rounded-full hover:bg-teal-400 transition">
                Send Message
                <FaArrowRight />
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;