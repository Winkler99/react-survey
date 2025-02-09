import Checkboxes from "./checkBoxes";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

function Form(props) {
    const handleSubmit = props.handleSubmit;
    const handleChange = props.handleChange;
    const formData = props.formData;

      return (
        <>
    
        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            < RadioButtons handleChange = {handleChange} formData ={formData}/>
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes   handleChange = {handleChange} formData ={formData}/>
        </div>
        <label>What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            value = {formData.review}
            ></textarea></label>
        <label
            >Put your name here (if you feel like it):<input 
            type="text"
            name="username"
            onChange={handleChange}
            value = {formData.username}
            /></label>
        <label
            >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange} 
            value = {formData.email}
            /></label>
        <input onChange={handleChange} className="form__submit" type="submit" value="Submit Survey!" />
        </form>
        </>
        );
    }

    
export default Form;

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  formData: PropTypes.object
}
