// Edit this classic script to customise the website without rebuilding the export.
// Personal details, academic projects and results are from the supplied CV.
(() => {
  const profile = {
    name: "Chenrui Luo",
    initials: "CL",
    role: "Electrical Engineer",
    heroLines: ["ELECTRICAL", "ENGINEER."],
    email: "luocr2004@yeah.net",
    phone: "+86 18913074381",
    phoneHref: "+8618913074381",
    cv: "./Chenrui-Luo-CV.docx",
    heroIntroduction: "I’m Chenrui Luo. I build and test systems in power electronics, embedded control, and electrical machines.",
    introduction: "An Electrical and Electronic Engineering undergraduate at the University of Nottingham Ningbo China, with practical experience in power conversion, embedded systems, and electrical machines.",
    background: "My work spans simulation, circuit design, fabrication, and experimental testing. Two laboratory placements have developed my experience in motor winding design and magnetic network analysis.",
  };

  const projects = [
    {
      id: "converter", number: "01", title: "Converter & PCB Design", category: "Power",
      discipline: "Power electronics · PCB design", type: "ACADEMIC PROJECT",
      image: "./project-converter-bright.webp", imageWidth: 1536, imageHeight: 1024,
      imageSrcSet: "./project-converter-bright-640.webp 640w, ./project-converter-bright-960.webp 960w, ./project-converter-bright.webp 1536w",
      visualLabel: "AI-generated visual",
      alt: "AI-generated white and blue converter workflow illustration: simulate on a laptop, build the converter PCB, then test with an oscilloscope",
      summary: "A two-switch forward converter, developed from PLECS models to custom magnetics, a KiCad PCB, and closed-loop testing.",
      brief: "March–April 2026. Design, assemble, and test a two-switch forward converter, including non-ideal simulation, isolated gate drives, custom magnetics, and thermal evaluation.",
      approach: "Built PLECS open- and closed-loop models with Type I/III compensation. Designed and assembled a two-layer KiCad power PCB and wound the transformer and inductor. Closed-loop testing achieved 10 V output with ripple below 0.2 V; current-mode control provided cycle-by-cycle overcurrent protection.",
      deliverables: ["PLECS", "KiCad", "Gate drives", "Closed-loop control"],
    },
    {
      id: "radar", number: "02", title: "STM32 Radar Speedometer", category: "Embedded",
      discipline: "Embedded systems · Signal processing", type: "ACADEMIC PROJECT",
      image: "./project-radar-bright.webp", imageWidth: 1536, imageHeight: 1024,
      imageSrcSet: "./project-radar-bright-640.webp 640w, ./project-radar-bright-960.webp 960w, ./project-radar-bright.webp 1536w",
      visualLabel: "AI-generated visual",
      alt: "AI-generated white and blue radar workflow illustration: sense with a Doppler module, process through analogue conditioning and a microcontroller, then display",
      summary: "A real-time Doppler radar speed measurement system combining analogue conditioning, STM32 spectrum analysis, and a CPLD display.",
      brief: "October–December 2025. Integrate an HB100 radar, analogue front end, STM32 microcontroller, and CPLD for real-time speed measurement over RS485.",
      approach: "Characterised the radar and verified the frequency–velocity relationship. Built and measured analogue filters and comparators. Configured timer-triggered ADC sampling and CMSIS-DSP FFT for Doppler extraction, and implemented a Verilog UART receiver and digital display logic.",
      deliverables: ["STM32", "CMSIS-DSP", "Verilog", "RS485"],
    },
    {
      id: "vehicle", number: "03", title: "Autonomous Line-Tracking Vehicle", category: "Control",
      discipline: "Control systems · Autonomous motion", type: "ACADEMIC PROJECT",
      image: "./project-vehicle-bright.webp", imageWidth: 1536, imageHeight: 1024,
      imageSrcSet: "./project-vehicle-bright-640.webp 640w, ./project-vehicle-bright-960.webp 960w, ./project-vehicle-bright.webp 1536w",
      visualLabel: "AI-generated visual",
      alt: "AI-generated white and blue line-tracking workflow illustration: detect a track with an infrared array, use feedback control, then drive a two-wheel robot",
      summary: "An Arduino vehicle using an eight-channel sensor array, weighted deviation estimation, and digital PID control.",
      brief: "October 2024–May 2025. Develop an autonomous line-tracking vehicle, progressing from basic motion control and sensor calibration to high-speed tracking on a complex course.",
      approach: "Compared bang-bang and analogue PID control, then implemented digital PID with anti-windup and output limits. Used weighted averaging from an eight-channel sensor array, with online tuning through LCD, buttons, and an encoder. The vehicle completed two high-speed laps and avoided all four obstacles.",
      deliverables: ["Arduino", "PID control", "Sensor arrays", "PWM"],
    },
  ];

  const experience = [
    { year: "2026", title: "Laboratory Assistant", place: "Yongjiang Laboratory", detail: "Magnetic network analysis · MATLAB · Experimental platforms" },
    { year: "2025", title: "Laboratory Assistant", place: "Yongjiang Laboratory", detail: "Winding design · SolidWorks · 3D fabrication" },
    { year: "2023–27", title: "BEng (Hons), Electrical & Electronic Engineering", place: "University of Nottingham Ningbo China", detail: "Expected graduation: July 2027" },
  ];

  const capabilities = [
    {
      id: "power", number: "01", title: "Power electronics",
      text: "Converter modelling, gate drives, custom magnetics, and PCB assembly, followed by closed-loop and thermal testing.",
      tags: ["PLECS", "KiCad", "Power converters"],
      image: "./capability-power.webp",
      imageSrcSet: "./capability-power-640.webp 640w, ./capability-power-960.webp 960w, ./capability-power.webp 1774w",
      imageWidth: 1774, imageHeight: 887,
      alt: "AI-generated white and blue illustration of custom-wound transformer, toroidal inductor and converter PCB",
    },
    {
      id: "embedded", number: "02", title: "Embedded control",
      text: "Sensor interfaces, real-time signal processing, digital logic, and feedback control, from sampling to actuation.",
      tags: ["STM32", "Verilog", "PID control"],
      image: "./capability-embedded.webp",
      imageSrcSet: "./capability-embedded-640.webp 640w, ./capability-embedded-960.webp 960w, ./capability-embedded.webp 1774w",
      imageWidth: 1774, imageHeight: 887,
      alt: "AI-generated white and blue illustration of a microcontroller, infrared sensor module and gearmotor connected in a feedback loop",
    },
    {
      id: "modelling", number: "03", title: "Modelling & testing",
      text: "Magnetic network analysis, CAD and fabrication, and laboratory measurements that connect a model to physical results.",
      tags: ["MATLAB", "SolidWorks", "Lab measurement"],
      image: "./capability-modelling.webp",
      imageSrcSet: "./capability-modelling-640.webp 640w, ./capability-modelling-960.webp 960w, ./capability-modelling.webp 1774w",
      imageWidth: 1774, imageHeight: 887,
      alt: "AI-generated white and blue illustration of a modelling laptop, wound motor stator and laboratory measurement probe",
    },
  ];

  window.PORTFOLIO = {
    profile, projects, experience, capabilities,
    media: {
      hero: "./hero-video.mp4",
      poster: "./hero-video-poster.webp",
      portrait: "./portrait.jpg",
      portraitSmall: "./portrait-640.webp",
      portraitMedium: "./portrait-1024.webp",
    },
  };
})();
