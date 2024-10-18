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
import {
  Armchair,
  ArrowDownToLine,
  BookCopy,
  BookHeadphones,
  BrainCircuit,
  Car,
  CheckCheck,
  Church,
  CircleSlash2,
  Ear,
  Eye,
  Footprints,
  LogIn,
  LogOut,
  PersonStanding,
} from 'lucide-react';
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
        Icon: Footprints,
        hebrew: { withAnnouncement: 'הוֹלֵך', withoutAnnouncement: 'הולך' },
        russian: 'ходить',
        transcription: 'holekh',
      },
      {
        Icon: Car,
        hebrew: { withAnnouncement: 'נוֹסֵעַ', withoutAnnouncement: 'נוסע' },
        russian: 'ехать',
        transcription: 'nosea',
      },
      {
        Icon: PersonStanding,
        hebrew: { withAnnouncement: 'עוֹמֵד', withoutAnnouncement: 'עומד' },
        russian: 'стоять',
        transcription: 'omed',
      },
      {
        Icon: Armchair,
        hebrew: { withAnnouncement: 'יוֹשֵב', withoutAnnouncement: 'יושב' },
        russian: 'сидеть',
        transcription: 'yoshev',
      },
      {
        Icon: Eye,
        hebrew: { withAnnouncement: 'רוֹאֶה', withoutAnnouncement: 'רואה' },
        russian: 'видеть',
        transcription: 'roe',
      },
      {
        Icon: Church,
        hebrew: { withAnnouncement: 'מתפַּלֵל', withoutAnnouncement: 'מתפלל' },
        russian: 'молиться',
        transcription: 'mitpalel',
      },
      {
        Icon: ArrowDownToLine,
        hebrew: { withAnnouncement: 'נִמצָא', withoutAnnouncement: 'נמצא' },
        russian: 'находиться',
        transcription: 'nimtsa',
      },
      {
        Icon: Ear,
        hebrew: { withAnnouncement: 'שוֹמֵעַ', withoutAnnouncement: 'שומע' },
        russian: 'слышать',
        transcription: 'shomea',
      },
      {
        Icon: CheckCheck,
        hebrew: { withAnnouncement: 'עוֹשֶׂה', withoutAnnouncement: 'עושה' },
        russian: 'делать',
        transcription: 'ose',
      },
      {
        Icon: BookCopy,
        hebrew: { withAnnouncement: 'סִיפֵּר', withoutAnnouncement: 'סיפר' },
        russian: 'рассказывать',
        transcription: 'syper',
      },
      {
        Icon: BookHeadphones,
        hebrew: { withAnnouncement: 'מַסבִּיר', withoutAnnouncement: 'מסביר' },
        russian: 'объяснять',
        transcription: 'masbir',
      },
      {
        Icon: BrainCircuit,
        hebrew: { withAnnouncement: 'חוֹשֵב', withoutAnnouncement: 'חושב' },
        russian: 'думать',
        transcription: 'khoshev',
      },
      {
        Icon: LogOut,
        hebrew: { withAnnouncement: 'יוֹצֵא', withoutAnnouncement: 'יוצא' },
        russian: 'выходить',
        transcription: 'yotse',
      },
      {
        Icon: LogIn,
        hebrew: { withAnnouncement: 'נִכנַס', withoutAnnouncement: 'נכנס' },
        russian: 'входить',
        transcription: 'nikhnas',
      },
      {
        Icon: CircleSlash2,
        hebrew: { withAnnouncement: 'חֶסֶר', withoutAnnouncement: 'חסר' },
        russian: 'отсутствовать',
        transcription: 'khaser',
      },
    ],
  },
  {
    title: 'Основные глаголы 2 (ИНФ.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-2-inf',
    words: [
      {
        Icon: Footprints,
        hebrew: { withAnnouncement: 'לָלֶכֶת', withoutAnnouncement: 'ללכת' },
        russian: 'ходить',
        transcription: 'lalekhet',
      },
      {
        Icon: Car,
        hebrew: { withAnnouncement: 'לִנסוֹעַ', withoutAnnouncement: 'לנסוע' },
        russian: 'ехать',
        transcription: 'linsoa',
      },
      {
        Icon: PersonStanding,
        hebrew: { withAnnouncement: 'לַעֲמוֹד', withoutAnnouncement: 'לעמוד' },
        russian: 'стоять',
        transcription: 'laamod',
      },
      {
        Icon: Armchair,
        hebrew: { withAnnouncement: 'לָשֶבֶת', withoutAnnouncement: 'לשבת' },
        russian: 'сидеть',
        transcription: 'lashevet',
      },
      {
        Icon: Eye,
        hebrew: { withAnnouncement: 'לִראוֹת', withoutAnnouncement: 'לראות' },
        russian: 'видеть',
        transcription: 'lirot',
      },
      {
        Icon: Church,
        hebrew: {
          withAnnouncement: 'לְהִתפַּלֵל',
          withoutAnnouncement: 'להתפלל',
        },
        russian: 'молиться',
        transcription: 'lhitpalel',
      },
      {
        Icon: ArrowDownToLine,
        hebrew: {
          withAnnouncement: 'לְהִימָצֵא',
          withoutAnnouncement: 'להימצא',
        },
        russian: 'находиться',
        transcription: 'lhimatse',
      },
      {
        Icon: Ear,
        hebrew: { withAnnouncement: 'לִשמוֹעַ', withoutAnnouncement: 'לשמוע' },
        russian: 'слышать',
        transcription: 'lishmoa',
      },
      {
        Icon: CheckCheck,
        hebrew: { withAnnouncement: 'לַעֲשׂוֹת', withoutAnnouncement: 'לעשות' },
        russian: 'делать',
        transcription: 'laasot',
      },
      {
        Icon: BookCopy,
        hebrew: { withAnnouncement: 'לְסַפֵּר', withoutAnnouncement: 'לספר' },
        russian: 'рассказывать',
        transcription: 'lsaper',
      },
      {
        Icon: BookHeadphones,
        hebrew: {
          withAnnouncement: 'לְהַסבִּיר',
          withoutAnnouncement: 'להסביר',
        },
        russian: 'объяснять',
        transcription: 'lhasbir',
      },
      {
        Icon: BrainCircuit,
        hebrew: { withAnnouncement: 'לַחשוֹב', withoutAnnouncement: 'לחשוב' },
        russian: 'думать',
        transcription: 'lakhashov',
      },
      {
        Icon: LogOut,
        hebrew: { withAnnouncement: 'לָצֵאת', withoutAnnouncement: 'לצאת' },
        russian: 'выходить',
        transcription: 'latset',
      },
      {
        Icon: LogIn,
        hebrew: {
          withAnnouncement: 'לְהִיכָּנֵס',
          withoutAnnouncement: 'להיכנס',
        },
        russian: 'входить',
        transcription: 'lhikanes',
      },
      {
        Icon: CircleSlash2,
        hebrew: { withAnnouncement: 'לַחסוֹר', withoutAnnouncement: 'לחסור' },
        russian: 'отсутствовать',
        transcription: 'lakhasor',
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
