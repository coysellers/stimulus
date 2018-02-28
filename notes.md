# General Notes

Types:

* data-controller
* data-target
* data-action

> `click->` has been omitted from the action descriptor.
> `data-action="click->clipboard#copy` vs `data-action="clipboard#copy`

Default Events:

| Element           | Default Event |
| ----------------- |:-------------:|
| a                 | click         |
| button            | click         |
| form              | submit        |
| input             | change        |
| input type=submit | click         |
| select            | change        |
| textarea          | change        |


## Building Something Real

Why static targets?
When Stimulus loads the controller class, it looks for target name strings in a static `array` called *targets*.


## Managing State

A Stimulus application’s state lives as attributes in the DOM. This approach makes it possible to work with HTML from anywhere:
* the initial document
* an Ajax request
* a Turbolinks visit
* even another JavaScript library

### Life cycle callbacks

| Callback   | Invoked by Stimulus                                 |
| ---------- | :-------------------------------------------------: |
| initialize | once, when the controller is first instantiated     |
| connect    | anytime the controller is connected to the DOM      |
| disconnect | anytime the controller is disconnected from the DOM |

### Stimulus Data API

Each Stimulus controller has a `this.data` object with methods:
* `has()`
* `get()`
* `set()`

_Standard Way:_
```
initialize() {
    const index = parseInt(this.element.getAttribute("data-slideshow-index"))
    this.showSlide(index)
}
```
vs.
_Stimulus API_
```
initialize() {
    const index = parseInt(this.data.get("index"))
    this.showSlide(index)
}
```

> If attribute name consists of more than one word, reference it as `camelCase` in JavaScript and `attribute-case` in HTML.

Example:
* HTML = `data-slideshow-current-class-name`
* JavaScript = `this.data.get("currentClassName")`

_lifecycle callback_ methods:

| Callback | Invoked by Stimulus |
| --- | :---: |
| `initialize()` | once, when the controller is first instantiated |
| `connect()` | anytime the controller is connected to the DOM |
| `disconnect()`| anytime the controller is disconnected from the DOM |


## Working With External Resources

_external_ meaning anything that isn’t in the DOM or a part of Stimulus.

### Asynchronously Loading HTML

Working with the `data-content-loader-url` and `data-content-loader-refresh-interval` attributes.

Examples:
* `data-content-loader-url="/messages.html"`
* `data-content-loader-refresh-interval="5000"`
