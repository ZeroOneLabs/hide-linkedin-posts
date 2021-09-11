// ==UserScript==
// @name         Hide LinkedIn annoying "liked" pages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ZeroOneLabs
// @match        https://www.linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const li_post_class = "relative";
    const li_author_div_class = "feed-shared-actor__name";

    var timer;
    const annoying_users = [ "The Spammy Page", "George McGeorgersonson", "ABC Company" ]

    function hideAnnoyingPosts() {

        var li_posts = document.getElementsByClassName(li_post_class);
        for (var di = 0; di < li_posts.length; di++) {

            var li_post = li_posts[di];
            var li_author_div = li_post.getElementsByClassName(li_author_div_class);
            for (var i = 0; i < li_author_div.length; i++) {
                var li_author_span = li_author_div[i];
                if (li_author_span.firstChild) {
                    var li_author_name = li_author_span.getElementsByTagName("span")[0];

                    // Check to see if the auhor's name is in the "annoying_users" list.
                    if (annoying_users.indexOf(li_author_name.textContent) >= 0) {
                        li_posts[di].style.display = 'none';
                    }
                }
            }
        }
    }
    timer = setInterval(hideAnnoyingPosts, 3000);
})();


