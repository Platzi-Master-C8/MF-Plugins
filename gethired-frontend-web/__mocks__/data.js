const user = {
    id: 105,
    name: "Jito",
    token: "superhyperextremefuckingtoken",
    projects: [
      {
        id: 1,
        name: "GraphiCal",
        description: "First technical text of Platzi Master; the creation of a basic graphing calculator",
        link: "https://github.com/IrvingJuarez/GraphiCal",
        time: 500,
        lenguages: ["js", "sass", "html"],
        os: "Linux"
      },
      {
        id: 2,
        name: "equation-solver",
        description: "Program able to solve one-variable linear equations",
        link: "https://github.com/IrvingJuarez/equation-solver",
        time: 250,
        lenguages: ["js", "sass", "html"],
        os: "Linux"
      },
      {
        id: 3,
        name: "Pacman",
        description: "The classical Arcade Game made out of html, css and plain js",
        link: "https://github.com/IrvingJuarez/Pacman",
        time: 120,
        lenguages: ["js", "sass", "html"],
        os: "Linux"
      },
      {
        id: 4,
        name: "spelling-trainer",
        description: "Program to enhance english students's spelling skills",
        link: "https://github.com/IrvingJuarez/spelling-trainer",
        time: 720,
        lenguages: ["js", "sass", "html"],
        os: "Linux"
      }
    ],
    statistics: {
      os: "Linux",
      time: 1590,
      measurement: "minutes",
      lenguages: {
        labels: ["HTML", "JavaScript", "TypeScript", "CSS"],
        datasets: [
          {
            label: "Time spent programming",
            backgroundColor: "#555BFF",
            data: [65, 59, 80, 81],
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 32
          }
        ]
      }
    },
    average: {
      labels: ['Today', 'Daily Average'],
      datasets: [
        {
          label: 'time develop',
          data: [75, 25],
          backgroundColor: ['#AE4EFF', '#fff'],
          borderWidth: 0,
        },
      ],
    },
    plugin: {
      lastTracking: "09-12-2021",
      dataTrack: {
        time: true,
        languages: true,
        projects: true,
        os: true
      },
      dataShow: {
        time: true,
        languages: true,
        projects: true,
        os: true
      }
    }
}

export default user;