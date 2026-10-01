const questions = [

/* =====================================================
   Q1 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Consider the following statements:\n\n" +
        "1. PEEK is generally semicrystalline.\n" +
        "2. PSU is generally amorphous.\n" +
        "3. PES generally has a higher Tg than PSU.\n" +
        "4. PPS contains sulfone groups in its main chain.\n\n" +
        "Which are correct?",

    options: [
        "1 and 2 only",
        "1, 2 and 3 only",
        "2, 3 and 4 only",
        "1, 2, 3 and 4"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q2 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "Lipase is a natural enzyme, which cleaves carboxylic ester bonds. " +
        "Among the options given, identify the polymer(s) degraded by lipase. (G-23)",

    options: [
        "Polypropylene (PP)",
        "Polycaprolactone (PCL)",
        "Polyvinylidene fluoride (PVDF)",
        "Polyethylene terephthalate (PET)"
    ],

    correctAnswers: [1, 3],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q3 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "A polyethylene grade is produced at ~200 MPa and 200 °C using trace oxygen as initiator. " +
        "Compared to a grade made at 1 MPa and 60 °C over a Ziegler–Natta catalyst, the first grade will have:",

    options: [
        "Higher density and crystallinity, due to linear chains",
        "Long-chain branches from backbiting and chain transfer to polymer, hence lower density and crystallinity",
        "Identical structure, since both are polyethylene",
        "Higher Tm, because high pressure forces close packing"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q4 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "Which statements about PEEK are CORRECT?",

    options: [
        "It is semicrystalline, with Tg ≈ 143 °C and Tm ≈ 343 °C",
        "It is synthesized by nucleophilic aromatic substitution of a bisphenolate with a dihalobenzophenone",
        "It is a thermoset and cannot be melt-processed",
        "Its ether linkages provide chain flexibility, while ketone groups add stiffness"
    ],

    correctAnswers: [0, 1, 3],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q5 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Nylon 6 and Nylon 6,6 have the same amide density and similar chemical resistance, " +
        "yet Nylon 6,6 has a distinctly higher melting point (~265 °C vs ~220 °C). " +
        "The primary structural reason is:",

    options: [
        "Nylon 6,6 has higher molecular weight",
        "Nylon 6,6 chains allow all amide groups to hydrogen bond in the fully extended conformation, since its repeat unit is symmetric; Nylon 6's directionality of the amide groups permits less perfect H-bond registry",
        "Nylon 6 contains ester groups",
        "Nylon 6,6 is crosslinked"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q6 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "Which statements are CORRECT?",

    options: [
        "Nitrile rubber (NBR) resists oil swelling because its polar nitrile groups reduce compatibility with nonpolar hydrocarbons",
        "Increasing acrylonitrile content in NBR improves oil resistance but raises Tg, worsening low-temperature flexibility",
        "Natural rubber is an excellent choice because of its high tensile strength",
        "Silicone rubber has excellent low-temperature flexibility but poor resistance to hydrocarbon swelling"
    ],

    correctAnswers: [0, 1, 3],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q7 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Two polymers A and B have the following characteristics:\n\n" +
        "Polymer A\n" +
        "Amorphous\n" +
        "Tg ≈ 185°C\n" +
        "Excellent hydrolytic stability\n" +
        "Can withstand repeated steam sterilization\n\n" +
        "Polymer B\n" +
        "Amorphous\n" +
        "Tg ≈ 220–230°C\n" +
        "Widely used for filtration membranes\n\n" +
        "Identify A and B.",

    options: [
        "A = PEEK, B = PPS",
        "A = PSU, B = PES",
        "A = PES, B = PSU",
        "A = PPS, B = PEEK"
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
        "Phenol–formaldehyde resins can be made as novolac or resole. Which one is CORRECT?",

    options: [
        "Novolac is made with excess formaldehyde under basic catalysis and self-cures on heating",
        "Novolac is made with excess phenol under acidic catalysis, is thermoplastic, and requires a hardener such as hexamethylenetetramine (HMTA) to cure",
        "Resole requires an added crosslinker to cure",
        "Both are one-stage resins requiring no curing agent"
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
        "Which sequence is arranged approximately in increasing glass-transition temperature?",

    options: [
        "PEEK < PSU < PES < PPS",
        "PPS < PEEK < PSU < PES",
        "PSU < PPS < PEEK < PES",
        "PES < PSU < PEEK < PPS"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q10 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "A nylon component absorbs significant moisture during service. Which change is most likely?",

    options: [
        "Tg increases and modulus increases",
        "Tg decreases and flexibility increases",
        "Crystallinity necessarily becomes zero",
        "Melting point increases drastically"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q11 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A DGEBA epoxy resin has an epoxy equivalent weight (EEW) of 190 g/eq. " +
        "It is cured with a diamine having an amine hydrogen equivalent weight (AHEW) of 60 g/eq. " +
        "The stoichiometric amount of hardener required, in parts per hundred resin (phr), is:",

    options: [
        "190 phr",
        "60 phr",
        "31.6 phr",
        "316 phr"
    ],

    answer: 2,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q12 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A component is exposed to:\n\n" +
        "high temperature + ozone + sunlight + water + automotive outdoor environment\n\n" +
        "but not petroleum oil.\n\n" +
        "Which rubber is the most appropriate among:",

    options: [
        "NBR",
        "EPDM",
        "IIR",
        "NR"
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
        "Poly(3-hydroxybutyrate) (PHB), a bacterially synthesized polyester, is rarely used alone despite excellent biodegradability. The primary reason is:",

    options: [
        "It is water-soluble",
        "It is highly crystalline and brittle, with a Tm (~175 °C) uncomfortably close to its thermal degradation temperature, giving a narrow processing window",
        "It cannot be melt-processed at all",
        "It has a Tg above 100 °C"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q14 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Match the following.\n\n" +

        "P. Phenol-formaldehyde\n" +
        "Q. Epoxy\n" +
        "R. Unsaturated polyester\n" +
        "S. Melamine-formaldehyde\n\n" +

        "1. Fiberglass boats\n" +
        "2. Electrical switches/heat-resistant handles\n" +
        "3. Adhesives/fibre-reinforced composites\n" +
        "4. Decorative laminates/tableware\n\n" +

        "Choose the correct matching.",

    options: [
        "P–2, Q–3, R–1, S–4",
        "P–3, Q–2, R–4, S–1",
        "P–4, Q–1, R–2, S–3",
        "P–2, Q–1, R–3, S–4"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q15 — MSQ — 2 MARKS
   ===================================================== */

{
    question:
        "Match the correct synthesis route(s):",

    options: [
        "PVC — free-radical suspension polymerization of vinyl chloride",
        "Polycarbonate — interfacial polycondensation of bisphenol-A with phosgene, or melt transesterification with diphenyl carbonate",
        "Polyurethane — polyaddition (step-growth without elimination of a small molecule) of a diisocyanate with a polyol",
        "Unsaturated polyester (for FRP) — cured by free-radical crosslinking through its C=C sites using styrene as a reactive diluent"
    ],

    correctAnswers: [0, 1, 2, 3],

    type: "MSQ",

    marks: 2
},



/* =====================================================
   Q16 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A component must survive continuous service at 200 °C in hot water/steam, be inherently flame retardant, and be transparent. Among PEEK, PPS, PSU/PES, and PTFE, the most suitable is:",

    options: [
        "PEEK — highest continuous use temperature",
        "PPS — best chemical resistance",
        "Polysulfone/PES — amorphous, transparent, hydrolytically stable, inherently flame retardant",
        "PTFE — highest thermal stability"
    ],

    answer: 2,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q17 — MSQ — 2 MARKS
   ===================================================== */

{
    question:
        "Which of the following catalyst/co-catalyst combinations will polymerize ethylene by a coordination mechanism?",

    options: [
        "TiCl₄ supported on MgCl₂, activated with Al(C₂H₅)₃",
        "CrO₃ on silica (Phillips catalyst)",
        "Benzoyl peroxide alone",
        "Cp₂ZrCl₂ activated with methylaluminoxane (MAO)"
    ],

    correctAnswers: [0, 1, 3],

    type: "MSQ",

    marks: 2
},



/* =====================================================
   Q18 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A metallocene catalyst with a symmetric, achiral (non-bridged) ligand geometry polymerizes propylene to give predominantly:",

    options: [
        "Isotactic polypropylene",
        "Syndiotactic polypropylene",
        "Atactic polypropylene",
        "Crosslinked polypropylene"
    ],

    answer: 2,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q19 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Match the following.\n\n" +

        "P. PLA\n" +
        "Q. PHB\n" +
        "R. PHBV\n" +
        "S. PHA\n\n" +

        "1. Microbial biodegradable products\n" +
        "2. 3D-printing filament\n" +
        "3. Biodegradable/biomedical products\n" +
        "4. Biodegradable products with tunable properties\n\n" +

        "Choose the correct matching.",

    options: [
        "P–2, Q–3, R–4, S–1",
        "P–3, Q–2, R–1, S–4",
        "P–2, Q–1, R–4, S–3",
        "P–4, Q–3, R–2, S–1"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q20 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "In Ziegler–Natta polymerization of propylene, isotacticity arises primarily because:",

    options: [
        "The growing chain is free to rotate, randomly selecting monomer faces",
        "The chiral active site on the catalyst surface enforces the same prochiral face of propylene at each insertion (enantiomorphic site control)",
        "Hydrogen bonding aligns the methyl groups",
        "High temperature forces regular placement"
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
        "Free-radical polymerization of vinyl monomers (e.g., styrene) gives overwhelmingly head-to-tail placement because:",

    options: [
        "Head-to-head addition is thermodynamically impossible",
        "Addition to the less-substituted carbon gives the more stable (resonance/sterically favored) radical, directing regularity",
        "The initiator forces head-to-tail placement",
        "Head-to-tail arises only under coordination catalysis"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q22 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Anionic polymerization of styrene and butadiene is used to make SBS thermoplastic elastomers because it uniquely allows:",

    options: [
        "Very high polymerization temperatures",
        "Sequential monomer addition to build well-defined block copolymers, since the chain ends stay 'living'",
        "Crosslinking during polymerization",
        "Random copolymer formation only"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
}

];
