import Swup from "/assets/js/libs/swup.standalone.module.min.js";
const swup = new Swup({
    containers: ["main"]
});

swup.on('pageView', () => {
    const url = document.URL;
    const title = document.title;
    document.title = title[0];

    var i = 1;
    function typingTitle() {
        document.title = title.slice(0, i);
        i++;

        if (url == document.URL && i != title.length + 1)
            setTimeout(typingTitle, 50);
    }

    setTimeout(typingTitle, 50);
});
