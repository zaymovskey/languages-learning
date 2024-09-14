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
        transcription: 'gar',
      },
      {
        Icon: StudentIcon,
        hebrew: { withAnnouncement: 'לִימֵד', withoutAnnouncement: 'לומד' },
        russian: 'учить',
        transcription: 'lomed',
      },
      {
        Icon: WorkIcon,
        hebrew: { withAnnouncement: 'עָבַד', withoutAnnouncement: 'עובד' },
        russian: 'работать',
        transcription: 'oved',
      },
      {
        Icon: TalkIcon,
        hebrew: { withAnnouncement: 'מְדַבֵּר', withoutAnnouncement: 'מדבר' },
        russian: 'говорить',
        transcription: 'mdaber',
      },
      {
        Icon: UnderstandIcon,
        hebrew: { withAnnouncement: 'מֵבִין', withoutAnnouncement: 'מבין' },
        russian: 'понимать',
        transcription: 'mibeyn',
      },
      {
        Icon: KnowledgeIcon,
        hebrew: { withAnnouncement: 'יוָדַע', withoutAnnouncement: 'יודע' },
        russian: 'знать',
        transcription: 'yodea',
      },
      {
        Icon: WriteIcon,
        hebrew: { withAnnouncement: 'כָּתַב', withoutAnnouncement: 'כותב' },
        russian: 'писать',
        transcription: 'kotev',
      },
      {
        Icon: BookIcon,
        hebrew: { withAnnouncement: 'קָרָא', withoutAnnouncement: 'קורא' },
        russian: 'читать',
        transcription: 'kore',
      },
      {
        Icon: QuestionIcon,
        hebrew: { withAnnouncement: 'שוֹאֵל', withoutAnnouncement: 'שואל' },
        russian: 'спрашивать',
        transcription: 'shoel',
      },
      {
        Icon: AnswerIcon,
        hebrew: { withAnnouncement: 'עוֹנֶה', withoutAnnouncement: 'עונה' },
        russian: 'отвечать',
        transcription: 'one',
      },
      {
        Icon: ArrowDownIcon,
        hebrew: { withAnnouncement: 'בָּא', withoutAnnouncement: 'בא' },
        russian: 'приходить',
        transcription: 'ba',
      },
      {
        Icon: Talk2Icon,
        hebrew: { withAnnouncement: 'אָמַר', withoutAnnouncement: 'אומר' },
        russian: 'сказать',
        transcription: 'omer',
      },
      {
        Icon: HealthIcon,
        hebrew: { withAnnouncement: 'הַרגִיש', withoutAnnouncement: 'מרגיש' },
        russian: 'чувствовать',
        transcription: 'margish',
      },
    ],
  },
];
