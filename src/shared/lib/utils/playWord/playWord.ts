import { TextToSpeech } from '@capacitor-community/text-to-speech';

export const playWord = (word: string, onend?: () => void | null) => {
  const speak = async (text: string) => {
    await TextToSpeech.speak({
      text: text,
      lang: 'he-IL',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
    });
  };

  speak(word).then(() => {
    onend?.();
  });
};
