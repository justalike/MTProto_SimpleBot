import { USERBOTS_SETTINGS as secrets } from './config'
import { StringSession } from "telegram/sessions";
import { TelegramController } from './src/telegram.controller';
import { TelegramClient } from 'telegram';


  async function startBots() {

    for (const userbot of secrets) {
     
      const stringSession = new StringSession(userbot.sessionString);
      const telegram = new TelegramClient(stringSession, +userbot.apiID, userbot.apiHash, {
        connectionRetries: 5,
      });
  
      const controller = new TelegramController(telegram);
  

  }
}

startBots();