#büm

Once upon a time, there was a bookmarklet called Quix. You could run ~100 bookmarklet based on your input; all from one single bookmarklet.

It was abandoned. I'm slowly making something to replace it. The end.

###Usage
The `package.json` file should install the npm module `bookmarklet`. In your shell, type `bookmarklet src/boom.js` to URL encode the javascript.

Either copy/paste STDOUT and create a bookmarklet in your browser.

Or pipe it out to a file
```shell
bookmarklet boom.js > crunched.js
```


### Easy Install
Drag this into your Bookmark Bar.

<a href="javascript:(function()%7Bfunction%20Boom()%7Bvar%20t%3Dwindow.prompt(%22Boom%3A%20Which%20One%22)%2Ce%3D%7Bplex%3A%22javascript%3A%2520var%2520s%3Ddocument.createElement(%2522script%2522)%3Bs.type%3D%2522text%2Fjavascript%2522%3Bs.src%3D%2522https%3A%2F%2Fmy.plexapp.com%2Fqueue%2Fbookmarklet_payload%3Fuid%3D819f10b976818604%2522%3Bvar%2520h%3Ddocument.getElementsByTagName(%2522head%2522)%255B0%255D%3Bh.appendChild(s)%3Bvoid(0)%3B%22%2Cpocket%3A%22javascript%3A(function()%257BISRIL_H%3D'edaa'%3BPKT_D%3D'getpocket.com'%3BISRIL_SCRIPT%3Ddocument.createElement('SCRIPT')%3BISRIL_SCRIPT.type%3D'text%2Fjavascript'%3BISRIL_SCRIPT.src%3D'http%3A%2F%2F'%2BPKT_D%2B'%2Fb%2Fr.js'%3Bdocument.getElementsByTagName('head')%255B0%255D.appendChild(ISRIL_SCRIPT)%257D)()%3B%22%2Cbuiltwith%3A%22javascript%3Avoid(location.href%3D'http%3A%2F%2Fbuiltwith.com%3F'%2Blocation.href)%22%2Cwhois%3A%22javascript%3Avoid(location.href%3D'https%3A%2F%2Fwho.is%2Fwhois%2F'%2Blocation.host)%22%2Ctdfw%3A%22javascript%3A(function()%257Bjavascript%3Avar%2520s%253Ddocument.createElement(%2527script%2527)%253Bs.setAttribute(%2527src%2527%2C%2527https%3A%2F%2Fnthitz.github.io%2Fturndownforwhatjs%2Ftdfw.js%2527)%253Bdocument.body.appendChild(s)%253B%257D)()%253B%22%7D%3B%22%22!%3Dt%26%26(window.location%3De%5Bt%5D)%7DBoom()%3B%7D)()
">Boom</a>


Current commands:
- plex
- pocket
- whois
- builtwith
- tdfw
