let scrollTo = (reference) => {
	var settings = {
        duration: 1000,
        easing: {
            outQuint: function (t, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1);
            }
        }
    };

    
    var topPos = reference.offsetTop;


    var node = reference;
    var nodeTop = node.offsetHeight;

    console.log(nodeTop);
    var startTime = Date.now();
    var timer = null;

    function step () {
        var yScroll;
        var elapsed = Date.now() - startTime;

        if (elapsed > settings.duration) {
            clearTimeout(timer);
        }

        else {
            yScroll = settings.easing.outQuint(elapsed, nodeTop, settings.duration);
            window.scrollTop -=10;
            timer = setTimeout(step, 10);     
        }
    }
    timer = setTimeout(step, 10);
};

export default scrollTo;