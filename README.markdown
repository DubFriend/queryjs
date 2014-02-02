#queryjs

easy url query parameter manipulation

##queryjs.set(parameterObject)
```js
//newURL === 'url.com?a=foo';
var newURL = queryjs.set('url.com', { a: 'foo' });

//newURL === 'url.com?a=new&b=bar'
newURL = query.js('url.com?a=foo', { a: 'new', b: 'bar' });
```

##queryjs.get()
```js
//parameters === { a: 'foo' };
var parameters = queryjs.get('url.com?a=foo');
```

works with url hashes.  (todo: support query parameter arrays)
