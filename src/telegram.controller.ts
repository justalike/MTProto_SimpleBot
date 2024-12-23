


import { TelegramClient } from "telegram";
import { NewMessage, NewMessageEvent} from "telegram/events";
import { TelegramService } from "./telegram.service";
//@ts-ignore
import input from 'input';  
import { adminId, AggregateChat, keywords, antiKeywords} from '../constants';

export class TelegramController {
    public readonly service: TelegramService
    public dialogs: any;

    constructor(private readonly client: TelegramClient) {
      
      this.service = new TelegramService(client)
      this.init()
      
      this.client.addEventHandler(this.filterMessages, new NewMessage({}));
     
    }

public init = async () => {
  try{
    await this.client.start({
        phoneNumber: async () => await input.text("Please enter your number: "),
        password: async () => await input.text("Please enter your password: "),
        phoneCode: async () => await input.text("Please enter the code you received: "),
        onError: (err:any) => console.log(err),
      });
      
      console.log("Connected.");
     console.log(this.client.session.save()); // Save this string to avoid logging in again
     
     this.dialogs = await this.service.getDialogs() // Without the dialogs we cant send messages to anyone

    }
    catch (err:any){
      console.log(err)
    }
}
  
  private processedMessages: Set<string> = new Set();

  private filterMessages = async (event: NewMessageEvent) => {
    try {
      const message = event.message;
      const messageText = message.text.toLowerCase();
      const userId = message.senderId.valueOf();
      const antikeywords = antiKeywords
      const keywordss = keywords

      const messageKey = `${messageText}-${userId}`;
      let messageForwarded = false; // Keep track of whether the message has been forwarded
  
      if (this.processedMessages.has(messageKey)) return

  
      for (const antiKeyword of antikeywords) {
        if (messageText.includes(antiKeyword)) return;

      }
  
      for (const keyword of keywordss) {
        if (messageText.includes(keyword)) {
          await message.forwardTo(AggregateChat);
          messageForwarded = true;
          break;
        }
      }
  
      if (messageForwarded) {
        this.processedMessages.add(messageKey); // Mark the message as processed
      }
    } catch (err:any){ 
      console.log('Error in filterMessages:', err.message);
    }
  }
 
}

  
      
  // // logs all user IDs in a chat.
  // for await (const user of client.iterParticipants(chat)){
  //     console.log("User id",user.id);
  // }
  
  // // Searches by name.
  // for await (const user of client.iterParticipants(chat, {search: "name"})){
  //     console.log("Username is ",user.username); // Some users don't have a username so this can be undefined.
  // }
  
  // // Filter by admins.
  // for await (const user of client.iterParticipants(chat, {filter:  Api.ChannelParticipantsAdmins})){
  //     console.log("admin first name is ",user.firstName);
  // }

  
  // async function handler(event: NewMessageEvent) {
  //     ...
  //     }
  //     client.addEventHandler(handler, new NewMessage({}));
  
}
