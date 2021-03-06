let job = {
    title:"IT Analyst/Developer",
    image: "./miscImages/CRA.jpg",
    description: "As an IT Analyst/Developer for the Canada Revenue Agency, I had the opportunity to work with the SAP system, learn about the IT project development process and cycle, " +
    "and gain experience with government and CRA's software development precesses and standards. I also experienced all phases of systems development, including activities and deliverables.",
    employer: "Canada Revenue Agency"
};

let langs = {
    react: {
        title: "React",
        image:{
            src: "./logos/React-logo.png"
        },
        text: "i have created a burger building application that uses features such as Redux, React Routing, React Hooks, and more by following a course on udemy. I am currently working on creating a to-do list app that will use similar feature as the burger building app"
    },
    html5:{
        title:"HTML5",
        image: {
            src:"./logos/html5-logo.png"
        },
        text: "I have designed this website in HTML5. i have also designed other websites such as the restaurant website using HTML5"
    },
    python:{
        title:"Python",
        image: {
            src:"./logos/python-logo.png"
        },
        text: "I have programmed in python programs that would handle file I/O."
    },
    javascript:{
        title:"Javascript",
        image:{
            src:"./logos/JavaScript-logo.svg"
        },
        text:"I have developed applications using ES6 such as a restaurant website that could take in and send orders as well as register and save new users in a database. This website is also made with javascript"
    },
    C:{
        title:"C",
        image:{
            src:"./logos/C-logo.svg"
        },
        text:"Created programs that took advantage of multithreading to reduce computing times."
    },
    Cpp:{
        title:"C++",
        image:{
            src:"./logos/cpp-logo.svg"
        },
        text:"I have experience coding C++ on the linux operating system using concepts such as: polymorphism, encapsulation, inheritance, friendship, overloading, files, streams, exception handling, and template classes"
    },
    Csharp:{
        title:"C#",
        image:{
            src:"./logos/Csharp-logo.png"
        },
        text:"I have knowledge on the uses and implementation of asynchronous programming, delegates, and all OO concepts. I used this language to program for game development purposes with the Unity game engine."
    },
    Java:{
        title:"Java",
        image:{
            src:"./logos/java-logo.svg"
        },
        text:"I have extensive experience coding in Java. I have developed a Sudoku checker, weather report generator and more using OO concepts"
    },
    prolog:{
        title:"Swi prolog",
        image:{
            src:"./logos/swi-prolog-logo.svg"
        },
        text:"I have experience coding in swi prolog"
    },
    Scheme:{
        title:"Scheme",
        image:{
            src:"./logos/scheme-logo.png"
        },
        text:"I have experience coding in scheme"
    },
    CSS:{
        title:"CSS",
        image:{
            src:"./logos/css-logo.svg"
        },
        text:"Developed websites using stylesheets in css. The style for this website is made with css and bootstrap to create a responsive design."
    },
    Nodejs:{
        title:"Node.js",
        image:{
            src:"./logos/nodejs-logo.png"
        },
        text:"I have experience coding with Node.js. I have used it in the development of the restaurant website and will be using it in my new React application currently in development"
    },
    Mongodb:{
        title:"Mongodb",
        image:{
            src:"./logos/mongodb-logo.png"
        },
        text:"Developed a restaurant website that used a Mongodb database to store user information such as their password, id, orders and other crucial information."
    }
};

let me = {
    firstName:"Marco",
    lastName:"Borracci",
    number:"613-402-7750",
    email:"marcoborracci@cmail.carleton.ca",
    school:"Carleton University",
    year:"Third Year",
    program:"Bachelor of Computer Science",
    stream:"Mobile Computing",
    minor:"Minor in Psychology",
    GPA:"10.55",
    letterGrade:"A-",
    schoolTermsCompleted:"5",
    workTermsCompleted:"2",
    Graduation:"April 2023",
    city:"Ottawa",
    province:"Ontario",
    provinceCode:"ON",
    postalCode:"K2C 2S4"
};

//time needs to go above the item it goes next to
let cv = {
    Education:{
        title: "EDUCATION",
        time: "September 2018 - Present",
        description1: me.program + ", " + me.stream + ", " + me.minor + ", Co-op Option",
        description2: me.school + ", " + me.city + ", " + me.provinceCode,
        list:{
            item1: me.year + " Undergraduate, CGPA" + me.GPA + "/12.0(" + me.letterGrade + ")",
            item2: "General In-Course Scholarship",
            item3: "Expected Graduation " + me.Graduation
        }
    },
    Skills:{
        title:"RELEVANT SKILLS, EXPERIENCES, AND ACCOMPLISHMENTS",
        technical:{
            title:"Technical Skills",
            item1:"Experience programming in Java, Python, C#, C, Visual Studio Code, Scheme, React JS, Redux, JavaScript, HTML, CSS, Node.js, and MongoDB",
            item2:"Created black-box test cases using Java to debug a grade calculator program by generating test cases and looking at the actual output compared to the expected output",
            item3:"Developed an algorithm to check whether students failed or passed their course " +
            "using Python by iterating through data and calculating their grades to ensure the student met the requirements for passing the course",
            item4:"Designed and implemented a 12-bit hamming code encoder and decoder by taking the input string and turning it into its binary " +
            "form and adding parity bits and vice versa to ensure that data is properly transmitted over a network using C"
        },
        communication:{
            title:"Communication Skills",
            item1:"Wrote comments in programs to explain the design and functionality of the programs",
            item2:"Presented various promotional activities to customers who did not understand them using visual aids such as pamphlets to enhance customer experience",
            item3:"Fluent in French"
        }
    },
    Projects:{
        title:"APPLIED PROJECTS",
        game:{
            time: "August 2019 - Present",
            title:"Self-Directed Game",
            item1:"Researched the functionality of the unity engine to help conceptualize my game",
            item2:"Developing a detailed turn-based game using C# on the unity engine",
            item3:"Created a path finding algorithm so enemies can find the player using encapsulation to ensure when updating data " + 
            "that the path finding algorithm's data does not get wrongfully affected",
            item4:"Tested the path finding algorithm's run-time by printing the time it took to run and fixed it by removing redundant loops."
        },
        employeeDatabase:{
            time:"October 2019 - November 2019",
            title:"Student and Employee Database",
            item1:"Conceptualized how the program should work to figure out how to apply the correct data structure",
            item2:"Implemented a database that can store student's and employee's information using a linked list data " + 
            "structure with pointers to memory locations in C in order to add and remove data efficiently",
            item3:"Tested code by adding break points after every call to a function to ensure proper output"
        },
        fishing:{
            time:"September 2019 - October 2019",
            title:"Fishing Simulator",
            item1:"Visualized how the pointers to memory locations within the structures created would work to design a more efficient program",
            item2:"Coded structures to hold specific information about the fishers and the pond in C",
            item3:"Created a version of the program without pointers to compare run-times and added test code to examine the outputs",
            item4:"Tested code by generating random individuals with random incomes and examined the output"
        }
    },
    Work:{
        title:"WORK EXPERIENCE",
        loblaws:{
            time:"August 2018 - August 2019",
            workTitle:"Cashier",
            workDescription:"Loblaws, Ottawa, Ontario",
            item1:"Implemented an organization strategy to reduce the waiting time for customers",
            item2:"Trained a junior cashier all the methods to provide quality customer experience",
            item3:"Proposed adjustments to management to provide quality of life improvements for the employees"
        },
        CRA:{
            time:"May 2020 - April 2021",
            workTitle:"IT Analyst/Developer",
            workDescription:"Canada Revenue Agency, Ottawa, Ontario",
            item1:"Determined impacts of business requirements on the SAP system and wrote specificaions to meet those requirements",
            item2:"Performed system testing and implemented the system changes to the SAP system while following the CRA IT development standards and best practices",
            item3:"Trouble shooted system issues and helped resolve system problems"
        }
    },
    Volunteer:{
        title:"VOLUNTEER EXPERIENCE AND/OR EXTRACURRICULAR EXPERIENCE",
        CHEO:{
            time:"May 2013 - May 2017",
            workTitle:"CHEO Baseball player",
            item1:"Coordinated a charity drive for CHEO",
            item2:"Directed other volunteers to go to their designated positions to commence the charity drive",
            item3:"Assited the event orginazer by helping set up information booths",
            item4:"Instructed the information booth volunteers to give accurate information"
        },
        tree:{
            time:"September 2013 -September 2016",
            workTitle:"Tree Planter for Friends of the Environment",
            item1:"Collaborated with arborists and fellow volunteers to help plant trees at the correct locations"
        }
    }
};

let recordGrades = {
    header: {
        header1: "Course Number",
        header2: "Course Name",
        header3: "Letter Grade"
    },
    year1:{
        title: "Year One",
        course1:{
            courseCode:"BIOL 1902",
            courseName:"Natural History",
            grade:"A-"
        },
        course2:{
            courseCode:"BIOL 2903",
            courseName:"Natural History and Ecology of Ontario",
            grade:"B-"
        },
        course3:{
            courseCode:"COMP 1405",
            courseName:"Introduction to Computer Science 1",
            grade:"A"
        },
        course4:{
            courseCode:"COMP 1406",
            courseName:"Introduction to Computer Science 2",
            grade:"B+"
        },
        course5:{
            courseCode:"COMP 1805",
            courseName:"Discrete Structures 1",
            grade:"A-"
        },
        course6:{
            courseCode:"JAPA 1010",
            courseName:"First-Year Japanese 1",
            grade:"A-"
        },
        course7:{
            courseCode:"LING 1001",
            courseName:"Introduction to Linguistics 1",
            grade:"B"
        },
        course8:{
            courseCode:"MATH 1007",
            courseName:"Elementary Calculus 1",
            grade:"A-"
        },
        course9:{
            courseCode:"MATH 1104",
            courseName:"Linear Algebra for Engineering or Science",
            grade:"A"
        },
    },
    year2:{
        title: "Year Two",
        course1:{
            courseCode:"BUSI 1001",
            courseName:"Principles of Financial Accounting ",
            grade:"SAT"
        },
        course2:{
            courseCode:"CGSC 1001",
            courseName:"Mysteries of the Mind",
            grade:"SAT"
        },
        course3:{
            courseCode:"COMP 2401",
            courseName:"Introduction to Systems Programming",
            grade:"A"
        },
        course4:{
            courseCode:"COMP 2402",
            courseName:"Abstract Data Types and Algorithms",
            grade:"B"
        },
        course5:{
            courseCode:"COMP 3007",
            courseName:"Programming Paradigms",
            grade:"A"
        },
        course6:{
            courseCode:"COMP 2804",
            courseName:"Discrete Structures 2",
            grade:"A"
        },
        course7:{
            courseCode:"COMP 2406",
            courseName:"Fundamentals of Web Applications",
            grade:"A+"
        },
        course8:{
            courseCode:"JAPA 1020",
            courseName:"First-Year Japanese 2",
            grade:"A-"
        },
        course9:{
            courseCode:"MATH 2107",
            courseName:"Linear Algebra 2",
            grade:"A-"
        },
        course10:{
            courseCode:"PSYC 1001",
            courseName:"Introduction to Psychology 1",
            grade:"A"
        },
        course11:{
            courseCode:"STAT 2507",
            courseName:"Introduction to Statistical Modeling 1",
            grade:"A+"
        }
    },
    year3:{
        title: "Year Three",
        course1:{
            courseCode:"COMP 1601",
            courseName:"Introduction to Mobile Application Development",
            grade:"In Progress"
        },
        course2:{
            courseCode:"COMP 2404",
            courseName:"Introduction to Software Engineering",
            grade:"A+"
        },
        course3:{
            courseCode:"COMP 3000",
            courseName:"Operating Systems",
            grade:"In Progress"
        },
        course4:{
            courseCode:"COMP 3004",
            courseName:"Object-Oriented Software Engineering",
            grade:"In Progress"
        },
        course5:{
            courseCode:"COMP 3005",
            courseName:"Database Management Systems",
            grade:"In Progress"
        },
        course6:{
            courseCode:"PSYC 1002",
            courseName:"Introduction to Psychology 2",
            grade:"In Progress"
        }
    }
};

function init(){

    const title = document.createElement("h1");
    const image = document.createElement("img");
    const imageContainer = document.createElement("div");
    const buttonsDiv = document.createElement("div");
    
    
    title.className = "center white font-size-large container-fluid";
    title.id = "columnL_title";
    title.innerHTML = me.firstName + " " + me.lastName;
    title.style="margin-bottom:0px;"
    
    imageContainer.className = "center img-fluid";

    image.src = "./miscImages/profilepic1.png";
    image.style = "width:100%;";
    

    buttonsDiv.style = "margin-bottom: 50px;";
    
    imageContainer.appendChild(image);
    
    //BUTTONS
    const projectBtn = document.createElement("button");
    const homeBtn = document.createElement("button");
    const resumeBtn = document.createElement("button");
    

    homeBtn.className = "button center font white";
    homeBtn.onclick = function(){home();};
    homeBtn.innerHTML = "Home";
    buttonsDiv.appendChild(homeBtn);

    resumeBtn.className = "button center font white";
    resumeBtn.onclick = function(){resume();};
    resumeBtn.innerHTML = "Resume";
    buttonsDiv.appendChild(resumeBtn);
    
    projectBtn.className = "button center font white";
    projectBtn.onclick = function(){grades();};
    projectBtn.innerHTML = "Grades";
    buttonsDiv.appendChild(projectBtn);
    
    home();
}

//Home screen
function home(){

    const main = document.getElementById("main");
    resetmain(main);
    loadUpperDiv(main);
    loadGrid(main);
    
}
//Loads the upper div in the home page
function loadUpperDiv(main){

    const upperDiv = document.createElement("div");
    upperDiv.className = "upperDiv container-fluid";
    main.appendChild(upperDiv);

    //NAME
    const name = document.createElement("h");
    name.className = "center font white font-size-large";
    name.innerHTML = me.firstName + " " + me.lastName;
    upperDiv.appendChild(name);


    //JOB TITLE
    const jobTitle = document.createElement("p");
    jobTitle.className = "center font font-size-small";
    jobTitle.style = "margin-top: 0px;";
    jobTitle.innerHTML = job.title;
    name.appendChild(jobTitle);

    
    //JOB DESCRIPTION
    
    const jobDesc = document.createElement("p");
    jobDesc.className = "font white center font-size-small";
    jobDesc.style = "text-align:center; margin-top:0px;margin-top:10px;";
    jobDesc.innerHTML = job.description + "<br>" + "<br>";
    upperDiv.appendChild(jobDesc);
    
}

function loadGrid(main)
{
    const container = document.createElement("div");
    container.className = "container-fluid paddings";
    main.appendChild(container);

    
    const text = document.createElement("p");
    text.innerHTML = "Programming Experience";
    text.className = "white center gridTitle font-size-large";
    container.appendChild(text);

    const keys = Object.entries(langs);
    const langRow = document.createElement("div");
        langRow.className = "row";
    for(let i in keys) {
        addRowItem(langRow,keys[i][1].title,keys[i][1].text,keys[i][1].image);
    }
    container.appendChild(langRow);
    
}

function addRowItem(row,title,text,img){
    const container = document.createElement("div");
    container.className = "col-sm-4";

    const image = document.createElement("img");
    image.src = img.src;
    image.style = "max-width:50px; max-height: 50px;";
    image.className = "img-fluid center";

    const itemTitle = document.createElement("h");
    itemTitle.innerHTML = title;
    itemTitle.className = "center font-size-medium white";

    const item = document.createElement("p");
    item.innerHTML = text;
    item.className = "center font-size-small white gridItem";

    container.appendChild(image);
    container.appendChild(itemTitle);
    container.appendChild(item);

    row.appendChild(container);
}

//Resume Screen
function resume(){
    const main = document.getElementById("main");
    resetmain(main);
    loadResumeHeader(main);
    const container = document.createElement("div");
    container.className = "page";
    loadResumemain(container);
    main.appendChild(container);

}

//loads the name, location, phone number and email (header from resume in word doc)
function loadResumeHeader(main){
    const title = document.createElement("h");
    title.innerHTML = me.firstName + " " + me.lastName;
    title.className = "center font white font-size-large";
    title.style = "margin-bottom:0px;";
    main.appendChild(title);
    const info = document.createElement("p");
    info.innerHTML = me.city + ", " + me.province + ", " + me.postalCode + "<br>" + me.number + " | " + me.email;
    info.className = "center font white font-size-small";
    info.style = "margin-top:0px; margin-right:10px; margin-left:10px;";
    main.appendChild(info);
}

function loadResumemain(main){
    const keys = Object.entries(cv);
    for(let i = 0; i<keys.length; i++) {
        const info = Object.entries(keys[i][1]);
        for(let j = 0; j<info.length;j++) {
            if(info[j][0] == "title"){
                const backDiv = document.createElement("div");
                backDiv.style = "background-color: rgb(28, 28, 28);";

                const title = document.createElement("h1");
                title.innerHTML = info[j][1] + "<br>";
                title.className = "white font font-size-small";
                title.style = " margin-left: 4%;";
                backDiv.appendChild(title);
                main.appendChild(backDiv);
            }else if(info[j][0] == "time"){
                const time = document.createElement("p");
                time.innerHTML = info[j][1];
                time.style = "margin-bottom:10px; margin-top:0px;  float:right;text-align: right; margin-right:10%;";
                time.className = "white font font-size-small";
                main.appendChild(time);
            }
            else if(typeof info[j][1] == "string") {
                const item = document.createElement("p");
                item.style = "margin-left: 4%; margin-bottom:0px; margin-top:0px; margin-left: 4%;";
                item.className = "white font font-size-small";
                item.innerHTML = info[j][1];
                main.appendChild(item);
            }else{
                const list = Object.entries(info[j][1]);
                const unordered = document.createElement("ul");
                unordered.style = "margin-bottom:1vw; margin-left: 1.5%; margin-right:4%;";
                
                let listItem;
                for (let k in list) { 
                    if(list[k][0] == "title"){
                        listItem = document.createElement("h3");
                        listItem.style = "margin-bottom:10px; margin-top:0px; width:75%;";
                    }else if(list[k][0] == "time"){
                        listItem = document.createElement("p");
                        listItem.style = "margin-bottom:10px; margin-top:0px; text-align: right; margin-right:10%; float:right;";
                    }else if(list[k][0] == "workTitle"){
                        listItem = document.createElement("h3");
                        listItem.style = "margin-bottom:0px; margin-top:0px; width:75%;";
                    }
                    else if(list[k][0] == "workDescription") {
                        listItem = document.createElement("p");
                        listItem.style = "margin-bottom:10px; margin-top:0px; width:75%;";
                    }else{
                        listItem = document.createElement("li");
                        listItem.style = "margin-left: 3%;margin-bottom:10px; margin-top:0px;";
                    }
                    listItem.innerHTML = list[k][1];
                    listItem.className = "white font font-size-small";
                    unordered.appendChild(listItem);
                }
                main.appendChild(unordered);
            }
        }
        
    }
}

//Record of grades screen
function grades(){
    const main = document.getElementById("main");
    resetmain(main);
    loadGradesHeader(main);
    loadGradesGrid(main);
}

function loadGradesHeader(main){
    loadResumeHeader(main);
    const backDiv = document.createElement("div");
    backDiv.style = "background-color: rgb(28, 28, 28);";
    main.appendChild(backDiv);
    const header = document.createElement("p");
    header.className = "font white font-size-small";
    header.style = "margin-left:20px;";
    header.innerHTML =  "<br>" + me.firstName + " " + me.lastName + "<br>" + me.school + "<br>" + me.program + ", " + me.year + " Standing" + "<br>" + me.stream + ", " + me.minor + 
    "<br>" + "<br>" + "Cumulative Grade Point Average: " + me.GPA + "/12(" + me.letterGrade + ")" + "<br>" + "Number of Academic(4 month) Terms Completed: " + me.schoolTermsCompleted + "<br>" + 
    "Co-op(4 month) Terms Completed: " + me.workTermsCompleted + "<br>" + "Graduation Date: " + me.Graduation + "<br>" + "<br>";
    backDiv.appendChild(header);
}

function loadGradesGrid(main){
    const grid = document.createElement("div");
    grid.className = "grid-container";

    const items = Object.entries(recordGrades);

    const headerObj = items[0][1];
    
    for(var key in headerObj)
    {
        const backgroundDiv = document.createElement("div");
        backgroundDiv.className = "gridHeader";

        const header = document.createElement("p");
        header.innerHTML = headerObj[key];
        header.className = "font white center font-size-small margins";

        backgroundDiv.appendChild(header);

        grid.appendChild(backgroundDiv);
    }
    for(let j = 1; j< items.length; j++)
    {
        const mainObj = items[j];
        for(let i =1; i< mainObj.length;i++)
        {
            const obj = mainObj[i];
            for(let item in obj)
            {
                if(item == "title")
                {
                    const backgroundDiv = document.createElement("div");
                    backgroundDiv.className = "gridHeader gridTitle";

                    const title = document.createElement("p");
                    title.innerHTML = obj[item];
                    title.className = "font white center font-size-small margins";
                    title.style = "margin-left:1vw";
                    backgroundDiv.appendChild(title);
                    grid.appendChild(backgroundDiv);
                }else{
                    
                    const backgroundDiv = document.createElement("div");
                    backgroundDiv.className = "gridHeader";
                    const courseCode = document.createElement("p");
                    courseCode.className = "font white center font-size-small margins"
                    courseCode.innerHTML = obj[item].courseCode;
                    backgroundDiv.appendChild(courseCode);
                    
                    const backgroundDiv1 = document.createElement("div");
                    backgroundDiv1.className = "gridHeader";
                    const courseName = document.createElement("p");
                    courseName.className = "font white center font-size-small margins"
                    courseName.innerHTML = obj[item].courseName;
                    backgroundDiv1.appendChild(courseName);

                    const backgroundDiv2 = document.createElement("div");
                    backgroundDiv2.className = "gridHeader";
                    const grade = document.createElement("p");
                    grade.className = "font white center font-size-small margins"
                    grade.innerHTML = obj[item].grade;
                    backgroundDiv2.appendChild(grade);


                    grid.appendChild(backgroundDiv);
                    grid.appendChild(backgroundDiv1);
                    grid.appendChild(backgroundDiv2);

                }
            }
        }
    }

    main.appendChild(grid);
}

//resets right column 
function resetmain(main){
    while(main.firstChild){
        main.removeChild(main.lastChild);
    }
}