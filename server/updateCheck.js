/* eslint-disable no-undef */
if (typeof axios === 'undefined') axios = require('axios').default;

(async() => {
  try {
    const verRes = await axios('https://spotifive.services.dislike.life/version');
    if (verRes.data.version !== CONFIG_C.version) {
      console.log(`New version available (${verRes.data.version}). Changes:\n  ${verRes.data.changes.join('\n  ')}^7`);
    }
  } catch (err) {
    console.log('Failed to get version info ' + err);
  }
})();