import React, { useEffect, useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "./styles";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4waqfu8",
        "template_e5rcll5",
        form.current,
        "_vn3UnNYg0ETA3iIg"
      )
      .then(
        (result) => {
          console.log(result);
          alert("message envoyé avec succé");
          //SucessNotification()
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const SucessNotification = () => {
    toast.success("message envoyé avec succès!", {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="px-4 lg:px-12" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="text-headingColor text-center mb-20">
        <p className="text-xl font-semibold mb-5">Get in touch </p>
        <h2 className="text-4xl md:text-5xl font-bold">Contact me</h2>
        <p className="mt-5">
          N'hésitez pas à me contacter pour toute question, proposition de
          projet ou simple discussion.
        </p>
      </div>

      <div className="">
        <form
          ref={form}
          className="md:w-2/3 mx-auto mb-20 focus-visible:"
          onSubmit={sendEmail}
        >
          <div className={`${styles.inputContainer}`}>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="fName" className={`${styles.labelForm}`}>
                First name
              </label>
              <input
                required
                type="text"
                id="user_fname"
                name="user_fname"
                className={`${styles.inputForm} `}
              />
            </div>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="lName" className={`${styles.labelForm}`}>
                Last name
              </label>
              <input
                required
                type="text"
                id="user_lName"
                name="user_lname"
                className={`${styles.inputForm}`}
              />
            </div>
          </div>

          <div className={`${styles.inputContainer}`}>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="email" className={`${styles.labelForm}`}>
                e-mail
              </label>
              <input
                required
                type="text"
                id="user_email"
                name="user_email"
                className={`${styles.inputForm}`}
              />
            </div>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="phone" className={`${styles.labelForm}`}>
                phone number
              </label>
              <input
                type="number"
                id="phone"
                name="user_phone"
                className={`${styles.inputForm}`}
              />
            </div>
          </div>

          <div className="w-full mb-8"></div>
          <div className="w-full mb-8">
            <label htmlFor="message" className={`${styles.labelForm}`}>
              Message
            </label>
            <textarea
              required
              name="user_message"
              id="message"
              cols="30"
              rows="5"
              placeholder="ajouter un message"
              className={`${styles.inputForm}`}
            ></textarea>
          </div>
          <div className="">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="cursor-pointer"
            />
            <label
              htmlFor="agree"
              className={`${styles.labelForm} ml-3 items-center`}
            >
              I accept the terms
            </label>
          </div>

          <div className="w-36 mx-auto mt-8">
            <input
              type="submit"
              value="send"
              className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
