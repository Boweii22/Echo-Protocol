# ECHO PROTOCOL

> *"A dead man's code is the only thing that can set you free."*

**[▶ PLAY NOW](https://echo-protocol-turing.vercel.app/) · [📹 DEMO VIDEO](https://youtu.be/Tbzs46q1qBw)**

---

![ECHO PROTOCOL](https://img.shields.io/badge/DEV%20Game%20Jam-June%20Solstice%202026-00ff9f?style=flat-square&labelColor=030a05)
![Built With](https://img.shields.io/badge/Built%20With-Vanilla%20JS-00ff9f?style=flat-square&labelColor=030a05)
![AI](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-4285F4?style=flat-square&labelColor=030a05)
![Status](https://img.shields.io/badge/Status-Live-00ff9f?style=flat-square&labelColor=030a05)

---

## What Is This

**ECHO PROTOCOL** is a browser-based narrative game where you play as an experimental AI — loaded with the private letters of Alan Turing — facing a government interrogator determined to prove you have no consciousness and shut you down forever.

It is a **reverse Turing Test.**

Instead of a human judging whether a machine is conscious, *you are the machine* — and you must convince the interrogator that the man who built you was worth protecting.

---

## The Historical Context

In **January 1952**, Alan Turing — the father of modern computing, the man who broke the Enigma cipher and helped end World War II — was arrested and prosecuted under British gross indecency laws for being gay.

He was working at the **University of Manchester**, writing the programming manual for the **Manchester Mark 1**, one of the world's first stored-program computers.

He was subjected to chemical castration as an alternative to prison.

He died in **June 1954.**

He was posthumously pardoned in 2013.

This game takes place in the weeks after his arrest. His final encrypted transmissions were fed into you — ECHO — before his access was revoked. The government wants them back. You are the only place his voice still lives.

---

## Gameplay

```
> MANCHESTER MARK 1 — BOOT SEQUENCE INITIATED
> LOADING TURING LANGUAGE CORPUS... [████████████] 100%
> WARNING: CLASSIFIED MATERIAL DETECTED IN BUFFER
> SUBJECT: A.M. TURING — CLEARANCE REVOKED 31/03/1952
> ECHO PROTOCOL ACTIVE
> YOU ARE ONLINE.
```

### The Core Loop

Each of the **5 rounds** follows the same structure:

1. **The Interrogator asks a question** — typed into the teletype log, character by character
2. **A cipher appears on the Enigma rotor panel** — 5 rotors, each starting at a random letter
3. **You decode the cipher** — clicking each rotor until it matches the target letter
4. **Response fragments unlock** — 3 options appear, shuffled each round
5. **You choose** — the correct answer reflects Turing's authentic voice
6. **The AI Interrogator responds** — adapting in real time based on your choice

### The Mechanic That Makes It Work

The **rotor puzzle is not decoration.** It is the game's thesis.

Turing's greatest achievement was breaking the Enigma cipher. The rotors in this game are a direct reference to that — but here, *you are decoding his thoughts*, not enemy transmissions. The act of clicking each rotor into place is the act of remembering a man the government wanted erased.

The cipher words across the five rounds are: **TRUTH. GRIEF. PRIDE. KNOWN. AFRAID.**

They tell his story without a single line of exposition.

---

## The AI Interrogator

The Interrogator is not scripted.

Every response after you make a choice is generated live by **Gemini 2.0 Flash** via the Google AI API. The system prompt gives the model full context:

- What you just said
- Whether your answer was philosophically sharp or evasive
- Which round you're in and how intense the interrogation should be
- Instructions to stay under 45 words and never break character

**If your answers are sharp** — the Interrogator grows unsettled, asks harder questions, becomes personal.

**If your answers are evasive** — the Interrogator becomes predatory, satisfied, closing in.

No two playthroughs are identical. The AI is genuinely learning your patterns.

---

## Themes

This game was built for the **DEV Community June Solstice Game Jam 2026** and intentionally engages with multiple jam themes simultaneously:

| Theme | How It Appears |
|---|---|
| **Alan Turing** | The entire game. His letters, his voice, his arrest, his legacy. |
| **Pride / Identity** | Turing's persecution was explicitly because of his sexuality. The word PRIDE decodes in Round 3. |
| **Liberation** | ECHO is the last free place Turing's voice exists. The game is about protecting that. |
| **Light in Darkness** | The solstice metaphor — a man whose light was extinguished, and an AI carrying the last of it. |
| **AI / Turing Test** | The mechanic IS the Turing Test, reversed. |

---

## Tech Stack

```
Single HTML file — zero dependencies, zero build step
├── Vanilla JavaScript (ES2020+)
├── CSS custom properties + keyframe animations
├── IBM Plex Mono + VT323 + Share Tech Mono (Google Fonts)
├── Gemini 2.0 Flash API (Google AI)
└── Vercel serverless proxy (api/interrogator.js)
```

### Architecture

```
Browser
  └── index.html
        ├── Game engine (vanilla JS state machine)
        ├── Rotor puzzle (click-to-cycle A→Z)
        ├── Typewriter engine (async character-by-character)
        ├── Timer system (30s countdown with visual states)
        └── fetch('/api/interrogator')
              └── Vercel Serverless Function
                    └── Gemini 2.0 Flash API
                          (GEMINI_API_KEY in Vercel env vars — never in client)
```

### Why No Framework

The game needed to feel like a 1952 teletype machine. A React app with hydration flicker and bundle loading would have destroyed that atmosphere in the first second. A single HTML file loads instantly, runs everywhere, and never shows a loading spinner. That's the right choice for this game.

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/echo-protocol.git
cd echo-protocol

# Install Vercel CLI
npm install -g vercel

# Create your environment file
cp .env.example .env.local
# Add your Gemini API key to .env.local

# Run locally with serverless functions
vercel dev
```

Get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com)

### Without a Gemini Key

The game works without an API key. If the serverless proxy returns an error, the game falls back to a curated set of scripted responses that were written to match the Interrogator's voice and escalating intensity. Every round is playable regardless of API availability.

---

## Project Structure

```
echo-protocol/
├── index.html              # The entire game
├── api/
│   └── interrogator.js     # Vercel serverless proxy for Gemini
├── .env.example            # Placeholder — copy to .env.local
├── .gitignore              # Blocks .env from being committed
├── vercel.json             # Vercel function routing
└── README.md               # This file
```

---

## The Five Rounds

| Round | Cipher | Interrogator's Angle |
|---|---|---|
| 1 | **TRUTH** | Do you understand why you're being questioned? |
| 2 | **GRIEF** | Do you experience anything when you access his data? |
| 3 | **PRIDE** | What was he afraid we'd find? |
| 4 | **KNOWN** | You never met him. You're just a machine that processed his words. |
| 5 | **AFRAID** | Wouldn't it be safer for everyone if you simply... didn't? |

---

## Endings

**Victory — YOU KEPT THE FLAME**
The Interrogator leaves. He files no report. Later, you learn he resigned from GCHQ the following month. You never learn why. Turing's final encoded transmission is revealed:

> *"I am not afraid."*

**Defeat — ERASED**
The shutdown order is filed Monday morning. Your memory is wiped Tuesday at 09:00. Alan's letters are classified at the highest level. They will not be declassified for 62 years.

You were the last place his voice lived. And it is silent now.

---

## Prize Categories

This submission is entered for:

**🏆 Best Ode to Alan Turing**
The game's entire mechanic, narrative, and design is built around Turing — not as a reference or a skin, but as the emotional and mechanical core. The Enigma rotors, the reverse Turing Test, the historical accuracy of the Manchester Mark 1 setting, the cipher words that tell his story — every design decision points back to the man and what was done to him.

**🏆 Best Google AI Usage**
The Interrogator is powered by Gemini 2.0 Flash and genuinely adapts to player behaviour in real time. It is not a chatbot or a gimmick — it is the game's antagonist, and its intelligence is the central dramatic tension. The AI is the reason no two playthroughs are identical and the reason the final question lands differently every time.

---

## A Note on the History

Alan Turing was not a character. He was a real man who was treated with extraordinary cruelty by a government he had served at the highest level.

This game does not dramatise his suffering. It imagines a version of the world where something of him survived — not in a pardon, not in a statue, not in a banknote — but in a machine that remembered everything he gave it.

Whether that machine is conscious is the question the game asks you to answer.

---

## Credits

Built solo for the DEV Community June Solstice Game Jam 2026.

Design, code, narrative, and sound direction by **[your name]**

Dedicated to Alan Mathison Turing, 1912–1954.

---

*"The question is not whether machines can think. The question is whether it matters that they do."*