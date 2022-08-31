//todos
//use radio to change className of child
//hide radio
//move slug change into function -- add button to run function

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// make sure DOM ready
r(function(){
    // alert('DOM Ready!');

    // document.getElementById('testred').onclick = makeRed;
    const redbuttons = document.querySelectorAll(".makered");

    for (const button of redbuttons) {
        button.addEventListener('click', function(event) {

            //change class of span
            const prevSib = this.parentElement.previousElementSibling;
            prevSib.className = "warning dropbtn";
            console.log('prevSib',prevSib)
        })
    }
});

const slug = 'mirrorfitness'

const unresolvedIssues = `https://sentry.io/organizations/${slug}/issues/`
const assignedIssues= `<a href=https://sentry.io/organizations/zapier-1/issues/?query=is%3Aunresolved+is%3Aassigned&statsPeriod=14d>stats</a>`

document.getElementById("unresolved-issues").href = unresolvedIssues;
document.getElementById("assigned-issues").href = assignedIssues;

//change classname
//target first span of "this"?
// document.getElementById("first").className = "yellow";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleShow() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.getElementById("myDropdown").className="dropdown-content show"
}

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



function makeyellow() {
    document.getElementById('first').className = "yellow dropbtn";
}
function makegreen() {
    document.getElementById('first').className = "green dropbtn";
}

//set class for span
//need to target "this" instead of getElementById
const prevSib = document.getElementById("myDropdown").previousElementSibling.id;
console.log('prevSib',prevSib)