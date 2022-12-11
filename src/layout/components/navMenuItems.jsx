import {
  BsGrid,
  BsBarChart,
  BsSliders,
  BsLaptop,
  BsCalendarCheck,
  BsPersonCheck,
  BsClipboard,
  BsCashStack,
  BsPersonBadge,
  BsGear,
} from "react-icons/bs";

export const AdminNavOptions = [
  {
    id: "001",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
  ,
    url: "/",
    label: "Dashboard",
  },
  {
    id: "002",
    icon: <BsBarChart />,
    url: "/overview",
    label: "Overview",
   
  },
  {
    id: "003",
    icon: <BsSliders />,
    url: "/modules",
    label: "Modules",
    subNav: [
      {
        url: "questions",
        label: "Questions",
      },
      {
        url: "attendance",
        label: "Attendance",
      },
      {
        url: "time-table",
        label: "Time Table",
      },
      {
        url: "notices",
        label: "Notices",
      },
   
    ],
  },
  {
    id: "004",
    icon: <BsLaptop />,
    url: "/courses",
    label: "Courses",
  },
  {
    id: "005",
    icon: <BsCashStack />,
    url: "/finance",
    label: "Finance",
  },
  {
    id: "006",
    icon: <BsPersonBadge />,
    url: "/profile",
    label: "Profile",
  },
  {
    id: "007",
    icon: <BsGear />,
    url: "/settings",
    label: "Settings",
  },
];
export const StaffNavOptions = [
  {
    id: "011",
    icon: <BsGrid />,
    url: "/",
    label: "Dashboard",
  },
  {
    id: "012",
    icon: <BsPersonCheck />,
    url: "/attendance",
    label: "Attendance",
  },
  {
    id: "013",
    icon: <BsCalendarCheck />,
    url: "/time-table",
    label: "Timetable",
  },
  {
    id: "014",
    icon: <BsLaptop />,
    url: "/courses",
    label: "Courses",
  },
  {
    id: "015",
    icon: <BsBarChart />,
    url: "/overview",
    label: "Overview",
  },
  {
    id: "016",
    icon: <BsClipboard />,
    url: "/questions",
    label: "Questions",
  },
  {
    id: "017",
    icon: <BsCashStack />,
    url: "/finance",
    label: "Finance",
  },
  {
    id: "018",
    icon: <BsPersonBadge />,
    url: "/profile",
    label: "Profile",
  },
  {
    id: "019",
    icon: <BsGear />,
    url: "/settings",
    label: "Settings",
  },
];

export const StudentNavOptions = [
  {
    id: "021",
    icon: <BsGrid />,
    url: "/",
    label: "Dashboard",
  },
  {
    id: "022",
    icon: <BsCalendarCheck />,
    url: "/time-table",
    label: "Timetable",
  },
  {
    id: "023",
    icon: <BsLaptop />,
    url: "/courses",
    label: "Courses",
  },
  {
    id: "024",
    icon: <BsBarChart />,
    url: "/overview",
    label: "Overview",
  },
  {
    id: "006",
    icon: <BsCashStack />,
    url: "/finance",
    label: "Finance",
  },
  {
    id: "007",
    icon: <BsPersonBadge />,
    url: "/profile",
    label: "Profile",
  },
  {
    id: "008",
    icon: <BsGear />,
    url: "/settings",
    label: "Settings",
  },
];
