import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleList.map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
export default ContactList;
