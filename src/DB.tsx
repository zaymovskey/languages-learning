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
  LaurelWreathFirst01Icon,
  MedalSecondPlaceIcon,
  MedalThirdPlaceIcon,
  FourFinger02Icon,
  FiverrIcon,
  BodyPartSixPackIcon,
  Calendar01Icon,
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
    title: 'Основные глаголы (Н.В.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-nv',
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
        hebrew: { withAnnouncement: 'אוֹמַר', withoutAnnouncement: 'אומר' },
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
    title: 'Основные глаголы (ИНФ.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-inf',
    words: [
      {
        Icon: City02Icon,
        hebrew: { withAnnouncement: 'לָגוּר', withoutAnnouncement: 'לגור' },
        russian: 'жить',
        transcription: 'lagur',
      },
      {
        Icon: StudentsIcon,
        hebrew: { withAnnouncement: 'לִימֵד', withoutAnnouncement: 'לומד' },
        russian: 'учить',
        transcription: 'lomed',
      },
      {
        Icon: LaborIcon,
        hebrew: { withAnnouncement: 'לַעֲבוֹד', withoutAnnouncement: 'לעבוד' },
        russian: 'работать',
        transcription: 'laavod',
      },
      {
        Icon: BubbleChatIcon,
        hebrew: { withAnnouncement: 'לְדַבֵּר', withoutAnnouncement: 'לדבר' },
        russian: 'говорить',
        transcription: 'ldaber',
      },
      {
        Icon: ShareKnowledgeIcon,
        hebrew: { withAnnouncement: 'לְהָבִין', withoutAnnouncement: 'להבין' },
        russian: 'понимать',
        transcription: 'lhavin',
      },
      {
        Icon: Knowledge01Icon,
        hebrew: { withAnnouncement: 'לָדַעַת', withoutAnnouncement: 'לדעת' },
        russian: 'знать',
        transcription: 'ldaat',
      },
      {
        Icon: PencilEdit01Icon,
        hebrew: { withAnnouncement: 'לִכתוֹב', withoutAnnouncement: 'לכתוב' },
        russian: 'писать',
        transcription: 'likhtov',
      },
      {
        Icon: AudioBook04Icon,
        hebrew: { withAnnouncement: 'לִקרוֹא', withoutAnnouncement: 'לקרוא' },
        russian: 'читать',
        transcription: 'likro',
      },
      {
        Icon: UserQuestion02Icon,
        hebrew: { withAnnouncement: 'לִשְׁאוֹל', withoutAnnouncement: 'לשאול' },
        russian: 'спрашивать',
        transcription: 'lishol',
      },
      {
        Icon: BubbleChatSecureIcon,
        hebrew: { withAnnouncement: 'לַעֲנוֹת', withoutAnnouncement: 'לענות' },
        russian: 'отвечать',
        transcription: 'laanot',
      },
      {
        Icon: ArrowDown05Icon,
        hebrew: { withAnnouncement: 'לָבוֹא', withoutAnnouncement: 'לבוא' },
        russian: 'приходить',
        transcription: 'lavuo',
      },
      {
        Icon: BubbleChatAddIcon,
        hebrew: { withAnnouncement: 'לוֹמַר', withoutAnnouncement: 'לומר' },
        russian: 'сказать',
        transcription: 'lomar',
      },
      {
        Icon: HealthIcon,
        hebrew: {
          withAnnouncement: 'לְהַרגִיש',
          withoutAnnouncement: 'להרגיש',
        },
        russian: 'чувствовать',
        transcription: 'lhargish',
      },
    ],
  },
  {
    title: 'Основные глаголы 2 (Н.В.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-2-nv',
    words: [
      {
        Icon: City02Icon,
        hebrew: { withAnnouncement: 'הוֹלֵך', withoutAnnouncement: 'הולך' },
        russian: 'ходить',
        transcription: 'holekh',
      },
      {
        Icon: StudentsIcon,
        hebrew: { withAnnouncement: 'נוֹסֵעַ', withoutAnnouncement: 'נוסע' },
        russian: 'ехать',
        transcription: 'nosea',
      },
      {
        Icon: LaborIcon,
        hebrew: { withAnnouncement: 'עוֹמֵד', withoutAnnouncement: 'עומד' },
        russian: 'стоять',
        transcription: 'omed',
      },
      {
        Icon: BubbleChatIcon,
        hebrew: { withAnnouncement: 'יוֹשֵב', withoutAnnouncement: 'יושב' },
        russian: 'сидеть',
        transcription: 'yoshev',
      },
      {
        Icon: ShareKnowledgeIcon,
        hebrew: { withAnnouncement: 'רוֹאֶה', withoutAnnouncement: 'רואה' },
        russian: 'видеть',
        transcription: 'roe',
      },
      {
        Icon: Knowledge01Icon,
        hebrew: { withAnnouncement: 'מתפַּלֵל', withoutAnnouncement: 'מתפלל' },
        russian: 'молиться',
        transcription: 'mitpalel',
      },
      {
        Icon: PencilEdit01Icon,
        hebrew: { withAnnouncement: 'נִמצָא', withoutAnnouncement: 'נמצא' },
        russian: 'находиться',
        transcription: 'nimtsa',
      },
      {
        Icon: AudioBook04Icon,
        hebrew: { withAnnouncement: 'שוֹמֵעַ', withoutAnnouncement: 'שומע' },
        russian: 'слышать',
        transcription: 'shomea',
      },
      {
        Icon: UserQuestion02Icon,
        hebrew: { withAnnouncement: 'עוֹשֶׂה', withoutAnnouncement: 'עושה' },
        russian: 'делать',
        transcription: 'ose',
      },
      {
        Icon: BubbleChatSecureIcon,
        hebrew: { withAnnouncement: 'סִיפֵּר', withoutAnnouncement: 'סיפר' },
        russian: 'рассказывать',
        transcription: 'syper',
      },
      {
        Icon: ArrowDown05Icon,
        hebrew: { withAnnouncement: 'מַסבִּיר', withoutAnnouncement: 'מסביר' },
        russian: 'объяснять',
        transcription: 'masbir',
      },
      {
        Icon: BubbleChatAddIcon,
        hebrew: { withAnnouncement: 'חוֹשֵב', withoutAnnouncement: 'חושב' },
        russian: 'думать',
        transcription: 'khoshev',
      },
      {
        Icon: BubbleChatAddIcon,
        hebrew: { withAnnouncement: 'יוֹצֵא', withoutAnnouncement: 'יוצא' },
        russian: 'выходить',
        transcription: 'yotse',
      },
      {
        Icon: BubbleChatAddIcon,
        hebrew: { withAnnouncement: 'נִכנַס', withoutAnnouncement: 'נכנס' },
        russian: 'входить',
        transcription: 'nikhnas',
      },
      {
        Icon: BubbleChatAddIcon,
        hebrew: { withAnnouncement: 'חֶסֶר', withoutAnnouncement: 'חסר' },
        russian: 'отсутствовать',
        transcription: 'khaser',
      },
    ],
  },
  {
    title: 'Дни недели',
    Icon: Calendar03Icon,
    slug: 'dni-nedeli',
    words: [
      {
        Icon: LaurelWreathFirst01Icon,
        hebrew: {
          withAnnouncement: 'יוֹם רִאשוֹן',
          withoutAnnouncement: 'יום ראשון',
        },
        russian: 'воскресенье',
        transcription: 'yom rishon',
      },
      {
        Icon: MedalSecondPlaceIcon,
        hebrew: {
          withAnnouncement: 'יוֹם שֵנִי',
          withoutAnnouncement: 'יום שני',
        },
        russian: 'понедельник',
        transcription: 'yom shney',
      },
      {
        Icon: MedalThirdPlaceIcon,
        hebrew: {
          withAnnouncement: 'יוֹם שלִישִי',
          withoutAnnouncement: 'יום שלישי',
        },
        russian: 'вторник',
        transcription: 'yom shlishi',
      },
      {
        Icon: FourFinger02Icon,
        hebrew: {
          withAnnouncement: 'יוֹם רְבִיעִי',
          withoutAnnouncement: 'יום רביעי',
        },
        russian: 'среда',
        transcription: 'yom rvii',
      },
      {
        Icon: FiverrIcon,
        hebrew: {
          withAnnouncement: 'יוֹם חֲמִישִי',
          withoutAnnouncement: 'יום חמישי',
        },
        russian: 'четверг',
        transcription: 'yom khamishi',
      },
      {
        Icon: BodyPartSixPackIcon,
        hebrew: {
          withAnnouncement: 'יוֹם שִישִי',
          withoutAnnouncement: 'יום שישי',
        },
        russian: 'пятница',
        transcription: 'yom sisi',
      },
      {
        Icon: Calendar01Icon,
        hebrew: {
          withAnnouncement: 'יוֹם שַבָּת',
          withoutAnnouncement: 'יום שבת',
        },
        russian: 'суббота',
        transcription: 'yom shabat',
      },
    ],
  },
];
