import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


import "../styles/styles.css";




function Body( {aduthaPakkamHandler, saveMsgHandler, msgValue} ){
    const [message, setMessage] = useState(null);

    const handler = (event) => {
        setMessage(event.target.value);
    }

    return(
        <div className="body">
            <div className="body-content">
                <Typography className="body-head">
                    உங்கள் குறைகளை இங்கே பதிவிடுங்கள்!
                </Typography>

                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    onChange = {saveMsgHandler}
                    value={msgValue}
                />
                <br></br><br></br><br></br>
                <Button onClick={aduthaPakkamHandler} variant="contained" color="primary"  className="btnn">
                    அடுத்த பக்கம்
                </Button>
            </div>
        </div>
            
    );
}

export default Body;