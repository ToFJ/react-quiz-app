import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Modal = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { isLoading, data } = useGlobalContext();
  const { results } = data;
  console.log(results);

  const randomizeAnswers = array => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const checkCorrect = name => {
    if (name === results[index].correct_answer) {
      setScore(score + 1);
      if (index <= 8) {
        setIndex(index + 1);
      }
    }
    if (index <= 8) {
      setIndex(index + 1);
    }
  };
  console.log(index);
  if (isLoading) {
    return <Loading />;
  }
  console.log(score);
  const newAnswers = [...results[index].incorrect_answers, results[index].correct_answer];

  return (
    <div className="modal-section">
      <div className="question">
        <p className="q-count">{index + 1}/10</p>
        <p className="q-category">{results[index].category}</p>
        <h4 className="question" dangerouslySetInnerHTML={{ __html: results[index].question }}></h4>
        <div className="answers">
          {randomizeAnswers(newAnswers).map((answer, index) => {
            return (
              <button
                onClick={() => checkCorrect(answer)}
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// {index > 9 && (
//   <div className="finish-screen">
//     <p>Congratulations! you got {score}/10 correct</p>
//     <button>Play Again</button>
//   </div>
// )}
