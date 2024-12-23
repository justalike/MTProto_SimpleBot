# MTProto_Bot
MTProto client for different purposes.

Requires
`ts-node`, `typescript` , `node^20.1.3`

Install
```npm i ts-node typescript```
```npm i --save-dev @types/node```
```npm i```

Rename your .env.example to .env and fill out the phone number, api_id and api_hash (obtained thru [telegram](https://my.telegram.org/auth))
Launch it with no 2FA_CODE first, then fill the 2fa code in the env - it remains intact.

When logged in successfully - copy your session and paste into .env to avoid this painful process again.

Config can launch multiple instances of the bot under different accounts. Make sure you have info for every account before trying.
By default your session environmental variable should have postfix _1 -- SESSION_1, API_HASH_1 and etc. If you do not want this behaviour - edit the `config.ts`.

What it does on this template? 
Bot checks for the number of channels/chats/dialogs and looks for keywords and ignores messages with anti-keywords. If message has keyword and does not have anti-keyword it would forward message to AggregateChat.  
Change the keywords, antikeywords and other things in `constants.ts`

Edit the bot to your liking.

Have fun!