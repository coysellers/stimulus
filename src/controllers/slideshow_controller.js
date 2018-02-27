import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['slide'];

    initialize() {
        this.showCurrentSlide();
    }

    next() {
        this.index++
    }

    previous() {
        this.index--
    }

    showCurrentSlide() {
        this.slideTargets.forEach((el, i) => {
            console.log(el.classList.toggle('slide--current', this.index == i))
            el.classList.toggle('slide--current', this.index == i)
        })
    }

    get index() {
        return parseInt(this.data.get('index'))
    }

    set index(value) {
        this.data.set('index', value)
        this.showCurrentSlide()
    }
}
