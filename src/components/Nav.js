import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import logo from "../img/logo.svg";
//Redux and Routes
import { loadsearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(loadsearched(textInput));
    setTextInput("");
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      {/* <Logo>
        <img src={logo} alt="logo" />
      </Logo> */}
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

// const Logo = styled(motion.div)`
//   display: flex;
//   justify-content: center;
//   img {
//     width: 2rem;
//     height: 2rem;
//   }
// `;

export default Nav;