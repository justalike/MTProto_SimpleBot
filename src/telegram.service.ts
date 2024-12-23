import { TelegramClient } from "telegram"
import { ForwardMessagesParams } from "telegram/client/messages";
import { SendMessageParams } from "telegram/client/messages";

export class TelegramService {
    constructor(private readonly telegram: TelegramClient) {
    } 

    public async getChats(){
        const estateIds = [/*...*/] //channels ids (with no -100)
        const links = [                 
            // 'https://t.me/xxxx',
    ]
        for (const link of links){
       const entity = await this.telegram.getInputEntity(link)
       console.log(entity)
    }

    }
       public async getDialogs() {
        const dialogs = await this.telegram.getDialogs({});
        return dialogs; // without dialogs you cant write to anyone
    }
    
   
    public async findDialog (dialogs: any, name: string){
        const targetUser = dialogs.find((dialog: any) => dialog.name == name);
        return targetUser // find dialog by username
    }
   
    private sendText = async (chatId: number, message: string, options: SendMessageParams) => {
        try{
        await this.telegram.sendMessage(chatId, { message: message, ...options });
    }
    catch (error:any){
      console.log(error)
    }
    }

    private sendForward = async (chatId: number, options: ForwardMessagesParams) => {
        try{
        await this.telegram.forwardMessages(chatId, {...options});

    }
    catch (error: any){
      console.log(error)
    }
}


public async sendPhoto(chatId: number, message: string, photo?: string, options?: SendMessageParams) {
  try {
    if (!photo) return console.log('No photo');
    await this.telegram.sendMessage(chatId, {message: message, file: photo, ...options});
   
  } catch (error:any) {
    console.error("Error while trying to sendPhoto:", error.message);
  }
}

}
