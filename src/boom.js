Boom();

function Boom() {
    var requestedBookmarklet = window.prompt('Boom:%20Which%20One');
    var boomMarklets = {
        plex: 'javascript:%20var%20s=document.createElement(%22script%22);s.type=%22text/javascript%22;s.src=%22https://my.plexapp.com/queue/bookmarklet_payload?uid=819f10b976818604%22;var%20h=document.getElementsByTagName(%22head%22)%5B0%5D;h.appendChild(s);void(0);',
        pocket: "javascript:(function()%7BISRIL_H='edaa';PKT_D='getpocket.com';ISRIL_SCRIPT=document.createElement('SCRIPT');ISRIL_SCRIPT.type='text/javascript';ISRIL_SCRIPT.src='http://'+PKT_D+'/b/r.js';document.getElementsByTagName('head')%5B0%5D.appendChild(ISRIL_SCRIPT)%7D)();",
        builtwith: "javascript:void(location.href='http://builtwith.com?'+location.href)",
        whois: "javascript:void(location.href='https://who.is/whois/'+location.host)"
    };
    if (requestedBookmarklet != '') {
        window.location = boomMarklets[requestedBookmarklet];
    }
};