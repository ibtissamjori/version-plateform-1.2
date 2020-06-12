class EventComponent {
    constructor(service) {
        this.service = service;
        this.events = spa.get("all-events");
    }

    showEvent() {
        let events = this.service.getEventsByFormation(1);
        // console.log('events  ', events);
        for (let i = 0; i < events.length; i++) {
            this.addEvent(events[i]);
        }
    }


    addEvent(event) {
        let div = '<div class="event-item">\n' +
            '                    <div class="event-info">\n' +
            '                        <h1>' + event.title + '</h1>\n' +
            '                        <h2>' + event.subTitle + '</h2><h2> ' + event.date + '</h2>\n' +
            '                        <p>' + event.description + '</p>\n' +
            '                    </div>\n' +
            '                    <div class="event-img">\n' +
            '                        <img src="' + event.photo + '" alt="img">\n' +
            '                    </div>\n' +
            '                </div>';
        this.events.innerHTML += div;
    }

}
