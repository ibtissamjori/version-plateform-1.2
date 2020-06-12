class ActivityComponent {
    constructor(service) {
        this.service = service;
        this.activities = spa.get("all-activities");
    }

    showActivity() {
        let activities = this.service.getActivitiesByFormation(1);
        // console.log(activities);
        for (let i = 0; i < activities.length; i++) {
            this.addActivity(activities[i]);
        }
    }


    addActivity(activity) {
        /* let div = '<div class="project-item">\n' +
             '                    <div class="project-info">\n' +
             '                        <h1>' + activity.title + '</h1>\n' +
             '                        <h2>' + activity.subtitle + '</h2>\n' +
             '                        <p>' + activity.description + '</p>\n' +
             '                    </div>\n' +
             '                    <div class="project-img">\n' +
             '                        <img src="' + activity.photo + '" alt="img">\n' +
             '                    </div>\n' +
             '                </div>';*/

        let div = '<div class="activity-item">\n' +
            // '                    <div class="icon"><img src="' + activity.photo + '"/></div>\n' +
            '                    <h2>' + activity.title + '</h2>\n' +
            '                    <p>' + activity.description + '</p>\n' +
            '                </div>';
        this.activities.innerHTML += div;
    }

}
