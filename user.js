var name, user,  level, levelTotal;

var Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, Wizard;

var classLevel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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