var view;

function main() {

    let service = new FormationService();
    service.load(formationDB);
    view = new FormationComponent(service);
    view.printFormation();
}

function search(value) {

    let formation = view.getFormationById(1);

    spa.get('search-res').innerHTML = '';
    spa.hide('search-res');

    let table = document.createElement("table");
    let tr = null;
    let td = null;

    if (value.length > 0) {

        spa.display('search-res');

        if (formation.description.toLowerCase().includes(value.toLowerCase())) {
            table.appendChild(addRow('apropos', 'A PROPOS', formation.title));
        }
        for (let i = 0; i < formation.activities.length; i++) {
            let a = formation.activities[i];
            if (a.title.toLowerCase().includes(value.toLowerCase()) || a.description.toLowerCase().includes(value.toLowerCase())) {
                table.appendChild(addRow('formation-activites', 'ACTIVITE', a.title));
            }
        }
        for (let i = 0; i < formation.events.length; i++) {
            let e = formation.events[i];
            if (e.title.toLowerCase().includes(value.toLowerCase()) || e.description.toLowerCase().includes(value.toLowerCase())) {
                table.appendChild(addRow('evenements', 'EVENNEMENT', e.title));
            }
        }
        for (let i = 0; i < formation.partners.length; i++) {
            let p = formation.partners[i];
            // console.log("ppp >> ", p);

            if (p.name.toLowerCase().includes(value.toLowerCase()) || p.description.toLowerCase().includes(value.toLowerCase())) {
                table.appendChild(addRow('partenaires', 'PARTENAIRE', p.name));
            }
        }
        for (let i = 0; i < formation.professors.length; i++) {
            let p = formation.professors[i];
            if (p.firstName.toLowerCase().includes(value.toLowerCase()) || p.lastName.toLowerCase().includes(value.toLowerCase()) || p.subject.toLowerCase().includes(value.toLowerCase())) {
                let val = p.firstName + " " + p.lastName;
                table.appendChild(addRow('professeurs', 'PROFESSEUR', val));

            }
        }
        for (let i = 0; i < formation.students.length; i++) {
            let s = formation.students[i];
            if (s.firstName.toLowerCase().includes(value.toLowerCase()) || s.lastName.toLowerCase().includes(value.toLowerCase()) || s.cne.toLowerCase().includes(value.toLowerCase())) {
                let val = s.firstName + " " + s.lastName;
                table.appendChild(addRow('etudiants-selectiones', 'ETUDIANT', val));
            }
        }
        for (let i = 0; i < formation.laureates.length; i++) {
            let l = formation.laureates[i];
            if (l.firstName.toLowerCase().includes(value.toLowerCase()) || l.lastName.toLowerCase().includes(value.toLowerCase()) || l.stagePartner.toLowerCase().includes(value.toLowerCase()) || l.professionalStatues.toLowerCase().includes(value.toLowerCase()) || l.promotion == value.toLowerCase || l.city.toLowerCase().includes(value.toLowerCase())) {
                let val = l.firstName + " " + l.lastName
                table.appendChild(addRow('etudiants-laureats', 'LAUREAT', val));
            }
        }
        for (let i = 0; i < formation.semesters.length; i++) {
            let sm = formation.semesters[i];
            if (sm.name.toLowerCase().includes(value.toLowerCase())) {
                table.appendChild(addRow('formation-programme', 'MODULE', sm.name));
            }

            for (let j = 0; j < sm.subjects.length; j++) {
                let sb = sm.subjects[j];
                if (sb.name.toLowerCase().includes(value.toLowerCase())) {
                    table.appendChild(addRow('formation-programme', 'MODULE', sb.name));
                }
            }

        }
    }

    spa.get('search-res').appendChild(table);
    // console.log("value >> ", res);

}

function addRow(sectionId, key, value) {
    tr = document.createElement("tr");
    tr.setAttribute("onclick", "spa.show('" + sectionId + "');");

    td = document.createElement("td");
    td.innerText = key;

    // tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = ":";

    // tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = value;

    tr.appendChild(td);
    return tr;
}

function filterPromo(year) {
    view.getLaureatesByPromo(year);
}
