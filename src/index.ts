import bot from "./core";

bot
  .launch()
  .then(() => {
    console.log("Bot has started");
  })
  .catch((error) => {
    console.error("Failed to start bot", error);
  });
