import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteContact(id));

  return (
    <li className={css.item}>
      <div className={css.userData}>
        <p className={css.line}>
          <IoMdPerson />
          {name}
        </p>
        <p className={css.line}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
