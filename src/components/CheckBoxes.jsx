import PropTypes from "prop-types";
function Checkboxes(props){
    const handleChange = props.handleChange;
    const formData = props.formData;
    


    return(
        <>
        <ul>
        <li>
            <label
            ><input
                name="swimming"
                type="checkbox"
                value={formData.swimming}
                onChange={handleChange}
                checked={formData.swimming}
            />Swimming</label>
        </li>
        <li>
            <label><input 
            name="bathing" 
            type="checkbox" 
            value={formData.bathing} 
            onChange={handleChange}
            checked={formData.bathing}
            />Bathing</label>
        </li>
        <li>
            <label
            ><input
                name="chatting"
                type="checkbox"
                value={formData.chatting}
                onChange={handleChange}
                checked={formData.chatting}
            />Chatting</label>
        </li>
        <li>
            <label
            ><input 
            name="notime" 
            type="checkbox" 
            value={formData.notime}
            onChange={handleChange}
            checked={formData.notime}
            />I dont like to spend time with it</label>
        </li>
        </ul>
        </>
    );
}

export default Checkboxes


Checkboxes.propTypes = {
  handleChange: PropTypes.func,
  formData: PropTypes.object
}