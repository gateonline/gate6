```javascript
const questions = [

    /* =====================================================
       Q1 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "High-impact polystyrene (HIPS) is prepared by incorporating which of the following rubber phases into a general-purpose polystyrene (GPPS) matrix?",

        options: [
            "Isoprene rubber",
            "Polybutadiene rubber",
            "Butyl rubber",
            "Natural rubber"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q2 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "Linear low-density polyethylene (LLDPE) is primarily synthesized by:",

        options: [
            "Free-radical copolymerization of ethylene and propylene",
            "Free-radical copolymerization of ethylene and α-styrene",
            "Copolymerization of ethylene with one or more α-olefins",
            "Free-radical polymerization of ethylene using a thermal initiator"
        ],

        answer: 2,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q3 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "A rubber component is exposed to hot water, steam, oxygen, ozone and outdoor weathering. Which polymer is generally associated with this combination?",

        options: [
            "NBR",
            "EPDM",
            "BR",
            "IIR"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q4 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "Increasing the acrylonitrile content of NBR generally causes:",

        options: [
            "Decreased polarity and decreased oil resistance",
            "Increased polarity and improved oil resistance",
            "Complete elimination of rubber elasticity",
            "Conversion of NBR into EPDM"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q5 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "A polymer has an aromatic backbone containing:\n\n" +
            "–O–Ph–C(CH₃)₂–Ph–O–\n\n" +
            "and carbonate groups are incorporated into the backbone.\n\n" +
            "The polymer is:",

        options: [
            "PEEK",
            "Polycarbonate",
            "PPO",
            "PSU"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q6 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "Consider the structure of a crosslinked polymer shown in the figure. From the options given, identify the monomers that are used in the synthesis of the polymer. (G-23)",

        image: "q6.png",

        options: [
            "Melamine and Benzaldehyde",
            "Melamine and Acetone",
            "Melamine and Formaldehyde",
            "Melamine and Ethanol"
        ],

        answer: 2,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q7 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "Increasing the acrylonitrile content in NBR generally tends to:",

        options: [
            "Reduce polarity and oil resistance",
            "Increase polarity and improve oil resistance",
            "Convert NBR into EPDM",
            "Eliminate the need for vulcanization"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q8 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "A fibre precursor contains a high concentration of nitrile groups. During conversion to carbon fibre, the precursor is first thermally stabilized and then subjected to high-temperature treatment under an inert atmosphere.\n\n" +
            "The primary purpose of the stabilization step is to:",

        options: [
            "Melt the polymer completely",
            "Convert it into a thermally stable ladder-like structure before carbonization",
            "Remove all nitrogen instantly",
            "Plasticize the fibre"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q9 — MCQ — 1 MARK
       ===================================================== */

    {
        question:
            "A polymer has:\n\n" +
            "• high crystallinity\n" +
            "• strong intermolecular hydrogen bonding\n" +
            "• relatively high melting temperature\n" +
            "• significant moisture sensitivity\n\n" +
            "Which class is most consistent with these characteristics?",

        options: [
            "Polyolefin",
            "Polyamide",
            "Fluoropolymer",
            "Silicone rubber"
        ],

        answer: 1,
        type: "MCQ",
        marks: 1
    },


    /* =====================================================
       Q10 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Four elastomers are being considered:\n\n" +
            "P: good oil/fuel resistance\n" +
            "Q: excellent ozone/weather resistance\n" +
            "R: very low gas permeability\n" +
            "S: high natural resilience and good general mechanical properties\n\n" +
            "Which assignment is most appropriate?",

        options: [
            "P–IIR, Q–NR, R–NBR, S–EPDM",
            "P–NBR, Q–EPDM, R–IIR, S–NR",
            "P–NR, Q–IIR, R–EPDM, S–NBR",
            "P–EPDM, Q–NBR, R–NR, S–IIR"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q11 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Among the options given, identify the correct match between the polymers and their glass transition temperatures (Tg). (G-23)",

        options: [
            "P–2; Q–4; R–3; S–1",
            "P–3; Q–1; R–4; S–2",
            "P–3; Q–4; R–1; S–2",
            "P–4; Q–2; R–1; S–3"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q12 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "A nylon component absorbs a significant amount of moisture during service. Which combination of changes is most likely?",

        options: [
            "Tg increases, modulus increases, flexibility decreases",
            "Tg decreases, modulus decreases, flexibility increases",
            "Tg increases, modulus decreases, flexibility increases",
            "Tg decreases, modulus increases, flexibility decreases"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q13 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Match the following polymers with their characteristics:\n\n" +

            "P. NBR\n" +
            "Q. EPDM\n" +
            "R. PTFE\n" +
            "S. UHMWPE\n\n" +

            "1. Very low friction\n" +
            "2. Oil resistance\n" +
            "3. Ozone/weather resistance\n" +
            "4. High wear resistance\n\n" +

            "Choose the correct match.",

        options: [
            "P–2, Q–3, R–1, S–4",
            "P–3, Q–2, R–4, S–1",
            "P–2, Q–1, R–3, S–4",
            "P–4, Q–3, R–2, S–1"
        ],

        answer: 0,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q14 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "What is the correct order of decreasing crystallinity of the given polymers?\n\n" +

            "P. Atactic-Polypropylene\n" +
            "Q. Syndiotactic-Polystyrene\n" +
            "R. Nylon 6\n" +
            "S. Polyethylene terephthalate (PET)",

        options: [
            "P > R > S > Q",
            "S > Q > P > R",
            "Q > S > R > P",
            "S > R > Q > P"
        ],

        answer: 3,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q15 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Which is the most appropriate order of increasing tensile strength for the following polymers?\n\n" +
            "P: LDPE\n" +
            "Q: HDPE\n" +
            "R: Nylon-6\n" +
            "S: PP",

        options: [
            "P < S < Q < R",
            "S < P < Q < R",
            "P < Q < S < R",
            "P < S < R < Q"
        ],

        answer: 0,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q16 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Two polymers have identical chemical repeat units but different stereochemical arrangements. Polymer P is atactic, whereas polymer Q is isotactic.\n\n" +
            "Which statement is most appropriate?",

        options: [
            "P must have a higher crystallinity than Q",
            "Q generally has greater ability to crystallize than P",
            "P and Q must have identical crystallinity",
            "P must have a higher density than Q"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q17 — MSQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Among the options given, which method(s) is/are used for the synthesis of atactic polystyrene? (G-23)",

        options: [
            "Free radical polymerization",
            "Ring opening polymerization",
            "Polycondensation",
            "Ionic polymerization"
        ],

        correctAnswers: [0, 3],
        type: "MSQ",
        marks: 2
    },


    /* =====================================================
       Q18 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Two grades of NBR differ only in acrylonitrile content. Grade P contains more acrylonitrile than Grade Q.\n\n" +
            "Which combination is generally expected?",

        options: [
            "P has lower polarity and lower oil resistance",
            "P has higher polarity and better oil resistance",
            "P has higher gas permeability and lower polarity",
            "P behaves identically to natural rubber"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q19 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Which characteristic is most closely associated with PLA compared with conventional petroleum-derived commodity polymers?",

        options: [
            "It is always completely biodegradable under every environmental condition.",
            "It can be produced from renewable resources such as fermentation-derived lactic acid.",
            "It is a natural rubber.",
            "It contains sulfur crosslinks."
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q20 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Which characteristic most fundamentally distinguishes a conventional elastomer from a lightly crosslinked thermoplastic?",

        options: [
            "Presence of carbon atoms",
            "Ability to undergo large reversible deformation",
            "Presence of covalent bonds in the backbone",
            "Ability to contain additives"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q21 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Arrange the following polymers in order of increasing glass transition temperature:\n\n" +
            "HDPE, LDPE, PDMS, LLDPE, PS, PP, and PMMA",

        options: [
            "LDPE < LLDPE < HDPE < PP < PDMS < PS < PMMA",
            "LLDPE < LDPE < HDPE < PDMS < PP < PS < PMMA",
            "LDPE < LLDPE < HDPE < PDMS < PP < PS < PMMA",
            "LDPE < HDPE < LLDPE < PP < PDMS < PMMA < PS"
        ],

        answer: 2,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q22 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Match the following polymers with their monomer/reactants:\n\n" +

            "A. PF resin\n" +
            "B. Nitrile rubber\n" +
            "C. Epoxy resin\n" +
            "D. Polycarbonate (PC)\n" +
            "E. Butyl rubber\n\n" +

            "1. Bisphenol-A + phosgene\n" +
            "2. Diol + epichlorohydrin\n" +
            "3. Phenol + formaldehyde\n" +
            "4. Acrylonitrile + butadiene\n" +
            "5. Isoprene + isobutylene\n\n" +

            "Choose the correct matching.",

        options: [
            "A–3, B–4, C–5, D–2, E–1",
            "A–4, B–5, C–3, D–2, E–1",
            "A–3, B–4, C–2, D–1, E–5",
            "A–1, B–2, C–3, D–4, E–5",
            "A–2, B–3, C–4, D–5, E–1"
        ],

        answer: 2,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q23 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "High-impact polystyrene (HIPS) is a two-phase polymer blend. Which statement best describes its structure?",

        options: [
            "A crosslinked polystyrene network containing sulfur",
            "Polybutadiene rubber dispersed as a rubber phase within a polystyrene-rich matrix",
            "Natural rubber dispersed in a polyamide matrix",
            "Butyl rubber dispersed in a polyethylene matrix"
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q24 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Which statement correctly relates increasing acrylonitrile content in NBR to its properties?",

        options: [
            "Increasing acrylonitrile decreases polarity and decreases oil resistance.",
            "Increasing acrylonitrile increases polarity and improves oil resistance.",
            "Increasing acrylonitrile converts NBR into EPDM.",
            "Increasing acrylonitrile eliminates the need for vulcanization."
        ],

        answer: 1,
        type: "MCQ",
        marks: 2
    },


    /* =====================================================
       Q25 — MCQ — 2 MARKS
       ===================================================== */

    {
        question:
            "Consider the following polymer/reactant matching:\n\n" +

            "A. PF resin\n" +
            "B. Nitrile rubber\n" +
            "C. Epoxy resin\n" +
            "D. Polycarbonate\n" +
            "E. Butyl rubber\n\n" +

            "1. Bisphenol-A + phosgene\n" +
            "2. Diol + epichlorohydrin\n" +
            "3. Phenol + formaldehyde\n" +
            "4. Acrylonitrile + butadiene\n" +
            "5. Isoprene + isobutylene\n\n" +

            "Choose the correct matching.",

        options: [
            "A–3, B–4, C–5, D–2, E–1",
            "A–4, B–5, C–3, D–2, E–1",
            "A–3, B–4, C–2, D–1, E–5",
            "A–1, B–2, C–3, D–4, E–5",
            "A–2, B–3, C–4, D–5, E–1"
        ],

        answer: 2,
        type: "MCQ",
        marks: 2
    }

];
```
