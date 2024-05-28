import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/userSlice";
import Navigation from "../../component/Navigation/index.navigation";
import { selectUser } from "../../store/selector";

const User = () => {
  const dispatch = useDispatch();
  const { id, name, lastName, email } = useSelector(selectUser);

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
    <>
      <Navigation />
      <div className="user-container">
        <h2>Hi {name}</h2>
        <h3>Customize your profile here</h3>
        <form>
          <div className="user-input-container">
            <label htmlFor="newName">First Name:</label>
            <input
              type="text"
              id="newName"
              value={newName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="user-input-container">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={newLastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="user-input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={newEmail}
              onChange={handleEmailChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default User;
