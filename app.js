var QueArray = [
    {
      Question: "MS word is software of ____",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      Question: "MS Word is ____ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      Question:
        "_____ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ];

  

  // function renderList(e){
  //   var render = document.getElementById("render");
  //   var ren = `question#${QueCount+1}/${QueArray.length}`;
  //   render.innerHTML = ren
  // }

  function renderList(e){
    var render = document.getElementById("render");
      render.innerHTML = QueCount + 1
  }


function showquestion(e){
  // show question
  var questionsText = document.getElementById('questionsText');
  questionsText.innerHTML = QueArray[e].Question;
 
// show Options
  var Option = document.getElementsByClassName('option');
  for(var i = 0; i < Option.length; i++){
    Option[i].innerHTML = QueArray[e].Options[i]
  }  
}

var QueCount = 0;
var score = 0;

function next(){
  QueCount++;
  renderList(QueCount)
  CorrectAns(QueCount);
  showquestion(QueCount);
  removeActive();
}

function putActive(e){
  removeActive()
  e.classList.add("active")
}

function removeActive(){
  var active = document.getElementsByClassName("active");
for(var i = 0; i < active.length; i++){
  active[i].classList.remove("active")
}
}


var score = 0;
var Percentage = 0;
function CorrectAns(e){
  var active = document.getElementsByClassName("active");
  var marks = document.getElementById("marks");
  var Percentage = document.getElementById("Percentage")

  for(var i = 0; i < QueArray.length; i++){
    // console.log('active.length', i,QueArray.length)
    if(active[0].innerHTML == QueArray[i].CorrectAns){
      marks.innerHTML = (score  = score + 1);
      Percentage.innerHTML = `${(score * 10)}${"%"}`
      
    }else if(active[0].innerHTML == false){
      alert("no")
      // marks.innerHTML = (score  = score + 0);
      // Percentage.innerHTML = `${(score * 0)}${"%"}`
    }
  }

}

