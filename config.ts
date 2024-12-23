import * as dotenv from 'dotenv'
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const USERBOTS_SETTINGS = [
  {
  apiID: process.env.API_ID_1,
  apiHash: process.env.API_HASH_1,
  sessionString: process.env.SESSION_1,
}, /*{
  apiID: process.env.API_ID_2,
  apiHash: process.env.API_HASH_2,
  sessionString: process.env.SESSION_2 || undefined,
},

  apiID: process.env.API_ID_3,
  apiHash: process.env.API_HASH_3,
  sessionString: process.env.SESSION_3,
} */]

