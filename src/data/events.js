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
    title: "Nova Spark",
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
      "https://forms.gle/6wknFvxBgSYFfC7a7",
    image: ideathon,
  },
  {
    id: 2,
    title: "Nova Nexus",
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
    formLink: "https://forms.gle/4sAMbUUZf6vTwF7k6",
    image: quiz,
  },
  {
    id: 3,
    title: "Nova ActX",
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
    formLink: "https://forms.gle/LMUkjqyyn9MwFEF16",
    image:Dumb,
  },
  {
    id: 4,
    title: "Nova Run",
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
    formLink: "https://forms.gle/wH3XiwiuDoDR4RPK8",
    image: code,
  },
  {
    id: 5,
    title: " Mind the Matrix",
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
    formLink: "https://forms.gle/uWgo6XmNKFa5P4tn7",
    image: conn,
  },
  {
    id: 6,
    title: "Byte Blaze",
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
    formLink: "https://forms.gle/MUqzvbLk74Q8igJP8",
    image: hunt,
  },
  {
    id: 7,
    title: " Tech Troll",
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
    formLink: "https://forms.gle/ZU5yVBuFc6tgLqfd7",
    image: meme,
  },
  {
    id: 8,
    title: " PromptX Nova",
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
    formLink: "https://forms.gle/TdwdyawKcdMAwQW28",
    image: prompt,
  },
  {
    id: 9,
    title: "Tech Verdict",
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
    formLink: "https://forms.gle/SBNedGdMcmDpaCjC6",
    image: debate,
  },
];

export default events;
