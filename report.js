//todos
//use radio to change className of child
//hide radio
//move slug change into function -- add button to run function

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// make sure DOM ready
r(function(){
    // alert('DOM Ready!');
    const dropdowndiv = document.querySelectorAll(".mydropdown");

    //generate dropdownmenu
    const generateMenu = function (e) {
        var mydiv = e;
        var aTag = document.createElement('a');
        aTag.className = "makered";
        aTag.innerText = "red";
        mydiv.appendChild(aTag);

        var mydiv = e;
        var aTag = document.createElement('a');
        aTag.className = "makeyellow";
        aTag.innerText = "yellow";
        mydiv.appendChild(aTag);

        var mydiv = e;
        var aTag = document.createElement('a');
        aTag.className = "makegreen";
        aTag.innerText = "green";
        mydiv.appendChild(aTag);
    }

    for (const div of dropdowndiv) {
        generateMenu(div);
    }

    //Get DOM elements to add event listeners
    const dropdownmenu = document.querySelectorAll(".dropbtn");
    const redbuttons = document.querySelectorAll(".makered");
    const yellowbuttons = document.querySelectorAll(".makeyellow");
    const greenbuttons = document.querySelectorAll(".makegreen");

   //toggle menu
   for (const menu of dropdownmenu) {
        menu.addEventListener('click', function(e) {
            e.target.nextElementSibling.classList.toggle("show");
        })
    }

    //change class color
    for (const button of redbuttons) {
        button.addEventListener('click', function(event) {   
            const prevSib = this.parentElement.previousElementSibling;
            prevSib.className = "red dropbtn";
            console.log('prevSib',prevSib)
        })
    }

    for (const button of yellowbuttons) {
        button.addEventListener('click', function(event) {
            const prevSib = this.parentElement.previousElementSibling;
            prevSib.className = "yellow dropbtn";
            console.log('prevSib',prevSib)
        })
    }

    for (const button of greenbuttons) {
        button.addEventListener('click', function(event) {
            const prevSib = this.parentElement.previousElementSibling;
            prevSib.className = "green dropbtn";
            console.log('prevSib',prevSib)
        })
    }
    
});

const slug = 'mirrorfitness'

const unresolvedIssues = `https://sentry.io/organizations/${slug}/issues/`
const assignedIssues= `https://sentry.io/organizations/zapier-1/issues/?query=is%3Aunresolved+is%3Aassigned&statsPeriod=14d`

document.getElementById("unresolved-issues").href = unresolvedIssues;
document.getElementById("assigned-issues").href = assignedIssues;

//change classname
//target first span of "this"?
// document.getElementById("first").className = "yellow";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function toggleShow() {
//     document.getElementById("dropdowndiv").classList.toggle("show");
//     // document.getElementById("dropdowndiv").className="dropdown-content show"
// }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}
