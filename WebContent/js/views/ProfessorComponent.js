class ProfessorComponent {
    constructor(service) {
        this.service = service;
        this.professors = spa.get("all-professors");
    }

    showProfessor() {
        let professors = this.service.getProfessorsByFormation(1);
        for (let i = 0; i < professors.length; i++) {
            this.addProfessor(professors[i]);
        }

    }

    addProfessor(professor) {
        let div = '<div class="profesor-item">\n' +
            '                    <div class="card">\n' +
            '                        <div class="imgBx">\n' +
            '                            <img src="' + professor.photo + '"' +
            '                                 alt="images">\n' +
            '                        </div>\n' +
            '                        <div class="details">\n' +
            '                            <h2>' + professor.firstName + ' ' + professor.lastName +
            '                               <br><span>' + professor.type + '</span></h2>\n' +
            '                               <h3><span>' + professor.subject + '</span></h3>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                </div>';
        this.professors.innerHTML += div;
    }
}


