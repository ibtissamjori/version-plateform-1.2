class FormationComponent {
    constructor(service) {
        this.service = service;
        this.partnerComponent = new PartnerComponent(service);
        this.professorComponent = new ProfessorComponent(service);
        this.activityComponent = new ActivityComponent(service);
        this.eventComponent = new EventComponent(service);
        // this.actualityComponent = new ActualityComponent(service);
        this.studentComponent = new StudentComponent(service);
        this.programComponent = new ProgramComponent(service);
        this.laureateComponent = new LaureateComponent(service);

    }

    printFormation() {
        this.partnerComponent.showPartner();
        this.professorComponent.showProfessor();
        this.activityComponent.showActivity();
        this.eventComponent.showEvent();
        // this.actualityComponent.showActuality();
        this.studentComponent.showStudent();
        this.programComponent.showSemesters();
        this.laureateComponent.showLaureate("all");
        let formation = this.service.getOneFormation(1);
        this.showAbout(formation);
    }

    showAbout(formation) {
        let div = '<div id="about">\n' +
            '        <div class="about container">\n' +
            '            <div class="col-left">\n' +
            '                <div class="about-img">\n' +
            '                    <img src="imgs/professors/chenfour.jpg" alt="img">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="col-right">\n' +
            // '                <h1 class="section-title">' + formation.title + '</h1>\n' +
            '                <h2> - Date de création : ' + formation.dateFondation + '</h2>\n' +
            '                <p> ' + formation.description + '</p>\n' +
            '                <h2> - Qualités nécessaires d\'un MQListe : </h2>\n'+
            '                <p>'+ formation.condition+'</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';
        spa.get('apropos').innerHTML = div;
    }

    getFormationById(id) {
        return this.service.getOneFormation(id);
    }

    getLaureatesByPromo(year){
        this.laureateComponent.showLaureate(year);
        // return this.service.getLaureatesByPromo(year);
    }


}

