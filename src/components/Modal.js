import { useState } from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Modal = () => {
  const [index, setIndex] = useState(0);
  const { isLoading, data } = useGlobalContext();
  const { results } = data;
  console.log(results);

  const randomizeAnswers = array => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  if (isLoading) {
    return <Loading />;
  }

  const newAnswers = [...results[index].incorrect_answers, results[index].correct_answer];

  return (
    <div className="modal-section">
      <div className="question">
        <p className="q-count">{index + 1}/10</p>
        <p className="q-category">{results[index].category}</p>
        <h4 className="question" dangerouslySetInnerHTML={{ __html: results[index].question }}></h4>
        <div className="answers">
          {randomizeAnswers(newAnswers).map((answer, index) => {
            return <button key={index} dangerouslySetInnerHTML={{ __html: answer }}></button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
