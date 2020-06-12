class StudentComponent {

    constructor(service) {
        this.service = service;
        this.students = spa.get("all-students");
        // this.panels = spa.get("slide");
    }

    showStudent() {
        let students = this.service.getStudentsByFormation(1);
        // console.log("students >> ", students);

        let nbrSlides = students.length % 8 == 0 ? students.length / 8 : (students.length / 8) + 1;

        let k = 8;
        this.addSlide("active", students.slice(0, k));

        for (let i = 1; i < parseInt(nbrSlides, 10); i++) {
            this.addSlide("", students.slice(k, k + 8));
            k += 8;
        }
        spa.studentsSlider(".slider", ".prev", ".next", ".indicator");
    }

    addSlide(active, students) {

        let div = '<div class="slide ' + active + '">\n' +
            '                            <div class="caption">\n' +
            '                                <div class="grid-i">\n' +
            this.addStudents(students) +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
        this.students.innerHTML += div;
    }

    addStudents(listStudents) {
        let div = '';
        for (let i = 0; i < listStudents.length; i++) {
            div += this.addStudent(listStudents[i]);
        }
        return div;
    }

    addStudent(student) {
        return '<div class="panels-student"><div class="panel-container">\n' +
            '        <h5><span class="span">Nom : </span>' + student.firstName + '</h5>\n' +
            '        <h5><span class="span">Prénom : </span>' + student.lastName + '</h5>\n' +
            '        <h5><span class="span">CNE : </span>' + student.cne + '</h5>\n' +
            '    </div></div>';
    }
}
