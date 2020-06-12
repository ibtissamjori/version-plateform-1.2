class LaureateComponent {

    constructor(service) {
        this.service = service;
        this.laureates = spa.get("all-laureates");
        this.filtersPromo = spa.get('filter-promotion');
    }

    showLaureate(year) {
        let all = this.service.getLaureatesByFormation(1);
        let laureates = [];
        if (year == "all") {
            laureates = all;
        } else {
            laureates = this.service.getLaureatesByPromo(year);
        }

        let listPromo = this.getListPromo(all);
        this.addFiltersPromo(listPromo);
        this.addLaureates(laureates);

    }

    addFiltersPromo(list) {
        let div = '<input type="radio" id="All" name="promotion" value="All" class="checked">';
        for (let i = 0; i < list.length; i++) {
            div += ' <input type="radio" id="' + list[i] + '" name="promotion" value="' + list[i] + '">';
        }


        div += '<ol class="filters"><li onclick="filterPromo(\'all\')"><label for="All">Afficher tout</label></li>';

        for (let i = 0; i < list.length; i++) {
            div += '<li onclick="filterPromo(\'' + list[i] + '\')"><label for="' + list[i] + '">' + list[i] + '</label></li>';
        }

        div += '</ol>';

        this.filtersPromo.innerHTML = div;

    }

    addLaureates(listLaureates) {
        let div = '';
        for (let i = 0; i < listLaureates.length; i++) {
            div += this.addLaureate(listLaureates[i]);
        }
        this.laureates.innerHTML = div;
    }

    addLaureate(laureate) {
        return ' <div class="panels-laureate"><div class="panel-container">\n' +
            '        <h5><span class="span">Nom : </span>' + laureate.firstName + '</h5>\n' +
            '        <h5><span class="span">Prénom : </span>' + laureate.lastName + '</h5>\n' +
            '        <h5><span class="span">Ville : </span>' + laureate.city + '</h5>\n' +
            '        <h5><span class="span">Stage : </span>' + laureate.stagePartner + '</h5>\n' +
            '        <h5><span class="span">Emploi : </span>' + laureate.professionalStatues + '</h5>\n' +
            '        <h5><span class="span">Promotion : </span>' + laureate.promotion + '</h5>\n' +
            '    </div></div>';
    }

    getListPromo(laureates) {
        let tab = [];
        for (let i = 0; i < laureates.length; i++) {
            tab.push(laureates[i].promotion);
        }

        let a = [...new Set(tab)];

        return [...new Set(tab)].sort();
    }
}
