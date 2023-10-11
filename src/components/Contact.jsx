
import { styles } from "./styles";
const Contact = () => {
  return (
    <div className="px-4 lg:px-12" id="contact">
      <div className="text-headingColor text-center mb-20">
        <p className="text-xl font-semibold mb-5">Get in touch </p>
        <h2 className="text-4xl md:text-5xl font-bold">Contact me</h2>
        <p className="mt-5">
        N'hésitez pas à me contacter pour toute question, proposition de projet ou simple discussion. 
        </p>
      </div>

      <div className="">
        <form className="md:w-2/3 mx-auto mb-20">
          <div className={`${styles.inputContainer}`}>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="fName" className={`${styles.labelForm}`}>
                First name
              </label>
              <input
                type="text"
                id="fName"
                name="fName"
                className={`${styles.inputForm}`}
              />
            </div>
            <div className={`${styles.labelItems}`}>
              <label htmlFor="lName" className={`${styles.labelForm}`}>
                Last name
              </label>
              <input
                type="text"
                id="lName"
                name="lName"
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
                type="text"
                id="email"
                name="email"
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
                name="phone"
                className={`${styles.inputForm}`}
              />
            </div>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="options" className={`${styles.labelForm}`}>
              Choose a topic
            </label>
            <select
              name="options"
              id="options"
              className={`${styles.inputForm} px-2`}
            >
              <option value="0">select one..</option>
              <option value="1">web Design</option>
              <option value="2">UI/UX Design</option>
              <option value="3">Web Developpement</option>
              <option value="4">Graphic Design</option>
            </select>
          </div>
          <div className="w-full mb-8">
            <label htmlFor="message" className={`${styles.labelForm}`}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="ajouter un message"
              className={`${styles.inputForm}`}
            ></textarea>
          </div>
          <div className="">
            <input type="checkbox" name="agree" id="agree" className="cursor-pointer" />
            <label htmlFor="agree" className={`${styles.labelForm} ml-3 items-center`}>I accept the terms</label>
          </div>

          <div className="w-36 mx-auto mt-8">
            <input type="submit" value="submit" className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
