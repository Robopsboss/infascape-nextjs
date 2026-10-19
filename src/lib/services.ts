/**
 * Service page content. One entry = one page at /services/<slug>.
 * Worked price examples go in `examples` for each service; they show on the
 * service page as soon as one is added.
 */

export type FAQ = { q: string; a: string };

/**
 * A real priced job, shown on the service page once added.
 * e.g. { title: "50m² tarmac driveway, Chapeltown", detail: "Full dig-out, ...", price: "£X" }
 */
export type WorkedExample = { title: string; detail: string; price: string };

export type Service = {
  slug: string;
  name: string; // short label, e.g. "Tarmac Driveways"
  serviceType: string; // schema serviceType
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string; // answer-first intro paragraph
  summary: string; // one line for homepage cards
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  included: string[];
  process: { title: string; detail: string }[];
  whyCheapFails: { heading: string; body: string[] };
  duration: string;
  /** What changes the cost of this job */
  costFactors: string[];
  /** Worked examples of real jobs and prices. Empty until Rob supplies them. */
  examples: WorkedExample[];
  faqs: FAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: "tarmac-driveways",
    summary: "Properly calculated tonnage, correct MOT depths, and professional finishes built to handle daily use.",
    name: "Tarmac Driveways",
    serviceType: "Tarmac driveway installation",
    metaTitle: "Tarmac Driveways Sheffield | Prices & Process | Infascape",
    metaDescription:
      "Tarmac driveway installers in Sheffield. 200mm MOT sub-base, binder and surface course laid to calculated tonnage. Request a quote.",
    h1: "Tarmac Driveways in Sheffield",
    answer:
      "Infascape installs tarmac driveways across Sheffield and surrounding areas on a full 200mm compacted MOT Type 1 sub-base, with a binder course and a surface course laid to calculated tonnage.",
    image: "/assets/service-tarmac.jpg",
    imageAlt: "Tarmac driveway installed by Infascape in Sheffield",
    gallery: [
      { src: "/assets/gallery/tarmac-driveway.jpg", alt: "Finished tarmac driveway Sheffield" },
      { src: "/assets/gallery/block-paving-driveway.jpg", alt: "Block paving driveway Sheffield" },
      { src: "/assets/gallery/cobble-driveway.jpg", alt: "Cobblestone driveway finish Sheffield" },
    ],
    included: [
      "Site survey, levels and drainage plan before any digging",
      "Excavation and muck away by grab lorry",
      "200mm MOT Type 1 sub-base, compacted in layers",
      "Edging (block or kerb) set on a concrete bed and haunched",
      "Binder course and surface course, tonnage calculated from the area",
      "Drainage falls to a permeable border, soakaway or channel",
      "Site left clean, waste removed",
    ],
    process: [
      { title: "Survey and quote", detail: "We measure the area, check levels, existing base and where surface water will go. You get a written quote that shows what is being built, not just a total." },
      { title: "Dig out and base", detail: "Old surface and soft ground removed. 200mm of MOT Type 1 laid and compacted in layers, not in one pass." },
      { title: "Edging", detail: "Edges set on concrete and haunched so the tarmac has something solid to finish against." },
      { title: "Surfacing", detail: "Binder course then surface course, rolled while at temperature. Quantities are calculated, not guessed." },
      { title: "Handover", detail: "We walk the job with you, explain aftercare and leave the site clean." },
    ],
    whyCheapFails: {
      heading: "Why cheap tarmac costs more",
      body: [
        "Most driveway failures are base failures. When the sub-base is thin or compacted once instead of in layers, the drive ruts and sinks within two years, and the only fix is to dig it all out again.",
        "We calculate tonnage from the area and depth for every layer. That is why our price is what it is, and why our driveways are built to last 10+ years.",
      ],
    },
    duration: "A typical 40–60m² driveway takes 3–5 working days, weather permitting.",
    costFactors: [
      "How much needs digging out and taking away",
      "Access for the grab lorry and plant",
      "Length of edging and any steps or levels",
      "Drainage needed to meet planning rules",
    ],
    examples: [],
    faqs: [
      { q: "How much does a tarmac driveway cost in Sheffield?", a: "Every driveway is priced from a site visit, because size, access for the grab lorry, how much needs digging out and the drainage needed all change the cost. You get a written quote that shows what is being built, not just a total. Most of our projects fall between £3,000 and £15,000+." },
      { q: "How deep should a driveway sub-base be?", a: "We lay 200mm of compacted MOT Type 1 on every new driveway. Thinner bases are the main reason driveways rut and sink within a couple of years." },
      { q: "Do I need planning permission for a tarmac driveway?", a: "For a front garden over 5m², planning permission is usually needed if rainwater runs off onto the road. It is not needed if the water drains to a lawn, border or soakaway on your property. We design the falls and drainage so your driveway meets this." },
      { q: "How long does a tarmac driveway last?", a: "A tarmac driveway built on a proper, well-compacted base should last 10+ years. One laid on a thin or poorly compacted base can fail in two or three." },
      { q: "When can I drive on my new tarmac driveway?", a: "Usually after 24–48 hours for cars. Avoid sharp turns on the spot and heavy vehicles for the first few weeks while the surface hardens, especially in hot weather." },
    ],
  },
  {
    slug: "porcelain-patios",
    summary: "Full sub-base preparation, proper drainage, and precision jointing for a patio that lasts.",
    name: "Porcelain Patios",
    serviceType: "Porcelain paving and patio installation",
    metaTitle: "Porcelain Patios Sheffield | Prices & Process | Infascape",
    metaDescription:
      "Porcelain patio installers in Sheffield. Full sub-base, proper falls and drainage, precision jointing. Request a quote.",
    h1: "Porcelain Patios in Sheffield",
    answer:
      "Infascape lays porcelain patios across Sheffield and surrounding areas on a fully excavated, compacted sub-base with designed falls and drainage, bedded and jointed so slabs don't move or hold water.",
    image: "/assets/service-paving.jpg",
    imageAlt: "Porcelain patio laid by Infascape in Sheffield",
    gallery: [
      { src: "/assets/gallery/paving-wide.jpg", alt: "Porcelain paving patio Sheffield" },
      { src: "/assets/gallery/paving-close-up.jpg", alt: "Close-up of porcelain paving joints Sheffield" },
      { src: "/assets/gallery/porcelain-paving-brick-wall.jpg", alt: "Porcelain paving with brick wall Sheffield" },
      { src: "/assets/gallery/large-paving-shed.jpg", alt: "Large porcelain paving area Sheffield" },
    ],
    included: [
      "Levels set and falls designed so water runs away from the house",
      "Excavation and waste removal",
      "Compacted MOT Type 1 sub-base, laid in layers",
      "Full mortar bed with slurry primer on the back of every slab",
      "Precision cutting and jointing",
      "Drainage channels or soakaway where needed",
    ],
    process: [
      { title: "Design and quote", detail: "We agree size, layout, slab choice and levels on site. Your written quote lists the build-up underneath, not just the slab price." },
      { title: "Excavate", detail: "Dig to the depth the build-up needs and remove the waste." },
      { title: "Sub-base", detail: "MOT Type 1 laid and compacted in layers, set to the falls." },
      { title: "Lay", detail: "Full bed, primed slabs, cut and set to line and level." },
      { title: "Joint and finish", detail: "Joints filled, edges finished, site cleaned and handed over." },
    ],
    whyCheapFails: {
      heading: "The difference between a £3k patio and a £6k patio",
      body: [
        "It's what's underneath. Cheap patios skip the sub-base and lay on dot-and-dab. That's why slabs rock, sink and hold puddles.",
        "We excavate properly, compact in layers, fully bed and prime every slab, and design the falls. Puddles mean someone got the drainage wrong. We don't.",
      ],
    },
    duration: "A typical 25–35m² patio takes 4–6 working days.",
    costFactors: [
      "Slab choice (porcelain prices vary widely)",
      "Number of cuts, curves and steps",
      "Depth of dig and amount of waste",
      "Drainage needed near the house",
    ],
    examples: [],
    faqs: [
      { q: "How much does a porcelain patio cost in Sheffield?", a: "It depends on size, the slab you choose, the depth of dig, cuts and steps, and drainage near the house. We price every patio from a site visit with a written quote that lists the build-up underneath. Most of our projects fall between £3,000 and £15,000+." },
      { q: "Why do some patio quotes come in much cheaper?", a: "Usually because the sub-base is thin or missing, slabs are laid on dots of mortar rather than a full bed, or the falls aren't designed. Those patios look fine on day one and start rocking or holding water within a few years." },
      { q: "Is porcelain better than sandstone?", a: "Porcelain is denser, more stain-resistant and needs less maintenance. It must be primed and fully bedded, because mortar doesn't grip it like natural stone. Sandstone is softer and needs sealing." },
      { q: "Will my patio drain properly?", a: "Yes. We set a fall away from the house and add channel drains or a soakaway where the ground won't take the water." },
      { q: "How long does a patio take to lay?", a: "Most 25–35m² patios take 4–6 working days, depending on access, cuts and weather." },
    ],
  },
  {
    slug: "artificial-grass",
    summary: "Quality materials on a properly prepared base — no puddles, no peeling, no regrets.",
    name: "Artificial Grass",
    serviceType: "Artificial grass installation",
    metaTitle: "Artificial Grass Installers Sheffield | Prices | Infascape",
    metaDescription:
      "Artificial grass installation in Sheffield on a properly drained, compacted base. No puddles, no lifting edges. Request a quote.",
    h1: "Artificial Grass Installation in Sheffield",
    answer:
      "Infascape installs artificial grass across Sheffield and surrounding areas on a dug-out, compacted, free-draining base with fixed edges, so it doesn't puddle, ripple or lift.",
    image: "/assets/service-grass.jpg",
    imageAlt: "Artificial grass installed by Infascape in Sheffield",
    gallery: [
      { src: "/assets/gallery/green-wall-grass.jpg", alt: "Artificial grass with green wall Sheffield" },
      { src: "/assets/gallery/decking-grass-angle.jpg", alt: "Artificial grass with decking border Sheffield" },
      { src: "/assets/gallery/pergola-grass.jpg", alt: "Pergola and artificial grass Sheffield" },
    ],
    included: [
      "Existing turf and soil removed",
      "Edging fixed so the grass can't lift or shift",
      "Compacted, free-draining stone base",
      "Levelling layer and weed membrane",
      "Grass laid, joined and pinned, joins hidden",
      "Infill brushed in and waste removed",
    ],
    process: [
      { title: "Survey and quote", detail: "We measure, check drainage and agree the grass spec." },
      { title: "Dig out", detail: "Turf and soil removed to the depth the base needs." },
      { title: "Base and edging", detail: "Edges fixed, stone base laid and compacted, levelling layer finished." },
      { title: "Lay", detail: "Grass cut, joined and fixed with the pile running the same way." },
      { title: "Finish", detail: "Infill brushed in, site cleaned and handed over." },
    ],
    whyCheapFails: {
      heading: "Why cheap artificial grass looks terrible in 3 years",
      body: [
        "Rolled straight onto soil or a thin layer of sand, artificial grass puddles, ripples and lifts at the edges within months.",
        "We dig out, build a draining base and fix the edges. It's treated like a build, not like rolling out carpet.",
      ],
    },
    duration: "Most gardens take 1–3 working days.",
    costFactors: [
      "Grass quality and pile height",
      "Depth of dig and soil to remove",
      "Access (barrow-only access takes longer)",
      "Edging type and length",
    ],
    examples: [],
    faqs: [
      { q: "How much does artificial grass cost to install in Sheffield?", a: "It depends on the area, the grass you choose, how much soil needs digging out and access. We price every job from a site visit with a written quote." },
      { q: "Why does artificial grass puddle?", a: "Because it was laid on soil or sand with no draining stone base. Water has nowhere to go. We dig out and lay a compacted, free-draining base." },
      { q: "How long does artificial grass last?", a: "Good-quality grass on a proper base should look good for 10+ years. Cheap grass on a poor base flattens, fades and lifts much sooner." },
      { q: "Is artificial grass OK for dogs?", a: "Yes, as long as the base drains well. A free-draining base and regular rinsing stop smells building up." },
      { q: "Do you remove the old lawn?", a: "Yes. Turf and soil are dug out and taken away as part of the job." },
    ],
  },
  {
    slug: "fencing-sleeper-walls",
    summary: "Treated timber, proper foundations, and finishing that withstands years of weathering.",
    name: "Fencing & Sleeper Walls",
    serviceType: "Fencing, sleeper walls and garden borders",
    metaTitle: "Fencing & Sleeper Walls Sheffield | Prices | Infascape",
    metaDescription:
      "Fencing, slatted screens, sleeper walls and garden borders in Sheffield. Posts set in concrete, treated timber, proper foundations. Request a quote.",
    h1: "Fencing and Sleeper Walls in Sheffield",
    answer:
      "Infascape builds fencing, slatted screens, sleeper walls and garden borders across Sheffield and surrounding areas with posts set in concrete, treated timber and proper foundations, so they don't lean, rot or blow over.",
    image: "/assets/service-fencing.jpg",
    imageAlt: "Fencing and sleeper wall built by Infascape in Sheffield",
    gallery: [
      { src: "/assets/gallery/slatted-fencing-paving.jpg", alt: "Slatted fencing Sheffield" },
      { src: "/assets/gallery/sleeper-steps-paving.jpg", alt: "Sleeper wall and steps with paving Sheffield" },
      { src: "/assets/gallery/multi-level-garden.jpg", alt: "Multi-level garden with sleeper walls Sheffield" },
    ],
    included: [
      "Old fence or borders removed and taken away",
      "Posts set in concrete to the correct depth",
      "Gravel boards to keep timber off the ground",
      "Treated timber, fixed with exterior-grade fixings",
      "Sleeper walls on a concrete footing, pinned and tied",
    ],
    process: [
      { title: "Survey and quote", detail: "We agree lines, heights and style, and check the boundary with you." },
      { title: "Strip out", detail: "Old fencing, posts and roots removed." },
      { title: "Set posts or footings", detail: "Posts concreted in, or a concrete footing poured for sleeper walls." },
      { title: "Build", detail: "Panels, boards or sleepers fixed with the right fixings for outdoor use." },
      { title: "Finish", detail: "Site cleaned and waste removed." },
    ],
    whyCheapFails: {
      heading: "Built for longevity",
      body: [
        "Fence panels blow over and sleepers rot because posts are shallow, timber sits on wet ground and fixings rust. Those are installation choices, not bad luck.",
        "All our timber is treated, posts are concreted, boards sit off the ground and sleeper walls get a proper footing.",
      ],
    },
    duration: "A typical 20m run of fencing takes 2–3 working days.",
    costFactors: [
      "Fence style and height",
      "Removal of the old fence",
      "Ground conditions for posts",
      "Height and length of sleeper walls",
    ],
    examples: [],
    faqs: [
      { q: "How much does a new fence cost in Sheffield?", a: "It depends on the length, height and style of fence, removing the old one and the ground conditions for posts. We price every job from a site visit with a written quote." },
      { q: "Why do fences blow over?", a: "Usually shallow posts, posts not set in concrete, or timber sitting on wet ground and rotting at the base. We concrete every post and use gravel boards." },
      { q: "Do sleeper walls rot?", a: "Untreated or poorly drained sleepers can rot in a few years. We use treated sleepers on a proper footing so water isn't sitting against them." },
      { q: "Do you take the old fence away?", a: "Yes. Removal and disposal of the old fence is included in the quote." },
    ],
  },
  {
    slug: "composite-decking",
    summary: "Level, ventilated frames on solid foundations, so your deck doesn't bounce, sag or drop.",
    name: "Composite Decking",
    serviceType: "Composite decking installation",
    metaTitle: "Composite Decking Sheffield | Prices & Process | Infascape",
    metaDescription:
      "Composite decking installers in Sheffield. Level, ventilated frames on solid foundations, raised decks and decking borders. Request a quote.",
    h1: "Composite Decking in Sheffield",
    answer:
      "Infascape builds composite decking across Sheffield and surrounding areas on a level, ventilated sub-frame set on solid foundations, including raised decks, decking borders and outdoor kitchen areas.",
    image: "/assets/gallery/grey-composite-decking-1.jpg",
    imageAlt: "Grey composite decking built by Infascape in Sheffield",
    gallery: [
      { src: "/assets/gallery/raised-decking-view.jpg", alt: "Raised composite decking Sheffield" },
      { src: "/assets/gallery/large-decking-01.jpg", alt: "Large composite decking area Sheffield" },
      { src: "/assets/gallery/outdoor-kitchen-green-wall.jpg", alt: "Outdoor kitchen with decking Sheffield" },
      { src: "/assets/gallery/decking-paving-combo.jpg", alt: "Decking and paving combination Sheffield" },
    ],
    included: [
      "Ground cleared and weed membrane laid",
      "Foundations for the sub-frame",
      "Treated sub-frame, level and spaced to the board maker's spec",
      "Ventilation gaps so the frame stays dry",
      "Composite boards, fascia and trims",
    ],
    process: [
      { title: "Design and quote", detail: "We agree size, height, steps and board colour." },
      { title: "Groundwork", detail: "Ground cleared, membrane laid, foundations set." },
      { title: "Frame", detail: "Sub-frame built level, with joist spacing to the board maker's spec." },
      { title: "Boards", detail: "Boards fixed with hidden clips where specified, fascias and trims finished." },
      { title: "Handover", detail: "Walk-round, cleaning advice and site cleaned." },
    ],
    whyCheapFails: {
      heading: "Why composite decking still fails",
      body: [
        "Composite boards don't rot, but the frame underneath can. Decks bounce, sag and go out of level when joists are spaced too wide or the frame sits on soil.",
        "We build the frame to the board maker's spacing, on solid foundations, with ventilation so it stays dry.",
      ],
    },
    duration: "A typical 15–25m² deck takes 3–5 working days.",
    costFactors: [
      "Board range and colour",
      "Height (raised decks need more frame and balustrade)",
      "Steps, curves and borders",
      "Ground conditions",
    ],
    examples: [],
    faqs: [
      { q: "How much does composite decking cost in Sheffield?", a: "It depends on size, height, the board range, steps and borders, and ground conditions. Raised decks need more frame and balustrading. We price every deck from a site visit with a written quote." },
      { q: "Is composite decking better than timber?", a: "Composite won't rot, splinter or need staining, and keeps its colour longer. It costs more up front, but needs far less maintenance." },
      { q: "Does composite decking get slippery?", a: "Good composite boards have a textured, grip-rated surface. Keeping the deck clean of moss and leaves keeps it safe in wet weather." },
      { q: "How long does composite decking last?", a: "The boards typically last 20+ years. The life of the deck depends on the sub-frame, which is why we build the frame properly." },
      { q: "Can you build an outdoor kitchen area?", a: "Yes. We build decking and paving areas for outdoor kitchens and seating as part of wider garden projects." },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
