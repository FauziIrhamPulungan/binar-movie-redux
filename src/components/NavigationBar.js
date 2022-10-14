import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = useState("");
  const { name } = useParams();
  const [show, setShow] = useState(false);
  const [showRegist, setShowRegist] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegist = () => setShowRegist(false);
  const handleShowRegist = () => setShowRegist(true);

  const [password, setpassword] = useState("password");
  const [passwordRegist, setpasswordregist] = useState("password");
  const [passwordConfirmation, setpasswordConfirmation] = useState("password");
  const [type, settype] = useState(false);

  const [eye, seteye] = useState(true);
  const [eyeRegist, seteyeRegist] = useState(true);
  const [EyeregistConfirmation, setEyeregistConfirmation] = useState(true);

  const [emailInput, setemailInput] = useState();
  const [passwordInput, setpasswordlInput] = useState();

  const [FirstnameInput, setFirstnameInput] = useState();
  const [LastnameInput, setLastnameInput] = useState();
  const [EmailregistInput, setEmailRegistInput] = useState();
  const [PasswordregistdInput, setPasswordregistlInput] = useState();
  const [PasswordconfirmationInput, setPasswordconfirmationlInput] = useState();

  const [Inputlogin, setInputlogin] = useState(false);

  const handleShowclose = () => setShow(false);
  const handleRegistclose = () => setShowRegist(false);

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };

  const EyeRegist = () => {
    if (passwordRegist === "password") {
      setpasswordregist("text");
      seteyeRegist(false);
      settype(true);
    } else {
      setpasswordregist("password");
      seteyeRegist(true);
      settype(false);
    }
  };

  const eyeRegistConfirmation = () => {
    if (passwordConfirmation === "password") {
      setpasswordConfirmation("text");
      setEyeregistConfirmation(false);
      settype(true);
    } else {
      setpasswordConfirmation("password");
      setEyeregistConfirmation(true);
      settype(false);
    }
  };

  const login = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: emailInput,
      password: passwordInput,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://notflixtv.herokuapp.com/api/v1/users/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          handleShowclose();
          setInputlogin(true);
        }
        setemailInput("");
        setpasswordlInput("");
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((error) => console.log("error", error));
  };

  const Regist = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: FirstnameInput,
      last_name: LastnameInput,
      email: EmailregistInput,
      password: PasswordregistdInput,
      password_confirmation: PasswordconfirmationInput,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://notflixtv.herokuapp.com/api/v1/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          handleRegistclose();
          setInputlogin(true);
        }
        setFirstnameInput("");
        setLastnameInput("");
        setEmailRegistInput("");
        setPasswordregistlInput("");
        setPasswordconfirmationlInput("");

        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (name) setsearchInput(name);
  }, [name]);

  // function validate Login
  const validateEmail = () => {
    if (emailInput === undefined) return true;
    return String(emailInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = () => {
    if (passwordInput === undefined) return true;
    return String(passwordInput);
  };

  // function validate register
  const validateFirstname = () => {
    if (FirstnameInput === undefined) return true;
    return String(FirstnameInput);
  };

  const validateLastname = () => {
    if (LastnameInput === undefined) return true;
    return String(LastnameInput);
  };

  const validateEmailregist = () => {
    if (EmailregistInput === undefined) return true;
    return String(EmailregistInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePasswordregist = () => {
    if (PasswordregistdInput === undefined) return true;
    return String(PasswordregistdInput);
  };

  const validatePassworconfirmation = () => {
    if (PasswordconfirmationInput === undefined) return true;
    return String(PasswordconfirmationInput);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "20",
      }}
    >
      <Navbar>
        <div
          className="d-flex justify-content-between"
          style={{ width: "95%", height: "40px", marginLeft: "30px" }}
        >
          <Navbar.Brand href="/" style={{ width: "200px", marginTop: "10px" }}>
            <img
              alt=""
              src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
            />
          </Navbar.Brand>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/search/" + searchInput);
            }}
          >
            <input
              value={searchInput}
              onChange={(event) => {
                setsearchInput(event.target.value);
                console.log(event.target.value);
              }}
              className="search hover-overlay"
              placeholder="what do you want to watch?"
              style={{
                color: "white",
                border: "1px solid white",
                outline: "none",
                borderRadius: "100px",
                width: "400px",
                height: "40px",
                marginTop: "10px",
                padding: "20px",
                background: "transparent",
              }}
            />
            <img
              src="/icons/magnifying-glass-solid.svg"
              style={{
                position: "relative",
                right: "40px",
                width: "15px",
              }}
              alt="icon"
            />
          </form>

          <Nav style={{ gap: "1rem", width: "200px", marginTop: "10px" }}>
            {Inputlogin === true ? (
              ""
            ) : (
              <Button
                variant="outline-danger"
                onClick={handleShow}
                className="bg-transparent"
                style={{
                  borderColor: "red",
                  color: "red",
                  borderRadius: "50px",
                  width: "100px",
                  height: "40px",
                }}
              >
                Login
              </Button>
            )}

            <Modal show={show} onHide={handleClose} size="md">
              <Modal.Header closeButton>
                <Modal.Title>Login To Your Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="icon icon-mail relative">
                    <i
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "30px",
                      }}
                    >
                      <AiOutlineMail />
                    </i>

                    <Form.Control
                      value={emailInput}
                      onChange={(event) => {
                        setemailInput(event.target.value);
                      }}
                      style={{ borderRadius: "50px" }}
                      type="email"
                      placeholder="Email Address"
                      className="hover:border-rose-700 focus:bg-rose-700"
                    />
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validateEmail() && (
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        Please input your email!
                      </p>
                    )}
                  </div>
                </Form.Group>

                {/* Password */}

                <Form.Group className="mb-3">
                  <Form.Control
                    value={passwordInput}
                    onChange={(event) => {
                      setpasswordlInput(event.target.value);
                    }}
                    style={{ borderRadius: "50px" }}
                    type={password}
                    placeholder="Password"
                    className={`  ${
                      type ? "type_password" : ""
                    } hover:border-rose-700`}
                  />

                  <div className="icon icon-eye-login relative">
                    <i
                      onClick={Eye}
                      style={{
                        position: "absolute",
                        top: "87px",
                        right: "30px",
                      }}
                    >
                      {eye === true ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </i>
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validatePassword() && (
                      <p style={{ color: "red" }}>
                        Please input your password!
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer
                className="d-flex justify-content-start"
                style={{ border: "transparent", marginTop: "-30px" }}
              >
                <Button
                  onClick={login}
                  variant="danger"
                  style={{
                    borderRadius: "20px",
                    width: "70px",
                    height: "40px",
                  }}
                >
                  Login
                </Button>
              </Modal.Footer>
            </Modal>

            {Inputlogin === true ? (
              ""
            ) : (
              <Button
                variant="outline-danger"
                onClick={handleShowRegist}
                className=" bg-danger"
                style={{
                  color: "white",
                  border: "10px",
                  borderRadius: "30px",
                  width: "100px",
                  height: "40px",
                }}
              >
                Register
              </Button>
            )}

            <Modal show={showRegist} onHide={handleCloseRegist} size="md">
              <Modal.Header closeButton>
                <Modal.Title>Create Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group
                  className="mb-3"
                  // controlId="exampleForm.ControlInput1"
                >
                  <div className="icon icon-user relative">
                    <i
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "30px",
                      }}
                    >
                      <AiOutlineUser />
                    </i>

                    <Form.Control
                      value={FirstnameInput}
                      onChange={(event) => {
                        setFirstnameInput(event.target.value);
                      }}
                      type="text"
                      placeholder="First Name"
                      className="hover:border-rose-700 focus:bg-rose-700"
                    />
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validateFirstname() && (
                      <p style={{ color: "red" }}>
                        Please input your first name
                      </p>
                    )}
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  // controlId="exampleForm.ControlInput1"
                >
                  <div className="icon icon-user relative">
                    <i
                      style={{
                        position: "absolute",
                        top: "86px",
                        right: "30px",
                      }}
                    >
                      <AiOutlineUser />
                    </i>

                    <Form.Control
                      value={LastnameInput}
                      onChange={(event) => {
                        setLastnameInput(event.target.value);
                      }}
                      type="text"
                      placeholder="Last Name"
                      className="hover:border-rose-700 focus:bg-rose-700"
                    />
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validateLastname() && (
                      <p style={{ color: "red" }}>
                        Please input your last name!
                      </p>
                    )}
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="icon icon-mail relative">
                    <i
                      style={{
                        position: "absolute",
                        top: "155px",
                        right: "30px",
                      }}
                    >
                      <AiOutlineMail />
                    </i>

                    <Form.Control
                      value={EmailregistInput}
                      onChange={(event) => {
                        setEmailRegistInput(event.target.value);
                      }}
                      style={{ borderRadius: "10px" }}
                      type="email"
                      placeholder="Email Address"
                      className="hover:border-rose-700 focus:bg-rose-700"
                    />
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validateEmailregist() && (
                      <p style={{ color: "red" }}>Please input your email!</p>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    value={PasswordregistdInput}
                    onChange={(event) => {
                      setPasswordregistlInput(event.target.value);
                    }}
                    style={{ borderRadius: "10px" }}
                    type={passwordRegist}
                    placeholder="Password"
                    className={`  ${
                      type ? "type_password" : ""
                    } hover:border-rose-700`}
                  />

                  <div className="icon icon-eye-login realtive">
                    <i
                      onClick={EyeRegist}
                      style={{
                        position: "absolute",
                        top: "225px",
                        right: "30px",
                      }}
                    >
                      {eyeRegist === true ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </i>
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validatePasswordregist() && (
                      <p style={{ color: "red" }}>
                        Please input your password!
                      </p>
                    )}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    value={PasswordconfirmationInput}
                    onChange={(event) => {
                      setPasswordconfirmationlInput(event.target.value);
                    }}
                    style={{ borderRadius: "10px" }}
                    type={passwordConfirmation}
                    placeholder="Password Confirmation"
                    className={`  ${
                      type ? "type_password" : ""
                    } hover:border-rose-700`}
                  />

                  <div className="icon icon-eye-login realtive">
                    <i
                      onClick={eyeRegistConfirmation}
                      style={{
                        position: "absolute",
                        top: "289px",
                        right: "30px",
                      }}
                    >
                      {EyeregistConfirmation === true ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </i>
                  </div>
                  <div style={{ height: "13px" }}>
                    {!validatePassworconfirmation() && (
                      <p style={{ color: "red" }}>
                        Please input your password!
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer
                className="d-flex justify-content-start"
                style={{ border: "transparent", marginTop: "-30px" }}
              >
                <Button
                  onClick={Regist}
                  variant="danger"
                  style={{
                    borderRadius: "30px",
                    width: "150px",
                    height: "45px",
                  }}
                >
                  Register Now
                </Button>
              </Modal.Footer>
            </Modal>
            {Inputlogin === false ? (
              ""
            ) : (
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "50px",
                  height: "50px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    marginLeft: "80px",
                    marginTop: "10px",
                  }}
                >
                  name
                </p>
              </div>
            )}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

// diklik mata terbuka => jadi mata tertutup
// diklik mata terbuka => jadi mata tertutup

// bikin state boolean
// onclick kebalikan initial state

// implementasikan ke ikon mata
// ketika state lagi true => pake mata yang terbuka
// ketika state lagi false => pake mata yang tertutup
