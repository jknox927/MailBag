// React imports.
import React from "react";

// Material-UI imports.
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const ContactView = ({ state }): JSX.Element => (

  <form>

    <TextField margin="dense" id="contactName" label="Name" value={state.contactName} variant="outlined"
      InputProps={{ style: { color: "#000000" } }} disabled={state.currentView === "contact"} style={{ width: 260 }}
      onChange={state.fieldChangeHandler} />
    <br />
    <TextField margin="dense" id="contactEmail" label="Email" value={state.contactEmail} variant="outlined"
      InputProps={{ style: { color: "#000000" } }} disabled={state.currentView === "contact"} style={{ width: 520 }}
      onChange={state.fieldChangeHandler} />
    <br />
    {state.currentView === "contactAdd" &&
      <Button variant="contained" color="primary" size="small" style={{ marginTop: 10 }}
        onClick={state.saveContact}>
        Save
      </Button>
    }
    {state.currentView === "contact" &&
      <Button variant="contained" color="primary" size="small" style={{ marginTop: 10 }}
        onClick={state.deleteContact}>
        Delete
      </Button>
    }
    {state.currentView === "contact" &&
      <Button variant="contained" color="primary" size="small" style={{ marginTop: 10 }}
        onClick={() => state.showComposeMessage("contact")}>Send Email</Button>
    }

  </form>
); /* ContactView */

export default ContactView;