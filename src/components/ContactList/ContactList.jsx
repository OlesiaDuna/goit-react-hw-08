import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectfilteredContacts } from "../../redux/contactSlice.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
