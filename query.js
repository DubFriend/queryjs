// queryjs
// https://github.com/DubFriend/queryjs
// MIT License 2014 Brian Detering
(function () {
    'use strict';

    var queryjs = {};

    var foreach = function (object, callback) {
        var key;
        for(key in object) {
            if(object.hasOwnProperty(key)) {
                callback(object[key], key, object);
            }
        }
    };

    var extend = function () {
        var united = {};
        foreach(arguments, function (object, key) {
            foreach(object, function (value, key) {
                united[key] = value;
            });
        });
        return united;
    };

    var parse = function (url) {
        var domain = '', hash = '';
        var getParameterStrings = function () {
            var isHash = url.indexOf('#') !== -1,
                isQuery = url.indexOf('?') !== -1,
                queryString = '';

            if(isQuery) {
                queryString = url.split('?')[1] || '';
                if(isHash) {
                    queryString = queryString.split('#')[0] || '';
                }
            }

            if(isQuery) {
                domain = url.split('?')[0] || '';
            }
            else if (isHash) {
                domain = url.split('#')[0] || '';
            }
            else {
                domain = url;
            }

            if(isHash) {
                hash = url.split('#')[1] || '';
            }

            return queryString ? queryString.split('&') : [];
        };

        var parameterStrings = getParameterStrings(url),
            params = {},
            key, value, i;

        for(i = 0; i < parameterStrings.length; i += 1) {
            key = parameterStrings[i].split('=')[0];
            value = parameterStrings[i].split('=')[1];
            params[key] = value;
        }

        return {
            url: domain || '',
            hash: hash || '',
            parameters: params
        };
    };

    var stringify = function (parsed) {
        var key, parameterStrings = [];

        foreach(parsed.parameters, function (value, key) {
            parameterStrings.push(key + '=' + parsed.parameters[key]);
        });

        return parsed.url +
            (parameterStrings.length > 0 ?
                '?' + parameterStrings.join('&') : '') +
            (parsed.hash ? '#' + parsed.hash : '');
    };

    queryjs.get = function (url) {
        return parse(url).parameters;
    };

    queryjs.set = function (url, params) {
        var parsed = parse(url);
        parsed.parameters = extend(parsed.parameters, params);
        return stringify(parsed);
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
