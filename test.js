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
    }
};