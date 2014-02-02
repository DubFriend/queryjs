// queryjs
// https://github.com/DubFriend/queryjs
// MIT License 2014 Brian Detering
(function () {
    'use strict';

    var queryjs = {};

    queryjs.get = function (url) {

    };

    queryjs.set = function (url, parameters) {

    };

    //use in both browser and nodejs
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = queryjs;
        }
        exports.queryjs = queryjs;
    }
    else {
        this.queryjs = queryjs;
    }

}).call(this);
