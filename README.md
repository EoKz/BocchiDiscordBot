# BotBocchi ⚡

BotBocchi is a **Discord bot** built with Discord.js v14, designed to be modular and scalable.

---

## Features
- All **commands** in: src/commands
- Support for **slash** and **prefix** commands
- **MongoDB** integration for data management.
- **Custom logging** system with levels and colored output.
- Support for interactions like **buttons, menus, modals, and context menus**.
- Robust configuration for Discord **client, cache, commands, and database**.
- Error handling and graceful shutdown **(SIGINT, SIGTERM, PM2)**.

---

## 📦 Base bot

You can view the **base of this bot**, which currently only includes the ping command, here: 

🔗 [Official Base BocchiBOT Repository](https://github.com/EoKz/BaseDiscordBot)  

---

## 🏁 Getting Started

Follow the steps below to run the BOT base locally.

## Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **git** (v2.14 or higher) – required to clone the repository


### Installation

1. **Clone the repo**

```bash
git clone https://github.com/EoKz/BocchiDiscordBot.git 
```
2. **Install NPM packages (inside the bot folder)**

```bash
npm install
```
3. **Rename `.env.example` to `.env`**  

   **Linux / macOS:**
   ```bash
   mv .env.example .en
   ```

  **Windows (cmd):**
  ```bash
  rename .env.example .env
  ```
4. **Fill in the .env variables correctly**


``DISCORD_TOKEN=`` - **get one [here](https://discord.com/developers/applications)**

``CLIENT_ID=`` - **just copy your bot’s ID from Discord**

``BOT_PREFIX=`` - **set the default bot prefix**

``GUILD_ID=`` - **guild ID for deploying slash commands (usually used for testing)**

``OWNER=`` - **Owner’s profile ID, if you need to create commands with specific permissions**

``MONGO_URI=`` - **Required for features that store data, get one [here](https://www.mongodb.com/products/platform/atlas-database)**

``MONGO_DB_NAME=`` **Your database name**

``LOG_LEVEL=`` **Log level that will appear >** ``debug`` or ``info``

5. **Run the bot (make sure you completed step 4 correctly)**

  ```bash
  npm start
  ```