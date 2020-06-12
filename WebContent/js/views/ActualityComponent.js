class ActualityComponent {

    constructor(service) {
        this.service = service;
        this.actualities = spa.get("actualitiesData");
    }

    showActuality() {
        let actualities = this.service.getActualitiesByFormation(1);
        // console.log(actualities);
        for (let i = 0; i < actualities.length; i++) {
            this.addActuality(actualities[i]);
        }
    }

    addActuality(actuality) {
        let div = '<div>\n' +
            '        <h3>' + actuality.title + '</h3>\n' +
            '        <h4>' + actuality.subtitle + '</h4>\n' +
            '        <p>' + actuality.description + '</p>\n' +
            '        <p>' + actuality.event + '</p>\n' +
            '    </div>';
        this.actualities.innerHTML += div;
    }
}
