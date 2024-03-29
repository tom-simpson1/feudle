import { useQuery } from "@tanstack/react-query";
import WordnikApi from "../../wordnik-api";

type WordResponse = { id: number; word: string };

const useRandomWords = (number: number) => {
  const queryKey = `words.json/randomWords?limit=${number}&hasDictionaryDef=true&excludePartOfSpeech=given-name,family-name,abbreviation,affix,noun-plural,noun-posessive,proper-noun,proper-noun-plural,suffix,combining-form,article,definite-article,indefinite-article,conjunction,imperative,interjection,preposition&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`;
  return useQuery(
    [queryKey],
    async () => {
      const words: string[] = [];
      while (words.length < number) {
        const wordsLeft = number - words.length;
        const queryString = `words.json/randomWords?limit=${wordsLeft}&hasDictionaryDef=true&excludePartOfSpeech=given-name,family-name,abbreviation,affix,noun-plural,noun-posessive,proper-noun,proper-noun-plural,suffix,combining-form,article,definite-article,indefinite-article,conjunction,imperative,interjection,preposition&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`;
        // const res = await WordnikApi.get<WordResponse[]>(queryString);
        const res: { data: WordResponse[] } = {
          data: [
            { id: 1, word: "hello" },
            { id: 2, word: "there" },
            { id: 3, word: "silly" },
            { id: 4, word: "fella" },
            { id: 5, word: "bottle" },
            { id: 6, word: "bonk" },
          ],
        };
        res.data.forEach((datum) => {
          if (!/[^a-zA-Z]/.test(datum.word)) {
            words.push(datum.word.toUpperCase());
          }
        });
      }
      return words;
    },
    { staleTime: Infinity }
  );
};

export default useRandomWords;
