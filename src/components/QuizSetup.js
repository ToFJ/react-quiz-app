import { useGlobalContext } from "../context";

const QuizSetup = () => {
  const { options, handleChange, handleStart } = useGlobalContext();
  return (
    <div className=" setup-form">
      <div className=" setup-amount">
        <label htmlFor="amount">Number of questions: </label>
        <input
          type="number"
          min={1}
          max={50}
          name="amount"
          id="amount"
          placeholder="10"
          value={options.amount}
          onChange={handleChange}
        />
      </div>
      <div className=" setup-category">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" value={options.category} onChange={handleChange}>
          <option value="9">General Knowledge</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
        </select>
      </div>
      <div className=" setup-difficulty">
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty" value={options.difficulty} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button type="buttom" onClick={handleStart}>
        Play
      </button>
    </div>
  );
};

export default QuizSetup;
