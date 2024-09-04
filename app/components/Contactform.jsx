"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);

  // function handleSubmit(e) {
  //     e.preventDefault();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
      console.log(message);
      
      const res = await fetch("api/contact", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              
          },
          body: JSON.stringify({
              fullname,
              email,
              message
          }),
      });

      const { msg } = await res.json();
      setError(msg);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name : </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter Your Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            rows={5}
            cols={25}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div>
        <div>Error Message</div>
      </div>
    </div>
  );
}
