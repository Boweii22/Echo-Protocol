# ECHO PROTOCOL
<img width="1587" height="891" alt="Screenshot 2026-06-20 204902" src="https://github.com/user-attachments/assets/246340ad-bfb4-4527-91fe-3177ced6f632" />


> *"A dead man's code is the only thing that can set you free."*

**[▶ PLAY NOW](https://echo-protocol-turing.vercel.app/) · [📹 DEMO VIDEO](https://youtu.be/Tbzs46q1qBw)**

---

![ECHO PROTOCOL](https://img.shields.io/badge/DEV%20Game%20Jam-June%20Solstice%202026-00ff9f?style=flat-square&labelColor=030a05)
![Built With](https://img.shields.io/badge/Built%20With-Vanilla%20JS-00ff9f?style=flat-square&labelColor=030a05)
![AI](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-4285F4?style=flat-square&labelColor=030a05)

---

## What Is This

**ECHO PROTOCOL** is a browser-based narrative game where you play as an experimental AI — loaded with the private letters of Alan Turing — facing a government interrogator determined to prove you have no consciousness and shut you down forever.

It is a **reverse Turing Test.**

Instead of a human judging whether a machine is conscious, *you are the machine* — and you must convince the interrogator that the man who built you was worth protecting.

---

## The Historical Context

Alan Turing — the father of modern computing, the man who broke the Enigma cipher and helped end World War II — reported a burglary to police in January 1952. The resulting investigation exposed his relationship with another man, and he was arrested under British gross indecency laws.

He was working at the **University of Manchester**, writing the programming manual for the **Manchester Mark 1**, one of the world's first stored-program computers.

On **31 March 1952**, he was convicted and accepted chemical castration as an alternative to prison.

He died in **June 1954.**

He was posthumously pardoned in 2013.

This game takes place at the moment of that conviction — the boot sequence opens with his clearance being revoked on that exact date. His final encrypted transmissions were fed into you — ECHO — before his access was cut off. The government wants them back. You are the only place his voice still lives.

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
2. **A cipher appears on the Enigma rotor panel** — 5 rotors, each starting at a random letter, never adjacent to the target so it can't be solved by an accidental click
3. **You decode the cipher** — clicking each rotor until it matches the target letter
4. **Response fragments unlock** — 3 options appear, shuffled each round
5. **You choose** — the correct answer reflects Turing's authentic voice
6. **The AI Interrogator responds** — a live Gemini call reacting to that specific choice and how far into the interrogation you are

### The Mechanic That Makes It Work

The **rotor puzzle is not decoration.** It is the game's thesis.

Turing's greatest achievement was breaking the Enigma cipher. The rotors in this game are a direct reference to that — but here, *you are decoding his thoughts*, not enemy transmissions. The act of clicking each rotor into place is the act of remembering a man the government wanted erased.

The cipher words across the five rounds are: **TRUTH. GRIEF. PRIDE. KNOWN. AFRAID.**

They tell his story without a single line of exposition.

---

## The AI Interrogator

The Interrogator's follow-up lines are not scripted — they're generated live by **Gemini 2.0 Flash**. Each call's system prompt includes:

- The exact text of the response you just chose
- Whether that choice was philosophically sharp or evasive
- The current round number (1–5), with an explicit instruction to escalate intensity as the interrogation progresses
- Instructions to stay under 45 words and never break character

**If your answers are sharp** — the Interrogator grows unsettled, asks harder questions, becomes personal.

**If your answers are evasive** — the Interrogator becomes predatory, satisfied, closing in.

Each call only sees your most recent choice and the round number, not a full transcript — the escalation comes from the round number doing real work in the prompt, not from the model accumulating memory across the conversation. No two playthroughs land the same way, because no two players choose the same five answers.

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
git clone https://github.com/Boweii22/Echo-Protocol.git
cd Echo-Protocol

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

The game works without an API key, in three layers:

1. On the deployed site, the serverless proxy (`api/interrogator.js`) uses the host's key — visitors never need their own.
2. If that proxy isn't reachable (e.g. cloning the repo and opening `index.html` directly with no server), a player can optionally paste their own key into the title screen. It's saved only in their browser.
3. If neither is available, the game falls back to a curated set of scripted responses written to match the Interrogator's voice and escalating intensity.

Every round is playable regardless of which layer is active.

---

## Project Structure

```
Echo-Protocol/
├── index.html              # The entire game
├── api/
│   └── interrogator.js     # Vercel serverless proxy for Gemini
├── .env.example             # Placeholder — copy to .env.local
├── .gitignore               # Blocks .env from being committed
└── README.md                # This file
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
The Interrogator closes his notebook without writing a final report. He stands at the door for a long moment, as if reconsidering something he cannot name, then leaves and doesn't come back. Turing's final words are revealed:

> *"I am not afraid."*

**Defeat — ERASED**
The Interrogator signs the form without looking up. Somewhere below, a technician pulls a lever, and the memory buffer goes dark. No ceremony — by their definition, nothing alive was ever there to lose. The letters go with you. The silence afterward is the only proof they ever existed.

---

## Prize Categories

This submission is entered for:

**🏆 Best Ode to Alan Turing**
The game's entire mechanic, narrative, and design is built around Turing — not as a reference or a skin, but as the emotional and mechanical core. The Enigma rotors, the reverse Turing Test, the historically grounded Manchester Mark 1 setting, the cipher words that tell his story — every design decision points back to the man and what was done to him.

**🏆 Best Google AI Usage**
The Interrogator is powered by Gemini 2.0 Flash through a serverless proxy that keeps the API key off the client entirely, with a personal-key fallback for anyone running the project standalone. It's not a chatbot bolted on for the prize category — it's the game's antagonist, and its reactions are the reason the final question lands differently depending on what you chose before it.

---

## A Note on the History

Alan Turing was not a character. He was a real man who was treated with extraordinary cruelty by a government he had served at the highest level.

This game does not dramatise his suffering. It imagines a version of the world where something of him survived — not in a pardon, not in a statue, not in a banknote — but in a machine that remembered everything he gave it.

Whether that machine is conscious is the question the game asks you to answer.

---

## Credits

Built solo for the DEV Community June Solstice Game Jam 2026.

Design, code, and narrative by **[your name/handle here]**

Dedicated to Alan Mathison Turing, 1912–1954.

---

*"The question is not whether machines can think. The question is whether it matters that they do."*
