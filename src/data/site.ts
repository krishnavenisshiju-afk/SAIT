import campus from "@/assets/campus.jpg";
import code from "@/assets/code.jpg";
import lab from "@/assets/lab.jpg";
import students from "@/assets/students.jpg";
import team from "@/assets/team.jpg";
import workshop from "@/assets/workshop.jpg";

export const images = { campus, code, lab, students, team, workshop };

export const events = [
  { id: 1, title: "TinkHerHack 3.0", date: "18 Oct 2026", category: "Hackathon", place: "Integrated IT Lab", image: code, status: "Upcoming", description: "A 24-hour women-led build sprint turning thoughtful ideas into useful digital products." },
  { id: 2, title: "Disha: Tech Careers", date: "24 Oct 2026", category: "Career", place: "Seminar Hall", image: students, status: "Upcoming", description: "A candid evening with alumni working across product, research, cloud and security." },
  { id: 3, title: "Open Source Weekend", date: "02 Nov 2026", category: "Workshop", place: "Lab II", image: workshop, status: "Upcoming", description: "Two practical days of Git, documentation, issue triage and first contributions." },
  { id: 4, title: "Cochin Code Jam", date: "12 Aug 2026", category: "Competition", place: "DCS Auditorium", image: lab, status: "Past", description: "An inter-collegiate competitive programming challenge for teams of three." },
  { id: 5, title: "Design Systems 101", date: "28 Jul 2026", category: "Workshop", place: "Media Studio", image: team, status: "Past", description: "A studio session on accessible, scalable interfaces for student builders." },
];

export const announcements = [
  { title: "Registrations open for TinkHerHack 3.0", category: "Registration", date: "14 Sep", urgent: true, body: "Student teams can register until 30 September. Beginners are warmly encouraged." },
  { title: "Executive committee applications", category: "Community", date: "12 Sep", urgent: false, body: "Applications for the 2026–27 SAIT executive committee close on 22 September." },
  { title: "Placement readiness mock interviews", category: "Placement", date: "08 Sep", urgent: false, body: "Final-year students may reserve one-to-one mock interview slots with alumni mentors." },
  { title: "Lab access during project week", category: "Department", date: "03 Sep", urgent: false, body: "Integrated IT Lab will remain open until 8 PM from 5–10 October." },
  { title: "Project showcase submissions", category: "Deadline", date: "01 Sep", urgent: true, body: "Submit abstracts and a working demo link before 20 September." },
];

export const people = [
  { name: "Dr. Meera Nair", role: "Faculty Coordinator", team: "Faculty", initials: "MN" },
  { name: "Dr. Arun Mathew", role: "Faculty Advisor", team: "Faculty", initials: "AM" },
  { name: "Nandana Krishnan", role: "President", team: "Executive", initials: "NK" },
  { name: "Adithya Menon", role: "Secretary", team: "Executive", initials: "AdM" },
  { name: "Fathima Riaz", role: "Technical Lead", team: "Tech", initials: "FR" },
  { name: "Joel Thomas", role: "Frontend Lead", team: "Tech", initials: "JT" },
  { name: "Devika Suresh", role: "Media Lead", team: "Media", initials: "DS" },
  { name: "Rohan Philip", role: "Events Lead", team: "Events", initials: "RP" },
  { name: "Neha Varghese", role: "Public Relations", team: "PR", initials: "NV" },
  { name: "Akhil Das", role: "Editorial Lead", team: "Content", initials: "AD" },
  { name: "Ananya Biju", role: "Design Lead", team: "Creative", initials: "AB" },
  { name: "Sreehari K.", role: "Visual Designer", team: "Creative", initials: "SK" },
];

export const projects = [
  { title: "Haritha", tag: "Climate Tech", text: "A campus energy dashboard that turns meter data into practical conservation goals.", image: campus },
  { title: "SignSpeak", tag: "Accessible AI", text: "A lightweight learning tool that helps beginners practise Indian Sign Language.", image: lab },
  { title: "QueueLess", tag: "Campus Utility", text: "A student-built booking system for shared labs, equipment and mentoring slots.", image: code },
];

export const companies = ["TCS", "IBM", "UST", "Infosys", "Experion", "Cognizant", "EY", "Fingent"];

export const achievements = [
  { year: "2026", title: "National Smart Campus Challenge — Winners", by: "Team Flux · Sustainable systems" },
  { year: "2025", title: "Best Student Chapter Initiative", by: "Kerala Technology Forum" },
  { year: "2025", title: "Three papers accepted at ICACCI", by: "Student research collective" },
  { year: "2024", title: "First place, Build for Kerala", by: "Team Haritha" },
  { year: "2023", title: "Open-source impact award", by: "SAIT Developer Community" },
];