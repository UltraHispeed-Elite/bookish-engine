var name, user,  level, levelTotal;

var background;

var proficiencyStat = 0;

var weight;

var Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard;

var classLevel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var STRSaving = 0;
var DEXSaving = 0;
var CONSaving = 0;
var INTSaving = 0;
var WISSaving = 0;
var CHASaving = 0;

var startingClass;

function setName(){
 name = document.getElementById("Name").value
    console.log(name);
}

function levelSetup(classVersion) {
    let classType = classVersion;
    level = Barbarian + Bard + Cleric + Druid + Fighter + Monk + Paladin + Ranger + Rogue + Sorcerer + Warlock + Wizard;

        console.log(level);

        levelTotal = level;


    if(levelTotal<20) {
        switch(classType) {
            case 1:
                Barbarian++;
                
                document.getElementById("Barbarian").innerText = Barbarian;
            break;
            
            case 2:
                Bard++;

                document.getElementById("Bard").innerText = Bard;
            break;

            case 3:
                Cleric++;

                document.getElementById("Cleric").innerText = Cleric;
            break;
            
            case 4:
                Druid++;

                document.getElementById("Druid").innerText = Druid;
            break;

            case 5:
                Fighter++;

                document.getElementById("Fighter").innerText = Fighter;
            break;

            case 6:
                Monk++;

                document.getElementById("Monk").innerText = Monk;
            break;

            case 7:
                Paladin++;

                document.getElementById("Paladin").innerText = Paladin;
            break;

            case 8:
                Ranger++;

                document.getElementById("Ranger").innerText = Ranger;
            break;

            case 9:
                Rogue++;

                document.getElementById("Rogue").innerText = Rogue;
            break;

            case 10:
                Sorcerer++;

                document.getElementById("Sorcerer").innerText = Sorcerer;
            break;

            case 11:
                Warlock++;

                document.getElementById("Warlock").innerText = Warlock;
            break;

            case 12:
                Wizard++;

                document.getElementById("Wizard").innerText = Wizard;
            break;
        }

        level = Barbarian + Bard + Cleric + Druid + Fighter + Monk + Paladin + Ranger + Rogue + Sorcerer + Warlock + Wizard;

        console.log(level);

        levelTotal = level;

        proficiency();
        skillSet();

        document.getElementById("Total").innerText = levelTotal;
    }else {
        alert("youre done");
    }
}

function playerLevel() {
    for(let i = 0; i<12; i++){
        switch(i){
            case 0:
                Barbarian = 0;
               // level += Barbarian;
            break;

            case 1:
                Bard = 0;
               // level += Bard;
            break;

            case 2:
                Cleric = 0;
               // level += Cleric;
            break;

            case 3:
                Druid = 0;
               // level += Druid;
            break;

            case 4:
                Fighter = 0;
               // level += Fighter;
            break;

            case 5:
                Monk = 0;
              //  level += Monk;
            break;

            case 6:
                Paladin = 0;
               // level += Paladin;
            break;

            case 7:
                Ranger = 0;;
                //level += Ranger;
            break;

            case 8:
                Rogue = 0;
                //level += Rogue;
            break;

            case 9:
                Sorcerer = 0;
               // level += Sorcerer;
            break;

            case 10:
                Warlock = 0;
               // level += Warlock;
            break;

            case 11:
                Wizard = 0;
                //level += Wizard
            break;
        }
    }
}

function youFat() {
    var raceVal = document.getElementById("Species").value;

    var weight;

    if(raceVal === "Dragonborn") {
        weight = 175
        weight *= Math.floor(Math.random() * 10) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Dwarf") {
        weight = 130;
        weight *= Math.floor(Math.random() * 10) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Elf") {
        weight = 100;
        weight *= Math.floor(Math.random() * 4) + 1;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Gnome") {
        weight = 35;
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Half-Elf") {
        weight = 110;
        weight *= Math.floor(Math.random() * 6) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Halfling") {
        weight = 35;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Half-Orc"){
        weight = 140;
        weight *= Math.floor(Math.random() * 10) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Human") {
        weight = 110;
        weight *= Math.floor(Math.random() * 6) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }else if(raceVal === "Tiefling") {
        weight = 110;
        weight *= Math.floor(Math.random() * 6) + 2;
        console.log(weight);
        document.getElementById("Weight").innerText = weight + " Lbs";
    }
}

function proficiency() {
    switch(level) {
        case 1:
            proficiencyStat = 2;

            if(Barbarian === 1){
                startingClass = "Barbarian"
            }else if(Bard === 1) {
                startingClass = "Bard"
            }else if(Cleric === 1) {
                startingClass = "Cleric";
            }else if(Druid === 1) {
                startingClass = "Druid"
            }else if(Fighter === 1) {
                startingClass = "Fighter";
            }else if(Monk === 1) {
                startingClass = "Monk"
            }else if(Paladin === 1) {
                startingClass = "Paladin"
            }else if(Ranger === 1) {
                startingClass = "Ranger";
            }else if(Rogue === 1) {
                startingClass = "Rogue";
            }else if(Sorcerer === 1) {
                startingClass = "Sorcerer";
            }else if(Warlock === 1) {
                startingClass = "Warlock";
            }else if(Wizard === 1) {
                startingClass = "Wizard";
            }

            SavingThrows(startingClass);
            console.log(startingClass);
        break;
        case 2:
            proficiencyStat = 2;
        break;
        case 3:
            proficiencyStat = 2;
        break;
        case 4:
            proficiencyStat = 2;
        break;

        case 5:
            proficiencyStat = 3;
            SavingThrows(startingClass);
        break;
        case 6:
            proficiencyStat = 3;
        break;
        case 7:
            proficiencyStat = 3;
        break;
        case 8:
            proficiencyStat = 3;
        break;

        case 9:
            proficiencyStat = 4;
            SavingThrows(startingClass);
        break;
        case 10:
            proficiencyStat = 4;
        break;
        case 11:
            proficiencyStat = 4;
        break;
        case 12:
            proficiencyStat = 4;
        break;

        case 13:
            proficiencyStat = 5;
            SavingThrows(startingClass);
        break;
        case 14:
            proficiencyStat = 5;
        break;
        case 15:
            proficiencyStat = 5;
        break;
        case 16:
            proficiencyStat = 5;
        break;

        case 17:
            proficiencyStat = 6;
            SavingThrows(startingClass);
        break;
        case 18:
            proficiencyStat = 6;
        break;
        case 19:
            proficiencyStat = 6;
        break;
        case 20:
            proficiencyStat = 6;
        break;

        
    }

    console.log(proficiencyStat);
    
}

function SavingThrows(classA) {
    let  madness = classA;
    console.log(madness);

    switch(madness) {
        case "Barbarian":
            document.getElementById("STRSaving").innerText = STRSaving + proficiencyStat;
            document.getElementById("CONSaving").innerText = CONSaving + proficiencyStat;
        break;

        case "Bard":
            document.getElementById("DEXSaving").innerText = DEXSaving + proficiencyStat;
            document.getElementById("CHASaving").innerText = CHASaving + proficiencyStat;
        break;

        case "Cleric":
            document.getElementById("WISSaving").innerText = WISSaving + proficiencyStat;
            document.getElementById("CHASaving").innerText = CHASaving + proficiencyStat;
        break;

        case "Druid":
            document.getElementById("INTSaving").innerText = INTSaving + proficiencyStat;
            document.getElementById("WISSaving").innerText = WISSaving + proficiencyStat;
        break;

        case "Fighter":
            document.getElementById("STRSaving").innerText = STRSaving + proficiencyStat;
            document.getElementById("CONSaving").innerText = CONSaving + proficiencyStat;
        break;

        case "Monk":
            document.getElementById("STRSaving").innerText = STRSaving + proficiencyStat;
            document.getElementById("DEXSaving").innerText = DEXSaving + proficiencyStat;
        break;

        case "Paladin":
            document.getElementById("WISSaving").innerText = WISSaving + proficiencyStat;
            document.getElementById("CHASaving").innerText = CHASaving + proficiencyStat;
        break;

        case "Ranger":
            document.getElementById("STRSaving").innerText = STRSaving + proficiencyStat;
            document.getElementById("DEXSaving").innerText = DEXSaving + proficiencyStat;
        break;

        case "Rogue":
            document.getElementById("DEXSaving").innerText = DEXSaving + proficiencyStat;
            document.getElementById("INTSaving").innerText = INTSaving + proficiencyStat;
        break;

        case "Sorcerer":
            document.getElementById("CONSaving").innerText = CONSaving + proficiencyStat;
            document.getElementById("CHASaving").innerText = CHASaving + proficiencyStat;
        break;

        case "Warlock":
            document.getElementById("WISSaving").innerText = WISSaving + proficiencyStat;
            document.getElementById("CHASaving").innerText = CHASaving + proficiencyStat;
        break;

        case "Wizard":
            document.getElementById("INTSaving").innerText = INTSaving + proficiencyStat;
            document.getElementById("WISSaving").innerText = WISSaving + proficiencyStat;
        break;

    }
}

function BackgroundSet() {
    var bgVal = document.getElementById("Backgrounds").value;

    switch(bgVal) {
        case "Acolyte":
            background = "Acolyte";
        break;

        case "Charlatan":
            background = "Charlatan";
        break;

        case "Criminal":
            background = "Criminal";
        break;

        case "Entertainer":
            background = "Entertainer";
        break;

        case "Folk Hero":
            background = "Folk Hero"
        break;

        case "Guild Artisan":
            background = "Guild Artisan";
        break;

        case "Hermit":
            background = "Hermit";
        break;

        case "Sage":
            background = "Sage";
        break;

        case "Sailor":
            background = "Sailor";
        break;

        case "Soldier":
            background = "Soldier";
        break;

        case "Urchin":
            background = "Urchin";
        break;
    }


}