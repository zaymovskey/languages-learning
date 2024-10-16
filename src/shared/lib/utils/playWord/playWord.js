export const playWord = (word, onend) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'he-IL';
    speechSynthesis.speak(utterance);
    if (onend) {
        utterance.onend = onend;
    }
};
