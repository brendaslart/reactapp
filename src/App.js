import { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import {
  HelloComponent,
  HelloComponent3,
  HelloComponent2,
  HelloWithMyText,
} from "./components/common/HelloComponent";
import SaveButton from "./components/common/SaveButton";
import TextField from "./components/common/TextField";
import Image from "./components/Image";

/* art museum page*/
import Navbar from "./components/shared/NavBar";
import Title from "./components/shared/Title";
import Title2 from "./components/shared/Title2";
import Title3 from "./components/shared/Title3";
import BuyTicketsGroup from "./components/shared/BuyTicketsGroup";
import Title4 from "./components/shared/Title4";
import Information from "./components/shared/Information";

function App() {
  const [myText1, setMyText1] = useState("Holaaaaa1");

  return (
    <>
      <div className="app">
        <Navbar />
        <Title1 />
        <Title2 />
        <Title3 />
        <BuyTicketsGroup />
        <Title5 />
        <Title4 />
        <Information />
      </div>
    </>
  );
}

export default App;
