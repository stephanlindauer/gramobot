var channelView = function() {
    var iframe = document.querySelector('#player-viewport iframe');

   function iframeStateChanged(state) {
        if (state === 2)
            console.log('player ended');
    };

    iframe.onload = function (e) {
        var platform = e.target.dataset.platform;

        switch(platform) {
            case 'youtube':
                var lastState = -1;

                window.addEventListener('message', function (e) {
                    var msg = JSON.parse(e.data);
                    if (typeof msg.info === 'undefined' || msg.info === null)
                        return;

                    if (typeof msg.info.playerState === 'number') {
                        iframeStateChanged(msg.info.playerState);
                        lastState = msg.info.playerState;
                    };
                });

                iframe.contentWindow.postMessage('{"event":"listening","id": "player-viewport"}', 'https://www.youtube.com');
                break;
            default:
                break;
        };
    };
};

module.exports = channelView;
