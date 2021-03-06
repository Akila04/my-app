import logo from './logo.svg';
import './App.css';
import Heading from './component/Heading';
import Body from './component/Body';
import Body2 from './component/Body2';
import {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';


function App() {
  const [body, setBody] = useState(1);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const [fatherName, setFatherName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const saveMessage = (event) => {
    setMessage(event.target.value);
  }

  const saveName = (event) => {
    setName(event.target.value);
  }
  const saveFatherName = (event) => {
    setFatherName(event.target.value);
  }
  const savePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }


  const pinSellaClickHandler = () => {
      setBody(1);
  }

  const aduthaPakkamClickHandler = () => {
    setBody(2);
  }

  const nullAll = () => {
    setMessage("");
    setName("");
    setFatherName("");
    setPhoneNumber("");
  }


  const submitHandler = () => {
    const url = "https://54.211.3.179:3000?name="+name+"&father="+fatherName+"&phone="+phoneNumber+"&message="+message
    //axios.get({url, data:{message: message}, header: {type:"application/json"}}).then((response) => {
    axios.get(url).then((response) => {
      swal("தங்கள் கருத்துகள் வெற்றிகரமாக பதிவு செய்யப்பட்டுவிட்டது!!!");
      setBody(1);
      //தங்கள் கருத்துகள் வெற்றிகரமாக பதிவு செய்யப்பட்டுவிட்டது!
    }).catch((error) => {
      if(error.response)
        swal(JSON.stringify(error.response));
      else if(error.request)
        swal(JSON.stringify(error.request));
      else
        swal(JSON.stringify(error.message));
      setBody(1);
    })

    nullAll();
  }

  return (
    <div className="App">
        <Heading/>
        {body === 1 && <Body aduthaPakkamHandler = {aduthaPakkamClickHandler} saveMsgHandler = {saveMessage} msgValue = {message}/>}
        {body === 2 && <Body2 pinSellaHandler = {pinSellaClickHandler} saveNameHandler={saveName} saveFatherNameHandler={saveFatherName} savePhoneNumberHandler={savePhoneNumber} submitHandler={submitHandler} nameValue = {name} fatherNameValue={fatherName} phoneNumberValue={phoneNumber}/>}
    </div>
  );
}

export default App;
