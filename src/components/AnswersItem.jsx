
import PropTypes from "prop-types";
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  notime: "I don't like to spend time with it"
};


function ItemsList({ list }) {
  return (

    <>
      {list.filter(item => item.value).map((item, index) => (<li key ={index}> 
        {answersSet[item.name]}
      </li> ))}
    </>
    
  );
}



export default function AnswersItem(props) {


const username = props.answerItem.formData.username;
const color = props.answerItem.formData.color;
const swimming = props.answerItem.formData.swimming;
const bathing = props.answerItem.formData.bathing;
const chatting = props.answerItem.formData.chatting;
const notime = props.answerItem.formData.notime;
const review = props.answerItem.formData.review;

const list = [
  {name: 'swimming', value: swimming},
  {name: 'bathing', value: bathing},
  {name: 'chatting', value: chatting},
  {name: 'notime', value: notime}
];

  return (
    <li >
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={list} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object,
  answersSet: PropTypes.object,
  username: PropTypes.string,
  color: PropTypes.number,
  swimming: PropTypes.string,
  bathing: PropTypes.bool,
  chatting: PropTypes.bool,
  notime: PropTypes.bool,
  review: PropTypes.string

}

ItemsList.propTypes = {
  list: PropTypes.array
}
