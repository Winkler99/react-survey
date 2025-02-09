import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./form";

function Survey() {

  const [open, setOpen] = useState(false); //Ignore this state

 const initialFormData = {
        color: null,
        swimming: false,
        bathing: false,
        chatting: false,
        notime: false,
        review: "",
        username: "",
        email: ""
      };


    
      const [formData, setFormData] = useState(initialFormData);
      const [answersList, setAnswersList] = useState([]);
    
      const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        const inputType = event.target.type
        const inputState = event.target.checked
        
        if(inputName === "review"){
          setFormData({...formData, review: inputValue})
        }
        if(inputName === "username"){
          setFormData({...formData, username: inputValue})
        }
        if(inputName === "email"){
          setFormData({...formData, email: inputValue})
        }
        if(inputName === "color" && inputType ==="radio"){
          setFormData({...formData, color: inputValue})
        }
        if(inputName === "swimming" && inputType ==="checkbox"){

          setFormData({...formData, swimming: inputState})
        }
        if(inputName === "bathing" && inputType ==="checkbox"){

          setFormData({...formData, bathing: inputState})
        }
        if(inputName === "chatting" && inputType ==="checkbox"){

          setFormData({...formData, chatting: inputState})
        }
        if(inputName === "notime" && inputType ==="checkbox"){

          setFormData({...formData, notime: inputState})
        }
        
      }


      const handleSubmit = (event) => {
        event.preventDefault()
        setAnswersList([...answersList, {formData}])
        setFormData(initialFormData)
        console.log("Insite formData: " + formData)
      }

  return (

    
<>
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList = {answersList}/>}
      </section>
      <section className="survey__form">
        {<Form handleSubmit = {handleSubmit} handleChange = {handleChange} formData = {formData}/>}
        </section>
    </main>
    </>
  );
}

export default Survey;
