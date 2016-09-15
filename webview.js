module.exports = (Franz, options) => {
    let first_stmt = $($('#statements .statement')[0]).attr('class');
    Franz.latestStatement = $('div#statements .statement')[0].className;

    $(window).bind('scroll', (ev) => {
        Franz.latestStatement = $('div#statements .statement')[0].className;
    });

    function getMessages() {
        const res = $('#new-res-notice-text').text().match(/新着レスが(\d+)?個あります/);
        var reply = 0;
        if (res) {
            reply = res[1];
        }
        var unread = 0;
        const ls = $('div#statements .statement')[0].className;
        if (ls != Franz.latestStatement) {
            unread = 1;
        }

        Franz.setBadge(reply, unread);
    }

    Franz.loop(getMessages);
}
