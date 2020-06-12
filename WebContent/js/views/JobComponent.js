class JobComponent {

    constructor(service) {
        this.service = service;
        this.jobs = spa.get("jobs");
    }

    showJob() {
        let jobs = this.service.getJobsByFormation(1);
        for (let i = 0; i < jobs.length; i++) {
            this.addJob(jobs[i]);
        }
    }

    addJob(job) {
        let div = '<div class="testimonial-item box-border">\n' +
            '            <div class="testimonial-image">\n' +
            '                <div class="testimonial-image-border">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <p class="mb-0 mt-2 text-muted">' + job.beginDate + '</p>\n' +
            '            <p class="mb-0 mt-2 text-muted">' + job.endDate + '</p>\n' +
            '            <span class="d-block mt-3 font-weight-bold mr-2">' + job.partner + '<small class="text-muted">' + job.type + '</small></span>\n' +
            '        </div>';
        this.jobs.innerHTML += div;
    }
}
