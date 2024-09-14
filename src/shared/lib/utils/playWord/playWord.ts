export const playWord = (word: string) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'he-IL';
  speechSynthesis.speak(utterance);
};
