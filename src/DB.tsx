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
  NoseIcon,
  TurtleNeckIcon,
  BodyPartLegIcon,
  FourFinger03Icon,
  ArrowTurnBackwardIcon,
  BodyPartMuscleIcon,
  NecklaceIcon,
  Tired01Icon,
  BodyArmorIcon,
  DroolingIcon,
  DentalToothIcon,
  DistributeVerticalTopIcon,
  PathfinderMinusFrontIcon,
  SafariIcon,
  LinkCircleIcon,
  MoonLandingIcon,
  BorderNone02Icon,
  ApproximatelyEqualCircleIcon,
  Clock03Icon,
  Clock02Icon,
  DocumentValidationIcon,
  CookBookIcon,
  SandalsIcon,
  Time02Icon,
  Timer02Icon,
  EyeIcon,
} from 'hugeicons-react';
import {
  AlarmClockIcon,
  Armchair,
  ArrowDownToLine,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUpToLine,
  BookCopy,
  BookHeadphones,
  BrainCircuit,
  BringToFront,
  Calendar,
  CalendarClock,
  CalendarDays,
  CandyCane,
  Car,
  CheckCheck,
  Church,
  CircleArrowDown,
  CircleSlash2,
  ClockArrowDown,
  Dot,
  Ear,
  Eye,
  EyeClosed,
  Footprints,
  HeartHandshake,
  Hourglass,
  LogIn,
  LogOut,
  MailOpen,
  Maximize2,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp,
  PersonStanding,
  Phone,
  RedoDot,
  Send,
  SquareArrowOutUpRight,
  SunriseIcon,
  Tally2,
  UndoDot,
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
    title: 'Основные глаголы 3 (Н.В.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-3-nv',
    words: [
      {
        Icon: HeartHandshake,
        hebrew: {
          withAnnouncement: 'עוֹזֵר',
          withoutAnnouncement: 'עוזר',
        },
        russian: 'помогаю',
        transcription: 'ozer',
      },
      {
        Icon: SandalsIcon,
        hebrew: {
          withAnnouncement: 'קָם',
          withoutAnnouncement: 'קם',
        },
        russian: 'встаю',
        transcription: 'qam',
      },
      {
        Icon: CookBookIcon,
        hebrew: {
          withAnnouncement: 'מְבַשֵּל',
          withoutAnnouncement: 'מבשל',
        },
        russian: 'готовлю (еду)',
        transcription: 'mevashel',
      },
      {
        Icon: DocumentValidationIcon,
        hebrew: {
          withAnnouncement: 'מְכִין',
          withoutAnnouncement: 'מכין',
        },
        russian: 'готовлю (что-то)',
        transcription: 'makhin',
      },
      {
        Icon: MailOpen,
        hebrew: {
          withAnnouncement: 'פוֹתֵחַ',
          withoutAnnouncement: 'פותח',
        },
        russian: 'открываю',
        transcription: "pothe'ach",
      },
      {
        Icon: EyeClosed,
        hebrew: {
          withAnnouncement: 'סוֹגֵר',
          withoutAnnouncement: 'סוגר',
        },
        russian: 'закрываю',
        transcription: "so'ger",
      },
      {
        Icon: Send,
        hebrew: {
          withAnnouncement: 'שַלֵּחַ',
          withoutAnnouncement: 'שלח',
        },
        russian: 'отправляю',
        transcription: 'shalekh',
      },
      {
        Icon: Calendar03Icon,
        hebrew: {
          withAnnouncement: 'קוֹבֵעַ',
          withoutAnnouncement: 'קובע',
        },
        russian: 'назначаю',
        transcription: 'mekavea',
      },
      {
        Icon: Phone,
        hebrew: {
          withAnnouncement: 'מִתְקַשֵּר',
          withoutAnnouncement: 'מתקשר',
        },
        russian: 'звоню',
        transcription: 'mitkasher',
      },
      {
        Icon: EyeIcon,
        hebrew: {
          withAnnouncement: 'מִסְתַּכֵּל',
          withoutAnnouncement: 'מסתכל',
        },
        russian: 'смотреть',
        transcription: 'mistakel',
      },
    ],
  },
  {
    title: 'Основные глаголы 3 (ИНФ.)',
    Icon: WorkoutRunIcon,
    slug: 'osnovnie-glagoli-3-inf',
    words: [
      {
        Icon: HeartHandshake,
        hebrew: {
          withAnnouncement: 'לְעַזֵּר',
          withoutAnnouncement: 'לעזר',
        },
        russian: 'помогать',
        transcription: "le'azer",
      },
      {
        Icon: SandalsIcon,
        hebrew: {
          withAnnouncement: 'לְקוּם',
          withoutAnnouncement: 'לקום',
        },
        russian: 'вставать',
        transcription: 'laqum',
      },
      {
        Icon: CookBookIcon,
        hebrew: {
          withAnnouncement: 'לְבַשֵּל',
          withoutAnnouncement: 'לבשל',
        },
        russian: 'готовить (еду)',
        transcription: 'levashel',
      },
      {
        Icon: DocumentValidationIcon,
        hebrew: {
          withAnnouncement: 'לְהָכִין',
          withoutAnnouncement: 'להכין',
        },
        russian: 'готовить (что-то)',
        transcription: 'lehachin',
      },
      {
        Icon: MailOpen,
        hebrew: {
          withAnnouncement: 'לִפְתֹּחַ',
          withoutAnnouncement: 'לפתוח',
        },
        russian: 'открывать',
        transcription: "lifto'ach",
      },
      {
        Icon: EyeClosed,
        hebrew: {
          withAnnouncement: 'לְסַגֵּר',
          withoutAnnouncement: 'לסגר',
        },
        russian: 'закрывать',
        transcription: 'lesager',
      },
      {
        Icon: Send,
        hebrew: {
          withAnnouncement: 'לִשְלוֹחַ',
          withoutAnnouncement: 'לשלוח',
        },
        russian: 'отправлять',
        transcription: 'lishloakh',
      },
      {
        Icon: Calendar03Icon,
        hebrew: {
          withAnnouncement: 'לְקַבֵּעַ',
          withoutAnnouncement: 'לקבוע',
        },
        russian: 'назначать',
        transcription: 'lekavoa',
      },
      {
        Icon: Phone,
        hebrew: {
          withAnnouncement: 'לְהִתְקַשֵּר',
          withoutAnnouncement: 'להתקשר',
        },
        russian: 'звонить',
        transcription: 'lehitkasher',
      },
      {
        Icon: EyeIcon,
        hebrew: {
          withAnnouncement: 'לִסְתַּכֵּל',
          withoutAnnouncement: 'ליסתכל',
        },
        russian: 'смотреть',
        transcription: 'listakel',
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
  {
    title: 'Дни недели (буквы)',
    Icon: Calendar03Icon,
    slug: 'dni-nedeli-bukvi',
    words: [
      {
        Icon: LaurelWreathFirst01Icon,
        hebrew: {
          withAnnouncement: 'א',
          withoutAnnouncement: 'א',
        },
        russian: 'воскресенье',
        transcription: 'yom rishon',
      },
      {
        Icon: MedalSecondPlaceIcon,
        hebrew: {
          withAnnouncement: 'ב',
          withoutAnnouncement: 'ב',
        },
        russian: 'понедельник',
        transcription: 'yom shney',
      },
      {
        Icon: MedalThirdPlaceIcon,
        hebrew: {
          withAnnouncement: 'ג',
          withoutAnnouncement: 'ג',
        },
        russian: 'вторник',
        transcription: 'yom shlishi',
      },
      {
        Icon: FourFinger02Icon,
        hebrew: {
          withAnnouncement: 'ד',
          withoutAnnouncement: 'ד',
        },
        russian: 'среда',
        transcription: 'yom rvii',
      },
      {
        Icon: FiverrIcon,
        hebrew: {
          withAnnouncement: 'ה',
          withoutAnnouncement: 'ה',
        },
        russian: 'четверг',
        transcription: 'yom khamishi',
      },
      {
        Icon: BodyPartSixPackIcon,
        hebrew: {
          withAnnouncement: 'ו',
          withoutAnnouncement: 'ו',
        },
        russian: 'пятница',
        transcription: 'yom sisi',
      },
      {
        Icon: Calendar01Icon,
        hebrew: {
          withAnnouncement: 'ש',
          withoutAnnouncement: 'ש',
        },
        russian: 'суббота',
        transcription: 'yom shabat',
      },
    ],
  },
  {
    title: 'Тело',
    Icon: PersonStanding,
    slug: 'telo',
    words: [
      {
        Icon: NoseIcon,
        hebrew: {
          withAnnouncement: 'אַף',
          withoutAnnouncement: 'אף',
        },
        russian: 'нос',
        transcription: 'af',
      },
      {
        Icon: DentalToothIcon,
        hebrew: {
          withAnnouncement: 'שֵׁן',
          withoutAnnouncement: 'שן',
        },
        russian: 'зуб',
        transcription: 'shen',
      },
      {
        Icon: Eye,
        hebrew: {
          withAnnouncement: 'עַיִן',
          withoutAnnouncement: 'עין',
        },
        russian: 'глаз',
        transcription: 'ayin',
      },
      {
        Icon: BodyPartLegIcon,
        hebrew: {
          withAnnouncement: 'רֶגֶל',
          withoutAnnouncement: 'רגל',
        },
        russian: 'нога',
        transcription: 'regel',
      },
      {
        Icon: DroolingIcon,
        hebrew: {
          withAnnouncement: 'פֶּה',
          withoutAnnouncement: 'פה',
        },
        russian: 'рот',
        transcription: 'peh',
      },
      {
        Icon: BodyArmorIcon,
        hebrew: {
          withAnnouncement: 'גּוּף',
          withoutAnnouncement: 'גוף',
        },
        russian: 'тело',
        transcription: 'guf',
      },
      {
        Icon: Tired01Icon,
        hebrew: {
          withAnnouncement: 'רֹאשׁ',
          withoutAnnouncement: 'ראש',
        },
        russian: 'голова',
        transcription: 'rosh',
      },
      {
        Icon: Ear,
        hebrew: {
          withAnnouncement: 'אֹזֶן',
          withoutAnnouncement: 'אזן',
        },
        russian: 'ухо',
        transcription: 'ozen',
      },
      {
        Icon: NecklaceIcon,
        hebrew: {
          withAnnouncement: 'צַוָּאר',
          withoutAnnouncement: 'צוואר',
        },
        russian: 'шея',
        transcription: 'tsavar',
      },
      {
        Icon: BodyPartMuscleIcon,
        hebrew: {
          withAnnouncement: 'כָּתֵף',
          withoutAnnouncement: 'כתף',
        },
        russian: 'плечо',
        transcription: 'khathef',
      },
      {
        Icon: ArrowTurnBackwardIcon,
        hebrew: {
          withAnnouncement: 'גָּב',
          withoutAnnouncement: 'גב',
        },
        russian: 'спина',
        transcription: 'gav',
      },
      {
        Icon: FourFinger03Icon,
        hebrew: {
          withAnnouncement: 'יָד',
          withoutAnnouncement: 'יד',
        },
        russian: 'рука',
        transcription: 'yad',
      },
      {
        Icon: BodyPartLegIcon,
        hebrew: {
          withAnnouncement: 'בֶּרֶךְ',
          withoutAnnouncement: 'ברך',
        },
        russian: 'колено',
        transcription: 'berekh',
      },
      {
        Icon: BodyPartSixPackIcon,
        hebrew: {
          withAnnouncement: 'בֶּטֶן',
          withoutAnnouncement: 'בטן',
        },
        russian: 'живот',
        transcription: 'beten',
      },
      {
        Icon: TurtleNeckIcon,
        hebrew: {
          withAnnouncement: 'גָּרוֹן',
          withoutAnnouncement: 'גרון',
        },
        russian: 'горло',
        transcription: 'garon',
      },
    ],
  },
  {
    title: 'Положение объекта',
    Icon: DistributeVerticalTopIcon,
    slug: 'polozhenie-objekta',
    words: [
      {
        Icon: ArrowDownToLine,
        hebrew: {
          withAnnouncement: 'לְמַעְלָה',
          withoutAnnouncement: 'למעלה',
        },
        russian: 'сверху',
        transcription: "lema'lah",
      },
      {
        Icon: ArrowUpToLine,
        hebrew: {
          withAnnouncement: 'לְמַטָּה',
          withoutAnnouncement: 'למטה',
        },
        russian: 'снизу',
        transcription: "lema'tah",
      },
      {
        Icon: Tally2,
        hebrew: {
          withAnnouncement: 'לְיָד',
          withoutAnnouncement: 'ליד',
        },
        russian: 'рядом',
        transcription: 'leyad',
      },
      {
        Icon: ArrowRightToLine,
        hebrew: {
          withAnnouncement: 'שְׂמֹאל',
          withoutAnnouncement: 'שמאל',
        },
        russian: 'слева',
        transcription: "s'mol",
      },
      {
        Icon: ArrowLeftToLine,
        hebrew: {
          withAnnouncement: 'יָמִין',
          withoutAnnouncement: 'ימין',
        },
        russian: 'справа',
        transcription: 'yamin',
      },
      {
        Icon: PathfinderMinusFrontIcon,
        hebrew: {
          withAnnouncement: 'לִפְנֵי',
          withoutAnnouncement: 'לפני',
        },
        russian: 'перед',
        transcription: 'lifnei',
      },
      {
        Icon: BringToFront,
        hebrew: {
          withAnnouncement: 'אָחוֹר',
          withoutAnnouncement: 'אחור',
        },
        russian: 'за',
        transcription: 'achor',
      },
      {
        Icon: CircleArrowDown,
        hebrew: {
          withAnnouncement: 'בְּתוֹךְ',
          withoutAnnouncement: 'בתוך',
        },
        russian: 'внутри',
        transcription: "b'toch",
      },
      {
        Icon: SquareArrowOutUpRight,
        hebrew: {
          withAnnouncement: 'חוּץ',
          withoutAnnouncement: 'חוץ',
        },
        russian: 'снаружи',
        transcription: 'chutz',
      },
      {
        Icon: Tally2,
        hebrew: {
          withAnnouncement: 'קָרוֹב',
          withoutAnnouncement: 'קרוב',
        },
        russian: 'близко',
        transcription: 'karov',
      },
      {
        Icon: Maximize2,
        hebrew: {
          withAnnouncement: 'רָחוֹק',
          withoutAnnouncement: 'רחוק',
        },
        russian: 'далеко',
        transcription: 'rachok',
      },
    ],
  },
  {
    title: 'Карта',
    Icon: SafariIcon,
    slug: 'karta',
    words: [
      {
        Icon: MoveRight,
        hebrew: {
          withAnnouncement: 'מִזְרָח',
          withoutAnnouncement: 'מזרח',
        },
        russian: 'восток',
        transcription: 'mizrach',
      },
      {
        Icon: MoveUp,
        hebrew: {
          withAnnouncement: 'צָפוֹן',
          withoutAnnouncement: 'צפון',
        },
        russian: 'север',
        transcription: 'tzafon',
      },
      {
        Icon: MoveLeft,
        hebrew: {
          withAnnouncement: 'מַעֲרָב',
          withoutAnnouncement: 'מערב',
        },
        russian: 'запад',
        transcription: "ma'arav",
      },
      {
        Icon: MoveDown,
        hebrew: {
          withAnnouncement: 'דָּרוֹם',
          withoutAnnouncement: 'דרום',
        },
        russian: 'юг',
        transcription: 'darom',
      },
      {
        Icon: Dot,
        hebrew: {
          withAnnouncement: 'מֶרְכָּז',
          withoutAnnouncement: 'מרכז',
        },
        russian: 'центр',
        transcription: 'merkaz',
      },
      {
        Icon: BorderNone02Icon,
        hebrew: {
          withAnnouncement: 'גְּבוּל',
          withoutAnnouncement: 'גבול',
        },
        russian: 'граница',
        transcription: 'gevul',
      },
      {
        Icon: MoonLandingIcon,
        hebrew: {
          withAnnouncement: 'אָרֶץ',
          withoutAnnouncement: 'ארץ',
        },
        russian: 'страна',
        transcription: 'eretz',
      },
      {
        Icon: LinkCircleIcon,
        hebrew: {
          withAnnouncement: 'שְׁכֵנִים',
          withoutAnnouncement: 'שכנים',
        },
        russian: 'соседи',
        transcription: "sh'chenim",
      },
    ],
  },
  {
    title: 'Когда?',
    Icon: Time02Icon,
    slug: 'kogda',
    words: [
      {
        Icon: Clock02Icon,
        hebrew: {
          withAnnouncement: 'מוֹקֵדָם',
          withoutAnnouncement: 'מוקדם',
        },
        russian: 'рано',
        transcription: 'mukdam',
      },
      {
        Icon: Clock03Icon,
        hebrew: { withAnnouncement: 'מְאֻחָר', withoutAnnouncement: 'מאוחר' },
        russian: 'поздно',
        transcription: 'meuhar',
      },
      {
        Icon: ClockArrowDown,
        hebrew: {
          withAnnouncement: 'בְּדִיּוּק',
          withoutAnnouncement: 'בדיוק',
        },
        russian: 'точно',
        transcription: 'bediyuq',
      },
      {
        Icon: ApproximatelyEqualCircleIcon,
        hebrew: {
          withAnnouncement: 'בּערָך',
          withoutAnnouncement: 'בערך',
        },
        russian: 'примерно',
        transcription: "be'erakh",
      },
      {
        Icon: RedoDot,
        hebrew: {
          withAnnouncement: 'מָחָר',
          withoutAnnouncement: 'מחר',
        },
        russian: 'завтра',
        transcription: 'makhár',
      },
      {
        Icon: UndoDot,
        hebrew: {
          withAnnouncement: 'אֶתְמוֹל',
          withoutAnnouncement: 'אתמול',
        },
        russian: 'вчера',
        transcription: 'etmol',
      },
    ],
  },
  {
    title: 'Единицы времени',
    Icon: CalendarClock,
    slug: 'edinitsi-vremeni',
    words: [
      {
        Icon: AlarmClockIcon,
        hebrew: {
          withAnnouncement: 'שָׁעָה',
          withoutAnnouncement: 'שעה',
        },
        russian: 'час',
        transcription: "sha'ah",
      },
      {
        Icon: SunriseIcon,
        hebrew: {
          withAnnouncement: 'יוֹם',
          withoutAnnouncement: 'יום',
        },
        russian: 'день',
        transcription: 'yom',
      },
      {
        Icon: CandyCane,
        hebrew: {
          withAnnouncement: 'שָׁנָה',
          withoutAnnouncement: 'שנה',
        },
        russian: 'год',
        transcription: 'shanah',
      },
      {
        Icon: CalendarDays,
        hebrew: {
          withAnnouncement: 'חֹדֶשׁ',
          withoutAnnouncement: 'חודש',
        },
        russian: 'месяц',
        transcription: 'chodesh',
      },
      {
        Icon: Calendar,
        hebrew: {
          withAnnouncement: 'שָׁבוּעַ',
          withoutAnnouncement: 'שבוע',
        },
        russian: 'неделя',
        transcription: "shavu'a",
      },
      {
        Icon: Hourglass,
        hebrew: {
          withAnnouncement: 'דַּקָּה',
          withoutAnnouncement: 'דקה',
        },
        russian: 'минута',
        transcription: 'daqah',
      },
      {
        Icon: Timer02Icon,
        hebrew: {
          withAnnouncement: 'שְׁנִיָּה',
          withoutAnnouncement: 'שניה',
        },
        russian: 'секунда',
        transcription: 'shniyah',
      },
    ],
  },
];
