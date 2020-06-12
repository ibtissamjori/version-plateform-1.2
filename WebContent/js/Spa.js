class Spa {

    constructor() {
        this.currentPanel = this.get("index");
        this.currentHead = 'accueil';
        this.menu_icon = this.getMultiple('.header .nav-bar .nav-list .hamburger');
        this.menu = this.getMultiple('.header .nav-bar .nav-list ul');
        this.get("header").style["display"] = "none";
        this.get("footer").style["display"] = "none";
        this.openSemester('s1', this.get('defaultOpen'), 'steelblue');
        this.scrollProgressBar();
        this.initTipeWriter();
        this.slider = null;
        this.initDocumentClick();
    }

    get(id) {
        return document.getElementById(id);
    }

    getMultiple(divs) {
        return document.querySelector(divs);
    }

    getByClass(className) {
        return document.getElementsByClassName(className);
    }

    show(id) {
        var p = this.get(id);
        this.currentPanel.style["display"] = "none";
        this.get(this.get1split(this.currentHead, "-") + '-span').style.backgroundColor = "white";
        this.get(this.get1split(this.currentHead, "-") + '-span').style.color = "#D9323A";
        p.style["display"] = "block";
        this.get(this.get1split(id, "-") + '-span').style.backgroundColor = "#D9323A";
        this.get(this.get1split(id, "-") + '-span').style.color = "white";
        this.currentPanel = p;
        this.currentHead = id;

        if (this.currentPanel.getAttribute('id') === "index") {
            this.get("header").style["display"] = "none";
            this.get("progress").style["display"] = "none !imposrtant";
            this.get("footer").style["display"] = "none";
        } else {
            this.get("header").style["display"] = "block";
            this.get("progress").style["display"] = "block";
            this.get("footer").style["display"] = "block";
        }
        this.scrollProgressBar();
        this.menuToggle();
        this.hide('search-res');

    }

    menuToggle() {
        this.menu_icon.classList.toggle('active');
        this.menu.classList.toggle('active');
    }

    scrollProgressBar() {
        this.get("myProgressBar").style.width = 0 + "%";
        var self = this;

        window.onscroll = function () {
            myFunction()
            myFunction1()
        };

        var navbar = self.get("header");
        var sticky = navbar.offsetTop;

        function myFunction1() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            self.get("myProgressBar").style.width = scrolled + "%";

            //// accordion function
            var acc = self.getByClass("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        }
    }

    openSemester(semestre, elmnt, color) {
        var i, tabcontent, tablinks;
        tabcontent = this.getByClass("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = this.getByClass("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
            tablinks[i].style.color = "#35456C";

        }
        this.get(semestre).style.display = "block";
        elmnt.style.backgroundColor = color;
        elmnt.style.color = "white";
    }

    studentsSlider(slides_div, prev_div, next_div, indicator_div) {
        this.slider = new Slider(slides_div, prev_div, next_div, indicator_div);
    }

    get1split(string, div) {
        return string.split(div)[0];
    }

    display(id) {
        document.getElementById(id).style.display = "block";
    }

    hide(id) {
        document.getElementById(id).style.display = "none";
    }

    initTipeWriter() {
        const txtElement = this.getMultiple('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
    }

    initDocumentClick() {
        let self = this;
        document.onclick = function (e) {
            var search = self.get('search-res');
            var target = (e && e.target) || (e && e.srcElement);
            var display = 'none';

            while (target.parentNode) {

                if (target == search) {
                    display = 'block';
                    break;
                }
                target = target.parentNode;
            }

            search.style.display = display;

        }
    }
}


var spa = new Spa();
