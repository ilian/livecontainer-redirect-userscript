// ==UserScript==
// @name        LiveContainer redirect
// @description Redirect iOS app schemes in Safari to LiveContainer
// @match       *://*/*
// ==/UserScript==

IGNORED_URL_SCHEMES = new Set([
  "livecontainer:",

  // Based on https://github.com/bhagyas/app-urls
  "applenews:",
  "applenewss:",
  "itms-apps:",
  "music:",
  "musics:",
  "audio-player-event:",
  "classical:",
  "videos:",
  "calshow:",
  "x-apple-calevent:",
  "webcal:",
  "clips:",
  "contacts:",
  "diagnostics:",
  "diags:",
  "facetime-audio:",
  "facetime-audio-prompt:",
  "facetime:",
  "facetime-prompt:",
  "applefeedback:",
  "findmyfriends:",
  "fmf1:",
  "grenada:",
  "fmip1:",
  "shareddocuments:",
  "gamecenter:",
  "itms-gc:",
  "itms-gcs:",
  "garageband:",
  "headspace:",
  "ibooks:",
  "itms-books:",
  "itms-bookss:",
  "appleiclouddrive:",
  "imovie:",
  "remote:",
  "itms:",
  "itmss:",
  "itms-itunesu:",
  "map:",
  "maps:",
  "mapitem:",
  "message:",
  "mailto:",
  "sms:",
  "mobilenotes:",
  "tel:",
  "telprompt:",
  "photos-redirect:",
  "feed:",
  "podcast:",
  "pcast:",
  "itms-pcast:",
  "itms-pcasts:",
  "podcasts:",
  "itms-podcast:",
  "itms-podcasts:",
  "x-apple-reminder:",
  "x-web-search:",
  "ftp:",
  "http:",
  "https:",
  "app-prefs:",
  "prefs:",
  "shortcuts:",
  "voicememos:",
  "shoebox:",
  "itms-watch:",
  "itms-watchs:",
  "workflow:",
]);

if (!window.navigation) {
  alert("Navigation API is not supported. Enable it under Settings -> Safari -> Advanced -> Feature Flags -> Navigation API");
}

function shouldInterceptRedirect(url) {
  const parsedUrl = new URL(url);
  return !IGNORED_URL_SCHEMES.has(parsedUrl.protocol);
}

function openUrlWithLiveContainer(url) {
  const newUrl = `livecontainer://open-url?url=${btoa(url)}`;
  window.location.href = newUrl;
}

window.navigation.addEventListener("navigate", (e) => {
  const url = e.destination?.url;
  if (shouldInterceptRedirect(url)) {
      console.log("Redirecting URL to LiveContainer", url);
      openUrlWithLiveContainer(url);
      e.preventDefault();
  } else {
      console.warn("Ignoring redirect", url)
  }
}, { capture: true });

