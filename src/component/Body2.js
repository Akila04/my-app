import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import styles from '../styles/styles.css'


import "../styles/styles.css";


function Body2( {pinSellaHandler, saveNameHandler, saveFatherNameHandler, savePhoneNumberHandler, submitHandler, nameValue, fatherNameValue, phoneNumberValue} ) {
    const [message, setMessage] = useState(null);

    const handler = (event) => {
        setMessage(event.target.value);
    }

    return(
        <div className="body">
            <div className="body-content">
                <Typography 
                    style={{
                        fontSize:'24px',
                        fontWeight: '600',
                        color: '#ffb400',
                        padding: "20px"
                    }}
                >
                    தனிவிவரங்கள்
                </Typography>
                <TextField value={nameValue} onChange={saveNameHandler} id="outlined-basic" label="முழுப்பெயர்" variant="outlined" style={{width: "100%"}}/><br/><br/>
                <TextField value={fatherNameValue} onChange={saveFatherNameHandler} id="outlined-basic" label="தந்தை/தாயின் பெயர்" variant="outlined" style={{width: "100%"}}/><br/><br/>
                <TextField value={phoneNumberValue} onChange={savePhoneNumberHandler} id="outlined-basic" label="கைபேசி எண்" variant="outlined" style={{width: "100%"}}/><br/><br/>
                <Button onClick = {pinSellaHandler} variant="contained" color="primary" className="btnn">
                    பின்செல்ல
                </Button>
                <Button onClick={submitHandler} variant="contained" color="primary" className={styles.btn}>
                    சமர்ப்பிக்க
                </Button>
            </div>
        </div>
            
    );
}

export default Body2;