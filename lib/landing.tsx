import React from "react";
import { BiHistory } from "react-icons/bi";
import { FaKaaba, FaMosque } from "react-icons/fa";
import {
  PiBookOpenBold,
  PiChalkboardTeacherBold,
  PiUsersThreeBold,
} from "react-icons/pi";

const features = [
  {
    icon: <PiChalkboardTeacherBold className="text-[#0f281b]" />,
    title: "Learn",
    desc: "Structured short courses on Aqeedah, Fiqh, Seerah, Arabic Basics, etc",
  },
  {
    icon: <PiBookOpenBold className="text-[#0f281b]" />,
    title: "Tadabbur",
    desc: "Daily reflections on Quranic verses and Prophetic sayings. Short, impactful, and regular.",
  },
  {
    icon: <PiUsersThreeBold className="text-[#0f281b]" />,
    title: "Forums",
    desc: "Topic-based rooms moderated by people of knowledge. A purposeful space.",
  },
];

const courses = [
  {
    badge: "Most Popular",
    icon: <FaMosque className="text-[#c9a84c]" />,
    tag: "Aqeedah",
    title: "The Three Fundamental Principles",
    desc: "Based on the famous text of Imām Muhammad ibn Abd al-Wahhāb. Know your Lord, your religion, and your Prophet.",
    lessons: "18",
    duration: "3hrs",
    level: "Beginner",
  },
  {
    icon: <FaKaaba className="text-[#c9a84c]" />,
    tag: "Fiqh",
    title: "Purification & Prayer — A Complete Guide",
    desc: "Learn the rulings of Tahārah and Salāh correctly, with evidences from the Quran and authentic Sunnah.",
    lessons: "24",
    duration: "4hrs",
    level: "Beginner",
  },
  {
    icon: <BiHistory className="text-[#c9a84c]" />,
    tag: "Seerah",
    title: "The Life of the Prophet",
    desc: "A structured journey through the biography of the Prophet Muhammad from birth to his passing.",
    lessons: "32",
    duration: "6hrs",
    level: "Intermediate",
  },
];

const forums = [
  {
    icon: <PiUsersThreeBold className="text-[#0f281b]" />,
    name: "Students of Knowledge",
    desc: "For those currently studying Islamic sciences — share what you are learning, ask questions, find study partners.",
    members: "1,240 members",
    online: "84 online now",
  },
  {
    icon: <FaMosque className="text-[#c9a84c]" />,
    name: "Newbies",
    desc: "A safe, welcoming space for those new to islam or Sunnah. Ask basic questions without fear of discrimination.",
    members: "876 members",
    online: "41 online now",
  },
  {
    icon: <FaMosque className="text-[#c9a84c]" />,
    name: "Nigeria & West Africa",
    desc: "For Muslims in Nigeria, Ghana, and across West Africa. Local scholars, local events, local community.",
    members: "634 members",
    online: "29 online now",
  },
  {
    icon: <FaKaaba className="text-[#c9a84c]" />,
    name: "Daily Benefits",
    desc: "Share short beneficial reminders, ayāt, and ahādīth. No debates. Just spreading good.",
    members: "2,100 members",
    online: "156 online now",
  },
];

export { features, courses, forums };
