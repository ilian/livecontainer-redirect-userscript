# livecontainer-redirect-userscript

Redirect iOS app schemes in Safari to LiveContainer using Userscripts.

### Requirements
- A version of Safari which fires the `navigate` event for custom URL schemes.
  As of now, the current iOS version does _not_ support this feature. The
  Safari Technology Preview on macOS does support it, so it is likely that this
  will be supported soon in the upcoming versions of iOS.
- The "Navigation API" feature flag is enabled under Safari Settings.
- [LiveContainer][1] is installed.
- An app which registers a custom URL scheme is installed in LiveContainer.

### Usage
1. Install [the Userscripts app][2] and enable the extension in Safari.
2. Download the userscript in this repo to the Userscripts directory configured
   in the app.
3. Open a web page in Safari which eventually redirects to the custom URL
   scheme. The userscript will open the app with the URL within LiveContainer.

[1]: https://github.com/LiveContainer/LiveContainer
[2]: https://apps.apple.com/us/app/userscripts/id1463298887

