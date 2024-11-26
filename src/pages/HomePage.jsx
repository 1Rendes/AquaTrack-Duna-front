import { Link } from "react-router-dom";
import { useState } from "react";
import LogOutModal from "../components/LogOutModal/LogOutModal";


const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    console.log("Opening modal...");
    setModalOpen(true)
  };
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div>
      <p>HomePage</p>
      <Link to="/signin">Go to SignIn Page</Link>
                  <Link to="/signup">Go to SignUp Page</Link>
                
                  <button type="button" onClick={handleOpenModal}>+Log out</button>
                  <LogOutModal isOpen={isModalOpen} onClose={handleCloseModal}/>
                          
                  
    </div>
  );
};

export default HomePage;
