import React from "react";
import { StyledNewsletter, Title, NewsletterCard } from "./Newsletter.styled";
import { FaNewspaper } from "react-icons/fa";
import { TextField } from "@mui/material";

export default function Newsletter() {
  return (
    <div>
      <Title>Newsletter</Title>

      <NewsletterCard>
        <FaNewspaper style={{ fontSize: "2rem" }} />
        <h4 style={{ margin: 0 }}>
          Subscribe to our Newsletter now to get the latest update!
        </h4>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
      </NewsletterCard>
    </div>
  );
}
