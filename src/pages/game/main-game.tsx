import useRandomWords from "../../utils/hooks/wordnik/use-random-words";
import Keyboard from "./components/keyboard/keyboard";

const MainGame = () => {
  const numberOfWords = 4;
  const { data, isLoading } = useRandomWords(numberOfWords);

  return (
    <>
      {data ? data.map((word) => <div>{word}</div>) : null}
      <Keyboard />
    </>
  );
};

export default MainGame;
