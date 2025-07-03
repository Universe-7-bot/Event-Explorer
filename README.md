![image](https://github.com/user-attachments/assets/32c17d9b-7494-42a6-9d6d-b4664968037b)


# 🗓️ Events Explorer

A mini responsive events listing web app built using **Next.js**, **TypeScript**, and **Tailwind CSS**. This project was created as part of a developer assessment to demonstrate intermediate proficiency in routing, data handling, and UI responsiveness.

---

## 🚀 Features

- Browse a curated list of mock events
- View full event details via dynamic routing
- Client-side filter by event location
- Optimized SEO and accessibility
- Fully responsive UI for all screen sizes

---

## 🔧 Tech Stack

- **Next.js v15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Local JSON mock data**

---

## 🧠 Approach

- Used `app/` directory and dynamic routing with `[id]/page.tsx` to handle detail pages.
- Stored mock event data in a local JSON file under `data/events.json`.
- Used `getStaticParams` and `generateStaticParams()` for static generation of event detail pages.
- Implemented location filtering using a dropdown and local state filtering.
- Styled using **Tailwind CSS**, ensuring mobile responsiveness.
- Used `next/head` for SEO tags and semantic HTML for accessibility.

---

## 📁 Folder Structure

/app
  ├── layout.tsx
  ├── globals.css
  ├── page.tsx                 # Home (event listing)
  └── events
        └── [id]
              └── page.tsx     # Event detail page

/components
  ├── /ui
  ├── Header.tsx
  ├── EventCard.tsx
  ├── EventFilter.tsx

/data
  └── events.json              # Static mock event data

/public
  └── favicon.ico

/hooks
  └── use-mobile.ts


/lib
  └── utils.ts


README.md

---

## 🛠️ How to Run the App

1. **Clone the Repository**
```bash
git clone https://github.com/Universe-7-bot/Event-Explorer
cd events-explorer

npm install

npm run dev

---

## 🧩 Improvements

- Add pagination or infinite scroll to handle larger datasets

- Implement category-based filtering or search by title

- Integrate real backend API with CMS or Firebase

- Add event registration or RSVP functionality

- Improve accessibility with full keyboard and screen-reader support

- Write unit tests using Jest and React Testing Library

---

## ✅ Deployed Version
https://event-explorer-2jm7.vercel.app/
