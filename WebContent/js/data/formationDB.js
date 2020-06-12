var formationDB = [
    {
        id: 1,
        title: 'MQL',
        subTitle: 'Master Qualité du logiciel',
        subtitle2: "Première passerelle d’Insertion Professionnelle en Informatique au Maroc",
        description: 'Le master qualité du logiciel forme des ressource humaine très hautement qualifiée en ingénierie du logiciel, Au fil des années,' +
            ' la méthode pédagogique du MQL s’est affinée pour proposer une nouvelle façon d’apprendre à devenir professionnel.le socle pédagogique de notre ' +
            'Master Qualité du logiciel repose sur 3 piliers : maîtrise des bon pratique compétences techniques / capacité au travail en équipe / compréhension' +
            ' du fonctionnement et des valeurs de l’entreprise.Nous vous formons à des langages et à l’ingénierie informatique sur 2 ans progressivement.\n' +
            'Le MQL participe très activement dans le domaine de l’offshore. Le principal « client » MQL se trouve dans tous les parcs d’activité offshore et ' +
            'Outsourcing au Maroc et principalement Casablanca Nearshore Park, Rabat Technopolis et Fès Shore avec un taux d’insertion de 100% des étudiants ' +
            'dans des multinationales : Capgemini, CGI Tcehnologies, Atos, Umanis, Cegedim et Accenture...\n',
        dateFondation: '2005',
        condition: 'Être un MQListe, va nécessiter principalement d’avoir des qualités personnelles, intellectuelles et professionnelles dont on trouve l’acquisition des connaissances en programmation, la flexibilité, la motivation, la capacité de communiquer et identifier les enjeux et L\'esprit d\'équipe,\n' +
            'en adoptant bien évidement la capabilité de progression, de développement et du créativité continue.\n ',
        piecesAFournir: 'Photocopies des Attestations de réussite, Photocopies des Relevés des notes des années universitaires ,Photocopie de la carte d’identité nationale, Une photo.',
        maniereDepot: 'Les dossiers peuvent être déposés directement au secrétariat du département d’Informatique, ou envoyés postale à l’adresse ci-dessous.',
        adresse: "Master Qualité Logiciel (N. Chenfour), Département d’Informatique,Faculté des Sciences Dhar El Mahraz, BP : 1796 Atlas, Fès, Maroc",
        semesters: [
            {
                id: 1,
                name: "S1",
                subjects: [
                    {id: "M1", name: "Ingénierie de l’Objet et Technologie Java", photo: "imgs/program/java.jpeg"},
                    {id: "M2", name: "Technologie XML", photo: "imgs/program/xml1.jpg"},
                    {id: "M3", name: "Génie Logiciel & Modélisation UML", photo: "imgs/program/umlll.png"},
                    {id: "M4", name: "Administaration Bases de données", photo: "imgs/program/db.jpg"},
                    {id: "M5", name: "Audit & Qualité du Logiciel", photo: "imgs/program/audit.jpg"},
                    {id: "M6", name: "Communication Professionnelle", photo: "imgs/program/prof.jpg"},
                ],

            },
            {
                id: 2,
                name: "S2",
                subjects: [
                    {id: "M1", name: "Design Patterns", photo: "imgs/program/dp3.jpeg"},
                    {id: "M2", name: "Ingénierie du Web", photo: "imgs/program/weba.jpg"},
                    {id: "M3", name: "Architecture Java EE", photo: "imgs/program/jee.jpg"},
                    {id: "M4", name: "Technologies Mobiles", photo: "imgs/program/mobilee.jpg"},
                    {id: "M5", name: "Portails d’entreprises", photo: "imgs/program/entreprises.jpg"},
                    {id: "M6", name: "Gestion de projets & Méthodes Agiles", photo: "imgs/program/agil.jpg"},
                ],
            },
            {
                id: 3,
                name: "S3",
                subjects: [
                    {id: "M1", name: "Frameworks Java EE", photo: "imgs/program/jss.png"},
                    {id: "M2", name: "Plateforme Applicative Microsoft", photo: "imgs/program/nett.png"},
                    {
                        id: "M3",
                        name: "Outils d’industrialisation & environnement Offshore",
                        photo: "imgs/program/outilsIns.png"
                    },
                    {id: "M4", name: "Business Intelligence & Big Data", photo: "imgs/program/bigdata.jpg"},
                    {id: "M5", name: "Cloud Computing", photo: "imgs/program/cloudc.jpg"},
                    {id: "M6", name: "Culture d’entreprise", photo: "imgs/program/culturee.jpeg"},
                ],
            },
            {
                id: 4,
                name: "S4",
                subjects: [
                    {
                        id: "M1",
                        name: "A la fin des deux années nos étudiants effectuent un stage pré embauche dans des multinationales actives en développement offshore ,ce dernier permet la mise en application des compétences acquises qui finit fréquemment avec une integration totale en signant un contrat CDI même avant de continuer la durée de stage prévue .",
                        photo: "imgs/hero-bg.png"
                    },
                ],
            }
        ],
        coordonnateur: {
            name: ' Pr.Noureddine Chenfour',
            photo: 'imgs/professors/chenfour.jpg'
        },
        descProf: 'Nos mentors partagent avec vous leur expérience et vous aide à préempter les évolutions du marché.',
        activities: [
            {
                id: 1,
                title: "Déroulement des cours",
                photo: "imgs/activities/cours.jpg",
                subtitle: "Cours ",
                concept: "concp1",
                description: "Au menu de la formation MQL, beaucoup de technologies informatiques sont enseignées par des enseignants qualifiés qui n’hésitent pas" +
                    " à partager avec les étudiants leurs expériences et leurs savoir-faire afin de consolider d’avantage leurs connaissances fondamentales et pour" +
                    " qu’ils soient à l’écoute du marché du travail."
            },

            {
                id: 2,
                title: "Travaux Pratiques",
                subtitle: "Cours ",
                concept: "concp1",
                description: "Les cours sont complétés par des cas pratiques traités dans le cadre des travaux dirigés,\n" +
                    "Ces derniers permettent aux étudiants de sortir du cadre théorique de l’enseignement et d’approfondir les connaissances acquises lors des cours.\n" +
                    "Le corps professoral de haut niveau permet aux étudiants une assimilation fluide et rapide des cours et TDs.\n"
            },
            {
                id: 3,
                title: "Travaux Dirigés",
                subtitle: "Cours ",
                concept: "concp1",
                description: "Ils servent à mettre en pratique les connaissances apprises lors des cours ou bien d’introduire de nouvelles notions. Grâce à eux, " +
                    "les étudiants se mettent en contact direct avec les technologies et profitent d’un volume horaire considérable d’application."
            },
            {
                id: 4,
                title: "Travaux Individuels",
                subtitle: "travaux ",
                photo: "imgs/activities/TravauxIndiv.jpg",
                concept: "concp2",
                description: "Les professeurs demandent aux étudiants de réaliser des travaux individuels sous forme de projets et de recherches, ce sont une sorte de devoirs à " +
                    "la maison qui servent à l’évaluation des étudiants. "
            },
            {
                id: 5,
                title: "Travaux d’Équipes",
                subtitle: "travaux d’équipes",
                photo: "imgs/activities/TGroupe2.jpg",
                concept: "concp2",
                description: "La formation offre une véritable opportunité pour expérimenter le travail en équipe. Les étudiants forment des groupes et interagissent entre eux " +
                    "afin de se donner ou d'accomplir une cible commune. Ce qui renforce le principe de partager et de collaboration."
            },
            {
                id: 6,
                title: " Présentations",
                subtitle: "sub2",
                photo: "imgs/activities/TGroupe2.jpg",
                concept: "concp2",
                description: "Le but de ces présentations est de préparer les étudiants au monde professionnel.\n" +
                    "En effet, ce type des travaux développe chez eux une confiance en soi et leur permet de mieux gérer le stress.\n" +
                    "C’est une occasion aussi de se familiariser avec le travail en équipe et de pratiquer la langue française.\n"
            },
            {
                id: 7,
                title: "Soft Skills",
                subtitle: "sub2",
                photo: "imgs/activities/skilsjpg.jpg",
                concept: "concp2",
                description: "Les étudiants acquièrent leurs compétences personnelles qui incluent la résilience, la communication, la pensée créative, le travail d'équipe," +
                    " avoir la capabilité de résolution des problèmes, grâce à à la pédagogie éducative suivie par MQL."
            }
        ],
        actualities: [
            {
                id: 1,
                title: "",
                subtitle: 'sub1',
                description: "desc1",
                event: {
                    id: 1,
                    title: "event1",
                    subTitle: "sub1",
                    concept: "concept1",
                    photo: "phtp",
                    video: "video",
                    date: "date",
                    description: "description"
                }
            },
            {
                id: 2,
                title: "act2",
                subtitle: 'sub2',
                description: "desc2",
                event: {
                    id: 1,
                    title: "event1",
                    subTitle: "sub1",
                    concept: "concept1",
                    photo: "phtp",
                    video: "video",
                    date: "date",
                    description: "description"
                }
            }

        ],
        events: [
            {
                id: 1,
                title: "Compagnes de stages",
                subTitle: "",
                concept: "concept1",
                photo: "imgs/events/compagneStage.JPG",
                video: "video",
                date: "Octobre et Novembre de chaque année.",
                description: "Les représentants d’entreprises multinationaux, tels que CAPGEMINI, UMANIS, CGI…, ont tendance d’organiser chaque année du mois octobre, des compagnes de stages dans lesquelles, elles visent à  \n" +
                    "Sélectionner des profils correspondants à leurs besoin techniques et personnelles, les étudiants admis seront des stagiaires qui mènent à bien des missions concrètes et valorisantes, après\n" +
                    "avoir pleinement intégré dans des équipes de travail. \n"
            },
            {
                id: 2,
                title: "Tests Psycho-techniques",
                subTitle: "",
                concept: "concept2",
                photo: "imgs/events/SAM_1952.JPG",
                video: "video",
                date: "Octobre et Novembre de chaque année.",
                description: "Durant ces compagnes de stages, les étudiants sont invités à passer des test psychotechniques comprennent : des tests logiques, des tests de dominos," +
                    " des tests de cartes, des tests mécaniques, des tests verbaux et des tests de mémoire.\n" +
                    "Après avoir passé le test psychotechnique les étudiants sélectionnés, sont convoqué pour passer le test technique, ce dernier a conçus pour" +
                    " évaluer et examiner leurs connaissances et compétences techniques informatiques.\n"
            },
            {
                id: 3,
                title: "Entretiens RH",
                subTitle: "",
                concept: "concept2",
                photo: "imgs/events/SAM_1983.JPG",
                video: "video",
                date: "Octobre et Novembre de chaque année.",
                description: "L'entretien RH est l'occasion où   Le candidat sera accueilli par  le responsable des ressources humaines. Pendant ce dernier " +
                    "le candidat doit mettre en avant son expérience, ses compétences  communicative et sa personnalité à travers la description de son parcours " +
                    "professionnel."
            },
            {
                id: 4,
                title: "Fêtes d’honoration",
                subTitle: "",
                concept: "concept2",
                photo: "imgs/events/birthdayParty.JPG",
                video: "video",
                date: "le 24-12-2020",
                description: " Un événement très marquant organisée par les étudiants M1 et M2, dans le but de remercier leur honorables professeurs en saisissant l’occasion d’exprimer leur appréciation devant les efforts déployés par ces derniers,\n" +
                    "la fête en générale se passe dans une atmosphère familiale, ce qui implique  plus facilement l’intégration et l’adaptation des étudiants en partageant des moments et des émotions spéciaux.\n"

            },
            {
                id: 5,
                title: "Journée Entrepreneuriale",
                subTitle: ' "L\'entrepreneuriat, c\'est d\'abord une rencontre avec soi "',
                concept: "concept2",
                photo: "imgs/events/journéeentreprnariale.JPG",
                video: "video",
                date: "le 02-01-2020",
                description: "Cet événement est rendu possible chaque année dans le départements d'informatique sous l'organisation des MQListes," +
                    "en réunissant de nombreux acteurs , experts, et visiteurs dans le but de découvrir différents projets proposés par les jeunes " +
                    "entrepreneurs étudiants afin de conjuguer l'audace et le plaisir d’innover et d’exprimer l’esprit entrepreneurial chez eux," +
                    " en les permettant d’aller plus loin et plus vite dans la création de leurs projets"

            },
            {
                id: 6,
                title: "Remise des diplômes",
                subTitle: "",
                concept: "concept2",
                photo: "imgs/events/remiseDiplome.jpeg",
                video: "",
                date: "Avril de chaque année",
                description: "C'est une cérémonie au profit des lauréats au cours de laquelle sont décernés le titre universitaire, marquant la fin du cycle universitaire " +
                    "et les premiers pas dans le monde professionnel, Cette cérémonie est un événement incontournable pour le master MQL. " +
                    "Chaque année l'équipe du master, accompagnée de ses invités et professeurs accueillent avec plaisir les futures diplômés" +
                    " et leurs familles pour un rendez-vous riche en émotions.  la cérémonie de remise des diplômes au profit des lauréats de la promotion 2015."
            }
        ],
        jobs: [
            {
                id: 1,
                title: "job",
                beginDate: "date1",
                endDate: "date2",
                duration: "duration1",
                subject: "subject1",
                partner:
                    {
                        id: 2,
                        name: "partner2",
                        address: "adress2",
                        activity: "activity2",
                        photo: "photo2",
                        description: "desc2",
                        phone: "phone2",
                        email: "umanis@email.com",
                        webSite: "website2",
                        type: "type1"
                    }

            },
            {
                id: 2,
                title: "job2",
                beginDate: "date2",
                endDate: "date2",
                duration: "duration2",
                subject: "subject2",
                type: "type2"
            }
        ],
        laureates: [
            {
                id: 1,
                firstName: "Hatim",
                lastName: "Essadeq",
                email: "hatim.essadeq@usmba.ac.ma",
                city: "Casablanca",
                previousFormation: "Licence Professionnelle",
                cne: "1513769267",
                cin: "CD479691",
                job: [{
                    id: 1,
                    title: "job",
                    beginDate: "02/30/2020",
                    endDate: "02/09/2020",
                    duration: "6 mois",
                    subject: "APization d'un micro service",
                    partner:
                        {
                            id: 2,
                            name: "Capgemini Casablanca",
                            address: "adress2",
                            activity: "activity2",
                            photo: "photo2",
                            description: "desc2",
                            phone: "phone2",
                            email: "umanis@email.com",
                            webSite: "website2",
                            type: "type1"
                        }
                }],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 2,
                firstName: "Daoud",
                lastName: "WIRZGANE",
                email: "daoud.wirzgane@outlook.com",
                city: "Fès",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [{
                    id: 1,
                    title: "embauche",
                    beginDate: "02/03/2020",
                    endDate: "02/09/2020",
                    duration: "6mois",
                    subject: "Gestion automatique des documents",
                    type: "stage pré-embauche",
                    partner:
                        {
                            id: 2,
                            name: "Intelcia",
                            address: "adress2",
                            activity: "activity2",
                            photo: "photo2",
                            description: "desc2",
                            phone: "phone2",
                            email: "umanis@email.com",
                            webSite: "website2",
                            type: "type1"
                        }
                }],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Intelcia",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 3,
                firstName: "Hicham",
                lastName: "EL MORABET",
                email: "elmorabethicham@gmail.com",
                city: " Lyon",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "France",
                stagePartner: "Umanis",
                professionalStatues: "Stagiaire",
                actualPartner: "Capgemini"
            },
            {
                id: 4,
                firstName: "Ibtissam",
                lastName: "El khairy",
                email: "elkhairy.ibtissam96@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Cegedim ",
                professionalStatues: "Ingénieur",
                actualPartner: "BITS"
            },
            {
                id: 5,
                firstName: "Aymane",
                lastName: "HAMMIOUI",
                email: "aymane.hammioui@gmail.com",
                city: "Casablanca ",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "template/img/laureates/IMG_20200518_165947 - ibis imy.jpg",
                localisation: "Maroc",
                stagePartner: "Cegedim ",
                professionalStatues: "Consultant",
                actualPartner: "Salesforce"
            },
            {
                id: 6,
                firstName: "YOUSSEF",
                lastName: "Mouad",
                email: "imouad.you@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "SQLI ",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 7,
                firstName: "Safae",
                lastName: "Filali Sadiq",
                email: "safae.filali.sadiq@gmail.com",
                city: "Rabat",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "template/img/laureates/IMG_20190726_162514_0 - Filali Sadiq.jpg",
                localisation: "Maroc",
                stagePartner: "Capgemini ",
                professionalStatues: "Devloppeur",
                actualPartner: "Sofrecom"
            },
            {
                id: 8,
                firstName: "Ghita",
                lastName: "EL HAKMI",
                email: "ghita.lvsl@gmail.co",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieur",
                actualPartner: "Capgemini"
            },
            {
                id: 9,
                firstName: "Fatima",
                lastName: "ZERKOUN",
                email: "zerkoun.fatima@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/inbound3324569255492323171 - zerkoun fatima.jpg",
                localisation: "Maroc",
                stagePartner: "CGI",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 10,
                firstName: "Ahmed",
                lastName: "BELARBI",
                email: "belarbi.ahmed21@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "template/img/laureates/1BF942A2-4BF3-4B6F-B66A-29ADB658D576 - Ahmed Belarbi.jpeg",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieur PL/SQL",
                actualPartner: "Capgemini"
            },
            {
                id: 11,
                firstName: "ayoub",
                lastName: "dadi",
                email: "ayoub.dadi25@gmail.com",
                city: "Casablanca ",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "template/img/laureates/1572434108160 - ayoub dadi.jpg",
                localisation: "Maroc",
                stagePartner: "CGI ",
                professionalStatues: "Ingénieur",
                actualPartner: "CGI  "
            },
            {
                id: 12,
                firstName: "chaimae",
                lastName: "Laalahmi",
                email: "chaimae.laalahmi@gmail.com",
                city: "rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieur",
                actualPartner: "Capgemini",
            },
            {
                id: 13,
                firstName: "Anouar",
                lastName: "MAJDOULIF",
                email: "anouarmajdoulif@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Consultant ",
                actualPartner: "Leyton"
            },
            {
                id: 14,
                firstName: "Hala",
                lastName: "Mestadi",
                email: "hmestadi@sqli.com",
                city: "Rabat",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "SQLI",
                professionalStatues: "Stagiaire ",
                actualPartner: ""
            },
            {
                id: 15,
                firstName: "Fatima ez-zahrae",
                lastName: "DRIOUICH",
                email: "driouich.fatimaezzahrae@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "template/img/laureates/photo d'identité - fatima ez-zahrae driouich.jpg",
                localisation: "Maroc",
                stagePartner: "DXC Technology",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 16,
                firstName: "Marwa",
                lastName: "MAHBOUB",
                email: "mahboub.marwa.96@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieure",
                actualPartner: "Capgemini"
            },
            {
                id: 17,
                firstName: "RIAD",
                lastName: "EL MANSOUR",
                email: "el.mansour@hotmail.fr",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "template/img/laureates/20190204_164413 - Riad EL MANSOUR.jpg",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieur, MOE ",
                actualPartner: "Royale Marocaine d'Assurances "
            },
            {
                id: 18,
                firstName: "Nizar",
                lastName: "Yakoubi",
                email: "nizar.yakoubi@usmba.ac.ma",
                city: "Casablanca",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "",
                localisation: "France",
                stagePartner: "Cgi",
                professionalStatues: "Fullstack JEE",
                actualPartner: ""
            },
            {
                id: 19,
                firstName: "Souhayla",
                lastName: "BOUZRIA",
                email: "bouzria.souhayla@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "ingénieur",
                actualPartner: "Capgemini"
            },
            {
                id: 20,
                firstName: "Badr",
                lastName: "ZEROUAL",
                email: "badr.zer@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2014,
                photo: "template/img/laureates/received_527627004337009 - Badr ZEROUAL.jpeg",
                localisation: "France",
                stagePartner: "Alten",
                professionalStatues: "Coach agile",
                actualPartner: "Total Direct Energie "
            },
            {
                id: 21,
                firstName: "Mouna",
                lastName: "CHRAIBI",
                email: "chr.mouna@gmail.com",
                city: "Casablanca",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Umanis",
                professionalStatues: "Consultante BI",
                actualPartner: "Umanis"
            },
            {
                id: 22,
                firstName: "Salma",
                lastName: "EL Mansour",
                email: "selma.elmansour@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemeni ",
                professionalStatues: "Engineer ",
                actualPartner: "Capgemeni"
            },
            {
                id: 23,
                firstName: "Ayyoub",
                lastName: "GAMRANI",
                email: "gamrani.ayoub@gmail.com",
                city: "Casablanca ",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2018,
                photo: "",
                localisation: "France",
                stagePartner: "CGI",
                stagePartner: "CGI",
                professionalStatues: "Consultant JEE",
                actualPartner: "Bluescale"
            },
            {
                id: 24,
                firstName: "Chaimae",
                lastName: "EL GADDAR",
                email: "elgaddarchaimae@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Ingénieur",
                actualPartner: "Capgemini"
            },
            {
                id: 25,
                firstName: "Hind",
                lastName: "AALOUCH",
                email: "aalouch.hind.inside@gmail.com",
                city: "Marrakech",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Spacebyte AG",
                professionalStatues: "Ingénieur",
                actualPartner: "Spacebyte AG"
            },
            {
                id: 26,
                firstName: "Youness",
                lastName: "Mouhim",
                email: "youness.mouhim1@gmail.com",
                city: "Casablanca",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2017,
                photo: "template/img/laureates/IMG_20200529_082704 - Youness Mouhim.jpg",
                localisation: "France",
                stagePartner: "CGI",
                professionalStatues: "Consultant",
                actualPartner: "Vivaliente Inc"
            },
            {
                id: 27,
                firstName: "Abdelhamid",
                lastName: "El Guarti",
                email: "abdelhamid.elguarti@usmba.ac.ma",
                city: "Casablanca",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2016,
                photo: "",
                localisation: "France",
                stagePartner: "Cegedim ",
                professionalStatues: "Ingénieur",
                actualPartner: "Menisys"
            },
            {
                id: 28,
                firstName: " wafae",
                lastName: "Nabet",
                email: "nabetwafae@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/20191019_130926 - Wafae Nabet.jpg",
                localisation: "Maroc",
                stagePartner: "Cegedim ",
                professionalStatues: "Ingénieur",
                actualPartner: "Cegedim "
            },
            {
                id: 29,
                firstName: "Marouane",
                lastName: "MISDAK",
                email: "misdak.marouane@gmail.com",
                city: "sefrou",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "",
                localisation: "Maroc",
                stagePartner: "Capgemini",
                professionalStatues: "Stagiaire",
                actualPartner: ""
            },
            {
                id: 30,
                firstName: "Hajar",
                lastName: "ZAGHBA",
                email: "zaghba.hajar@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "CEGEDIM",
                professionalStatues: "Stagiaire ",
                actualPartner: "Cegedim "
            },
            {
                id: 31,
                firstName: "Abderrahim",
                lastName: "Amjida",
                email: "amjidaabderahim@gmail.com",
                city: "Casablanca",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/20191019_130926 - Wafae Nabet.jpg",
                localisation: "Maroc",
                stagePartner: "Cegedim ",
                professionalStatues: "Stagiaire",
                actualPartner: " "
            },
            {
                id: 32,
                firstName: "Redouane",
                lastName: "BAGHDAD",
                email: "radwanbaghd@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "SQLI",
                professionalStatues: "Stagiaire",
                actualPartner: " "
            },
            {
                id: 33,
                firstName: "Hicham",
                lastName: "JAMAI",
                email: "hichameljamai.hj@gmail.com",
                city: "Casablanca",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "Intelcia",
                professionalStatues: "Stagiaire",
                actualPartner: " "
            },
            {
                id: 34,
                firstName: "Omar",
                lastName: "ISMAILI ALAOUI",
                email: "omarismailialaoui18@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "CAPGEMINI",
                professionalStatues: "Stagiaire",
                actualPartner: " "
            },
            {
                id: 35,
                firstName: "Zakaryae",
                lastName: "Benabbou",
                email: "zakaryaebenabbouu@gmail.com",
                city: "Casablanca ",
                previousFormation: "",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2019,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "CAPGEMINI",
                professionalStatues: "ingénieur",
                actualPartner: "Capgemini"
            },
            {
                id: 36,
                firstName: "Soufiane",
                lastName: "DARBOUZ",
                email: "galaxy.darbouz@gmail.com",
                city: "Rabat",
                previousFormation: "Licence Professionnelle",
                cne: "",
                cin: "",
                jobs: [],
                promotion: 2020,
                photo: "template/img/laureates/defaultPhoto.jpg",
                localisation: "Maroc",
                stagePartner: "SQLI",
                professionalStatues: "Ingénieur",
                actualPartner: "SLQI"
            },
        ],
        partners: [
            {
                id: 1,
                name: "CAPEGIMINI",
                address: "1100, bd El Qods (Sidi Maârouf), Casanearshore, shore 8, Imm. A , Sidi Maarouf CASABLANCA",
                activity: "Informatique (études et conseils)",
                photo: "imgs/partners/capgemini.png",
                description: "Capgemini, un des leaders mondiaux du conseil, des services informatiques et de l’infogérance,\n" +
                    "Installé depuis 2007 au Maroc, avec ses deux filiales à Casablanca et Rabat, \n" +
                    "Elle est considérée parmi les plus importants collaborateurs du MQL, en effet environs 25 sur 30 MQListes ont pu l’intégrer en 2019 " +
                    "en signant un contrat CDI avec eux.\n",
                phone: "0522461800",
                email: "capegimini@email.com",
                webSite: "www.capgemini.com"
            },
            {
                id: 2,
                name: "CGI Technologies et Solutions",
                address: "Cgi technologies Maroc(Cgi technologies et solutions Maroc)Casanearshore (Sidi Maarouf) , shore.5 20190 Casablanca - Maroc",
                activity: "Outsourcing, intégration, maintenance de logiciels",
                photo: "imgs/partners/cgi.jpg",
                description: "Le groupe Fondée en 1976, une entreprise canadienne figure parmi les plus importantes " +
                    "SSII au monde, CGI compte plus de 700 professionnels sur " +
                    "les sites de Casablanca, Fès et Rabat, CGI Maroc collaborateur pour le master MQL, avec une intégration total un grand pourcentage" +
                    " des étudiants dans ces trois centres qui finit fréquemment en signant un contrat CDI.",
                phone: "05290-09888",
                email: "cgi@email.com",
                webSite: "www.cgi.com/maroc/fr-fr"
            },

            {
                id: 3,
                name: "UMANIS",
                address: "Casanearshore ParkShore 21 ; RDC – 1er et 2ème1100 Bd Al Qods – Sidi Maarouf - Casablanca",
                activity: "activity2",
                photo: "imgs/partners/umanis.png",
                description: "Créée en 1990, Umanis est une société leader Français de conseil et d'ingénierie de 2700 collaborateurs spécialisés \n" +
                    "En Business Solutions et Digital, Le centre de services de Casablanca a démarré en 2013.\n" +
                    "Elle aussi accueille avec satisfaction les étudiants MQL après avoir passé les entretiens qui s’organisent au sien de la FSDM.\n.",
                phone: "05 29 01 48 11",
                email: "info@umanis.com",
                webSite: "www.umanis.com"
            },
            {
                id: 4,
                name: "ATOS",
                address: "Casablanca Nearshore Park، 1100 Boulevard El Qods, Casablanca 20190",
                activity: "activity2",
                photo: "imgs/partners/atos.png",
                description: "Atos est l'un des principaux acteurs internationaux dans les services informatiques. Implanté dans 47 pays à travers le monde,\n" +
                    "Présent depuis 2003 au Maroc, les Centres de Services de Casablanca travaillent dans les secteurs financiers, les télécommunications, \n" +
                    "le secteur public, l'industrie, l'automobile et la distribution.",
                phone: "",
                email: "",
                webSite: "www.atos.net"
            },
            {
                id: 5,
                name: "SQLI",
                address: "Casablanca Nearshore Park، 1100 Boulevard El Qods, Casablanca 20190",
                activity: "activity2",
                photo: "imgs/partners/sqli.png",
                description: "Crée il y a 10 ans au Maroc, avec plus de 300 effectifs loclisées à Casablanca, Rabat et Oujda,\n" +
                    "   l'agence accompagne les grandes entreprises dans leur transformation numérique,\n" +
                    "   du conseil aux entreprises à la mise en place et à la maintenance de solutions innovantes.",
                phone: "",
                email: "",
                webSite: "www.sqli.com"
            },
            {
                id: 6,
                name: "CEGEDIM",
                address: "Casablanca Nearshore Park، 1100 Boulevard El Qods, Casablanca 20190",
                activity: "activity2",
                photo: "imgs/partners/cegedim.jpg",
                description: "Fondée en 1969, Cegedim est une entreprise mondiale de technologies et de services spécialisée dans le domaine de la santé. " +
                    "Elle intègre les étudiants pour le stage de fin d’étude, après un entretien au sein de l’entreprise. La plupart des étudiants finissent" +
                    " leur stage par la signature d’un contrat CDI.",
                phone: "",
                email: "",
                webSite: "www.cegedim.fr"
            }
        ],
        professors: [
            {
                id: 1,
                photo: "imgs/professors/chenfour.jpg",
                firstName: "Noureddine",
                lastName: "Chenfour",
                tel: "212 (0)6 63.05.10.39",
                email: "chenfour@yahoo.fr",
                subject: "",
                grade: "Enseignant Chercheur",
                type: "Cordonnateur"
            },
            {
                id: 2,
                photo: "imgs/professors/elbaqqali.jpg",
                firstName: "OMAR",
                lastName: "EL BEQQALI",
                tel: "0986",
                email: "omarelbeqqali@gmail.com",
                subject: "Bases de données",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },
            {
                id: 3,
                photo: "imgs/professors/AhmedAzough.jpg",
                firstName: "Ahmed",
                lastName: "Azough",
                tel: "09116",
                email: "ahmed.azough@usmba.ac.ma",
                subject: "Génie Logiciel & Modélisation UM",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },
            {
                id: 4,
                photo: "imgs/professors/AhmedZinedidine .jpeg",
                firstName: "Ahmed",
                lastName: "Zineddine",
                tel: "212 (0)6 67.36.53.32",
                email: "ahmedzinedine@yahoo.com",
                subject: "Technologie XML",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },
            {
                id: 5,
                photo: "imgs/professors/nfaoui.jpg",
                firstName: "ELHABIB",
                lastName: "NFAOUI",
                tel: "09116",
                email: "Elhabib.Nfaoui@usmba.ac.ma",
                subject: "Cloud Computing",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },
            {
                id: 6,
                photo: "imgs/defaultPhoto.jpeg",
                firstName: "Najib",
                lastName: "zerrad",
                tel: "09116",
                email: "zerradnajib@gmail.com",
                subject: "Communication Professionnelle",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },

            {
                id: 7,
                photo: "imgs/defaultPhoto.jpeg",
                firstName: "Riffi",
                lastName: "Jamal",
                tel: "09116",
                email: "Riffi.jamal@gmail.com",
                subject: "Business Intelligence & Big Data",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            },
            {
                id: 8,
                photo: "imgs/defaultPhoto.jpeg",
                firstName: "Lamrini",
                lastName: "Mohamed",
                tel: "09116",
                email: "lamrini.mohamed@gmail.com",
                subject: "Audit & Qualité du Logiciel",
                grade: "Enseignant Chercheur",
                type: "Enseignant"
            }


        ],
        students: [
            {
                id: 1,
                firstName: "AYOUB",
                lastName: "ACHDA",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "S148014352",
                cin: ""
            },
            {
                id: 2,
                firstName: "JAOUAD",
                lastName: "AIT ASSOU",
                email: "",
                city: "",
                previousFormatio: "",
                cne: "1513943507",
                cin: ""
            },
            {
                id: 3,
                firstName: "HAMZA",
                lastName: "AOURASS",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "1513766593  ",
                cin: ""
            },
            {
                id: 4,
                firstName: "ILYASS",
                lastName: "AYACH",
                email: "",
                city: "",
                previousFormation: "",
                cne: "M144051091",
                cin: ""
            },
            {
                id: 5,
                firstName: "OUMAYMA",
                lastName: "BENCHENNOUF",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513747804",
                cin: ""
            },
            {
                id: 6,
                firstName: "ISMAIL",
                lastName: "BENHALLAM",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "M149013164",
                cin: ""
            },
            {
                id: 7,
                firstName: "YAHYA",
                lastName: "BERBECHE",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "N134180474",
                cin: ""
            },
            {
                id: 8,
                firstName: "IBTISSAM",
                lastName: "BOURKHA",
                email: "btissam.bourkha@gmail.com",
                city: "",
                previousFormation: "",
                cne: "M138322839",
                cin: ""
            },
            {
                id: 9,
                firstName: "NOHA",
                lastName: "BOUSSOUF",
                email: "",
                city: "",
                previousFormation: "",
                cne: "M137290104",
                cin: ""
            },
            {
                id: 10,
                firstName: "MOHAMMED",
                lastName: "CHAHBOUN",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1412764873",
                cin: ""
            },
            {
                id: 11,
                firstName: "MOUSTAFA",
                lastName: "CHARIF",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513752419",
                cin: ""
            },
            {
                id: 12,
                firstName: "HAFSA",
                lastName: "CHINI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "E139257901",
                cin: ""
            },
            {
                id: 13,
                firstName: "ILHAME",
                lastName: "CHOUKRI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "N130360748",
                cin: ""
            },
            {
                id: 14,
                firstName: "DOUAE",
                lastName: "CHTIOU",
                email: "",
                city: "",
                previousFormation: "",
                cne: "N130079045",
                cin: ""
            },
            {
                id: 15,
                firstName: "OUMAIMA",
                lastName: "EL FEZZAZI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "N135224977",
                cin: ""
            },
            {
                id: 16,
                firstName: "HOUSSAM",
                lastName: "EL HAMZI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "N134325447",
                cin: ""
            },
            {
                id: 17,
                firstName: "AHMED",
                lastName: "EL MOTAOUAKKEL",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513788230",
                cin: ""
            },
            {
                id: 18,
                firstName: "ALAEDDINNE",
                lastName: "ENNOUINOU",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513605595",
                cin: ""
            },
            {
                id: 19,
                firstName: "RHITA",
                lastName: "ES-SAFI",
                email: "rhitaess@gmail.com",
                city: "fes",
                previousFormation: "smi",
                cne: "N132152325",
                cin: ""
            },
            {
                id: 20,
                firstName: "HAMID",
                lastName: "FADILI",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "1513758294",
                cin: ""
            },
            {
                id: 21,
                firstName: "MOHAMED",
                lastName: "FAZAZI",
                email: "",
                city: "",
                previousFormation: "smi",
                cne: "S134340703",
                cin: ""
            },
            {
                id: 22,
                firstName: "CHAIMAE",
                lastName: "HACHDI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "A133016350",
                cin: ""
            },
            {
                id: 23,
                firstName: "HAMZA",
                lastName: "ISMAILI ALAOUI",
                email: "",
                city: "fes",
                previousFormation: "smi",
                cne: "N133328638",
                cin: ""
            },
            {
                id: 24,
                firstName: "MAROUA",
                lastName: "JALIL",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "1513759174",
                cin: ""
            },
            {
                id: 25,
                firstName: "MOHAMED REDA",
                lastName: "LAAMIME",
                email: "",
                city: "fes",
                previousFormation: "",
                cne: "N138187326",
                cin: ""
            },
            {
                id: 26,
                firstName: "SOUFIANE",
                lastName: "MAKHLOUF",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1515778001",
                cin: ""
            },
            {
                id: 27,
                firstName: "SAID",
                lastName: "MARHRANI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513277881",
                cin: ""
            },
            {
                id: 28,
                firstName: "Hamza",
                lastName: "MEKAOUI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "N139255816",
                cin: ""
            },
            {
                id: 29,
                firstName: "YOUSRA",
                lastName: "MEKKAOUI",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1614809885",
                cin: ""
            },
            {
                id: 30,
                firstName: "KHADIJA",
                lastName: "OUCHRIH",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1513335913",
                cin: ""
            },
            {
                id: 31,
                firstName: "ABDESSAMAD",
                lastName: "OUKIRCHE",
                email: "",
                city: "",
                previousFormation: "",
                cne: "1512763815",
                cin: ""
            },
            {
                id: 32,
                firstName: "IMANE",
                lastName: "SLASSI ",
                email: "",
                city: "",
                previousFormation: "",
                cne: "z163205374",
                cin: ""
            }
        ]
    },
];
