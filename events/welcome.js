module.exports = {
  config: {
    name: 'welcome',
    description: 'Welcome new members to the group',
    eventType: ['log:subscribe']
  },
  async run({ api, event }) {
    const { threadID, logMessageData } = event;
    if (!logMessageData || !logMessageData.addedParticipants) return;
    for (const user of logMessageData.addedParticipants) {
      api.sendMessage(
        `👋 Welcome to the group, ${user.fullName}!\n🤖 I'm 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴. Type the bot prefix + help to see commands.`,
        threadID
      );
    }
  }
};
