/**
 * Guides: comparison and problem pages (Marcus Sheridan's "versus" and
 * "problems" content). One entry = one page at /guides/<slug>.
 * Written in Rob's voice. No prices, by design: costs are quoted per job.
 */
import type { FAQ } from "./services";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type Guide = {
  slug: string;
  kind: "comparison" | "problem";
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  answer: string; // answer-first summary
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  sections: GuideSection[];
  faqs: FAQ[];
  services: string[]; // related service slugs
};

const PUBLISHED = "2026-10-20";

export const GUIDES: Guide[] = [
  {
    slug: "tarmac-vs-block-paving-vs-resin-driveways",
    kind: "comparison",
    title: "Tarmac vs Block Paving vs Resin: Which Driveway Is Right for You?",
    metaTitle: "Tarmac vs Block Paving vs Resin Driveways | Sheffield Guide",
    metaDescription:
      "An honest comparison of tarmac, block paving and resin driveways from a Sheffield installer: durability, maintenance, drainage, repairs and looks.",
    answer:
      "Tarmac is the hardest-wearing, lowest-maintenance option and suits most family driveways. Block paving gives you the most choice of colour and pattern and is easy to repair in patches. Resin bound gives a smooth, decorative, permeable finish but depends completely on a sound base underneath. All three last 10+ years if the sub-base is built properly, and fail early if it isn't.",
    image: "/assets/gallery/tarmac-driveway.jpg",
    imageAlt: "Tarmac driveway laid by Infascape in Sheffield",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "Side by side",
        table: {
          headers: ["", "Tarmac", "Block paving", "Resin bound"],
          rows: [
            ["Durability", "Excellent under daily use and heavy vehicles", "Very good if edges are restrained and the base is right", "Good for cars; depends on the base below it"],
            ["Maintenance", "Very low. Occasional sweep", "Weeding and re-sanding joints, occasional jet wash", "Low. Sweep and rinse; avoid oil spills"],
            ["Drainage", "Not permeable. Needs falls to a border, soakaway or channel", "Permeable versions available; standard blocks need falls", "Permeable, which often avoids the need for planning permission"],
            ["Repairs", "Patch repairs show", "Lift and relay individual blocks", "Patch repairs are hard to match"],
            ["Looks", "Clean, plain, traditional", "Widest choice of colour and pattern", "Smooth, modern, decorative"],
            ["Install time", "Fastest once the base is in", "Slowest; every block is laid by hand", "Quick to lay but weather-sensitive"],
          ],
        },
      },
      {
        heading: "When tarmac is the right choice",
        paragraphs: [
          "If you want a driveway you never have to think about, tarmac is hard to beat. It takes daily traffic, turning cars and the odd van without complaint, and there are no joints for weeds.",
          "I spent years working for a tarmac company before starting Infascape, and the thing that makes or breaks a tarmac drive isn't the tarmac. It's the 200mm of compacted MOT underneath and the edging holding it in.",
        ],
      },
      {
        heading: "When block paving is the right choice",
        paragraphs: [
          "Block paving suits you if you want a particular look, borders or patterns, or if you might need to dig into the drive later for services. Individual blocks can be lifted and relaid without leaving a patch.",
          "The trade-off is maintenance. Joints need re-sanding and weeds will try their luck. Edges must be properly restrained on a concrete haunch, or the blocks start to spread.",
        ],
      },
      {
        heading: "When resin is the right choice",
        paragraphs: [
          "Resin bound gives the smartest finish of the three and is permeable, so water drains through it. That makes it a good fit for front gardens where you don't want to send water onto the road.",
          "Resin is only as good as what it's laid on. A thin resin layer over a cracked or poorly built base will crack with it. Before laying resin, we check the existing surface and, if it isn't sound, build a proper base first.",
        ],
      },
      {
        heading: "What matters more than the surface",
        bullets: [
          "Sub-base depth and compaction: we lay 200mm of MOT Type 1, compacted in layers",
          "Edging set on concrete so the surface has something solid to finish against",
          "Falls and drainage designed before any digging starts",
          "Quantities calculated from the area, not guessed on the day",
        ],
      },
    ],
    faqs: [
      { q: "Which driveway lasts the longest?", a: "On a properly built base, tarmac, block paving and resin bound can all last 10+ years. Tarmac is the most forgiving under heavy use. Most early failures are base failures, not surface failures." },
      { q: "Which driveway needs the least maintenance?", a: "Tarmac. There are no joints for weeds and it only needs an occasional sweep. Resin is also low-maintenance; block paving needs the most attention." },
      { q: "Do I need planning permission for a new driveway?", a: "Usually not if the surface is permeable, like resin bound or permeable block paving, or if water drains to a lawn, border or soakaway on your property. A front driveway over 5m² that drains onto the road normally needs permission." },
      { q: "Can resin be laid over my existing driveway?", a: "Sometimes, if the existing tarmac or concrete is sound, level and drains properly. If it's cracked, sinking or breaking up, it needs a new base first or the resin will crack too." },
    ],
    services: ["tarmac-driveways"],
  },
  {
    slug: "porcelain-vs-indian-sandstone-patios",
    kind: "comparison",
    title: "Porcelain vs Indian Sandstone: Which Patio Should You Choose?",
    metaTitle: "Porcelain vs Indian Sandstone Patios | Sheffield Guide",
    metaDescription:
      "Porcelain or Indian sandstone for your patio? A Sheffield patio installer compares maintenance, staining, slip, looks and how each must be laid.",
    answer:
      "Porcelain is the lower-maintenance choice: it doesn't stain, fade or need sealing, and every slab is consistent. Indian sandstone has natural variation and character but is porous, so it needs sealing and more cleaning. Porcelain must be primed and fully bedded to stay put; sandstone is more forgiving to lay. Both last for decades on a proper sub-base.",
    image: "/assets/gallery/paving-wide.jpg",
    imageAlt: "Porcelain patio laid by Infascape in Sheffield",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "Side by side",
        table: {
          headers: ["", "Porcelain", "Indian sandstone"],
          rows: [
            ["Maintenance", "Very low. Wipe or rinse", "Needs sealing and regular cleaning to keep its colour"],
            ["Staining", "Highly stain-resistant", "Porous; can stain from oil, wine, rust and leaves"],
            ["Algae and moss", "Little grip for growth", "Can go green in shady, damp spots"],
            ["Look", "Consistent colour and size; modern or stone-effect", "Natural variation; every slab is different"],
            ["Laying", "Must be primed and fully bedded; hard to cut", "More forgiving; easier to cut and shape"],
            ["Slip", "Choose an outdoor-rated, textured slab", "Naturally riven surface gives grip"],
          ],
        },
      },
      {
        heading: "Why porcelain has to be laid differently",
        paragraphs: [
          "Porcelain is dense and almost non-porous, so ordinary mortar doesn't grip it. Every slab needs a slurry primer on the back and a full mortar bed underneath. Laid on dots of mortar, porcelain will rock and come loose.",
          "It's also hard on blades and takes longer to cut, so a careful layout that keeps cuts to a minimum matters more than with natural stone.",
        ],
      },
      {
        heading: "When sandstone makes more sense",
        paragraphs: [
          "If you want a traditional, natural look, or the patio sits alongside an older stone house, sandstone often looks more at home. Its variation hides dirt and wear better than a flat-colour porcelain.",
          "Expect to seal it after laying and clean it more often, particularly in shady gardens.",
        ],
      },
      {
        heading: "What matters more than the slab",
        bullets: [
          "Excavation to the depth the build-up needs",
          "A compacted MOT Type 1 sub-base, laid in layers",
          "A fall away from the house so water doesn't sit or run back",
          "Drainage channels or a soakaway where the ground won't take water",
        ],
      },
    ],
    faqs: [
      { q: "Is porcelain slippery when wet?", a: "Outdoor-grade porcelain has a textured, slip-rated surface. Choose a slab rated for external use, and keep it clear of moss and leaves." },
      { q: "Does Indian sandstone need sealing?", a: "We recommend it. Sealing helps stop staining and reduces algae growth. It needs redoing every few years." },
      { q: "Can porcelain go on my existing patio base?", a: "Only if the existing base is sound, level and has the right falls. In most cases it's better to dig out and build a proper sub-base so the new patio isn't inheriting old problems." },
      { q: "Which is better for a shady garden?", a: "Porcelain. Sandstone is porous and tends to go green in damp, shady spots; porcelain gives moss and algae very little to grip." },
    ],
    services: ["porcelain-patios"],
  },
  {
    slug: "artificial-grass-vs-real-turf",
    kind: "comparison",
    title: "Artificial Grass vs Real Turf: An Honest Comparison",
    metaTitle: "Artificial Grass vs Real Turf | Honest Sheffield Guide",
    metaDescription:
      "Artificial grass or real turf? A Sheffield installer compares maintenance, drainage, dogs, kids, lifespan and wildlife, including when real grass is the better choice.",
    answer:
      "Artificial grass wins on maintenance: no mowing, no mud, and it looks the same all year, which suits busy families, dog owners and shady gardens where real grass struggles. Real turf is cooler in summer, better for wildlife and costs less up front. Artificial grass only works if it's laid on a dug-out, free-draining base; laid on soil it will puddle and lift.",
    image: "/assets/gallery/green-wall-grass.jpg",
    imageAlt: "Artificial grass installed by Infascape in Sheffield",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "Side by side",
        table: {
          headers: ["", "Artificial grass", "Real turf"],
          rows: [
            ["Maintenance", "Brush and rinse occasionally", "Mowing, feeding, weeding, re-seeding"],
            ["All-year use", "Usable year-round, no mud", "Muddy and worn in winter"],
            ["Shade", "Looks the same in full shade", "Thins out and goes mossy in shade"],
            ["Dogs", "Good, if the base drains and it's rinsed", "Yellow patches and worn tracks"],
            ["Summer heat", "Gets warm in direct sun", "Stays cool"],
            ["Wildlife", "Little value", "Supports insects and birds"],
          ],
        },
      },
      {
        heading: "When artificial grass is the right choice",
        bullets: [
          "Shady gardens where real grass never thrives",
          "Families who want the lawn usable all year without mud coming indoors",
          "Dog owners tired of patches and churned-up ground",
          "Anyone who doesn't want to spend weekends mowing",
        ],
      },
      {
        heading: "When real turf is the better choice",
        paragraphs: [
          "If your garden gets good sun, you don't mind mowing, and you'd like it to support wildlife, real turf is a perfectly good choice. We'd rather tell you that than sell you something you don't need.",
        ],
      },
      {
        heading: "Why so much artificial grass looks bad after a few years",
        paragraphs: [
          "Most bad artificial lawns have the same problem: they were rolled out onto soil or a thin layer of sand. Water has nowhere to go, so the lawn puddles, ripples and lifts at the edges.",
          "We dig out the turf and soil, build a compacted, free-draining stone base, fix the edges and lay a levelling layer before the grass goes down. It's a build, not a carpet.",
        ],
      },
    ],
    faqs: [
      { q: "Does artificial grass smell with dogs?", a: "Not if it's laid on a free-draining base and rinsed regularly. Smells come from urine sitting in a base that doesn't drain." },
      { q: "How long does artificial grass last?", a: "Good-quality grass on a proper base should look good for 10+ years." },
      { q: "Does artificial grass get hot?", a: "Yes, in strong direct sun it gets warmer than real grass. A quick rinse cools it down." },
      { q: "Can artificial grass be laid on concrete or a patio?", a: "Yes, with a shock pad underneath and somewhere for water to drain. For a lawn on soil, the ground should be dug out and a proper base built." },
    ],
    services: ["artificial-grass"],
  },
  {
    slug: "composite-vs-timber-decking",
    kind: "comparison",
    title: "Composite vs Timber Decking: Which Is Worth It?",
    metaTitle: "Composite vs Timber Decking | Sheffield Decking Guide",
    metaDescription:
      "Composite or timber decking? A Sheffield decking installer compares lifespan, maintenance, slip, looks and what actually makes a deck fail.",
    answer:
      "Composite decking costs more up front but doesn't rot, splinter or need staining, and keeps its colour far longer. Timber is cheaper and natural but needs treating every year or two and will eventually rot. With either, the deck lasts only as long as the frame underneath, so frame spacing, foundations and ventilation matter more than the boards.",
    image: "/assets/gallery/grey-composite-decking-1.jpg",
    imageAlt: "Grey composite decking built by Infascape in Sheffield",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "Side by side",
        table: {
          headers: ["", "Composite", "Timber"],
          rows: [
            ["Lifespan of boards", "20+ years", "Shorter; depends on treatment and upkeep"],
            ["Maintenance", "Wash down; no staining or sealing", "Clean, treat or stain every year or two"],
            ["Rot and splinters", "Doesn't rot or splinter", "Can rot, split and splinter with age"],
            ["Slip", "Textured, grip-rated boards available", "Gets slippery when green or wet"],
            ["Look", "Consistent colour; wood-grain finishes", "Natural wood; weathers to silver-grey"],
            ["Up-front cost", "Higher", "Lower"],
          ],
        },
      },
      {
        heading: "The part nobody sees: the frame",
        paragraphs: [
          "Composite boards don't rot, but the timber frame underneath can. Decks bounce, sag and drop out of level when joists are spaced too wide for the boards, when the frame sits on soil, or when there's no airflow underneath.",
          "We build every sub-frame to the board maker's joist spacing, on solid foundations, with weed membrane and ventilation so the frame stays dry.",
        ],
      },
      {
        heading: "When timber still makes sense",
        paragraphs: [
          "For a budget-led project, a deck you expect to replace in the medium term, or where you want a natural, weathered look, treated timber is a reasonable choice, as long as you're happy to keep up the maintenance.",
        ],
      },
    ],
    faqs: [
      { q: "Does composite decking fade?", a: "Good capped composite boards hold their colour far better than timber. Expect a slight change in the first months as they settle, then very little." },
      { q: "Is composite decking slippery?", a: "Quality composite boards have a textured, grip-rated surface. Keeping them clear of moss and leaves keeps them safe in wet weather." },
      { q: "Can you lay composite boards on my old timber frame?", a: "Only if the frame is sound, level and spaced for composite boards, which most older timber frames aren't. Usually the frame should be rebuilt." },
      { q: "How often does timber decking need treating?", a: "Typically every one to two years, depending on how much sun and rain it gets." },
    ],
    services: ["composite-decking"],
  },
  {
    slug: "why-is-my-driveway-sinking",
    kind: "problem",
    title: "Why Is My Driveway Sinking? Causes and Fixes",
    metaTitle: "Why Is My Driveway Sinking? Causes & Fixes | Sheffield",
    metaDescription:
      "Driveway sinking, rutting or dipping? A Sheffield groundworker explains the real causes, from thin sub-bases to poor drainage, and how to fix it properly.",
    answer:
      "Almost every sinking driveway has a base problem: the sub-base was too thin, wasn't compacted in layers, was laid on soft ground, or water is getting underneath and washing it out. Resurfacing on top doesn't fix it. The lasting fix is to dig out the failed area, find the cause, and rebuild with a properly compacted sub-base and drainage.",
    image: "/assets/gallery/block-paving-driveway.jpg",
    imageAlt: "Driveway rebuilt on a proper sub-base by Infascape",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "The usual causes",
        bullets: [
          "Thin sub-base: less MOT than the job needed, often to save money on muck away and stone",
          "Poor compaction: stone laid in one deep layer and rolled once, so it keeps settling",
          "Soft or made ground: clay, topsoil or old fill left in under the base",
          "Water: no falls or drainage, so water sits under the drive and softens the ground",
          "Old trenches: a utility trench or soakaway that was backfilled loosely",
          "Tree roots: roots lifting one area or drying out clay so it shrinks",
        ],
      },
      {
        heading: "How to tell how bad it is",
        paragraphs: [
          "A small dip where you always park, with no cracking, is often a localised soft spot. Ruts in wheel lines, cracks spreading from the dip, or edging that's moving outwards point to a base that's failing more widely.",
          "Water is the clue to watch. If a puddle forms in the same place after rain and the dip gets deeper each winter, the ground under it is getting wetter and weaker.",
        ],
      },
      {
        heading: "How we fix it",
        paragraphs: [
          "We cut out and dig down through the failed area until we reach firm ground, so we can see what actually went wrong. Then we rebuild with MOT Type 1, compacted in layers, sort the drainage, and resurface.",
          "If the whole drive is built on a thin base, patching just moves the problem along. In that case we'll tell you, and give you the option of a full rebuild with a 200mm sub-base.",
        ],
      },
      {
        heading: "What doesn't work",
        bullets: [
          "Resurfacing or overlaying without fixing the base",
          "Filling the dip with more tarmac or sand under the blocks",
          "Ignoring standing water",
        ],
      },
    ],
    faqs: [
      { q: "Can a sinking driveway be patched?", a: "A small, localised soft spot can be dug out and rebuilt. If the dip is caused by a thin base across the whole drive, patches will keep failing." },
      { q: "How deep should a driveway sub-base be?", a: "We lay 200mm of compacted MOT Type 1 on new driveways. Soft ground can need more." },
      { q: "Is a sinking driveway dangerous?", a: "Not usually, but it gets worse each winter as water gets in, and trip edges can develop. It's cheaper to fix early." },
    ],
    services: ["tarmac-driveways"],
  },
  {
    slug: "why-does-my-patio-hold-water",
    kind: "problem",
    title: "Why Does My Patio Hold Water? Causes and Fixes",
    metaTitle: "Why Does My Patio Hold Water? Puddles Explained | Sheffield",
    metaDescription:
      "Puddles on your patio? A Sheffield patio installer explains why water sits on paving, from missing falls to sunken slabs, and how to fix it for good.",
    answer:
      "Water sits on a patio when it was laid without a proper fall, when slabs have sunk because the sub-base or bedding was poor, or when there's nowhere for the water to drain to. A patio should fall gently away from the house towards a lawn, border, channel or soakaway. Fixing it usually means lifting the affected slabs and relaying them to the right levels.",
    image: "/assets/gallery/paving-close-up.jpg",
    imageAlt: "Close-up of a well-laid porcelain patio",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "The usual causes",
        bullets: [
          "No fall: the patio was laid dead level, so water has nowhere to go",
          "Fall towards the house: water runs back against the wall",
          "Sunken slabs: thin sub-base or dot-and-dab bedding has let slabs drop",
          "Nowhere to drain: the patio falls to a closed-in corner or a wall",
          "Blocked joints or channels: old drainage silted up",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Standing water turns green, gets slippery and stains porous stone. If it sits against the house it can cause damp problems, and in winter it freezes and can lift slabs.",
        ],
      },
      {
        heading: "How we fix it",
        paragraphs: [
          "For a few sunken slabs, we lift them, sort the bedding underneath and relay them to the right level. Where the whole patio has the wrong fall, the slabs need lifting and relaying to a new fall, and sometimes the base needs rebuilding.",
          "Where the ground won't take the water, we add a channel drain or soakaway so it has somewhere to go. On new patios we design the falls before laying a single slab.",
        ],
      },
    ],
    faqs: [
      { q: "What fall should a patio have?", a: "Enough that water runs off steadily, always away from the house and towards somewhere it can drain. We set the falls on every patio before laying." },
      { q: "Can puddles be fixed without relaying the whole patio?", a: "Often, if the problem is a few sunken slabs. If the whole patio was laid level or falls the wrong way, it needs relaying." },
      { q: "Should patio water drain into the house drains?", a: "Not without checking. Surface water can usually go to a soakaway, lawn or border, or to a surface water drain if you have one. We'll check on site." },
    ],
    services: ["porcelain-patios"],
  },
  {
    slug: "do-i-need-planning-permission-for-a-driveway",
    kind: "problem",
    title: "Do I Need Planning Permission for a Driveway?",
    metaTitle: "Do I Need Planning Permission for a Driveway? | UK Guide",
    metaDescription:
      "When a new front driveway needs planning permission in England, the 5m² rule, permeable surfaces, dropped kerbs and what it means for your Sheffield driveway.",
    answer:
      "In England you don't need planning permission for a front driveway if it uses a permeable surface, or if rainwater runs off onto a lawn, border or soakaway within your property. You do normally need permission if the new hard surface is over 5m² and drains onto the road. A dropped kerb is a separate approval from the council, needed whenever you cross a pavement or verge to reach the drive.",
    image: "/assets/gallery/cobble-driveway.jpg",
    imageAlt: "Front driveway with drainage designed by Infascape",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    sections: [
      {
        heading: "The rule in plain English",
        bullets: [
          "Permeable surface (resin bound, permeable block paving, gravel): no planning permission needed",
          "Impermeable surface (standard tarmac, concrete, normal block paving) that drains to a lawn, border or soakaway on your property: no permission needed",
          "Impermeable surface over 5m² that drains onto the road or pavement: planning permission normally needed",
          "Back gardens are generally not covered by this rule",
        ],
      },
      {
        heading: "What about tarmac?",
        paragraphs: [
          "Standard tarmac isn't permeable, but that doesn't mean you need permission. If we set the falls so water runs into a border, a strip of gravel, or a soakaway on your land, the driveway meets the rules.",
          "That's part of designing a driveway properly: we work out where the water goes before we dig.",
        ],
      },
      {
        heading: "Dropped kerbs are a separate thing",
        paragraphs: [
          "If you need to drive over a pavement or verge to reach your driveway, you need a dropped kerb, and that needs approval from the council. Driving over a kerb without one isn't allowed. Check with Sheffield City Council, or your own council if you're outside Sheffield, before you build.",
        ],
      },
      {
        heading: "Other times you may need permission",
        bullets: [
          "Listed buildings or conservation areas",
          "Flats and maisonettes (permitted development rights don't apply the same way)",
          "Where permitted development rights have been removed for your property",
          "New access onto a classified road",
        ],
      },
    ],
    faqs: [
      { q: "Does the 5m² rule apply to back gardens?", a: "The rule is about front gardens. Back garden patios and paths generally don't need permission, but check if you're in a conservation area or a listed building." },
      { q: "Is resin bound permeable?", a: "Resin bound surfaces laid on a permeable base are permeable, so they normally don't need planning permission." },
      { q: "Do I need permission to replace an existing driveway?", a: "If you're replacing like for like with a surface that drains within your property, or is permeable, permission isn't normally needed. Check if you're changing the size, drainage or access." },
      { q: "Who arranges the dropped kerb?", a: "You apply to the council. They either do the work or approve a contractor. We can advise on what the council will want to see." },
    ],
    services: ["tarmac-driveways"],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
