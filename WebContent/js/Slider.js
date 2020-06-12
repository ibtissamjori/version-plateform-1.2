class Slider {

    constructor(slides_div, prev_div, next_div, indicator_div, slider) {
        this.slides = spa.getMultiple(slides_div).children;
        this.prev = spa.getMultiple(prev_div);
        this.next = spa.getMultiple(next_div);
        this.indicator = spa.getMultiple(indicator_div);
        this.index = 0;

        this.slider = slider;

        let self = this;
        this.prev.addEventListener("click", function () {
            self.prevSlide();
            self.updateCircleIndicator();
            self.resetTimer();
        });

        this.next.addEventListener("click", function () {
            self.nextSlide();
            self.updateCircleIndicator();
            self.resetTimer();
        });

        this.circleIndicator();
        let timer = setInterval(() => {
            self.autoPlay(self);
        }, 10000);
    }

    circleIndicator() {
        for (let i = 0; i < this.slides.length; i++) {
            const div = document.createElement("div");
            div.setAttribute("onclick", "spa.slider.indicateSlide(this)")
            div.style.cursor = "pointer";
            div.id = i;
            if (i == 0) {
                div.className = "active";
            }
            this.indicator.appendChild(div);
        }
    }

    indicateSlide(element) {

        this.index = element.id;
        // console.log("element >> ", element.id);
        this.changeSlide();
        this.updateCircleIndicator();
        this.resetTimer();
    }

    updateCircleIndicator() {
        for (let i = 0; i < this.indicator.children.length; i++) {
            this.indicator.children[i].classList.remove("active");
        }
        this.indicator.children[this.index].classList.add("active");
    }

    prevSlide() {
        if (this.index == 0) {
            this.index = this.slides.length - 1;
        } else {
            this.index--;
        }
        this.changeSlide();
    }

    nextSlide() {
        if (this.index == this.slides.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.changeSlide();
    }

    changeSlide() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove("active");
        }

        this.slides[this.index].classList.add("active");
    }

    resetTimer() {
        // when click to indicator or controls button
        // stop timer
        clearInterval(this.timer);
        // then started again timer

        let self = this;
        this.timer = setInterval(() => {
            self.autoPlay(self);
        }, 10000);
    }

    autoPlay(self) {
        self.nextSlide();
        self.updateCircleIndicator();
    }

}
