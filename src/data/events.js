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
    heading:"Nova Spark",
    title: "Nova Spark\u00A0 - \u00A0Ideathon",
    original: "Ideathon",
    description:
      "Present innovative solutions to real-world problems and compete with the best ideas.",
     guidelines: [
    "Each team must consist of 2–4 members.",
    "Ideas must align with the given theme",
    "Solutions should be innovative, feasible, and impactful.",
    "Each team gets 5 minutes for presentation and 2–3 minutes for Q&A.",
    "Plagiarism is strictly prohibited.",
    "Judges’ decision will be final."
  ],
      flow: [
    {
      title: "Round 1 – Idea Submission",
      details:
        "Teams submit their idea related to the given problem statement."
    },
    {
      title: "Round 2 – Presentation",
      details:
        "Each team presents their solution including problem statement, proposed solution, technology used, target users, implementation plan, and expected impact."
    },
    {
      title: "Round 3 – Q&A Session",
      details:
        "Judges evaluate the idea based on innovation, feasibility, impact, and response to questions."
    },
  ],
    time: "8:15 - 9:15 AM",
    venue: "G01",
    head: "Sharini - II year",
    teamSize: "4 Members",
    formLink: "https://forms.gle/6wknFvxBgSYFfC7a7",
    image: ideathon
  },

  {
    id: 2,
    heading:"Nova Nexus",
    title: "Nova Nexus\u00A0 - \u00A0Technical Quiz",
    original: "Technical Quiz",
    description:
      "Test your technical knowledge and compete in an exciting multi-round quiz challenge.",
    guidelines: [
    "Each team must consist of 2–3 members.",
    "Participants must register before the event.",
    "Only one member can answer on behalf of the team.",
    "Use of mobile phones or unfair means is strictly prohibited.",
    "Points will be awarded for correct answers only.",
    "Judges’ decision will be final."
    ],
  flow: [
    {
      title: "Round 1 – Preliminary Round",
      details:
        "A set of multiple-choice or rapid-fire questions will be asked. Teams with highest scores qualify for the next round."
    },
    {
      title: "Round 2 – Technical Challenge",
      details:
        "Questions based on core technical concepts like programming, AI, cybersecurity, networking, and general technology trends."
    },
    {
      title: "Round 3 – Rapid Fire / Buzzer Round",
      details:
        "Fast-paced questions where teams must answer quickly to gain points."
    }
  ],
    time: "9:15 - 9:50 AM",
    venue: "G01",
    head: "Austin Dijai - II year",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/4sAMbUUZf6vTwF7k6",
    image: quiz
  },

  {
    id: 3,
    heading:"Nova ActX",
    title: "Nova ActX\u00A0 - \u00A0Dumb Charades",
    original: "Dumb Charades - II year",
    description:
      "Act it out without words and let your team guess the technical term in this fun-filled challenge",
    guidelines: [
    "Each team must consist of 2–3 members.",
    "Only actions and gestures are allowed — no speaking or lip movement.",
    "Use of mobile phones or external help is strictly prohibited.",
    "Each team will get a fixed time limit to guess the word.",
    "Skipping may be allowed with penalty (if applicable).",
    "Judges’ decision will be final."
   ],
    flow: [
    {
      title: "Round 1 – Technical Terms",
      details:
        "Teams act out basic technical words or concepts within the given time limit."
    },
    {
      title: "Round 2 – Rapid Guess",
      details:
        "Teams must guess as many technical terms as possible in a short time to score maximum points."
    },
    {
      title: "Final Scoring",
      details:
        "The team with the highest total correct guesses will be declared the winner."
    }
  ],
    time: "10:10 am- 11:30 am",
    venue: "G01",
    head: "Venu Aravind - II year",
    teamSize: "3 Members",
    formLink: "https://forms.gle/LMUkjqyyn9MwFEF16",
    image: Dumb
  },

  {
    id: 4,
    heading:"Nova Run",
    title: "Nova Run\u00A0 - \u00A0Code Relay",
    original: "Code Relay",
    description:
      "A relay-style coding competition where each member solves one question in sequence.",
    guidelines: [
      "Teams of 3–4 members.",
      "Only one system per team.",
      "Sequential problem solving mandatory.",
      "No internet allowed.",
      "Judging based on output and efficiency."
    ],
    flow: [
      { title: "Round 1", details: "First member solves Question 1." },
      { title: "Round 2", details: "Second member solves Question 2." },
      { title: "Round 3", details: "Third member solves Question 3." },
      { title: "Round 4", details: "Fourth member solves Question 4." }
    ],
    time: "10:10 - 11:30 AM",
    venue: "A22 Lab",
    head: "Sharini - II year",
    teamSize: "4 Members",
    formLink: "https://forms.gle/wH3XiwiuDoDR4RPK8",
    image: code
  },

  {
    id: 5,
    heading:"Mind the Matrix",
    title: "Mind the Matrix\u00A0 - \u00A0Connections",
    original: "Connections",
    description:
      "Identify the hidden technical connection between images and score points with logical thinking.",
    guidelines: [
      "Teams of 3-4 members.",
      "One member raises hand to answer.",
      "Each question has 2–4 image clues.",
      "Incorrect answers pass to other teams.",
      "1 point per correct answer."
    ],
    flow: [
      { title: "Clue Display", details: "Images displayed to all teams." },
      { title: "Discussion", details: "Teams discuss internally." },
      { title: "Answer Attempt", details: "One response allowed per team." },
      { title: "Scoring", details: "Correct answer earns 1 point." }
    ],
    time: "11:30 - 12:40 PM",
    venue: "G01",
    head: "Narayani - II year",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/uWgo6XmNKFa5P4tn7",
    image: conn
  },

  {
    id: 6,
    heading:"Byte Blaze",
    title: "Byte Blaze\u00A0 - \u00A0Treasure Hunt",
    original: "Treasure Hunt",
    description:
      "Solve clues, decode challenges, and race against time to find the hidden treasure.",
      guidelines: [
    "Each team must consist of 2–4 members.",
    "Teams must stay together throughout the event.",
    "Clues must not be damaged or removed from their location.",
    "Use of mobile phones may be restricted as per rules.",
    "Any form of unfair means will lead to disqualification.",
    "Judges’ decision will be final."
   ],
      flow: [
    {
      title: "Round 1 – Clue Decoding",
      details:
        "Teams solve technical or logical riddles to unlock the next location."
    },
    {
      title: "Round 2 – On-Field Hunt",
      details:
        "Participants search for hidden clues by solving puzzles and completing tasks."
    },
    {
      title: "Final Treasure",
      details:
        "The first team to solve all clues and reach the final destination wins the treasure."
    }
  ],
    time: "11:30 - 12:40 PM",
    venue: "A22",
    head: "Fatima Theresa - III year",
    teamSize: "3-4 Members",
    formLink: "https://forms.gle/MUqzvbLk74Q8igJP8",
    image: hunt
  },

  {
    id: 7,
    heading:"Tech Troll",
    title: "Tech Troll\u00A0 - \u00A0 Tech Meme",
    original: "Tech Meme",
    description:
      "Turn technical concepts into creative, relatable memes by blending logic with humor.",
    guidelines: [
      "Teams of 2–3 members.",
      "Meme must be original.",
      "Created during event time.",
      "Offensive content leads to disqualification."
    ],
    flow: [
      { title: "Topic Allocation", details: "Technical topic given to team." },
      { title: "Creation", details: "Design meme within time limit." },
      { title: "Presentation", details: "Explain technical concept and humor." }
    ],
    time: "1:30 - 2:15 PM",
    venue: "G01",
    head: "Narayani - II year",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/ZU5yVBuFc6tgLqfd7",
    image: meme
  },

  {
    id: 8,
    heading:"PromptX Nova",
    title: "PromptX Nova\u00A0 - \u00A0AI Prompting",
    original: "AI Prompting",
    description:
      "Craft powerful AI prompts to generate creative and optimized outputs within constraints.",
    guidelines: [
      "Individual or team of two allowed.",
      "Only provided AI tools permitted.",
      "No plagiarism allowed.",
      "Prompt history must be shown.",
      "Time limits strictly followed."
    ],
    flow: [
      { title: "Basic Round", details: "Participants will be given simple tasks." },
      { title: "Advanced Round", details: "Complex tasks like generate a business idea, create UI/UX ideas." },
      { title: "Final Round", details: "Real-time problem solving challenge" }
    ],
    time: "1:30 - 2:15 PM",
    venue: "A22",
    head: "Belsi Sirina - III year",
    teamSize: "1-2 Members",
    formLink: "https://forms.gle/TdwdyawKcdMAwQW28",
    image: prompt
  },

  {
    id: 9,
    heading:"Tech Verdict",
    title: "Tech Verdict\u00A0 - \u00A0Debate",
    original: "Debate",
    description:
      "Participate in a dynamic two-round debate where teams battle with logic and confidence.",
    guidelines: [
      "Strictly adhere to time limits.",
      "Only registered members may speak.",
      "No offensive language.",
      "Judges decision is final."
    ],
    flow: [
      { title: "Preliminary Round", details: "All teams debate." },
      { title: "Final Round", details: "Top teams compete." },
      { title: "Result", details: "Winner and Runner-Up declared." }
    ],
    time: "2:15 - 3:00 PM",
    venue: "Main Auditorium",
    head: "Praicy Precilla - III year",
    teamSize: "2-3 Members",
    formLink: "https://forms.gle/SBNedGdMcmDpaCjC6",
    image: debate
  }
];

export default events;