const Modal = () => {
  return (
    <div className="section">
      <div className="question">
        <p>0/10 questions</p>
        <h4>Question</h4>
      </div>
      <div className="answers">
        <input id="a1" type="radio" />
        <label htmlFor="a1">answer 1</label>
        <input id="a2" type="radio" />
        <label htmlFor="a1">answer 2</label>
        <input id="a3" type="radio" />
        <label htmlFor="a1">answer 3</label>
        <input id="a4" type="radio" />
        <label htmlFor="a1">answer 4</label>
      </div>
    </div>
  );
};

export default Modal;
