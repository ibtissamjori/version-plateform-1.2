class Formation {

    constructor(id, photo, title, subTitle, description, dateFondation, condition) {
        this.id = id;
        this.photo = photo;
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.dateFondation = dateFondation;
        this.condition = condition;
        this.events = [];
        this.activities = [];
        this.actualities = [];
        this.partners = [];
        this.students = [];
        this.professors = [];
        this.laureates = [];
        this.semesters = [];
    }


    addEvent(event) {
        this.events.push(event);
    }


    addActivity(activity) {
        this.activities.push(activity);
    }

    addPartner(partner) {
        this.partners.push(partner);
    }

    addStudent(student) {
        this.students.push(student);
    }

    addProfessor(professor) {
        this.professors.push(professor);
    }


    addLaureates(laureate) {
        this.laureates.push(laureate);
    }

    addSemester(semester) {
        this.semesters.push(semester);
    }

}
