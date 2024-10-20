export const playWord = (
  word: string,
  onend?:
    | ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => void)
    | null
) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'he-IL';
  speechSynthesis.speak(utterance);
  if (onend) {
    utterance.onend = onend;
  }
};
