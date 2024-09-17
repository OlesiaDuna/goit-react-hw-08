import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.contactTextWrapper}>
          <FaUser size={34} />
          <p>{name}</p>
        </div>
        <div className={css.contactTextWrapper}>
          <BsFillTelephoneInboundFill size={34} />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
