let scrollTo = (container, inner) => {
	var settings = {
        duration: 1000,
        easing: {
            outQuint: function (t, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1);
            }
        }
    };

    


    var nodeTop = inner.offsetHeight;


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
            container.scrollTop += yScroll;
            timer = setTimeout(step, 10);     
        }
    }
    timer = setTimeout(step, 10);
};

export default scrollTo;