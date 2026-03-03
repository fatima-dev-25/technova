import ideathon from "../assets/Images/ideathon.jpg";
import quiz from "../assets/Images/quiz.jpg";
import Dumb from "../assets/Images/dumb.jpg";
import code from "../assets/Images/code.jpg";
import conn from "../assets/Images/conn.jpg";
import hunt from "../assets/Images/hunt.jpg";
import meme from "../assets/Images/meme.jpg";
import prompt from "../assets/Images/prompt.jpg";
import debate from "../assets/Images/debate.jpg";

const events = [
  {
    id: 1,
    title: "Nova Run",
    original: "Code Relay",
    description:
      "A relay-style coding competition where each member solves one question in sequence.",
    guidelines: [
      "Each team must consist of 3–4 members.",
      "Only one system will be provided per team.",
      "Teams must complete questions sequentially.",
      "Only the active coder can use the keyboard.",
      "No internet or external devices allowed.",
      "Only provided IDE and compiler permitted.",
      "Judging based on correctness and efficiency."
    ],
    flow: [
      {
        title: "Round 1",
        details: "First member solves Question 1 within the time limit."
      },
      {
        title: "Round 2",
        details: "Second member solves Question 2 after Q1 completion."
      },
      {
        title: "Round 3",
        details: "Third member solves Question 3."
      },
      {
        title: "Round 4",
        details: "Fourth member solves Question 4."
      },
      {
        title: "Final Submission",
        details: "All solutions are evaluated and winners are announced."
      }
    ],
    time: "10:10 AM - 11:30 AM",
    venue: "A22 Lab",
    head: "Sharini",
    teamSize: "4 Members",
    formLink: "https://forms.gle/wH3XiwiuDoDR4RPK8",
    image: code
  },

  {
    id: 2,
    title: "Mind the Matrix",
    original: "Technical Connection",
    description:
      "Identify the hidden technical connection between image clues and score points with quick logical thinking.",
    guidelines: [
      "Teams of 2–3 members.",
      "Only one member may answer.",
      "Each question contains 2–4 image clues.",
      "Answer cannot be modified once given.",
      "Incorrect answers pass to other teams.",
      "1 point per correct answer.",
      "Judges' decision is final."
    ],
    flow: [
      {
        title: "Question Display",
        details: "Image clues are displayed for analysis."
      },
      {
        title: "Discussion",
        details: "Teams discuss internally within time limit."
      },
      {
        title: "Answer Attempt",
        details: "One member raises hand to answer."
      },
      {
        title: "Scoring",
        details: "Correct answers earn 1 point."
      },
      {
        title: "Result",
        details: "Highest score wins."
      }
    ],
    time: "11:30 AM - 12:40 PM",
    venue: "G01",
    head: "Narayani",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/uWgo6XmNKFa5P4tn7",
    image: conn
  },

  {
    id: 3,
    title: "Tech Troll",
    original: "Tech Meme",
    description:
      "Turn technical concepts into creative and relatable memes by blending logic with humor.",
    guidelines: [
      "Teams of 2–3 members.",
      "Meme must be original.",
      "Created during event time.",
      "Must include caption and technical concept.",
      "Offensive content leads to disqualification.",
      "Judges’ decision is final."
    ],
    flow: [
      {
        title: "Topic Allocation",
        details: "Each team receives a technical topic."
      },
      {
        title: "Meme Creation",
        details: "Teams design meme within 30 minutes."
      },
      {
        title: "Presentation",
        details: "Teams explain concept and humor logic."
      }
    ],
    time: "1:30 PM - 2:15 PM",
    venue: "G01",
    head: "Narayani",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/ZU5yVBuFc6tgLqfd7",
    image: meme
  },

  {
    id: 4,
    title: "PromptX Nova",
    original: "AI Prompting",
    description:
      "Craft powerful AI prompts to generate creative and optimized outputs within constraints.",
    guidelines: [
      "Individual or team of two allowed.",
      "Only provided AI tools permitted.",
      "No plagiarism allowed.",
      "Prompt history must be shown.",
      "Time limits strictly followed.",
      "Judges’ decision is final."
    ],
    flow: [
      {
        title: "Round 1",
        details: "Basic prompting tasks."
      },
      {
        title: "Round 2",
        details: "Advanced optimization challenge."
      },
      {
        title: "Final Round",
        details: "Surprise real-time refinement challenge."
      }
    ],
    time: "1:30 PM - 2:15 PM",
    venue: "A22",
    head: "Belsi Sirina",
    teamSize: "1-2 Members",
    formLink: "https://forms.gle/TdwdyawKcdMAwQW28",
    image: prompt
  },

  {
    id: 5,
    title: "Tech Verdict",
    original: "Debate",
    description:
      "Engage in structured tech debates and defend your stance with logic and confidence.",
    guidelines: [
      "Strictly follow time limits.",
      "Only registered members may speak.",
      "No offensive language.",
      "Arguments must be relevant.",
      "Judges’ decision is final."
    ],
    flow: [
      {
        title: "Preliminary Round",
        details: "All teams present arguments."
      },
      {
        title: "Final Round",
        details: "Top teams compete with rebuttals."
      },
      {
        title: "Result",
        details: "Winner and Runner-up declared."
      }
    ],
    time: "2:15 PM - 3:00 PM",
    venue: "Main Auditorium",
    head: "Prof. Orion",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/SBNedGdMcmDpaCjC6",
    image: debate
  }
];

export default events;