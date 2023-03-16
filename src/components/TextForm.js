import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TextForm (props){
  const[myStyle,setMyStyle]= useState({fontWeight: 'normal',
  fontStyle: 'normal',height: "300px",backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'})
    const[text,SetText] = useState('Enter text here');
    const handleUpClick =()=>{
      console.log("uppercase clicked");
      let newText = text.toUpperCase();
      SetText(newText);
      props.showAlert("converted to uppercase","success");
    }
    const handleDownClick =()=>{
     
      let newText = text.toLowerCase();
      SetText(newText);
      props.showAlert("converted to lowercase","success");
    }
    const handleCapitalize =()=>{
     
      let newText = text.charAt(0).toUpperCase()+ text.slice(1);
      SetText(newText);
      props.showAlert("first letterr capitalize","success");
    }
    const handleItalic=()=>{
      console.log("italic clicked");
      setMyStyle({fontStyle: 'italic',fontWeight: 'normal',height: "300px",backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'})
  
    }
    const handleBold=()=>{
      console.log("bold clicked");
      setMyStyle({fontWeight: 'bold',fontStyle: 'normal',height: "300px",backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'})
    }
  
    const handleCapitalizeFirst =()=>{
      //split the above string into an array of strings 
//whenever a blank space is encountered

      const arr = text.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        props.showAlert("all first letterr capitalize","success");
    
    }
    //Join all the elements of the array back into a string 
//using a blankspace as a separator 
    const str2 = arr.join(" ");
    SetText(str2);
      
    }
    const handleClear =()=>{
     
      SetText("");
    }
    const handleOnChange =(event)=>{
      console.log("onchange clicked");
      SetText(event.target.value);
    }
    const handleCopyclip =()=>{
      var copyText = document.getElementById("myInput");
      copyText.select();
  
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  props.showAlert("Text copied","success");
  // alert("Copied the text: " + copyText.value);
    }
    return(
      <>
      <div className="container"  >
      <h1  style={{color: props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
      <FloatingLabel
        controlId="floatingTextarea"
        style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
        className="mb-3"
      >
        <Form.Control as="textarea" value={text} id="myInput"onChange={handleOnChange} placeholder=""style={myStyle} />
      </FloatingLabel>
    
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleUpClick} >ToUpperCase</Button>
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleDownClick} className="mx-3" >ToLowerCase</Button>
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleClear} className="mx-3" >Clear</Button>
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleCapitalize} className="mx-3" >CapitalizeFirstletter</Button>
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleCapitalizeFirst} className="mx-3" >Capitalize every first letter </Button>
      <Button disabled={text.length===0} variant="primary" size="lg" onClick={handleCopyclip} className="mx-3" >Copy to clipboard </Button>
      <div className="container">

          <button type="button" onClick={handleBold} className="btn btn-info mx-2 my-2">Bold</button>
      <button type="button" onClick={handleItalic} className="btn btn-info mx-2 my-2">Italic</button>
      </div>
      </div>
     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>details </h1>
      <p>number of  characters: {text.length}</p>
      <p>number of words number : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
     </div>
    </>
    )
  
}
