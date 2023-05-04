var Acrobatics;
var Animal_Handling;
var Arcana;
var Athletics;
var Deception;
var History1;
var Insight;
var Intimidation;
var Investigation;
var Medicine;
var Nature;
var Perception;
var Performance1;
var Persuasion;
var Religion;
var Sleight_of_hand;
var Stealth;
var Survival;

var limit = 0;

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