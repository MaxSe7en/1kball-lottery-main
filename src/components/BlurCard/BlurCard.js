import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { Wrapper, Content, Heading } from "./styles";

const BlurCard = ({ heading, body }) => {
  const bodyContents = body;
//   console.log(bodyContents);
  let arr = [];

  if (typeof bodyContents !== undefined) {
    //do something
    arr = bodyContents.trim().split(",  ");

    return (
      <Wrapper>
        <Content>
          <h1>{heading}</h1>
          <pre>

          <ul>
            {body}
            {/* {arr.map((e, i) => (
              <li key={i}>{e}</li>
            ))} */}
          </ul>
          </pre>
        <ContactForm />
        </Content>
      </Wrapper>
    );
  } else {
    return <div>hshs</div>;
  }
};

export default BlurCard;
