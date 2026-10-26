// ==UserScript==
// @name         Javascript Link Distinguisher (JLD)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Distinguish between standard links to another websites and javascript method calls
// @author       Roman Luks
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    var jsAnchorStyleTextDecoration = "underline overline";
    
    for(var i = 0; i < document.links.length; i++){        
        var link = document.links[i];
                
        if((link.protocol == "javascript:") || (typeof link.onclick == "function")){
            document.links[i].style.textDecoration = jsAnchorStyleTextDecoration;
        }       
    }
})();