let job = {
    title:"IT Analyst/Developer",
    image: "./miscImages/CRA.jpg",
    description: "As an IT Analyst/Developer for the Canada Revenue Agency, I had the opportunity to work with the SAP system, learn about the IT project development process and cycle, " +
    "and gain experience with government and CRA's software development precesses and standards. I also experienced all phases of systems development, including activities and deliverables.",
    employer: "Canada Revenue Agency"
};

let langs = {
    html5:{
        image: {
            src:"./logos/html5-logo.svg"
        },
        text: "I have designed this website in HTML5"
    },
    python:{
        image: {
            src:"./logos/python-logo.svg"
        },
        text: "I have programmed in python programs that would handle file I/O."
    },
    javascript:{
        image:{
            src:"./logos/Javascript-logo.svg"
        },
        text:"Developed a restaurant website that could take in and send orders as well as register and save new users in a database. This website is also made with javascript"
    },
    C:{
        image:{
            src:"./logos/C-logo.svg"
        },
        text:"Created programs that took advangtade of multithreading to reduce computing times."
    },
    Cpp:{
        image:{
            src:"./logos/Cpp-logo.svg"
        },
        text:"I have experience coding C++ on the linux operating system using concepts such as: polymorphism, encapsulation, inheritance, friendship, overloading, files, streams, exception handling, and template classes"
    },
    Csharp:{
        image:{
            src:"./logos/Csharp-logo.png"
        },
        text:"I have knowledge on the uses and implementation of asynchronous programming, delegates, and all OO concepts. I used this language to program for game development purposes with the Unity game engine."
    },
    Java:{
        image:{
            src:"./logos/java-logo.svg"
        },
        text:"I have experience coding in Java"
    },
    prolog:{
        image:{
            src:"./logos/swi-prolog-logo.svg"
        },
        text:"I have experience coding in swi prolog"
    },
    Scheme:{
        image:{
            src:"./logos/scheme-logo.png"
        },
        text:"I have experience coding in scheme"
    },
    CSS:{
        image:{
            src:"./logos/CSS-logo.svg"
        },
        text:"Developed websites using stylesheets in css. The style for this website is made with css and bootstrap to create a responsive design."
    },
    Nodejs:{
        image:{
            src:"./logos/nodejs-logo.png"
        },
        text:"I have experience coding with Nodejs"
    },
    Mongodb:{
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
    GPA:"10.37",
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
            item1:"Experience programming in Java, Python, C#, C, Visual Studio Code, Scheme, JavaScript, HTML, CSS, Node.js, and MongoDB",
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
            time:"May 2020 - April 2020",
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
            courseName:"Natural History",
            grade:"A-"
        },
        course9:{
            courseCode:"MATH 2107",
            courseName:"Linear Algebra 2",
            grade:"A-"
        },
        course10:{
            courseCode:"STAT 2507",
            courseName:"Introduction to Statistical Modeling 1",
            grade:"A+"
        }
    }
};

function init(){

    let leftColumn = document.getElementById("leftColumn");
    let title = document.createElement("h1");
    let image = document.createElement("img");
    let imageContainer = document.createElement("div");
    let intro = document.createElement("p");
    let buttonsDiv = document.createElement("div");
    
    
    title.className = "center white font-size-large container-fluid";
    title.id = "columnL_title";
    title.innerHTML = me.firstName + " " + me.lastName;
    title.style="margin-bottom:0px;"
    
    imageContainer.className = "center img-fluid";

    image.src = "./miscImages/profilepic1.png";
    image.style = "width:100%;";
    

    buttonsDiv.style = "margin-bottom: 50px;";
    
    
    leftColumn.appendChild(title);
    imageContainer.appendChild(image);
    leftColumn.appendChild(imageContainer);
    leftColumn.appendChild(buttonsDiv);
    
    //BUTTONS
    let projectBtn = document.createElement("button");
    let homeBtn = document.createElement("button");
    let resumeBtn = document.createElement("button");
    

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

    let rightColumn = document.getElementById("rightColumn");
    resetRightColumn(rightColumn);
    loadUpperDiv(rightColumn);
    loadGrid(rightColumn);
    
}
//Loads the upper div in the home page
function loadUpperDiv(rightColumn){

    let upperDiv = document.createElement("div");
    upperDiv.className = "upperDiv container-fluid";
    rightColumn.appendChild(upperDiv);

    //NAME
    let name = document.createElement("h");
    name.className = "center font white font-size-large";
    name.innerHTML = me.firstName + " " + me.lastName;
    upperDiv.appendChild(name);


    //JOB TITLE
    let jobTitle = document.createElement("p");
    jobTitle.className = "center font font-size-small";
    jobTitle.style = "margin-top: 0px;";
    jobTitle.innerHTML = job.title;
    name.appendChild(jobTitle);

    
    //JOB DESCRIPTION
    
    let jobDesc = document.createElement("p");
    jobDesc.className = "font white center font-size-small";
    jobDesc.style = "text-align:center; margin-top:0px;margin-top:10px;";
    jobDesc.innerHTML = job.description + "<br>" + "<br>";
    upperDiv.appendChild(jobDesc);
    
}

function loadGrid(rightColumn)
{
    let container = document.createElement("div");
    container.className = "container-fluid";
    rightColumn.appendChild(container);

    
    let text = document.createElement("p");
    text.innerHTML = "Programming Experience";
    text.className = "white center gridTitle font-size-large";
    container.appendChild(text);

    let keys = Object.entries(langs);
    let langRow = document.createElement("div");
        langRow.className = "row";
    for(let i in keys) {
        addRowItem(langRow,keys[i][1].text,keys[i][1].image);
    }
    container.appendChild(langRow);
    
}

function addRowItem(row,text,img){
    let container = document.createElement("div");
    container.className = "col-sm-4";

    let image = document.createElement("img");
    image.src = img.src;
    image.style = "max-width:50px; max-height: 50px;";
    image.className = "img-fluid center";

    let item = document.createElement("p");
    item.innerHTML = text;
    item.className = "center font-size-small white gridItem";

    container.appendChild(image);
    container.appendChild(item);

    row.appendChild(container);
}

//Resume Screen
function resume(){
    let rightColumn = document.getElementById("rightColumn");
    resetRightColumn(rightColumn);
    loadResumeHeader(rightColumn);
    loadResumeBody(rightColumn);

}

//loads the name, location, phone number and email (header from resume in word doc)
function loadResumeHeader(rightColumn){
    let title = document.createElement("h");
    title.innerHTML = me.firstName + " " + me.lastName;
    title.className = "center font white font-size-large";
    title.style = "margin-bottom:0px;";
    rightColumn.appendChild(title);
    let info = document.createElement("p");
    info.innerHTML = me.city + ", " + me.province + ", " + me.postalCode + "<br>" + me.number + " | " + me.email;
    info.className = "center font white font-size-small";
    info.style = "margin-top:0px; margin-right:10px; margin-left:10px;";
    rightColumn.appendChild(info);
}

function loadResumeBody(rightColumn){
    let keys = Object.entries(cv);
    for(let i = 0; i<keys.length; i++) {
        let info = Object.entries(keys[i][1]);
        for(let j = 0; j<info.length;j++) {
            if(info[j][0] == "title"){
                let backDiv = document.createElement("div");
                backDiv.style = "background-color: rgb(28, 28, 28);";

                let title = document.createElement("h1");
                title.innerHTML = info[j][1] + "<br>";
                title.className = "white font font-size-small";
                title.style = " margin-left: 4%;";
                backDiv.appendChild(title);
                rightColumn.appendChild(backDiv);
            }else if(info[j][0] == "time"){
                let time = document.createElement("p");
                time.innerHTML = info[j][1];
                time.style = "margin-bottom:10px; margin-top:0px;  float:right;text-align: right; margin-right:10%;";
                time.className = "white font font-size-small";
                rightColumn.appendChild(time);
            }
            else if(typeof info[j][1] == "string") {
                let item = document.createElement("p");
                item.style = "margin-left: 4%; margin-bottom:0px; margin-top:0px; margin-left: 4%;";
                item.className = "white font font-size-small";
                item.innerHTML = info[j][1];
                rightColumn.appendChild(item);
            }else{
                let list = Object.entries(info[j][1]);
                let unordered = document.createElement("ul");
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
                rightColumn.appendChild(unordered);
            }
        }
        
    }
}

//Record of grades screen
function grades(){
    let rightColumn = document.getElementById("rightColumn");
    resetRightColumn(rightColumn);
    loadGradesHeader(rightColumn);
    loadGradesGrid(rightColumn);
}

function loadGradesHeader(rightColumn){
    loadResumeHeader(rightColumn);
    let backDiv = document.createElement("div");
    backDiv.style = "background-color: rgb(28, 28, 28);";
    rightColumn.appendChild(backDiv);
    let header = document.createElement("p");
    header.className = "font white font-size-small";
    header.style = "margin-left:20px;";
    header.innerHTML =  "<br>" + me.firstName + " " + me.lastName + "<br>" + me.school + "<br>" + me.program + ", " + me.year + " Standing" + "<br>" + me.stream + ", " + me.minor + 
    "<br>" + "<br>" + "Cumulative Grade Point Average: " + me.GPA + "/12(" + me.letterGrade + ")" + "<br>" + "Number of Academic(4 month) Terms Completed: " + me.schoolTermsCompleted + "<br>" + 
    "Co-op(4 month) Terms Completed: " + me.workTermsCompleted + "<br>" + "Graduation Date: " + me.Graduation + "<br>" + "<br>";
    backDiv.appendChild(header);
}

function loadGradesGrid(rightColumn){
    let grid = document.createElement("div");
    grid.className = "grid-container";

    let items = Object.entries(recordGrades);

    let headerObj = items[0][1];
    
    for(var key in headerObj)
    {
        let backgroundDiv = document.createElement("div");
        backgroundDiv.className = "gridHeader";

        let header = document.createElement("p");
        header.innerHTML = headerObj[key];
        header.className = "font white center font-size-small";

        backgroundDiv.appendChild(header);

        grid.appendChild(backgroundDiv);
    }
    for(let j = 1; j< items.length; j++)
    {
        let bodyObj = items[j];
        for(let i =1; i< bodyObj.length;i++)
        {
            let obj = bodyObj[i];
            for(let item in obj)
            {
                if(item == "title")
                {
                    let backgroundDiv = document.createElement("div");
                    backgroundDiv.className = "gridHeader gridTitle";

                    let title = document.createElement("p");
                    title.innerHTML = obj[item];
                    title.className = "font white center font-size-small";
                    title.style = "margin-left:1vw";
                    backgroundDiv.appendChild(title);
                    grid.appendChild(backgroundDiv);
                }else{
                    
                    let backgroundDiv = document.createElement("div");
                    backgroundDiv.className = "gridHeader";
                    let courseCode = document.createElement("p");
                    courseCode.className = "font white center font-size-small"
                    courseCode.innerHTML = obj[item].courseCode;
                    backgroundDiv.appendChild(courseCode);
                    
                    let backgroundDiv1 = document.createElement("div");
                    backgroundDiv1.className = "gridHeader";
                    let courseName = document.createElement("p");
                    courseName.className = "font white center font-size-small"
                    courseName.innerHTML = obj[item].courseName;
                    backgroundDiv1.appendChild(courseName);

                    let backgroundDiv2 = document.createElement("div");
                    backgroundDiv2.className = "gridHeader";
                    let grade = document.createElement("p");
                    grade.className = "font white center font-size-small"
                    grade.innerHTML = obj[item].grade;
                    backgroundDiv2.appendChild(grade);


                    grid.appendChild(backgroundDiv);
                    grid.appendChild(backgroundDiv1);
                    grid.appendChild(backgroundDiv2);

                }
            }
        }
    }

    rightColumn.appendChild(grid);
}

//resets right column 
function resetRightColumn(rightColumn){
    while(rightColumn.firstChild){
        rightColumn.removeChild(rightColumn.lastChild);
    }
}