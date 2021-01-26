module.exports = Object.freeze({
  TOKEN: '1402710992:AAEGQW2gddGSlnQdTpuaP_BnbxmZjlFTOaw',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '129T3ecpHaiQlNHJNstfb9KXdpF69qPZK',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [617426792],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001255283935],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@YasirCerminBot"
  },
  IS_TEAM_DRIVE: false,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://gd.yasir.my.id",
  TELEGRAPH_TOKEN: 'edcac3589621e229c934e4ef6da45f55e6c95c874d2cbbe01883a1ad3c7c' // Telegraph token, if you want to show search results in telegra.ph else keep it blank
});
