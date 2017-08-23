# scroll-past

> Return a Promise when any element is scroll past


## Install

```
$ npm install scroll-past
```


## Usage

```js
const scrollPast = require('scroll-past');

scrollPast(document.querySelector('.container')).then(pos => {
	console.log(`I'm at ${pos}`);
});
```


## API

### scrollPast(element, [options])

Returns a `Promise` that resolves the `scrollY` position of the window.

#### element

Type: `Element`

The element to check for.

#### options

##### threshold

Type: `number`<br>
Default: `0`

Add a threshold to scroll past before the `Promise` is returned.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
