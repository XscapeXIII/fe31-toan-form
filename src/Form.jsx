import { useState } from "react";
import "./App.css";

function Form() {
  const [userData, setUserData] = useState([
    {
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
  ]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  const [userError, setUserError] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeUserData = (e, key) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const handleRegister = () => {
    let isValid = true;
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const phoneNumberRegEx = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const passRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
    const errors = {
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    };

    if (!user.username) {
      errors.username = "Username is requirer !!!";
      isValid = false;
    } else {
      errors.username = "";
    }

    if (!user.email) {
      errors.email = "Email is requirer !!!";
      isValid = false;
    } else if (!emailRegEx.test(user.email)) {
      errors.email = "Email not true !!!";
      isValid = false;
    } else {
      errors.email = "";
    }

    if (!user.phonenumber) {
      errors.phonenumber = "Phonenumber is requirer !!!";
      isValid = false;
    } else if (!phoneNumberRegEx.test(user.phonenumber)) {
      errors.phonenumber = "Phonenumber not true !!!";
      isValid = false;
    } else {
      errors.phonenumber = "";
    }

    if (!user.password) {
      errors.password = "Password is requirer !!!";
      isValid = false;
    } else if (!passRegEx.test(user.password)) {
      errors.password = "password not true !!!";
      isValid = false;
    } else {
      errors.password = "";
    }

    if (user.confirmPassword !== user.password) {
      errors.confirmPassword = " Password not match !";
      isValid = false;
    } else {
      errors.confirmPassword = "";
    }

    if (isValid) {
      setUserData([
        ...userData,
        {
          username: user.username,
          email: user.email,
          phonenumber: user.phonenumber,
          password: user.password,
          confirmPassword: user.confirmPassword,
        },
      ]);
      setUser({
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
      });
    }
    setUserError(errors);
  };

  const renderUserDataList = () => {
    return userData.map((item, index) => {
      return (
        <div key={index} className="user-data">
          <h2>Username: {item.username}</h2>
          <h3>Email: {item.email}</h3>
          <h3>PhoneNumber: {item.phonenumber}</h3>
          <h3>Password: {item.password}</h3>
        </div>
      );
    });
  };

  return (
    <div className="login-container">
      <form>
        <h2 className="login-title">REGISTER</h2>
        <label for="username">Username:</label>
        <input
          type="text"
          onChange={(e) => handleChangeUserData(e, "username")}
          value={user.username}
        />
        <span>{userError.username}</span>
        <span className="text-danger"></span>

        <label for="email">Email:</label>
        <input
          type="text"
          onChange={(e) => handleChangeUserData(e, "email")}
          value={user.email}
        />
        <span>{userError.email}</span>
        <span className="text-danger"></span>

        <label for="phoneNumber">Phone Number</label>
        <input
          type="number"
          onChange={(e) => handleChangeUserData(e, "phonenumber")}
          value={user.phonenumber}
        />
        <span>{userError.phonenumber}</span>
        <span className="text-danger"></span>

        <label for="password">Password:</label>
        <input
          type="password"
          onChange={(e) => handleChangeUserData(e, "password")}
          value={user.password}
        />
        <span>{userError.password}</span>
        <span className="text-danger"></span>

        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          onChange={(e) => handleChangeUserData(e, "confirmPassword")}
          value={user.confirmPassword}
        />
        <span>{userError.confirmPassword}</span>
        <span className="text-danger"></span>

        <input type="checkbox" className="login-remember" id="agree" />
        <label for="agree">Đồng ý điều khoản</label>
        <p type="checkbox" className="login-term">
          Bạn đã có tài khoản <a href="login-toan.html">Đăng nhập</a>
        </p>
        <button onClick={() => handleRegister()} type="button">
          REGISTER
        </button>
      </form>
      <div>{renderUserDataList()}</div>
    </div>
  );
}

export default Form;
