import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/userSlice";
import Navigation from "../../component/Navigation/index.navigation";

const User = () => {
  const dispatch = useDispatch();
  const { id, name, lastName, email } = useSelector((state) => state.user);

  const [newName, setNewName] = useState(name);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);

  const handleFirstNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const newEmailValue = e.target.value;
    setNewEmail(newEmailValue);
  };

  const handleSubmit = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    if (isValidEmail) {
      dispatch(
        setUser({
          id: id,
          name: newName,
          lastName: newLastName,
          email: newEmail,
        })
      );
      alert("Your informations have been updated.");
    } else {
      alert("Email is not valid, please try again.");
    }
  };

  return (
    <div>
      <Navigation />
      <h2>Hi {name}</h2>
      <h3>Customize your profile here</h3>
      <form>
        <div>
          <label htmlFor="newName">First Name:</label>
          <input
            type="text"
            id="newName"
            value={newName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={newLastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default User;
