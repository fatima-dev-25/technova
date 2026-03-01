import ideathon from "../assets/Images/ideathon.jpg";
import quiz from "../assets/Images/quiz.jpg";
import Dumb from "../assets/Images/dumb.jpg";
import code from "../assets/Images/code.jpg";
import conn from "../assets/Images/conn.jpg";
import hunt from "../assets/Images/hunt.jpg";
import meme from "../assets/Images/meme.jpg";
import prompt from "../assets/Images/prompt.jpg";
import debate from "../assets/Images/debate.jpg";
import { image } from "framer-motion/client";
const events = [
  {
    id: 1,
    title: "NovaSpark",
    original: "Ideathon",
    description:
      "A high-intensity idea battle where participants brainstorm innovative solutions to real-world tech problems within a limited time.",
    guidelines: [
      "Teams must consist of 2-4 members",
      "Ideas must be original",
      "Presentation time is 5 minutes",
    ],
    time: "8:15 - 9:15 AM",
    venue: "G01",
    head: "Sharini",
    teamSize: "2-3 Members",
    formLink:
      "https://docs.google.com/forms/d/1_RB9qu1uzKiTqXKKfXTd8cFbulSCFOPbE2mkeVM6b1I/edit",
    image: ideathon,
  },
  {
    id: 2,
    title: "Cryptic Cognition",
    original: "Technical Quiz",
    description:
      "A thrilling quiz battle covering programming, AI, cybersecurity, and emerging technologies.",
    guidelines: [
      "Individual participation allowed",
      "No electronic devices permitted",
      "Multiple elimination rounds",
    ],
    time: "9:15 - 9:50 AM",
    venue: "G01",
    head: "Austin Djay",
    teamSize: "2-3 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_2",
    image: quiz,
  },
  {
    id: 3,
    title: "Shadow Signals",
    original: "Dumb Charades",
    description:
      "Act out technical words and concepts without speaking while your team guesses the correct term.",
    guidelines: [
      "No verbal hints allowed",
      "Time limit per round: 60 seconds",
      "Judges decision is final",
    ],
    time: "10:10 - 11:30 AM",
    venue: "G01",
    head: "Venu Aravind",
    teamSize: "3 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_3",
    image:Dumb,
  },
  {
    id: 4,
    title: "Midnight Code Rush",
    original: "Code Relay",
    description:
      "A relay-style coding challenge where teammates solve parts of a problem sequentially under time pressure.",
    guidelines: [
      "Each member codes one segment",
      "No external help allowed",
      "Time-based scoring",
    ],
    time: "10:10 - 11:30 AM",
    venue: "A22 Lab",
    head: "Sharini",
    teamSize: "4 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_4",
    image: code,
  },
  {
    id: 5,
    title: "Web of Whispers",
    original: "Connections",
    description:
      "Find hidden connections between seemingly unrelated tech clues in this brain-twisting challenge.",
    guidelines: [
      "Teams of 2-3",
      "No internet access allowed",
      "Clue sheets will be provided",
    ],
    time: "11:30 AM - 12:40 PM",
    venue: "G01",
    head: "Narayani",
    teamSize: "2-3 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_5",
    image: conn,
  },
  {
    id: 6,
    title: "Haunted Hunt",
    original: "Treasure Hunt",
    description:
      "A campus-wide tech-themed treasure hunt filled with puzzles, riddles, and hidden QR codes.",
    guidelines: [
      "Follow safety rules",
      "Solve clues to proceed",
      "First team to finish wins",
    ],
    time: "11:30 AM - 12:40 PM",
    venue: "A22",
    head: "Prof. Moon",
    teamSize: "3-4 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_6",
    image: hunt,
  },
  {
    id: 7,
    title: "Meme from the Crypt",
    original: "Tech Meme",
    description:
      "Create hilarious yet meaningful tech memes based on given themes within the time limit.",
    guidelines: [
      "Original content only",
      "No offensive material",
      "Submit in image format",
    ],
    time: "1:30 PM - 2:15 PM",
    venue: "G01",
    head: "Narayani",
    teamSize: "1-2 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_7",
    image: meme,
  },
  {
    id: 8,
    title: "Prompt of the Damned",
    original: "AI Prompting",
    description:
      "Craft powerful AI prompts to generate the most accurate and creative outputs within constraints.",
    guidelines: [
      "Use provided AI tools only",
      "Evaluation based on creativity",
      "No plagiarized prompts",
    ],
    time: "1:30 PM - 2:15 PM",
    venue: "A22",
    head: "Belsi Sirina",
    teamSize: "1-2 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_8",
    image: prompt,
  },
  {
    id: 9,
    title: "Graveyard Debate",
    original: "Debate",
    description:
      "Engage in intense tech debates on futuristic and controversial technology topics.",
    guidelines: [
      "Each speaker gets 3 minutes",
      "Respect opposing views",
      "Topic revealed 30 mins before start",
    ],
    time: "2:15 PM - 3:00 PM",
    venue: "Main Auditorium",
    head: "Prof. Orion",
    teamSize: "2-3 Members",
    formLink: "PASTE_GOOGLE_FORM_LINK_9",
    image: debate,
  },
];

export default events;
