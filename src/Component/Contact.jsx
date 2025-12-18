import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_2wl9tz9",       // ✔ SERVICE ID
//         "template_54erocs",     // ✔ TEMPLATE ID
//         form.current,
//         "R-Zuw43oDyo1PloTw"     // ✔ PUBLIC KEY
//       )
//       .then(
//         () => {
//           setMessageSent(true);
//           e.target.reset();
//         },
//         (error) => {
//           alert("Message failed! " + error.text);
//         }
//       );
//   };

const sendEmail = (e) => {
  e.preventDefault();

  // email to YOU
  emailjs.sendForm(
    "service_2wl9tz9",
    "template_1r20j7v",     
    form.current,
    "R-Zuw43oDyo1PloTw"
  );

  // auto reply to USER
  emailjs.sendForm(
    "service_2wl9tz9",
    "template_54erocs",   // <--- NEW TEMPLATE ID HERE
    form.current,
    "R-Zuw43oDyo1PloTw"
  )
  .then(() => {
      setMessageSent(true);
      e.target.reset();
  })
  .catch((error) => {
      alert("Message failed! " + error.text);
  });
};


  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400">Contact Me</h2>
        <p className="text-gray-400 mt-3 text-lg">Send me a message ✉</p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto mt-16 bg-gray-800 p-10 rounded-2xl border border-gray-700 grid md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-yellow-400 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-yellow-400 outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="md:col-span-2 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white h-32 resize-none focus:border-yellow-400 outline-none"
        ></textarea>

        <button
          type="submit"
          className="md:col-span-2 bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-500 duration-300"
        >
          Send Message
        </button>
      </form>

      {messageSent && (
        <p className="text-green-400 text-center text-lg mt-6">
          Your message was sent successfully! ✔
        </p>
      )}
    </section>
  );
};

export default Contact;
