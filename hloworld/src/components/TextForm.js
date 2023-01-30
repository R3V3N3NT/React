import React,{useState} from 'react'

export default function TextForm(props) {

    //Using hooks
    const [text, setText] = useState("You Can Type Here");


    //creat function to convert
    const handleUpClick=()=>{
       // console.log("Upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    //handle on change
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }


    //handle word count

    const handleWordCount=()=>{
      let wordcount =text.split(" ").length;
      return (wordcount)
    }


    const handleCharCount=()=>{
      let charCount =text.length
      return (charCount)
    }

    const handleLowClick=()=>{
      let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")


    }
    const handleClearClick=()=>{
      let newText=" ";
        setText(newText)
        props.showAlert("Text cleared","success")

    }




    //word count onchange

    
    

    
  return (
    
    <section style={{color:props.mode==='dark'?'white':'black'}}> 
        

    <div><h1>{props.heading}</h1></div>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolor:props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>

</div>
<button className="btn btn-success mx-2" onClick={handleUpClick}>
    Convert to UpperCase
</button>

<button className="btn btn-success mx-3" onClick={handleLowClick}>
    Convert to LowerCase
</button>

<button className="btn btn-success mx-3" onClick={handleClearClick}>
    Clear Text
</button>


<br />

<h3 className='my-3'>Number of words : {handleWordCount()}</h3>
<h3 className='my-3'>Number of Characters : {handleCharCount()}</h3>

</section>
  )
}
