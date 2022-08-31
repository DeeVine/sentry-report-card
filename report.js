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

    const generateLinks = function (slug) {
        const unresolvedIssues = `https://sentry.io/organizations/${slug}/issues/?statsPeriod=30d`
        const assignedIssues= `https://sentry.io/organizations/${slug}/issues/?query=is%3Aunresolved+is%3Aassigned&statsPeriod=14d`
        const transactions = `https://sentry.io/organizations/${slug}/performance/?landingDisplay=frontend_pageload&query=&sort=-user_misery&statsPeriod=30d`
        const releases = `https://sentry.io/organizations/${slug}/releases/?statsPeriod=30d`
        const crashfreesessions = `https://sentry.io/organizations/${slug}/projects/explore-ssr/?project=5270315&statsPeriod=30d`
        const crashfreesessions2 = `https://sentry.io/organizations/${slug}/projects/zapier/?project=47546`
        const issueowners = `https://sentry.io/settings/${slug}/projects/explore-ssr/ownership/`
        const sourcemaps = `https://sentry.io/settings/${slug}/projects/explore-ssr/source-maps/`
        const sdks = `https://sentry.io/organizations/${slug}/discover/results/?field=project&field=sdk.version&field=sdk.name&field=count%28%29&name=All+Events&query=sdk.name%3A%2Araven%2A&sort=-count&statsPeriod=30d&yAxis=count%28%29`

        document.getElementById("unresolved-issues").href = unresolvedIssues;
        document.getElementById("assigned-issues").href = assignedIssues;
        document.getElementById("transactions").href = transactions;
        document.getElementById("releases").href = releases;
        document.getElementById("crashfreesessions").href = crashfreesessions;
        document.getElementById("crashfreesessions2").href = crashfreesessions2;
        document.getElementById("issueowners").href = issueowners;
        document.getElementById("sourcemaps").href = sourcemaps;
        document.getElementById("sdks").href = sdks;
    }

    const generatebutton = document.getElementById("generate-links");
    // console.log('generatebutton',generatebutton);
    generatebutton.addEventListener('click', function(){
        const myslug = document.getElementById("enterslug").value;
        generateLinks(myslug);
    });

});


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
