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

export interface ITopicListItem {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  slug: string;
  words: IWord[];
}

export interface IWord {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  russian: string;
  transcription: string;
  hebrew: string;
}

export const TOPICS: ITopicListItem[] = [
  {
    title: 'Основные глаголы',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli',
    words: [
      { Icon: CityIcon, hebrew: 'גָר', russian: 'жить', transcription: 'гар' },
      {
        Icon: StudentIcon,
        hebrew: 'לִימֵד',
        russian: 'учить',
        transcription: 'лёмед',
      },
      {
        Icon: WorkIcon,
        hebrew: 'עָבַד',
        russian: 'работать',
        transcription: 'овед',
      },
      {
        Icon: TalkIcon,
        hebrew: 'מְדַבֵּר',
        russian: 'говорить',
        transcription: 'медобер',
      },
      {
        Icon: UnderstandIcon,
        hebrew: 'מֵבִין',
        russian: 'понимать',
        transcription: 'мевим',
      },
      {
        Icon: KnowledgeIcon,
        hebrew: 'יוָדַע',
        russian: 'знать',
        transcription: 'йодеа',
      },
      {
        Icon: WriteIcon,
        hebrew: 'כָּתַב',
        russian: 'писать',
        transcription: 'котев',
      },
      {
        Icon: BookIcon,
        hebrew: 'קָרָא',
        russian: 'читать',
        transcription: 'коре',
      },
      {
        Icon: QuestionIcon,
        hebrew: 'שוֹאֵל',
        russian: 'спрашивать',
        transcription: 'шоэль',
      },
      {
        Icon: AnswerIcon,
        hebrew: 'עָנָה',
        russian: 'отвечать',
        transcription: 'оне',
      },
      {
        Icon: ArrowDownIcon,
        hebrew: 'בָּא',
        russian: 'приходить',
        transcription: 'ба',
      },
      {
        Icon: Talk2Icon,
        hebrew: 'אָמַר',
        russian: 'сказать',
        transcription: 'омер',
      },
      {
        Icon: HealthIcon,
        hebrew: 'הַרגִיש',
        russian: 'чувствовать',
        transcription: 'маргиш',
      },
    ],
  },
];
