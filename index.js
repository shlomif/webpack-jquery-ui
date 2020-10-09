if (false) {
    require('./main.css');
    require('jquery-ui/themes/base/core.css');
    require('jquery-ui/themes/base/menu.css');
    require('jquery-ui/themes/base/tabs.css');
    require('jquery-ui/themes/base/theme.css');
    // var $ = require('jquery');
}
require("./js/jquery-ui/version.js");
require("./js/jquery-ui/keycode.js");
require("./js/jquery-ui/unique-id.js");
require("./js/jquery-ui/widget.js");
require("./js/jquery-ui/safe-active-element.js");
let tabs =require("./js/jquery-ui/tabs");

// $('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new tabs({
         // source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();
