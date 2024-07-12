import s from "./Contact.module.css";

import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userWrapper}>
        <p className={s.text}>
          <span className={s.span}>
            <FaUserAlt color="rgb(51, 51, 105)" />
          </span>
          {name}
        </p>
        <p className={s.text}>
          <span className={s.span}>
            <FaPhone color="rgb(51, 51, 105)" />
          </span>
          {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
