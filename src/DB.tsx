import {
  ArrowDown05Icon,
  AudioBook04Icon,
  BubbleChatAddIcon,
  BubbleChatIcon,
  BubbleChatSecureIcon,
  Calendar03Icon,
  City02Icon,
  HealthIcon,
  Knowledge01Icon,
  LaborIcon,
  PencilEdit01Icon,
  ShareKnowledgeIcon,
  StudentsIcon,
  UserQuestion02Icon,
  WorkoutRunIcon,
} from 'hugeicons-react';
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
        Icon: City02Icon,
        hebrew: { withAnnouncement: 'גָר', withoutAnnouncement: 'גר' },
        russian: 'жить',
        transcription: 'gar',
      },
      {
        Icon: StudentsIcon,
        hebrew: { withAnnouncement: 'לִימֵד', withoutAnnouncement: 'לומד' },
        russian: 'учить',
        transcription: 'lomed',
      },
      {
        Icon: LaborIcon,
        hebrew: { withAnnouncement: 'עָבַד', withoutAnnouncement: 'עובד' },
        russian: 'работать',
        transcription: 'oved',
      },
      {
        Icon: BubbleChatIcon,
        hebrew: { withAnnouncement: 'מְדַבֵּר', withoutAnnouncement: 'מדבר' },
        russian: 'говорить',
        transcription: 'mdaber',
      },
      {
        Icon: ShareKnowledgeIcon,
        hebrew: { withAnnouncement: 'מֵבִין', withoutAnnouncement: 'מבין' },
        russian: 'понимать',
        transcription: 'mibeyn',
      },
      {
        Icon: Knowledge01Icon,
        hebrew: { withAnnouncement: 'יוָדַע', withoutAnnouncement: 'יודע' },
        russian: 'знать',
        transcription: 'yodea',
      },
      {
        Icon: PencilEdit01Icon,
        hebrew: { withAnnouncement: 'כָּתַב', withoutAnnouncement: 'כותב' },
        russian: 'писать',
        transcription: 'kotev',
      },
      {
        Icon: AudioBook04Icon,
        hebrew: { withAnnouncement: 'קָרָא', withoutAnnouncement: 'קורא' },
        russian: 'читать',
        transcription: 'kore',
      },
      {
        Icon: UserQuestion02Icon,
        hebrew: { withAnnouncement: 'שוֹאֵל', withoutAnnouncement: 'שואל' },
        russian: 'спрашивать',
        transcription: 'shoel',
      },
      {
        Icon: BubbleChatSecureIcon,
        hebrew: { withAnnouncement: 'עוֹנֶה', withoutAnnouncement: 'עונה' },
        russian: 'отвечать',
        transcription: 'one',
      },
      {
        Icon: ArrowDown05Icon,
        hebrew: { withAnnouncement: 'בָּא', withoutAnnouncement: 'בא' },
        russian: 'приходить',
        transcription: 'ba',
      },
      {
        Icon: BubbleChatAddIcon,
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
  {
    title: 'Дни недели',
    Icon: Calendar03Icon,
    slug: 'dni-nedeli',
    words: [],
  },
];
