import { useQuery } from "@tanstack/react-query";
import WordnikApi from "../../wordnik-api";

type WordResponse = { id: number; word: string };

const useRandomWords = (number: number) => {
  const queryKey = `words.json/randomWords?limit=${number}&hasDictionaryDef=true&excludePartOfSpeech=given-name,family-name,abbreviation,affix,noun-plural,noun-posessive,proper-noun,proper-noun-plural,suffix,combining-form,article,definite-article,indefinite-article,conjunction,imperative,interjection,preposition&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`;
  return useQuery([queryKey], async () => {
    const words: string[] = [];
    while (words.length < number) {
      const wordsLeft = number - words.length;
      const queryString = `words.json/randomWords?limit=${wordsLeft}&hasDictionaryDef=true&excludePartOfSpeech=given-name,family-name,abbreviation,affix,noun-plural,noun-posessive,proper-noun,proper-noun-plural,suffix,combining-form,article,definite-article,indefinite-article,conjunction,imperative,interjection,preposition&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`;
      const res = await WordnikApi.get<WordResponse[]>(queryString);
      // const res: { data: WordResponse[] } = {
      //   data: [
      //     { id: 1, word: "nonce" },
      //     { id: 2, word: "prick" },
      //     { id: 3, word: "fanny" },
      //     { id: 4, word: "titty" },
      //   ],
      // };
      res.data.forEach((datum) => {
        if (!/[^a-zA-Z]/.test(datum.word)) {
          console.log("true", datum.word);
          words.push(datum.word);
        } else {
          console.log("false", datum.word);
        }
      });
    }
    return words;
  });
};

export default useRandomWords;
