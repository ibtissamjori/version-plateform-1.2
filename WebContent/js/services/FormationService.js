class FormationService {

    constructor() {
        this.formations = [];
    }

    load(db) {
        for (let i = 0; i < db.length; i++) {
            this.add(
                db[i]);
        }
    }

    add(db) {
        let formation = new Formation(
            db.id, db.photo, db.title, db.subTitle, db.description, db.dateFondation, db.condition
        );
        if (db.events != null) {
            formation.events = this.addEvents(db.events);
        }
        if (db.activities != null) {
            formation.activities = this.addActivities(db.activities);
        }
        if (db.actualities != null) {
            formation.actualities = this.addActualities(db.actualities);
        }
        if (db.partners != null) {
            formation.partners = this.addPartners(db.partners);
        }
        if (db.professors != null) {
            formation.professors = this.addProfessors(db.professors);
        }
        if (db.students != null) {
            formation.students = this.addStudents(db.students);
        }
        if (db.laureates != null) {
            formation.laureates = this.addLaureates(db.laureates);
        }
        if (db.semesters != null) {
            formation.semesters = this.addSemesters(db.semesters);
        }

        this.formations.push(formation);
    }

    addActivities(activities) {
        let table = [];
        for (let i = 0; i < activities.length; i++) {
            table.push(
                new Activity(
                    activities[i].id,
                    activities[i].title,
                    activities[i].subtitle,
                    activities[i].photo,
                    activities[i].concept,
                    activities[i].description
                ));
        }

        return table;
    }

    addActualities(actualities) {
        let table = [];
        for (let i = 0; i < actualities.length; i++) {
            table.push(
                new Actuality(
                    actualities[i].id,
                    actualities[i].title,
                    actualities[i].subtitle,
                    actualities[i].description,
                    actualities[i].event
                ));
        }

        return table;
    }

    addEvents(events) {
        let table = [];
        for (let i = 0; i < events.length; i++) {
            table.push(
                new Event(
                    events[i].id,
                    events[i].title,
                    events[i].subTitle,
                    events[i].concept,
                    events[i].photo,
                    events[i].video,
                    events[i].date,
                    events[i].description
                ));
        }

        return table;
    }

    addJobs(jobs) {
        let table = [];
        if (jobs != null) {
            for (let i = 0; i < jobs.length; i++) {
                // console.log('job[i]  ', jobs[i]);
                table.push(
                    new Job(
                        jobs[i].id,
                        jobs[i].title,
                        jobs[i].beginDate,
                        jobs[i].endDate,
                        jobs[i].duration,
                        jobs[i].subject,
                        this.getOnePartner(jobs[i].partner_id),
                        jobs[i].type
                    ));
            }
        }

        return table;
    }

    addPartners(partners) {
        let table = [];
        for (let i = 0; i < partners.length; i++) {
            table.push(
                new Partner(
                    partners[i].id,
                    partners[i].name,
                    partners[i].address,
                    partners[i].activity,
                    partners[i].photo,
                    partners[i].description,
                    partners[i].phone,
                    partners[i].email,
                    partners[i].webSite
                ));
        }

        return table;
    }

    addStudents(students) {
        let table = [];
        for (let i = 0; i < students.length; i++) {
            table.push(
                new Student(
                    students[i].id,
                    students[i].firstName,
                    students[i].lastName,
                    students[i].email,
                    students[i].city,
                    students[i].previousFormation,
                    students[i].cne,
                    students[i].cin
                ));
        }

        return table;
    }

    addLaureates(laureates) {
        let table = [];
        for (let i = 0; i < laureates.length; i++) {
            table.push(
                new Laureate(
                    laureates[i].id,
                    laureates[i].firstName,
                    laureates[i].lastName,
                    laureates[i].email,
                    laureates[i].city,
                    laureates[i].previousFormation,
                    laureates[i].cne,
                    laureates[i].cin,
                    this.addJobs(laureates[i].jobs),
                    laureates[i].promotion,
                    laureates[i].photo,
                    laureates[i].localisation,
                    laureates[i].stagePartner,
                    laureates[i].professionalStatues,
                    laureates[i].Actualpartner
                ));
        }

        return table;
    }

    addProfessors(professors) {
        let table = [];
        for (let i = 0; i < professors.length; i++) {
            table.push(
                new Professor(
                    professors[i].id,
                    professors[i].photo,
                    professors[i].firstName,
                    professors[i].lastName,
                    professors[i].tel,
                    professors[i].email,
                    professors[i].subject,
                    professors[i].grade,
                    professors[i].type
                ));
        }

        return table;
    }

    addSemesters(semesters) {
        let table = [];
        for (let i = 0; i < semesters.length; i++) {
            table.push(
                new Semester(
                    semesters[i].id,
                    semesters[i].name,
                    this.addSubjects(semesters[i].subjects)
                ));
        }

        return table;
    }

    addSubjects(subjects) {
        let table = [];
        for (let i = 0; i < subjects.length; i++) {
            table.push(
                new Subject(
                    subjects[i].id,
                    subjects[i].name,
                    subjects[i].photo
                ));
        }

        return table;
    }

    //formation

    getAllFormations() {
        return this.formations;
    }

    getOneFormation(id) {
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id == id) {
                return this.formations[i];
            }
        }
        return null;
    }


    // activities ------------------------------------------------------------

    getActivitiesByFormation(id) {
        return this.getOneFormation(id).activities;
    }

    getAllActivities() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].activities);
        }
        return table;
    }


    // actualities-------------------------------------------------------------

    getActualitiesByFormation(id) {
        return this.getOneFormation(id).actualities;
    }

    getAllActualities() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].actualities);
        }
        return table;
    }

    // Events------------------------------------------------------------------

    getEventsByFormation(id) {
        return this.getOneFormation(id).events;
    }

    getAllEvents() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].events);
        }
        return table;
    }

    // Jobs--------------------------------------------------------------------

    getJobsByFormation(id) {
        return this.getOneFormation(id).jobs;
    }

    getAllJobs() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].jobs);
        }
        return table;
    }

    // Partners----------------------------------------------------------------

    getPartnersByFormation(id) {
        return this.getOneFormation(id).partners;
    }

    getAllPartners() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].partners);
        }
        return table;
    }


    getOnePartner(id) {
        let partners = this.getAllPartners();
        for (let i = 0; i < partners.length; i++) {
            if (partners[i].id == id) {
                return partners[i];
            }
        }
        return null;
    }

    // Professors--------------------------------------------------------------

    getProfessorsByFormation(id) {
        return this.getOneFormation(id).professors;
    }

    getAllProfessors() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].professors);
        }
        return table;
    }


    // Students----------------------------------------------------------------

    getStudentsByFormation(id) {
        return this.getOneFormation(id).students;
    }

    getAllStudents() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].students);
        }
        return table;
    }

    // Laureates---------------------------------------------------------------

    getLaureatesByFormation(id) {
        return this.getOneFormation(id).laureates;
    }

    getAllLaureates() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].laureates);
        }
        return table;
    }

    getLaureatesByPromo(year) {
        let table = [];
        let temp = this.getOneFormation(1).laureates;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].promotion == year) {
                table.push(temp[i]);
            }

        }
        return table;
    }

    ////////////////////////////////////////
    getActualityByEvent() {

    }

    // Semesters ---------------------------------------------------------------

    getSemestersByFormation(id) {
        return this.getOneFormation(id).semesters;
    }

    getAllSemesters() {
        let table = [];
        let temp = this.getAllFormations();
        for (let i = 0; i < temp.length; i++) {
            table.push(temp[i].semesters);
        }
        return table;
    }
}
