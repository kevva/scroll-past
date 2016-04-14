# scroll-past

> Return a promise when any element is scroll past


## Install

```
$ npm install --save scroll-past
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

Returns a promise that resolves the `scrollY` position of the window.

#### element

Type: `element`

The element to check for.

#### options

##### threshold

Type: `number`<br>
Default: `0`

Add a threshold to scroll past before the promise is returned.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
