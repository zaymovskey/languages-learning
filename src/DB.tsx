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
  Building01Icon,
  TabletPenIcon,
  Building03Icon,
  ForgotPasswordIcon,
  PushUpBarIcon,
  PulleyIcon,
  CleanIcon,
  GiveBloodIcon,
  Invoice03Icon,
  UsbMemory01Icon,
  Bread01Icon,
  VegetarianFoodIcon,
  SoilTemperatureFieldIcon,
  RiceBowl01Icon,
  CharacterPhoneticIcon,
  SpeedTrain01Icon,
} from 'hugeicons-react';
import {
  AlarmClockIcon,
  Armchair,
  ArrowDownToLine,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUpToLine,
  Ban,
  Beef,
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
  ChevronLeft,
  ChevronRight,
  Church,
  Cigarette,
  CircleArrowDown,
  CircleSlash2,
  ClockAlert,
  ClockArrowDown,
  ContactRound,
  DoorOpen,
  Dot,
  Drumstick,
  Ear,
  Egg,
  Eye,
  EyeClosed,
  Footprints,
  HeartHandshake,
  Hotel,
  Hourglass,
  Loader,
  LogIn,
  LogOut,
  MailOpen,
  Maximize2,
  Milk,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveUp,
  PersonStanding,
  Phone,
  Pi,
  RedoDot,
  Salad,
  Send,
  SquareArrowOutUpRight,
  SunriseIcon,
  Tally2,
  TreePalm,
  UndoDot,
} from 'lucide-react';
import { ComponentType, SVGProps } from 'react';

const SendingOrderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d="M12 18C9.3161 18 6.86556 18.3776 5 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518C7.58854 5.24874 6.82332 5 6 5C3.79086 5 2 6.79086 2 9C2 11.2091 3.79086 13 6 13V18.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 18.5L15 18.5M21 18.5C21 19.2002 19.0057 20.5085 18.5 21M21 18.5C21 17.7998 19.0057 16.4915 18.5 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface ITopic {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  slug: string;
  words: IWord[];
}

export interface ITopicGroup {
  title: string;
  topics: ITopic[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface IWord {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  russian: string;
  transcription: string;
  hebrew: { withAnnouncement: string; withoutAnnouncement: string };
}

export const TOPICS: (ITopic | ITopicGroup)[] = [
  {
    title: 'Глаголы',
    Icon: WorkoutRunIcon,
    topics: [
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
            hebrew: {
              withAnnouncement: 'מְדַבֵּר',
              withoutAnnouncement: 'מדבר',
            },
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
            hebrew: {
              withAnnouncement: 'מַרְגִּישׁ',
              withoutAnnouncement: 'מרגיש',
            },
            russian: 'чувствую',
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
            hebrew: {
              withAnnouncement: 'לַעֲבוֹד',
              withoutAnnouncement: 'לעבוד',
            },
            russian: 'работать',
            transcription: 'laavod',
          },
          {
            Icon: BubbleChatIcon,
            hebrew: {
              withAnnouncement: 'לְדַבֵּר',
              withoutAnnouncement: 'לדבר',
            },
            russian: 'говорить',
            transcription: 'ldaber',
          },
          {
            Icon: ShareKnowledgeIcon,
            hebrew: {
              withAnnouncement: 'לְהָבִין',
              withoutAnnouncement: 'להבין',
            },
            russian: 'понимать',
            transcription: 'lhavin',
          },
          {
            Icon: Knowledge01Icon,
            hebrew: {
              withAnnouncement: 'לָדַעַת',
              withoutAnnouncement: 'לדעת',
            },
            russian: 'знать',
            transcription: 'ldaat',
          },
          {
            Icon: PencilEdit01Icon,
            hebrew: {
              withAnnouncement: 'לִכתוֹב',
              withoutAnnouncement: 'לכתוב',
            },
            russian: 'писать',
            transcription: 'likhtov',
          },
          {
            Icon: AudioBook04Icon,
            hebrew: {
              withAnnouncement: 'לִקרוֹא',
              withoutAnnouncement: 'לקרוא',
            },
            russian: 'читать',
            transcription: 'likro',
          },
          {
            Icon: UserQuestion02Icon,
            hebrew: {
              withAnnouncement: 'לִשְׁאוֹל',
              withoutAnnouncement: 'לשאול',
            },
            russian: 'спрашивать',
            transcription: 'lishol',
          },
          {
            Icon: BubbleChatSecureIcon,
            hebrew: {
              withAnnouncement: 'לַעֲנוֹת',
              withoutAnnouncement: 'לענות',
            },
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
            hebrew: {
              withAnnouncement: 'נוֹסֵעַ',
              withoutAnnouncement: 'נוסע',
            },
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
            hebrew: {
              withAnnouncement: 'מתפַּלֵל',
              withoutAnnouncement: 'מתפלל',
            },
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
            hebrew: {
              withAnnouncement: 'שוֹמֵעַ',
              withoutAnnouncement: 'שומע',
            },
            russian: 'слышать',
            transcription: 'shomea',
          },
          {
            Icon: CheckCheck,
            hebrew: {
              withAnnouncement: 'עוֹשֶׂה',
              withoutAnnouncement: 'עושה',
            },
            russian: 'делать',
            transcription: 'ose',
          },
          {
            Icon: BookCopy,
            hebrew: {
              withAnnouncement: 'סִיפֵּר',
              withoutAnnouncement: 'סיפר',
            },
            russian: 'рассказывать',
            transcription: 'syper',
          },
          {
            Icon: BookHeadphones,
            hebrew: {
              withAnnouncement: 'מַסבִּיר',
              withoutAnnouncement: 'מסביר',
            },
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
            hebrew: {
              withAnnouncement: 'לָלֶכֶת',
              withoutAnnouncement: 'ללכת',
            },
            russian: 'ходить',
            transcription: 'lalekhet',
          },
          {
            Icon: Car,
            hebrew: {
              withAnnouncement: 'לִנסוֹעַ',
              withoutAnnouncement: 'לנסוע',
            },
            russian: 'ехать',
            transcription: 'linsoa',
          },
          {
            Icon: PersonStanding,
            hebrew: {
              withAnnouncement: 'לַעֲמוֹד',
              withoutAnnouncement: 'לעמוד',
            },
            russian: 'стоять',
            transcription: 'laamod',
          },
          {
            Icon: Armchair,
            hebrew: {
              withAnnouncement: 'לָשֶבֶת',
              withoutAnnouncement: 'לשבת',
            },
            russian: 'сидеть',
            transcription: 'lashevet',
          },
          {
            Icon: Eye,
            hebrew: {
              withAnnouncement: 'לִראוֹת',
              withoutAnnouncement: 'לראות',
            },
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
            hebrew: {
              withAnnouncement: 'לִשמוֹעַ',
              withoutAnnouncement: 'לשמוע',
            },
            russian: 'слышать',
            transcription: 'lishmoa',
          },
          {
            Icon: CheckCheck,
            hebrew: {
              withAnnouncement: 'לַעֲשׂוֹת',
              withoutAnnouncement: 'לעשות',
            },
            russian: 'делать',
            transcription: 'laasot',
          },
          {
            Icon: BookCopy,
            hebrew: {
              withAnnouncement: 'לְסַפֵּר',
              withoutAnnouncement: 'לספר',
            },
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
            hebrew: {
              withAnnouncement: 'לַחשוֹב',
              withoutAnnouncement: 'לחשוב',
            },
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
            hebrew: {
              withAnnouncement: 'לַחסוֹר',
              withoutAnnouncement: 'לחסור',
            },
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
              withAnnouncement: 'לְעָזוֹר',
              withoutAnnouncement: 'לעזור',
            },
            russian: 'помогать',
            transcription: 'leazor',
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
              withAnnouncement: 'לִפְתוֹחַ',
              withoutAnnouncement: 'לפתוח',
            },
            russian: 'открывать',
            transcription: 'liftoach',
          },
          {
            Icon: EyeClosed,
            hebrew: {
              withAnnouncement: 'לִסְגוּר',
              withoutAnnouncement: 'לסגור',
            },
            russian: 'закрывать',
            transcription: 'lisgur',
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
              withAnnouncement: 'לְקַבֵּועַ',
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
        title: 'Основные глаголы 4 (Н.В.)',
        Icon: WorkoutRunIcon,
        slug: 'osnovnie-glagoli-4-nv',
        words: [
          {
            Icon: SendingOrderIcon,
            hebrew: {
              withAnnouncement: 'מַזְמִין',
              withoutAnnouncement: 'מזמין',
            },
            russian: 'заказываю',
            transcription: 'mazmin',
          },
          {
            Icon: ClockAlert,
            hebrew: {
              withAnnouncement: 'מְאַחֵר',
              withoutAnnouncement: 'מאחר',
            },
            russian: 'опаздываю',
            transcription: 'meacher',
          },
          {
            Icon: GiveBloodIcon,
            hebrew: {
              withAnnouncement: 'לוֹקֵחַ',
              withoutAnnouncement: 'לוקח',
            },
            russian: 'беру',
            transcription: 'lokeach',
          },
          {
            Icon: Invoice03Icon,
            hebrew: {
              withAnnouncement: 'מְשַׁלֵּם',
              withoutAnnouncement: 'משלם',
            },
            russian: 'плачу',
            transcription: 'meshalem',
          },
          {
            Icon: UsbMemory01Icon,
            hebrew: {
              withAnnouncement: 'זוֹכֵר',
              withoutAnnouncement: 'זוכר',
            },
            russian: 'помню',
            transcription: 'zocher',
          },
          {
            Icon: TreePalm,
            hebrew: {
              withAnnouncement: 'נָח',
              withoutAnnouncement: 'נח',
            },
            russian: 'отдыхаю',
            transcription: 'nach',
          },
          {
            Icon: ForgotPasswordIcon,
            hebrew: {
              withAnnouncement: 'שׁוֹכֵחַ',
              withoutAnnouncement: 'שוכח',
            },
            russian: 'забываю',
            transcription: 'shocheach',
          },
          {
            Icon: Cigarette,
            hebrew: {
              withAnnouncement: 'מַעֲשֵּן',
              withoutAnnouncement: 'מעשן',
            },
            russian: 'курю',
            transcription: 'maasen',
          },
          {
            Icon: Loader,
            hebrew: {
              withAnnouncement: 'מַחְכֶּה',
              withoutAnnouncement: 'מחכה',
            },
            russian: 'жду',
            transcription: 'machke',
          },
          {
            Icon: GiveBloodIcon,
            hebrew: {
              withAnnouncement: 'נוֹתן',
              withoutAnnouncement: 'נותן',
            },
            russian: 'даю',
            transcription: 'noten',
          },
          {
            Icon: CleanIcon,
            hebrew: {
              withAnnouncement: 'מנקה',
              withoutAnnouncement: 'מנקה',
            },
            russian: 'убираюсь',
            transcription: 'minkeh',
          },
          {
            Icon: PulleyIcon,
            hebrew: {
              withAnnouncement: 'מְשוֹךְ',
              withoutAnnouncement: 'משוך',
            },
            russian: 'тяну',
            transcription: 'mashoch',
          },
          {
            Icon: PushUpBarIcon,
            hebrew: {
              withAnnouncement: 'דּוֹחֵף',
              withoutAnnouncement: 'דוחף',
            },
            russian: 'толкаю',
            transcription: 'dochef',
          },
        ],
      },
      {
        title: 'Основные глаголы 4 (ИНФ.)',
        Icon: WorkoutRunIcon,
        slug: 'osnovnie-glagoli-4-inf',
        words: [
          {
            Icon: SendingOrderIcon,
            hebrew: {
              withAnnouncement: 'לְהַזְמִין',
              withoutAnnouncement: 'להזמין',
            },
            russian: 'заказывать',
            transcription: 'le-hazmin',
          },
          {
            Icon: ClockAlert,
            hebrew: {
              withAnnouncement: 'בְּאִיחוּר',
              withoutAnnouncement: 'באיחור',
            },
            russian: 'опаздывать',
            transcription: 'baichur',
          },
          {
            Icon: GiveBloodIcon,
            hebrew: {
              withAnnouncement: 'לָקַחַת',
              withoutAnnouncement: 'לקחת',
            },
            russian: 'брать',
            transcription: 'lakachat',
          },
          {
            Icon: Invoice03Icon,
            hebrew: {
              withAnnouncement: 'לְשַׁלֵּם',
              withoutAnnouncement: 'לשלם',
            },
            russian: 'платить',
            transcription: 'leshalem',
          },
          {
            Icon: UsbMemory01Icon,
            hebrew: {
              withAnnouncement: 'לִזְכּוֹר',
              withoutAnnouncement: 'לזכור',
            },
            russian: 'помнить',
            transcription: 'lizkor',
          },
          {
            Icon: TreePalm,
            hebrew: {
              withAnnouncement: 'לִנוּחַ',
              withoutAnnouncement: 'לנוח',
            },
            russian: 'отдыхать',
            transcription: 'linuach',
          },
          {
            Icon: ForgotPasswordIcon,
            hebrew: {
              withAnnouncement: 'לִשְׁכּוֹחַ',
              withoutAnnouncement: 'לשכוח',
            },
            russian: 'забывать',
            transcription: 'lishkoch',
          },
          {
            Icon: Cigarette,
            hebrew: {
              withAnnouncement: 'לַעֲשֵׁן',
              withoutAnnouncement: 'לעשן',
            },
            russian: 'курить',
            transcription: 'laasen',
          },
          {
            Icon: Loader,
            hebrew: {
              withAnnouncement: 'לַחֲכוֹת',
              withoutAnnouncement: 'לחכות',
            },
            russian: 'ждать',
            transcription: 'lachakot',
          },
          {
            Icon: GiveBloodIcon,
            hebrew: {
              withAnnouncement: 'לָתֵת',
              withoutAnnouncement: 'לתת',
            },
            russian: 'давать',
            transcription: 'latet',
          },
          {
            Icon: CleanIcon,
            hebrew: {
              withAnnouncement: 'לִנְקוֹת',
              withoutAnnouncement: 'לנקות',
            },
            russian: 'убираться',
            transcription: 'linakot',
          },
          {
            Icon: PulleyIcon,
            hebrew: {
              withAnnouncement: 'לְמָשוֹךְ',
              withoutAnnouncement: 'למשוך',
            },
            russian: 'Тянуть',
            transcription: 'lemashoch',
          },
          {
            Icon: PushUpBarIcon,
            hebrew: {
              withAnnouncement: 'לְדָחוֹף',
              withoutAnnouncement: 'לדחוף',
            },
            russian: 'Толкать',
            transcription: 'ledachof',
          },
        ],
      },
    ],
  },
  {
    title: 'Дни недели',
    Icon: Calendar03Icon,
    topics: [
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
        russian: 'выше',
        transcription: 'lemala',
      },
      {
        Icon: ArrowUpToLine,
        hebrew: {
          withAnnouncement: 'לְמַטָּה',
          withoutAnnouncement: 'למטה',
        },
        russian: 'ниже',
        transcription: 'lemata',
      },
      {
        Icon: Tally2,
        hebrew: {
          withAnnouncement: 'לְיָד',
          withoutAnnouncement: 'ליד',
        },
        russian: 'рядом',
        transcription: 'le"id',
      },
      {
        Icon: ArrowRightToLine,
        hebrew: {
          withAnnouncement: 'מִשְׂמָאל',
          withoutAnnouncement: 'משמאל',
        },
        russian: 'слева',
        transcription: 'mishmal',
      },
      {
        Icon: ArrowLeftToLine,
        hebrew: {
          withAnnouncement: 'מִימִּין',
          withoutAnnouncement: 'מימין',
        },
        russian: 'справа',
        transcription: 'miyamin',
      },
      {
        Icon: PathfinderMinusFrontIcon,
        hebrew: {
          withAnnouncement: 'לִפְנִים',
          withoutAnnouncement: 'לפנים',
        },
        russian: 'впереди',
        transcription: 'lefanim',
      },
      {
        Icon: BringToFront,
        hebrew: {
          withAnnouncement: 'מֵאֲחוֹרֵי',
          withoutAnnouncement: 'מאחורי',
        },
        russian: 'позади',
        transcription: 'me"achorei',
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
          withAnnouncement: 'בחוּץ',
          withoutAnnouncement: 'בחוץ',
        },
        russian: 'снаружи',
        transcription: 'bechutz',
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
        Icon: SpeedTrain01Icon,
        hebrew: {
          withAnnouncement: 'דָּחוּף',
          withoutAnnouncement: 'דחוף',
        },
        russian: 'срочно',
        transcription: 'dakhuf',
      },
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
      {
        Icon: Pi,
        hebrew: {
          withAnnouncement: 'תמיד',
          withoutAnnouncement: 'תמיד',
        },
        russian: 'всегда',
        transcription: 'tamid',
      },
      {
        Icon: Ban,
        hebrew: {
          withAnnouncement: 'לעולם',
          withoutAnnouncement: 'לעולם',
        },
        russian: 'никогда',
        transcription: 'loelam',
      },
      {
        Icon: ChevronLeft,
        hebrew: {
          withAnnouncement: 'לפני',
          withoutAnnouncement: 'לפני',
        },
        russian: 'до',
        transcription: 'lepe',
      },
      {
        Icon: ChevronRight,
        hebrew: {
          withAnnouncement: 'אחרי',
          withoutAnnouncement: 'אחרי',
        },
        russian: 'после',
        transcription: 'achrei',
      },
    ],
  },
  {
    title: 'Дата и время',
    Icon: CalendarClock,
    slug: 'data-i-vremya',
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
        Icon: Calendar,
        hebrew: {
          withAnnouncement: 'תָּאְרִיךְ',
          withoutAnnouncement: 'תאריך',
        },
        russian: 'дата',
        transcription: "ta'rikh",
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
  {
    title: 'Здание',
    Icon: Building01Icon,
    slug: 'zdaniye',
    words: [
      {
        Icon: LogOut,
        hebrew: {
          withAnnouncement: 'יְצִיאָה',
          withoutAnnouncement: 'יציאה',
        },
        russian: 'выход',
        transcription: 'yetziah',
      },
      {
        Icon: LogIn,
        hebrew: {
          withAnnouncement: 'כְּנִיסָה',
          withoutAnnouncement: 'כניסה',
        },
        russian: 'вход',
        transcription: 'knisah',
      },
      {
        Icon: DoorOpen,
        hebrew: {
          withAnnouncement: 'יְצִיאַת חָרוּם',
          withoutAnnouncement: 'יציאת חרום',
        },
        russian: 'экстренный выход',
        transcription: 'yetziat charum',
      },
      {
        Icon: Building01Icon,
        hebrew: {
          withAnnouncement: 'קוֹמָה',
          withoutAnnouncement: 'קומה',
        },
        russian: 'этаж',
        transcription: 'komah',
      },
      {
        Icon: TabletPenIcon,
        hebrew: {
          withAnnouncement: 'שִׁלְט',
          withoutAnnouncement: 'שלט',
        },
        russian: 'вывеска',
        transcription: 'shilt',
      },
      {
        Icon: Building03Icon,
        hebrew: {
          withAnnouncement: 'בִּנְיָן',
          withoutAnnouncement: 'בנין',
        },
        russian: 'здание',
        transcription: 'binyan',
      },
      {
        Icon: Hotel,
        hebrew: {
          withAnnouncement: 'דִּירָה',
          withoutAnnouncement: 'דירה',
        },
        russian: 'квартира',
        transcription: 'dirah',
      },
    ],
  },
  {
    title: 'Еда',
    Icon: VegetarianFoodIcon,
    slug: 'eda',
    words: [
      {
        Icon: Salad,
        hebrew: {
          withAnnouncement: 'מְלָפְפוֹן',
          withoutAnnouncement: 'מלפפון',
        },
        russian: 'огурец',
        transcription: 'melafefon',
      },
      {
        Icon: Salad,
        hebrew: {
          withAnnouncement: 'עֲגֻבָנִיָּה',
          withoutAnnouncement: 'עגבנייה',
        },
        russian: 'помидор',
        transcription: 'agvaniyah',
      },
      {
        Icon: Beef,
        hebrew: {
          withAnnouncement: 'בָּשָׂר',
          withoutAnnouncement: 'בשר',
        },
        russian: 'мясо',
        transcription: 'basar',
      },
      {
        Icon: Drumstick,
        hebrew: {
          withAnnouncement: 'קְצִיצָה',
          withoutAnnouncement: 'קציצה',
        },
        russian: 'фарш',
        transcription: 'ktzitzah',
      },
      {
        Icon: SoilTemperatureFieldIcon,
        hebrew: {
          withAnnouncement: 'שֶׁמֶן צָמֵחַ',
          withoutAnnouncement: 'שמן צמח',
        },
        russian: 'растительное масло',
        transcription: 'shemen tzameach',
      },
      {
        Icon: RiceBowl01Icon,
        hebrew: {
          withAnnouncement: 'אוֹרֵז',
          withoutAnnouncement: 'אורז',
        },
        russian: 'рис',
        transcription: 'orez',
      },
      {
        Icon: SoilTemperatureFieldIcon,
        hebrew: {
          withAnnouncement: 'שֶׁמֶן חַמָּנִיָּה',
          withoutAnnouncement: 'שמן חמניה',
        },
        russian: 'подсолнечное масло',
        transcription: 'shemen chamaniyah',
      },
      {
        Icon: VegetarianFoodIcon,
        hebrew: {
          withAnnouncement: 'חֵמָאָה',
          withoutAnnouncement: 'חמאה',
        },
        russian: 'сливочное масло',
        transcription: 'chemah',
      },
      {
        Icon: VegetarianFoodIcon,
        hebrew: {
          withAnnouncement: 'בָּצָל',
          withoutAnnouncement: 'בצל',
        },
        russian: 'лук',
        transcription: 'batsal',
      },
      {
        Icon: Egg,
        hebrew: {
          withAnnouncement: 'בֵּיצִים',
          withoutAnnouncement: 'ביצים',
        },
        russian: 'яйца',
        transcription: 'beitzim',
      },
      {
        Icon: VegetarianFoodIcon,
        hebrew: {
          withAnnouncement: 'מֶלַח',
          withoutAnnouncement: 'מלח',
        },
        russian: 'соль',
        transcription: 'melach',
      },
      {
        Icon: Milk,
        hebrew: {
          withAnnouncement: 'חָלָב',
          withoutAnnouncement: 'חלב',
        },
        russian: 'молоко',
        transcription: 'chalav',
      },
      {
        Icon: Bread01Icon,
        hebrew: {
          withAnnouncement: 'לֶחֶם',
          withoutAnnouncement: 'לחם',
        },
        russian: 'хлеб',
        transcription: 'lechem',
      },
    ],
  },
  {
    title: 'Семья',
    Icon: ContactRound,
    slug: 'semya',
    words: [
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'אִמָּא',
          withoutAnnouncement: 'אמא',
        },
        russian: 'мама',
        transcription: 'imma',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'אַבָּא',
          withoutAnnouncement: 'אבא',
        },
        russian: 'папа',
        transcription: 'abba',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'סָבְתָא',
          withoutAnnouncement: 'סבתא',
        },
        russian: 'бабушка',
        transcription: 'savta',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'סַבָּא',
          withoutAnnouncement: 'סבא',
        },
        russian: 'дедушка',
        transcription: 'saba',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'בֵּן',
          withoutAnnouncement: 'בן',
        },
        russian: 'сын',
        transcription: 'ben',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'בַּת',
          withoutAnnouncement: 'בת',
        },
        russian: 'дочь',
        transcription: 'bat',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'אָח',
          withoutAnnouncement: 'אח',
        },
        russian: 'брат',
        transcription: 'ach',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'אָחוֹת',
          withoutAnnouncement: 'אחות',
        },
        russian: 'сестра',
        transcription: 'achot',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'דוֹד',
          withoutAnnouncement: 'דוד',
        },
        russian: 'дядя',
        transcription: 'dod',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'דוֹדָה',
          withoutAnnouncement: 'דודה',
        },
        russian: 'тётя',
        transcription: 'doda',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'בַּעַל',
          withoutAnnouncement: 'בעל',
        },
        russian: 'муж',
        transcription: 'baal',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'אִשָּׁה',
          withoutAnnouncement: 'אשה',
        },
        russian: 'жена',
        transcription: 'ishah',
      },
      {
        Icon: ContactRound,
        hebrew: {
          withAnnouncement: 'מִשְׁפָּחָה',
          withoutAnnouncement: 'משפחה',
        },
        russian: 'семья',
        transcription: 'mishpachah',
      },
    ],
  },
  {
    title: 'Местоимения (д.п)',
    Icon: CharacterPhoneticIcon,
    slug: 'mestoimeniya-dp',
    words: [
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹתִי',
          withoutAnnouncement: 'אותי',
        },
        russian: 'меня',
        transcription: 'oti',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹתְךָ',
          withoutAnnouncement: 'אותך',
        },
        russian: 'тебя (м.р)',
        transcription: 'otkha',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹתָךְ',
          withoutAnnouncement: 'אותך',
        },
        russian: 'тебя (ж.р)',
        transcription: 'otakh',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹתוֹ',
          withoutAnnouncement: 'אותו',
        },
        russian: 'его',
        transcription: 'oto',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹתָהּ',
          withoutAnnouncement: 'אותה',
        },
        russian: 'её',
        transcription: 'otah',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֹתָנוּ',
          withoutAnnouncement: 'אותנו',
        },
        russian: 'нас',
        transcription: 'otanu',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֶתְכֶם',
          withoutAnnouncement: 'אתכם',
        },
        russian: 'вас (м.р)',
        transcription: 'etkhem',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֶתְכֶן',
          withoutAnnouncement: 'אתכן',
        },
        russian: 'вас (ж.р)',
        transcription: 'etkhen',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֹתָם',
          withoutAnnouncement: 'אותם',
        },
        russian: 'их (м.р)',
        transcription: 'otam',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֹתָן',
          withoutAnnouncement: 'אותן',
        },
        russian: 'их (ж.р)',
        transcription: 'otan',
      },
    ],
  },
  {
    title: 'Союзы',
    Icon: CharacterPhoneticIcon,
    slug: 'soyuzi',
    words: [
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוֹ',
          withoutAnnouncement: 'אוֹ',
        },
        russian: 'или',
        transcription: 'o',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אֲבָל',
          withoutAnnouncement: 'אבל',
        },
        russian: 'но',
        transcription: 'aval',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'כִּי',
          withoutAnnouncement: 'כי',
        },
        russian: 'потому что',
        transcription: 'ki',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'שֶׁ',
          withoutAnnouncement: 'שֶׁ',
        },
        russian: 'который, что',
        transcription: 'she',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אוּלַי',
          withoutAnnouncement: 'אולי',
        },
        russian: 'может быть',
        transcription: 'ulay',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'אִם',
          withoutAnnouncement: 'אם',
        },
        russian: 'если',
        transcription: 'im',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'מַה',
          withoutAnnouncement: 'מה',
        },
        russian: 'что, что за',
        transcription: 'ma',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'כְּשֶׁ',
          withoutAnnouncement: 'כשֶׁ',
        },
        russian: 'когда',
        transcription: 'kesh',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'בְּעַד',
          withoutAnnouncement: 'בעד',
        },
        russian: 'за, в обмен на',
        transcription: 'bead',
      },
      {
        Icon: CharacterPhoneticIcon,
        hebrew: {
          withAnnouncement: 'בִּשְׁבִיל',
          withoutAnnouncement: 'בשְׁבִיל',
        },
        russian: 'ради, для',
        transcription: 'bishvil',
      },
    ],
  },
];
