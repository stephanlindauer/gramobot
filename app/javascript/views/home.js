var homeView = function() {
    var btn = document.getElementById('create-channel');
    var channelInput = document.getElementById('insert-channel-name');

    channelInput.addEventListener('keydown', function (e) {
        e.stopPropagation();

        if (e.keyCode === 13)
          processChannelname(this);
    });

    btn.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        processChannelname(channelInput);
    });

    function processChannelname(channelInput) {
        if (channelInput.value === '' || channelInput.value.indexOf(' ') > -1) {
            channelInput.classList.add('error');
        } else {
            channelInput.classList.remove('error');
        };

        if (channelInput.classList.contains('error'))
          return;

        window.location.href = '/channels/' + encodeURIComponent(channelInput.value);
    };
};

module.exports = homeView;
