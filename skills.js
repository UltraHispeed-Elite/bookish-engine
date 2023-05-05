var Acrobatics = 0;
var Animal_Handling = 0;
var Arcana = 0;
var Athletics = 0;
var Deception = 0;
var History1 = 0;
var Insight = 0;
var Intimidation = 0;
var Investigation = 0;
var Medicine = 0;
var Nature = 0;
var Perception = 0;
var Performance1 = 0;
var Persuasion = 0;
var Religion = 0;
var Sleight_of_hand = 0;
var Stealth = 0;
var Survival = 0;

var limit = 0;

var skillProf1, skillProf2;

function skillSet() {
    switch(startingClass) {
        case "Barbarian":
            if(limit < 2) {
            document.getElementById("Acrobatics").disabled = true;
            document.getElementById("Animal_Handling").disabled = false;
            document.getElementById("Arcana").disabled = true;
            document.getElementById("Athletics").disabled = false;
            document.getElementById("Deception").disabled = true;
            document.getElementById("History").disabled = true;
            document.getElementById("Insight").disabled = true;
            document.getElementById("Intimidation").disabled = false;
            document.getElementById("Investigation").disabled = true;
            document.getElementById("Medicine").disabled = true;
            document.getElementById("Nature").disabled = false;
            document.getElementById("Perception").disabled = false;
            document.getElementById("Performance").disabled = true;
            document.getElementById("Persuasion").disabled = true;
            document.getElementById("Religion").disabled = true;
            document.getElementById("Sleight_of_Hand").disabled = true;
            document.getElementById("Stealth").disabled = true;
            document.getElementById("Survival").disabled = false;
            }else {
                document.getElementById("Acrobatics").disabled = true;
            document.getElementById("Animal_Handling").disabled = true;
            document.getElementById("Arcana").disabled = true;
            document.getElementById("Athletics").disabled = true;
            document.getElementById("Deception").disabled = true;
            document.getElementById("History").disabled = true;
            document.getElementById("Insight").disabled = true;
            document.getElementById("Intimidation").disabled = true;
            document.getElementById("Investigation").disabled = true;
            document.getElementById("Medicine").disabled = true;
            document.getElementById("Nature").disabled = true;
            document.getElementById("Perception").disabled = true;
            document.getElementById("Performance").disabled = true;
            document.getElementById("Persuasion").disabled = true;
            document.getElementById("Religion").disabled = true;
            document.getElementById("Sleight_of_Hand").disabled = true;
            document.getElementById("Stealth").disabled = true;
            document.getElementById("Survival").disabled = true;
            }
        break;

        case "Bard":
            if(limit < 3) {
                document.getElementById("Acrobatics").disabled = false;
                document.getElementById("Animal_Handling").disabled = false;
                document.getElementById("Arcana").disabled = false;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = false;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = false;
                document.getElementById("Medicine").disabled = false;
                document.getElementById("Nature").disabled = false;
                document.getElementById("Perception").disabled = false;
                document.getElementById("Performance").disabled = false;
                document.getElementById("Persuasion").disabled = false;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = false;
                document.getElementById("Stealth").disabled = false;
                document.getElementById("Survival").disabled = false;
                }else {
                    document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
                }
        break;

        case "Cleric":
            if(limit <= 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = false;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = false;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
                }else {
                    document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
                }

        break;

        case "Druid":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = false;
                document.getElementById("Arcana").disabled = false;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = false;
                document.getElementById("Nature").disabled = false;
                document.getElementById("Perception").disabled = false;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = false;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Fighter":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = false;
                document.getElementById("Animal_Handling").disabled = false;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = false;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = false;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Monk":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = false;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = false;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Paladin":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = false;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = false;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Ranger":
            if(limit < 3) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = false;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = false;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = false;
                document.getElementById("Perception").disabled = false;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = false;
                document.getElementById("Survival").disabled = false;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Rogue":
            if(limit < 4) {
                document.getElementById("Acrobatics").disabled = false;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = false;
                document.getElementById("Deception").disabled = false;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = false;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = false;
                document.getElementById("Performance").disabled = false;
                document.getElementById("Persuasion").disabled = false;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = false;
                document.getElementById("Stealth").disabled = false;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Sorcerer":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = false;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = false;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = false;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Warlock":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = false;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = false;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = false;
                document.getElementById("Investigation").disabled = false;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = false;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;

        case "Wizard":
            if(limit < 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = false;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = false;
                document.getElementById("Insight").disabled = false;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = false;
                document.getElementById("Medicine").disabled = false;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = false;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }else {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }

        break;
    }
}

function limitUpdate() {
    var checkBox1 = document.getElementById("Acrobatics");
    var checkBox2 = document.getElementById("Animal_Handling");
    var checkBox3 = document.getElementById("Arcana");
    var checkBox4 = document.getElementById("Athletics");
    var checkBox5 = document.getElementById("Deception");
    var checkBox6 = document.getElementById("History");
    var checkBox7 = document.getElementById("Inisght");
    var checkBox8 = document.getElementById("Intimidation");
    var checkBox9 = document.getElementById("Investigation");
    var checkBox10 = document.getElementById("Medicine");
    var checkBox11 = document.getElementById("Nature");
    var checkBox12 = document.getElementById("Perception");
    var checkBox13 = document.getElementById("Performance");
    var checkBox14 = document.getElementById("Persuasion");
    var checkBox15 = document.getElementById("Religion");
    var checkBox16 = document.getElementById("Sleight_of_Hand");
    var checkBox17 = document.getElementById("Stealth");
    var checkBox18 = document.getElementById("Survival");

    if(checkBox1.checked === true || checkBox2.checked === true || checkBox3.checked === true || checkBox4.checked === true || checkBox5.checked === true || checkBox6.checked === true || checkBox7.checked === true || checkBox8.checked === true || checkBox9.checked === true || checkBox10.checked === true || checkBox11.checked === true || checkBox12.checked === true || checkBox13.checked === true || checkBox14.checked === true || checkBox15.checked === true || checkBox16.checked === true || checkBox17.checked === true || checkBox18.checked === true){
    limit++;
    }else {
        limit--;
    }

    if(checkBox1.checked === true) {
        Acrobatics = proficiencyStat;
    }else {
        Acrobatics = 0
    }

    if(checkBox2.checked === true) {
        Animal_Handling = proficiencyStat;
    }else {
        Animal_Handling = 0
    }

    if(checkBox3.checked === true) {
        Arcana = proficiencyStat;
    }else {
        Arcana = 0
    }

    if(checkBox4.checked === true) {
        Athletics = proficiencyStat;
    }else {
        Atheltics = 0
    }

    if(checkBox5.checked === true) {
        Deception = proficiencyStat;
    }else {
        Deception = 0
    }

    if(checkBox6.checked === true) {
        History1 = proficiencyStat;
    }else {
        History1 = 0
    }

    if(checkBox7.checked === true) {
        Insight = proficiencyStat;
    }else {
        Insight = 0
    }

    if(checkBox8.checked === true) {
        Intimidation = proficiencyStat;
    }else {
        Intimidation = 0
    }

    if(checkBox9.checked === true) {
        Investigation = proficiencyStat;
    }else {
        Investigation = 0
    }

    if(checkBox10.checked === true) {
       Medicine = proficiencyStat;
    }else {
        Medicine = 0
    }

    if(checkBox11.checked === true) {
        Nature = proficiencyStat;
    }else {
        Nature = 0
    }

    if(checkBox12.checked === true) {
        Perception = proficiencyStat;
    }else {
        Perception = 0
    }

    if(checkBox13.checked === true) {
        Performance1 = proficiencyStat;
    }else {
        Performance1 = 0
    }

    if(checkBox14.checked === true) {
        Persuasion = proficiencyStat;
    }else {
        Persuasion = 0
    }

    if(checkBox15.checked === true) {
        Religion = proficiencyStat;
    }else {
        Religion = 0
    }

    if(checkBox16.checked === true) {
        Sleight_of_hand = proficiencyStat;
    }else {
        Sleight_of_hand = 0
    }

    if(checkBox17.checked === true) {
        Stealth = proficiencyStat;
    }else {
        Stealth = 0
    }

    if(checkBox18.checked === true) {
        Stealth = proficiencyStat;
    }else {
        Stealth = 0
    }

    console.log(limit);

    switch(startingClass) {
        case "Barbarian":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Bard":
            if(limit === 3) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Cleric":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Druid":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Fighter":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Monk":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Paladin":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Ranger":
            if(limit === 3) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Rogue":
            if(limit === 4) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Sorcerer":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Warlock":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;

        case "Wizard":
            if(limit === 2) {
                document.getElementById("Acrobatics").disabled = true;
                document.getElementById("Animal_Handling").disabled = true;
                document.getElementById("Arcana").disabled = true;
                document.getElementById("Athletics").disabled = true;
                document.getElementById("Deception").disabled = true;
                document.getElementById("History").disabled = true;
                document.getElementById("Insight").disabled = true;
                document.getElementById("Intimidation").disabled = true;
                document.getElementById("Investigation").disabled = true;
                document.getElementById("Medicine").disabled = true;
                document.getElementById("Nature").disabled = true;
                document.getElementById("Perception").disabled = true;
                document.getElementById("Performance").disabled = true;
                document.getElementById("Persuasion").disabled = true;
                document.getElementById("Religion").disabled = true;
                document.getElementById("Sleight_of_Hand").disabled = true;
                document.getElementById("Stealth").disabled = true;
                document.getElementById("Survival").disabled = true;
            }
        break;
    }

    applyProf();
}

function backgroundSkill() {
    switch(background) {
        case "Acolyte":
            skillProf1 = "Insight";
            skillProf2 = "Religion";
        break;

        case "Charlatan":
            skillProf1 = "Deception";
            skillProf2 = "Sleight_of_Hand"
        break;

        case "Criminal":
            skillProf1 = "Deception";
            skillProf2 = "Stealth";
        break;

        case "Entertainer":
            skillProf1 = "Acrobatics";
            skillProf2 = "Performance";
        break;

        case "Folk Hero":
            skillProf1 = "Animal_Handling";
            skillProf2 = "Survival";
        break;

        case "Guild Artisan":
            skillProf1 = "Insight";
            skillProf2 = "Persuasion";
        break;

        case "Hermit":
            skillProf1 = "Medicine";
            skillProf2 = "Religion";
        break;

        case "Noble":
            skillProf1 = "History";
            skillProf2 = "Persuasion";
        break;

        case "Outlander":
            skillProf1 = "Athletics";
            skillProf2 = "Survival";
        break;

        case "Sage":
            skillProf1 = "Arcana";
            skillProf2 = "History";
        break;
        
        case "Sailor":
            skillProf1 = "Athletics";
            skillProf2 = "Perception";
        break;

        case "Soldier":
            skillProf1 = "Athletics";
            skillProf2 = "Intimidation";
        break;

        case "Urchin":
            skillProf1 = "Sleight_of_Hand";
            skillProf2 = "Stealth";
        break;
    }

    applyProf();
}

function applyProf() {
    if(skillProf1 === "Acrobatics" || skillProf2 === "Acbrobatics") {
        document.getElementById("AcrobaticsLabel").innerText = "Acrobatics:" + (DEXSaving + Acrobatics + proficiencyStat);
    }else {
        document.getElementById("AcrobaticsLabel").innerText = "Acrobatics";
    }
    
    if(skillProf1 === "Animal_Handling" || skillProf2 === "Animal_Handling") {
        document.getElementById("Animal_HandlingLabel").innerText = "Animal_Handling:" + (WISSaving + Animal_Handling + proficiencyStat);
    }else {
        document.getElementById("Animal_HandlingLabel").innerText = "Animal Handling";
    }
    
    if(skillProf1 === "Arcana" || skillProf2 === "Arcana") {
        document.getElementById("ArcanaLabel").innerText = "Arcana:" + (INTSaving + Arcana + proficiencyStat);
    }else {
        document.getElementById("ArcanaLabel").innerText = "Arcana";
    }
    
    if(skillProf1 === "Athletics" || skillProf2 === "Athletics") {
        document.getElementById("AthleticsLabel").innerText = "Athletics:" + (STRSaving + Athletics + proficiencyStat);
    }else {
        document.getElementById("AthleticsLabel").innerText = "Athletics";
    }
    
    if(skillProf1 === "Deception" || skillProf2 === "Deception") {
        document.getElementById("DeceptionLabel").innerText = "Deception:" + (CHASaving + Deception + proficiencyStat);
    }else {
        document.getElementById("DeceptionLabel").innerText = "Deception";
    }
    
    if(skillProf1 === "History" || skillProf2 === "History") {
        document.getElementById("HistoryLabel").innerText = "History:" + (INTSaving + History1 + proficiencyStat);
    }else {
        document.getElementById("HistoryLabel").innerText = "History";
    }
    
    if(skillProf1 === "Insight" || skillProf2 === "Insight") {
        document.getElementById("InsightLabel").innerText = "Insight:" + (WISSaving + Insight + proficiencyStat);
    }else {
        document.getElementById("InsightLabel").innerText = "Insight";
    }
    
    if(skillProf1 === "Intimidation" || skillProf2 === "Intimidation") {
        document.getElementById("IntimidationLabel").innerText = "Intimidation:" + (CHASaving + Intimidation + proficiencyStat);
    }else {
        document.getElementById("IntimidationLabel").innerText = "Intimidation";
    }
    
    if(skillProf1 === "Investigation" || skillProf2 === "Investigation") {
        document.getElementById("InvestigationLabel").innerText = "Investigation:" + (INTSaving + Investigation + proficiencyStat);
    }else {
        document.getElementById("InvestigationLabel").innerText = "Investigation";
    }
    
    if(skillProf1 === "Medicine" || skillProf2 === "Medicine") {
        document.getElementById("MedicineLabel").innerText = "Medicine:" + (WISSaving + Medicine + proficiencyStat);
    }else {
        document.getElementById("MedicineLabel").innerText = "Medicine";
    }
    
    if(skillProf1 === "Nature" || skillProf2 === "Nature") {
        document.getElementById("NatureLabel").innerText = "Nature:" + (INTSaving + Nature + proficiencyStat);
    }else {
        document.getElementById("NatureLabel").innerText = "Nature";
    }
    
    if(skillProf1 === "Perception" || skillProf2 === "Perception") {
        document.getElementById("PerceptionLabel").innerText = "Perception:" + (WISSaving + Perception + proficiencyStat);
    }else {
        document.getElementById("PerceptionLabel").innerText = "Perception";
    }
    
    if(skillProf1 === "Performance" || skillProf2 === "Performance") {
        document.getElementById("PerformanceLabel").innerText = "Performance:" + (CHASaving + Performance1 + proficiencyStat);
    }else {
        document.getElementById("PerformanceLabel").innerText = "Performance";
    }
    
    if(skillProf1 === "Persuasion" || skillProf2 === "Persuasion") {
        document.getElementById("PersuasionLabel").innerText = "Persuasion:" + (CHASaving + Persuasion + proficiencyStat);
    }else {
        document.getElementById("PersuasionLabel").innerText = "Persuasion";
    }
    
    if(skillProf1 === "Religion" || skillProf2 === "Religion") {
        document.getElementById("ReligionLabel").innerText = "Religion:" + (INTSaving + Religion + proficiencyStat);
    }else {
        document.getElementById("ReligionLabel").innerText = "Religion";
    }
    
    if(skillProf1 === "Sleight_of_Hand" || skillProf2 === "Sleight_of_Hand") {
        document.getElementById("Sleight_of_HandLabel").innerText = "Sleight of Hand:" + (DEXSaving + Sleight_of_hand + proficiencyStat);
    }else {
        document.getElementById("Sleight_of_HandLabel").innerText = "Sleight of Hand";
    }
    
    if(skillProf1 === "Stealth" || skillProf2 === "Stealth") {
        document.getElementById("StealthLabel").innerText = "Stealth:" + (DEXSaving + Stealth + proficiencyStat);
    }else {
        document.getElementById("StealthLabel").innerText = "Stealth";
    }
    
    if(skillProf1 === "Survival" || skillProf2 === "Survival") {
        document.getElementById("SurvivalLabel").innerText = "Survival:" + (WISSaving + Survival + proficiencyStat);
    }else {
        document.getElementById("SurvivalLabel").innerText = "Survival";
    }
}