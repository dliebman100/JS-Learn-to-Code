"use strict";
let simpleLeagues = [{
        leagueCode: "PL",
        league: "Premier League",
        description: "Top level English football",
        teams: ["Manchester United", "Arsenal", "Liverpool", "Manchester City"]
    },
    {
        leagueCode: "LL",
        league: "La Liga",
        description: "Top level Spanish football",
        teams: ["Real Madrid", "Barcelona", "Valencia", "Atletico Madrid"]
    },
    {
        leagueCode: "SA",
        league: "Serie A",
        description: "Top level Italian football",
        teams: ["AC Milan", "Inder Milan", "Juventus"]
    }
];
window.onload = function() {
    //load leaguesDropdown when page first loads
    loadLeaguesDropdown();

    //connect onchange event handler for the leagues dropdown
    const leagueDropdown = document.getElementById("leagueDropdown");
    leagueDropdown.onchange = onLeagueDropdownChanged;

    //connect onchange event handler for the teams dropdown
    const teamDropdown = document.getElementById("teamDropdown");
    teamDropdown.onchange = onTeamDropdownChanged;
}

function loadLeaguesDropdown() {
    //find the league dropdown which is accessed thru that variable
    const leagueDropdown = document.getElementById("leagueDropdown");

    //Add a "Select one..." option
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    leagueDropdown.appendChild(selectOneOption);

    //loop thru simpleLeagues array to create an <option> for each league
    for (let i = 0; i < simpleLeagues.length; i++) {
        //create an <option> element that needds text
        let theOption = document.createElement("option");
        theOption.textContent = simpleLeagues[i].league;
        theOption.value = simpleLeagues[i].leagueCode;
        //append whatever is in the option
        leagueDropdown.appendChild(theOption);
    }    
    addSelectLeagueFirstOptionToTeamDropdown()
}

function onLeagueDropdownChanged() {
    //find the league AND team dropdown 
    const leagueDropdown = document.getElementById("leagueDropdown");
    const teamDropdown = document.getElementById("teamDropdown");

    //remove the previous teams from team dropdown
    teamDropdown.options.length = 0;

    //find the league dropdown selection
    let selectedLeagueCode = leagueDropdown.value;

    //find did they pick "select one" option
    if (selectedLeagueCode == "") {
        addSelectLeagueFirstOptionToTeamDropdown()
    }
    //use the selectedLeagueCode to find the matching league from the array
    let matchingLeague = simpleLeagues.find(arrayElement => arrayElement.leagueCode == selectedLeagueCode);

    //Add a "Select one..." option
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    teamDropdown.appendChild(selectOneOption);

    //iterate thru the teams in matchingLeague and create <option> elements for each
    for (let i = 0; i < matchingLeague.teams.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingLeague.teams[i];
        teamDropdown.appendChild(theOption);
    }
}

function onTeamDropdownChanged() {
    //find the league AND team dropdown 
    const leagueDropdown = document.getElementById("leagueDropdown");
    const teamDropdown = document.getElementById("teamDropdown");

    //erase previous teams message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    //get the selectedTeam
    let selectedTeam = teamDropdown.value;
    //if "Select one..." is picked exit function
    if (selectedTeam == "") {
        return;
    }

    //get the selectedLeague
    let selectedLeagueIndex = leagueDropdown.selectedIndex;
    let selectedLeague = leagueDropdown.options[selectedLeagueIndex].text;

    //build a message w/team AND league info
    //display in <p>
    let message = "Team: " + selectedTeam + "<br>" +
        "League: " + selectedLeague;
    messagePara.innerHTML = message;
}

function addSelectLeagueFirstOptionToTeamDropdown() {
    const teamDropdown = document.getElementById("teamDropdown");

     //Add a "Select one..." option
     let selectOneOption = document.createElement("option");
     selectOneOption.textContent = "Select one...";
     selectOneOption.value = "";
     teamDropdown.appendChild(selectOneOption);
}