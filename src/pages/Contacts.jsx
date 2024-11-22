import ContactForm from "../components/ContackForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetAllContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
