# Dictionary Web App

[Live Website](https://dictionary-web-app-0.netlify.app/)

[API: Dictionary API](https://dictionaryapi.dev/)

<!-- ![Screenshot](https://github.com/Hugo-Farias/dictionary-web-app/settings/og-template.png) -->

Enlglish Dictionary WebApp that allows you to change font types and toggle between light and dark mode. Fundamental in helping me understand typescript type definitions/declarations, react-router and redux substantially better and making me more confortable using it.

It saves preferences between sessions. I tried making it responsive from the beggining so it required minimal coding to adapt it to different screen sizes.

The url reflects current query, so it doesn't go away on refresh

It takes fonts from the `fonts.json` file so it is incredibly easy to add new fonts, if default in css requires no additional coding, local requires adding the font name in the `$font-names` variable in `App.scss`, folders must mantain same structure and main tff file must have the same name as folder. Index number one of json file is default if no font has been picked.

