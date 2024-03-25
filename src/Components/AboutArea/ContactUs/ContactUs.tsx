import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import "./ContactUs.css";
import { CheckBox, ContactMail } from "@mui/icons-material";

export function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">
			<Typography>Contact Us</Typography>
            <ContactMail fontSize="large"/>
            <form>
            <TextField label="name" className="TextBox"/>
            <TextField label="email" className="TextBox"/>
            <TextField label="message" className="TextBox"/>
            <FormControlLabel label="Send me promotional emails" control={<Checkbox/>}/>
            <ButtonGroup fullWidth>
                <Button >Send &nbsp; </Button>
                <Button type="reset">Clear &nbsp; </Button>
            </ButtonGroup>
            </form>
        </div>
      
    );
}
