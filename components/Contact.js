'use client'

import React from "react";
import Heading from "./Heading";

function Contact() {
  return (
    <section className="container h-screen mx-auto py-10 px-4">
      <Heading title="CONTACT" />
      <form className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Name"
            className="inputStyle"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="inputStyle"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="inputStyle"
          required
        />

        <textarea
          rows="8"
          placeholder="What can I help you?"
          className="inputStyle resize-none"
          required
        ></textarea>

        <div>
          <button
            type="submit"
            className="px-4 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-[5px] hover:text-white"
            onClick={()=>alert('Successfully sent!!!')}
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
