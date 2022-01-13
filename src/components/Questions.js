import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Questions = () => {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  return <div>Questions</div>;
};

export default Questions;
