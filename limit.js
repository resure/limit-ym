
modules.define('debounce', function (provide) {
    /**
     * debounce
     * @param {integer} milliseconds This param indicates the number of milliseconds
     *     to wait after the last call before calling the original function .
     * @return {function} This returns a function that when called will wait the
     *     indicated number of milliseconds after the last call before
     *     calling the original function.
     */
    provide(function (fn, milliseconds) {
        var timer = null,
            wait = milliseconds;

        return function () {
            var self = this,
                args = arguments;

            function complete() {
                fn.apply(self, args);
                timer = null;
            }

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(complete, wait);
        };
    });
});

modules.define('throttle', function (provide) {
    /**
     * throttle
     * @param {integer} milliseconds This param indicates the number of milliseconds
     *     to wait between calls before calling the original function.
     * @return {function} This returns a function that when called will wait the
     *     indicated number of milliseconds between calls before
     *     calling the original function.
     */
    provide(function (fn, milliseconds) {
        var lastEventTimestamp = null,
            limit = milliseconds;

        return function () {
            var self = this,
                args = arguments,
                now = Date.now();

            if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
                lastEventTimestamp = now;
                fn.apply(self, args);
            }
        };
    });

});
