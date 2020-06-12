class PartnerComponent {

    constructor(service) {
        this.service = service;
        this.partners = spa.get("all-partners");
    }

    showPartner() {
        let partners = this.service.getPartnersByFormation(1);
        for (let i = 0; i < partners.length; i++) {
            this.addPartner(partners[i]);
        }
    }

    addPartner(partner) {
        let div = '<div class="partner-item">\n' +
            '                    <div class="icon">\n' +
            '                        <img src="' + partner.photo + '"/>\n' +
            '                    </div>\n' +
            '                    <div class="partner-info">\n' +
            // '                        <h1>'+partner.name+'</h1>\n' +
            '                        <p>' + partner.description + '</p>\n' +
            '                        <h2><a href="' + partner.webSite + '" target="_blank">' + partner.webSite + '</a></h2>\n' +
            '                    </div>\n' +
            '                </div>';
        this.partners.innerHTML += div;
    }
}
