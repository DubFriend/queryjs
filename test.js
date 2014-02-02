var queryjs = require('./query');

module.exports = {
    getBasic: function (test) {
        test.deepEqual(queryjs.get('url?a=foo&b=bar'), { a: 'foo', b: 'bar' });
        test.done();
    },

    getOneParameter: function (test) {
        test.deepEqual(queryjs.get('url?a=foo'), { a: 'foo' });
        test.done();
    },

    getNoParameters: function (test) {
        test.deepEqual(queryjs.get('url'), {});
        test.deepEqual(queryjs.get('url?'), {});
        test.done();
    },

    getWithHash: function (test) {
        test.deepEqual(
            queryjs.get('url?a=foo&b=bar#hash&c=shouldBeIgnored'),
            { a: 'foo', b: 'bar' }
        );
        test.done();
    },

    setBasic: function (test) {
        test.deepEqual(
            queryjs.set('url?a=foo&b=bar', { c: 'baz' }),
            'url?a=foo&b=bar&c=baz'
        );
        test.done();
    },

    setOverwrite: function (test) {
        test.deepEqual(
            queryjs.set('url?a=foo&b=bar', { b: 'baz' }),
            'url?a=foo&b=baz'
        );
        test.done();
    },

    setNoQueryParameter: function (test) {
        test.deepEqual(
            queryjs.set('url', { a: 'foo', b: 'baz' }),
            'url?a=foo&b=baz'
        );

        test.deepEqual(
            queryjs.set('url?', { a: 'foo', b: 'baz' }),
            'url?a=foo&b=baz'
        );
        test.done();
    },

    setNoQueryParameterWithHash: function (test) {
        test.deepEqual(
            queryjs.set('url#hash', { a: 'foo', b: 'baz' }),
            'url?a=foo&b=baz#hash'
        );

        test.deepEqual(
            queryjs.set('url?#hash', { a: 'foo', b: 'baz' }),
            'url?a=foo&b=baz#hash'
        );
        test.done();
    },

    setWithHash: function (test) {
        test.deepEqual(
            queryjs.set('url?a=yo#hash', { a: 'foo', b: 'baz' }),
            'url?a=foo&b=baz#hash'
        );
        test.done();
    }
};