class Laureate extends Student {


    constructor(id, firstName, lastName, email, city, previousFormation, cne, cin, jobs,
                promotion, photo, localisation, stagePartner, professionalStatues, Actualpartner) {
        super(id, firstName, lastName, email, city, previousFormation, cne, cin);
        this.jobs = jobs;
        this.promotion = promotion;
        this.photo = photo;
        this.localisation = localisation;
        this.stagePartner = stagePartner;
        this.professionalStatues = professionalStatues;
        this.Actualpartner = Actualpartner;
    }
}
