const axios = require('axios');

const DEEPSEEK_KEY = 'sk-9918a6347df242b0874c805fb7d7cbf4';
const DEEPSEEK_URL = 'https://api.deepseek.com/v1/chat/completions';

module.exports = {
  config: {
    name: 'ai',
    aliases: ['ask', 'nora', 'chat', 'gpt'],
    description: 'Ask NORA AI (DeepSeek) anything',
    usage: 'ai <question>',
    category: 'AI'
  },
  async run({ api, event, args }) {
    const { threadID, messageID } = event;
    const question = args.join(' ').trim();
    if (!question) return api.sendMessage(
      `🤖 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `❓ Please provide a question!\n` +
      `📌 Usage: /ai <your question>`,
      threadID, messageID
    );
    api.sendMessage(`🤖 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 is thinking...`, threadID);
    try {
      const res = await axios.post(DEEPSEEK_URL, {
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are NORA AI V10, a helpful and friendly AI assistant powered by Base44. Keep responses concise and helpful.' },
          { role: 'user', content: question }
        ],
        max_tokens: 800,
        temperature: 0.7
      }, {
        headers: {
          'Authorization': `Bearer ${DEEPSEEK_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      });
      const reply = res.data?.choices?.[0]?.message?.content?.trim() || 'No response generated.';
      api.sendMessage(
        `🤖 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷 ✦ 𝗗𝗲𝗲𝗽𝗦𝗲𝗲𝗸\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `❓ ${question}\n\n` +
        `💬 ${reply}\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `✨ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗕𝗮𝘀𝗲𝟰𝟰 & 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷`,
        threadID, messageID
      );
    } catch (e) {
      api.sendMessage(
        `🤖 𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 𝚅𝟷\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `❌ AI Error: ${e.response?.data?.error?.message || e.message}\n` +
        `💡 Please try again.`,
        threadID, messageID
      );
    }
  }
};
