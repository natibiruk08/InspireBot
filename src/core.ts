import { Telegraf } from "telegraf";
import dotenv from "dotenv";
import { printQuote } from "./quotes";

dotenv.config();

const token = process.env.BOT_TOKEN || "";

const bot = new Telegraf(token);

bot.start((ctx) => {
  const welcomeMessage =
    `Welcome to My Bot! 🤖\n\n` +
    `I'm here to inspire and motivate you with daily inspirational quotes.` +
    `Just send me a message or use the /quote command to get started.\n\n` +
    `Let's embark on a journey of positivity and motivation together! 💫`;

  ctx.reply(welcomeMessage);
});

bot.command("quit", async (ctx) => {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  await ctx.leaveChat();
});

bot.command("quote", async (ctx) => {
  const quote = printQuote();

  ctx.reply(quote);
});

export default bot;
