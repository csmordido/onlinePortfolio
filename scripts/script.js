const app = {};

app.index;

app.projects = [
  {
    title: "Tidy Desk",
    description: "A hidden-object game requiring players to find objects on the list within 30 seconds.",
    link: "https://csmordido.github.io/cherieleMordidoProjectThree/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "SASS",
      "Git"
    ],
    images: [
      {
        path: "assets/tidyDesk/tidyDesk.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/tidyDesk/tidyDesk2.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/tidyDesk/tidyDesk3.jpg",
        alt: "Some image description"
      }
    ]
  },
  {
    title: "Travel Escape",
    description: "A paired programming project using the Open Trivia Database API.",
    link: "https://jenny-dinh.github.io/projectFourTravelTrivia/",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "SASS",
      "Git"
    ],
    images: [
      {
        path: "assets/travelEscape/travelEscape.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/travelEscape/travelEscape2.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/travelEscape/travelEscape3.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/travelEscape/travelEscape4.jpg",
        alt: "Some image description"
      }
    ]
  },
  {
    title: "Interiors Website",
    description: "A personal project practicing Bootstrap and Animate On Scroll library.",
    link: "https://csmordido.github.io/interiors-bootstrap-aos/",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Animate On Scroll"
    ],
    images: [
      {
        path: "assets/interiors/interiors1.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/interiors/interiors2.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/interiors/interiors3.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/interiors/interiors4.jpg",
        alt: "Some image description"
      }
    ]
  },
  {
    title: "Museum Finder",
    description: "A React application to help people who love traveling find museums to visit.",
    link: "https://csmordido.github.io/museumFinderProjectFive/",
    technologies: [
      "React",
      "JSX",
      "CSS3",
      "RESTful API",
      "Axios",
      "Git"
    ],
    images: [
      {
        path: "assets/musemFinder/museumFinder.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/musemFinder/museumFinder2.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/musemFinder/museumFinder3.jpg",
        alt: "Some image description"
      },
      {
        path: "assets/musemFinder/museumFinder4.jpg",
        alt: "Some image description"
      }
    ]
  }
];

app.displayProjectData = function() {
  console.log("xxx", app.index);
  const title = app.projects[0].title;
  

  $("#projectContainer").html(`
    <h1 class="title">${title}</h1>
  `);
  
}

app.displayProject = function() {
  $(".viewProject").on("click", function() {
    window.location.href = "projectPage.html";
    app.index = $(this).data("value");
    console.log("x", app.index);
    
    

    
    
  });
}


app.init = function() {
  app.displayProject();
  console.log("aaa", $("#projectPage").length);
  console.log("xx", app.index);
  // if ($("#projectPage").length > 0) {
  //   app.displayProjectData();
  // }
  

}


$(document).ready(function(){
  app.init();
});