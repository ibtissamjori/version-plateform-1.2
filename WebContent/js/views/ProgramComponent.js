class ProgramComponent {
    constructor(service) {
        this.service = service;
    }

    showSemesters() {
        let semesters = this.service.getSemestersByFormation(1);
        // console.log("ssss", semesters);

        for (let i = 0; i < semesters.length; i++) {
            let s = semesters[i];

            if (s.id === 1) {
                this.addSemester(s.subjects, 'semester-1');
            } else if (s.id === 2) {
                this.addSemester(s.subjects, 'semester-2');
            } else if (s.id === 3) {
                this.addSemester(s.subjects, 'semester-3');
            } else {
                this.addSemester(s.subjects, 'semester-4');
            }
        }

    }

    addSemester(s, divId) {
        let div = '';

        if (divId === "semester-4") {
            for (let i = 0; i < s.length; i++) {
                div = '<p>' + s[i].name + '</p>';
            }

        } else {
            for (let i = 0; i < s.length; i++) {
                div += '<div class="grid-item ">\n' +
                    '    <div class="panels">\n' +
                    '        <a href="#">\n' +
                    '            <img src="' + s[i].photo + '">\n' +
                    '        </a>\n' +
                    '        <div class="desc">\n' +
                    '            <span>' + s[i].name + '</span>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>\n';
            }
        }


        spa.get(divId).innerHTML = div;
    }
}
