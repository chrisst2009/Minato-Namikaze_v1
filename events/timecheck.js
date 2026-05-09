module.exports = {
  config: {
    name: 'timecheck',
    description: 'Auto time-based messages (PH Time)',
    eventType: ['_timecheck_'],
    category: 'auto'
  },
  run() {}
};

const MESSAGES = [
  {
    hour: 5, min: 0,
    text: `🌅 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲! 🌞\n━━━━━━━━━━━━━━━━━━━\n☀️ Bagong araw, bagong simula!\nDon't forget to eat breakfast! 🍳🥞☕\n\n💪 𝗦𝘁𝗮𝘆 𝗽𝗼𝘀𝗶𝘁𝗶𝘃𝗲, 𝘀𝘁𝗮𝘆 𝗮𝗺𝗮𝘇𝗶𝗻𝗴!\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 5:00 AM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 7, min: 0,
    text: `☀️ 𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴! 🌞\n━━━━━━━━━━━━━━━━━━━\n🍳 Time to rise and shine!\n🥞 Don't skip breakfast — it's the most\n    important meal of the day!\n🧃 Stay hydrated & energized! 💧\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 7:00 AM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 12, min: 0,
    text: `🌤️ 𝗟𝘂𝗻𝗰𝗵𝘁𝗶𝗺𝗲! 🍱\n━━━━━━━━━━━━━━━━━━━\n🍜 It's 12 noon — time to eat!\nDon't forget your lunch, ha! 😄\n🍚 𝗞𝗮𝗶𝗻 𝗻𝗮! Enjoy your meal 🍛🥗\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 12:00 PM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 15, min: 0,
    text: `☕ 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 𝗕𝗿𝗲𝗮𝗸! 🍪\n━━━━━━━━━━━━━━━━━━━\n🌇 Good afternoon, everyone! 😊\n☕ Take a coffee break & relax for a bit\n💆 Rest your eyes from the screen!\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 3:00 PM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 19, min: 0,
    text: `🌆 𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴! 🌙\n━━━━━━━━━━━━━━━━━━━\n🌅 Maliwanag na gabi sa inyong lahat!\n🍽️ Don't forget to have dinner! 🍛🥘\n🧘 Relax & unwind after a long day! 😌\n💫 𝗬𝗼𝘂 𝗱𝗶𝗱 𝗴𝗿𝗲𝗮𝘁 𝘁𝗼𝗱𝗮𝘆! ✨\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 7:00 PM |𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 21, min: 3,
    text: `🌙 𝗚𝗼𝗼𝗱𝗻𝗶𝗴𝗵𝘁 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲! 😴💤\n━━━━━━━━━━━━━━━━━━━\n🛌 It's time to rest...\n😴 Sweet dreams & take care!\n⭐ Tomorrow is a new beginning! 🌟\n🙏 𝗦𝗶𝗴𝘂𝗿𝗮𝗱𝗼𝗵𝗶𝗻𝗴 𝗺𝗮𝘁𝘂𝗹𝗼𝗴! 💙\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 9:03 PM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  },
  {
    hour: 0, min: 0,
    text: `🌃 𝗠𝗶𝗱𝗻𝗶𝗴𝗵𝘁! 🌙✨\n━━━━━━━━━━━━━━━━━━━\n⭐ Still awake? Time to sleep na! 😴\nYour body needs rest to recharge! 💪\n🛏️ 𝗦𝗮𝗺𝗮𝗵𝗮𝗻 𝗸𝗮 𝗻𝗶 𝙼𝙸𝙽𝙰𝚃𝙾 𝘀𝗮 𝗽𝗮𝗻𝗮𝗴𝗶𝗻𝗶𝗽! 💫\n━━━━━━━━━━━━━━━━━━━\n🕐 𝗣𝗛𝗧: 12:00 AM | 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✨`
  }
];

module.exports.MESSAGES = MESSAGES;
