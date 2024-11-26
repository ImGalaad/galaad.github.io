"use strict";

var _swupStandaloneModuleMin = _interopRequireDefault(require("/assets/js/libs/swup.standalone.module.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swup = new _swupStandaloneModuleMin["default"]({
  containers: ["main"]
});
swup.on('pageView', function () {
  var url = document.URL;
  var title = document.title;
  document.title = title[0];
  var i = 1;

  function typingTitle() {
    document.title = title.slice(0, i);
    i++;
    if (url == document.URL && i != title.length + 1) setTimeout(typingTitle, 50);
  }

  setTimeout(typingTitle, 50);
});