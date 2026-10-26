/*
  title     – project name (shows big, in caps)
  date      – when you made it, e.g. "April 2026"; shown next to the category above the title
  summary   – one or two sentences on what you made and why
  tags      – short skill labels shown under the summary
  category  – the project type; used for the filter buttons and the label above the title.
              Use a list like ["Software", "Physical Computing"] for more than one
  image     – optional: put a picture in the images/ folder and write "images/your-file.jpg"
  alt       – a short description of the picture for people using screen readers
  link      – optional: URL or file for the "View project" button (a PDF in projects/, GitHub, Figma, video)
  code      – optional: URL for a second "Code" link (GitHub, Gist)
  slides    – optional: URL for a "Slides" link (Google Slides, Canva)
  Keep the list newest first; the site shows projects in this order.
  inProgress – true for work you're still doing; set date to e.g. "Expected April 2027"
  draft     – true marks a placeholder you still need to fill in; leave it out when it's real
*/
window.PROJECTS = [
  {
    title: "Al Dente",
    date: "Expected April 2027",
    inProgress: true,
    summary:
      "My capstone project: an app for home cooks to share family recipes within their community. It will integrate with an E-ink device, giving the feel of a cookbook without taking up the space, so there's more room on the counter to chop your vegetables.",
    tags: ["Capstone", "App Design", "E-ink", "Community"],
    category: ["Software", "Physical Computing", "Branding", "Product Design"],
  },
  {
    title: "Plate",
    date: "October 2026",
    summary:
      "An iPhone app that turns \"where should we eat?\" into a stack of swipeable restaurant cards. Swipe right to save local spots, let Pick for Me choose from your list, and rate the places you've been to build a personal food map. Big chains are filtered out, and everything stays on your phone with no account needed.",
    tags: ["iOS App", "UX/UI Design", "Google Places", "Privacy by Design"],
    category: "Software",
    image: "images/plate.jpg",
    alt: "Three iPhone screens from Plate: a restaurant detail page, the swipe card, and the food map.",
    link: "https://juliamiyamoto.github.io/plate/",
  },
  {
    title: "Bar Hopping Mapper",
    date: "Spring 2026",
    summary:
      "A route planner that builds the best bar crawl from bars you enter. Bars are nodes in a graph and walking times are weighted edges. Dijkstra's algorithm, a min-heap, and filters for rating, cover charge, and happy hour turn that into a timed itinerary, tested on real bars in Boulder and the South Bay.",
    tags: ["TypeScript", "Graphs", "Dijkstra's Algorithm", "Min-Heap"],
    category: "Software",
    image: "images/bar-hopping-mapper.jpg",
    alt: "Terminal output listing a four-stop bar crawl itinerary with arrival times, ratings, and cover charges.",
    link: "projects/bar-hopping-mapper.pdf",
    code: "https://gist.github.com/juliamiyamoto/5c6a8d4c92c3531c31c284dbd55f5cab",
  },
  {
    title: "Bubble Volume",
    date: "April 2026",
    summary:
      "A deliberately playful volume control: instead of a slider, you set the volume by popping floating bubbles worth anywhere from +50 to -50. Built from scratch with HTML canvas and JavaScript, with animated bubbles, wobble physics, and a splash of droplets on every pop.",
    tags: ["JavaScript", "HTML Canvas", "Animation", "Interaction Design"],
    category: "Software",
    image: "images/bubble-volume.jpg",
    alt: "Floating bubbles labeled with volume changes like +32 and -30 under a Volume: 50 readout.",
    link: "https://juliamiyamoto.github.io/juliam.github.io/FINAL/final.html",
    code: "https://github.com/juliamiyamoto/juliam.github.io/tree/main/FINAL",
  },
  {
    title: "E.C.H.O.",
    date: "April 2026",
    summary:
      "An interactive kiosk that prints a unique compliment on a thermal receipt at the press of a button, made to create small moments of kindness between strangers. Inside a laser-cut wooden enclosure, an ESP32 reads the button, fetches a fresh compliment over Wi-Fi, and sends it to a thermal printer.",
    tags: ["ESP32", "Arduino / C++", "Thermal Printer", "Laser Cutting", "Interaction Design"],
    category: "Physical Computing",
    image: "images/echo-cover.jpg",
    alt: "The laser-cut E.C.H.O. kiosk printing a receipt that reads \"something about you that shines.\"",
    link: "https://app.notion.com/p/E-C-H-O-Every-Compliment-Heals-Others-34ae18143c718006b29ed13585b9b8fb",
    code: "https://gist.github.com/juliamiyamoto/1c5b44466cda35854c514e89926a8b5b",
  },
  {
    title: "Colorado Nuclear Power Plant",
    date: "Spring 2026",
    summary:
      "A team project plan for Colorado's only operational nuclear power plant, designed for 2,000 MWe of output. Includes the project charter, stakeholder analysis, work breakdown structure, Gantt schedule from 2028 to 2031, cost estimate, and risk register.",
    tags: ["Project Charter", "WBS", "Gantt Chart", "Budgeting", "Risk Management"],
    category: "Management",
    image: "images/nuclear-power-plant.jpg",
    alt: "Work breakdown structure chart for the power plant project with phase tracking rows.",
    link: "projects/nuclear-power-plant.pdf",
  },
  {
    title: "Colorado Symphony Season Brochure",
    date: "November 2025",
    summary:
      "A class-project brochure for the Colorado Symphony's 2025–2026 Classics season. A bold red and black cover with arched green type opens onto a multi-column concert calendar laying out each weekend's program, performers, and dates.",
    tags: ["Editorial Layout", "Typography", "Adobe Illustrator", "Print Design"],
    category: "Graphic Design",
    image: "images/colorado-symphony.jpg",
    alt: "Brochure cover with arched green Colorado Symphony type over red and black circles.",
    link: "projects/colorado-symphony.pdf",
  },
  {
    title: "Acrylic Lamp",
    date: "Fall 2025",
    summary:
      "A lamp designed in CAD and built from laser-cut acrylic panels, with a bold magenta shade on a clear acrylic base. Documented with an exploded isometric view, orthographic and perspective views, and photos of the finished lamp lit up.",
    tags: ["CAD Modeling", "Laser Cutting", "Fabrication", "Product Design"],
    category: "Product Design",
    image: "images/acrylic-lamp.jpg",
    alt: "CAD renderings of the lamp from three angles, with a magenta shade on a clear purple base.",
    link: "projects/acrylic-lamp.pdf",
  },
  {
    title: "Jules Juice Box",
    date: "Fall 2025",
    summary:
      "\"Because you still deserve recess.\" Packaging for a line of cocktail juice boxes in Margarita, Cosmopolitan, and Espresso Martini, giving classic drinks a nostalgic childhood twist with a vintage illustration style.",
    tags: ["Branding", "Packaging Design", "Typography", "Color Theory"],
    category: "Branding",
    image: "images/jules-juice-box.jpg",
    alt: "Three pink cocktail juice boxes with straws and vintage-style illustrations.",
    link: "projects/jules-juice-box.pdf",
  },
  {
    title: "Supercut",
    date: "October 2025",
    summary:
      "An expressive typography piece built from the lyrics of Lorde's \"Supercut.\" Twelve square panels use scale, rotation, spirals, and a pink and black palette so each line of the song looks the way it sounds.",
    tags: ["Expressive Typography", "Layout", "Adobe Illustrator"],
    category: "Graphic Design",
    image: "images/supercut.jpg",
    alt: "Six pink, white, and black typography panels set with Supercut lyrics.",
    link: "projects/supercut.pdf",
  },
  {
    title: "Futura PT Type Specimen",
    date: "October 2025",
    summary:
      "A tabloid-size type specimen poster for Futura PT, showing the full alphabet, numerals, italics, and weights at many scales over a layered pink background of repeating letterforms.",
    tags: ["Typography", "Poster Design", "Adobe Illustrator"],
    category: "Graphic Design",
    image: "images/futura-type-specimen.jpg",
    alt: "Futura PT specimen poster with a large logotype, numerals, and body text over pink letterforms.",
    link: "projects/futura-type-specimen.pdf",
  },
  {
    title: "The Climb",
    date: "October 2025",
    summary:
      "A photo essay inspired by Miley Cyrus's \"The Climb\": landscapes shot in the Colorado Rockies paired with handwritten song lyrics, exploring perseverance, movement, and perspective through editorial composition and photo manipulation.",
    tags: ["Photography", "Photo Editing", "Visual Storytelling", "Editorial Design"],
    category: "Photography",
    image: "images/the-climb.jpg",
    alt: "Misty Rocky Mountain landscape with the handwritten lyric \"Ain't about how fast I get there.\"",
    link: "projects/the-climb.pdf",
  },
  {
    title: "Lego Lab",
    date: "September 2025",
    summary:
      "Three original builds made from the same five Lego bricks, each modeled in 3D from measured parts and presented as a Lego-style instruction manual with step-by-step diagrams and scene photography.",
    tags: ["3D Modeling", "Measurement", "Instruction Design", "Adobe Illustrator"],
    category: "Product Design",
    image: "images/lego-lab.jpg",
    alt: "Lego-style manual page reading Dive In! with a white and teal brick staircase beside a pool.",
    link: "projects/lego-lab.pdf",
  },
  {
    title: "Brake-Inator",
    date: "May 2025",
    summary:
      "An adjustable electronic braking system for manual wheelchairs, built for users with limited arm strength. Mountain-bike disk brakes mount to both wheels, and a dial on the armrest drives Arduino-controlled servos that pull the brake cables. I came up with the disk brake concept, sourced and integrated the brakes, and did most of the 3D modeling for the disk and caliper mounts.",
    tags: ["CAD / 3D Printing", "Arduino", "Servos", "Assistive Design", "Team of 5"],
    category: "Product Design",
    image: "images/brake-inator.jpg",
    alt: "Exploded diagram of the wheelchair braking system: potentiometer dial, servo mount, disk brake, and caliper.",
    link: "projects/brake-inator.pdf",
  },
  {
    title: "ElderWatch Armor",
    date: "Fall 2024",
    summary:
      "A protective Apple Watch case redesigned for older adults, with an enlarged side button, a bigger rotating crown with tactile ridges, and wrist curves that can be custom fit. Modeled in CAD with lip-and-groove joints, lofts, and circular patterns, then 3D printed as a prototype.",
    tags: ["CAD", "3D Printing", "Assistive Design"],
    category: "Product Design",
    image: "images/elderwatch-armor.jpg",
    alt: "Exploded CAD view of the Apple Watch case parts.",
    link: "projects/elderwatch-armor.pdf",
  },
  {
    title: "Perfect Orange",
    date: "Fall 2024",
    summary:
      "A 2,300-word speculative story set in a crowded future California, where a scientist invents a machine that makes real food from air and water, then has to decide whether it gets locked behind a corporate price tag or shared with everyone. It draws on readings about population, scarcity, and markets.",
    tags: ["Creative Writing", "Speculative Fiction", "Environment & Society"],
    category: "Writing",
    image: "images/perfect-orange.jpg",
    alt: "Illustration of a hand holding up a glowing orange in front of city towers.",
    link: "projects/perfect-orange.pdf",
  },
];
