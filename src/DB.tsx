import sound from '@/shared/assets/audio/жить.m4a';
import {
  AnswerIcon,
  ArrowDownIcon,
  BookIcon,
  CityIcon,
  HealthIcon,
  KnowledgeIcon,
  QuestionIcon,
  StudentIcon,
  Talk2Icon,
  TalkIcon,
  UnderstandIcon,
  WorkIcon,
  WorkoutRunIcon,
  WriteIcon,
} from '@/shared/assets/icons.tsx';
import { ComponentType, SVGProps } from 'react';

export interface ITopic {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  slug: string;
  words: IWord[];
}

export interface IWord {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  russian: string;
  transcription: string;
  hebrew: { withAnnouncement: string; withoutAnnouncement: string };
  sound?: HTMLAudioElement;
}

export const TOPICS: ITopic[] = [
  {
    title: 'Основные глаголы',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli',
    words: [
      {
        Icon: CityIcon,
        hebrew: { withAnnouncement: 'גָר', withoutAnnouncement: 'גר' },
        russian: 'жить',
        transcription: 'гар',
        sound: new Audio(sound),
      },
      {
        Icon: StudentIcon,
        hebrew: { withAnnouncement: 'לִימֵד', withoutAnnouncement: 'לומד' },
        russian: 'учить',
        transcription: 'лёмед',
      },
      {
        Icon: WorkIcon,
        hebrew: { withAnnouncement: 'עָבַד', withoutAnnouncement: 'עובד' },
        russian: 'работать',
        transcription: 'овед',
      },
      {
        Icon: TalkIcon,
        hebrew: { withAnnouncement: 'מְדַבֵּר', withoutAnnouncement: 'מדבר' },
        russian: 'говорить',
        transcription: 'медобер',
      },
      {
        Icon: UnderstandIcon,
        hebrew: { withAnnouncement: 'מֵבִין', withoutAnnouncement: 'מבין' },

        russian: 'понимать',
        transcription: 'мевим',
      },
      {
        Icon: KnowledgeIcon,
        hebrew: { withAnnouncement: 'יוָדַע', withoutAnnouncement: 'יודע' },
        russian: 'знать',
        transcription: 'йодеа',
      },
      {
        Icon: WriteIcon,
        hebrew: { withAnnouncement: 'כָּתַב', withoutAnnouncement: 'כותב' },

        russian: 'писать',
        transcription: 'котев',
      },
      {
        Icon: BookIcon,
        hebrew: { withAnnouncement: 'קָרָא', withoutAnnouncement: 'קורא' },

        russian: 'читать',
        transcription: 'коре',
      },
      {
        Icon: QuestionIcon,
        hebrew: { withAnnouncement: 'שוֹאֵל', withoutAnnouncement: 'שואל' },

        russian: 'спрашивать',
        transcription: 'шоэль',
      },
      {
        Icon: AnswerIcon,
        hebrew: { withAnnouncement: 'עוֹנֶה', withoutAnnouncement: 'עונה' },
        russian: 'отвечать',
        transcription: 'оне',
      },
      {
        Icon: ArrowDownIcon,
        hebrew: { withAnnouncement: 'בָּא', withoutAnnouncement: 'בא' },
        russian: 'приходить',
        transcription: 'ба',
      },
      {
        Icon: Talk2Icon,
        hebrew: { withAnnouncement: 'אָמַר', withoutAnnouncement: 'אמר' },

        russian: 'сказать',
        transcription: 'омер',
      },
      {
        Icon: HealthIcon,
        hebrew: { withAnnouncement: 'הַרגִיש', withoutAnnouncement: 'מרגיש' },
        russian: 'чувствовать',
        transcription: 'маргиш',
      },
    ],
  },
];
