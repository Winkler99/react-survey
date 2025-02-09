import PropTypes from "prop-types";
function RadioButtons(props){
  const handleChange = props.handleChange;
  const formData = props.formData;
  return(
    <>
  <ul>
  <li>
    <input onChange={handleChange} id="color-one" type="radio" name="color" value="1" checked = {formData.color === "1"}/><label
      htmlFor="color-one">1</label>
  </li>
  <li>
    <input onChange={handleChange} id="color-two" type="radio" name="color" value="2" checked = {formData.color === "2"}/><label
      htmlFor="color-two">2</label>
  </li>
  <li>
    <input onChange={handleChange} id="color-three" type="radio" name="color" value="3" checked = {formData.color === "3"}/><label
      htmlFor="color-three"
      >3</label>
  </li>
  <li>
    <input onChange={handleChange}  id="color-four" type="radio" name="color" value="4" checked = {formData.color === "4"}/><label
      htmlFor="color-four"
      >4</label>
  </li>
</ul>
</>
  );

}
export default RadioButtons

RadioButtons.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  formData: PropTypes.object
}