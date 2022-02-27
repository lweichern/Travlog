import React, { useState, useEffect } from "react";
import { StyledEnquiry, Title, EnquiryCard } from "./Enquiry.styled";
import { FaEnvelope } from "react-icons/fa";
import { TextField, Button } from "@mui/material";

export default function Enquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const [pageLoad, setPageLoad] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isQuestionEmpty, setIsQuestionEmpty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isNameEmpty || isEmailEmpty || isQuestionEmpty) {
      alert("Please make sure all the fields are filled with valid values!");
    } else if (!isNameEmpty && !isEmailEmpty && !isQuestionEmpty && pageLoad) {
      alert("Response Submitted!");
    }
  }, [isNameEmpty, isEmailEmpty, isQuestionEmpty, isSubmitting]);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleQuestionInput = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    setPageLoad(true);
    setIsSubmitting(true);

    if (name === "") {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }

    if (email === "") {
      setIsEmailEmpty(true);
    } else {
      if (!email.includes("@")) {
        setIsEmailEmpty(true);
        alert("Please enter a valid email!");
      } else {
        setIsEmailEmpty(false);
      }
    }

    if (question === "") {
      setIsQuestionEmpty(true);
    } else {
      setIsQuestionEmpty(false);
    }
  };

  const titleVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
      },
    },
  };

  const enquiryVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <StyledEnquiry id="enquirySection">
      <Title variants={titleVariant} initial="hidden" whileInView="visible">
        Enquire
      </Title>

      <EnquiryCard
        variants={enquiryVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FaEnvelope style={{ fontSize: "2.3rem" }} />
        <h4>
          Email us your concern and <br /> we will get back to you!
        </h4>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="enquiry-input"
          onChange={handleNameInput}
          error={isNameEmpty}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="enquiry-input"
          onChange={handleEmailInput}
          error={isEmailEmpty}
          inputMode="email  "
        />
        <TextField
          id="standard-textarea"
          label="Question"
          multiline
          variant="outlined"
          className="enquiry-input"
          onChange={handleQuestionInput}
          error={isQuestionEmpty}
        />

        <Button
          variant="contained"
          style={{
            marginTop: "1rem",
            background: "#1e1536",
            color: "#ebffeb",
            padding: " 0.5rem 2rem",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </EnquiryCard>
    </StyledEnquiry>
  );
}
