var bonus = 0;
var bonusTotal = 3;
var bonusOverall;
var bonusType
var STRbonus = 0;
var DEXbonus = 0;
var CONbonus = 0;
var INTbonus = 0;
var WISbonus = 0;
var CHAbonus = 0;
var running = true;
var update1, update2, update3, update4, update5, update6;

var AA1, AA2, AA3, AA4, AA5, AA6;

function increaseStat(Types) {
  if(bonus < bonusTotal) {
    bonus++;
    
    bonusType = Types;
    
    switch (bonusType) {
    case 1: 
      if(STRbonus < 2) {
        STRbonus++;

        update1 = document.getElementsByClassName("value1")[0].innerText = value1+STRbonus;
        update2 = document.getElementsByClassName("value2")[0].innerText = value2+STRbonus;
        update3 = document.getElementsByClassName("value3")[0].innerText = value3+STRbonus;
        update4 = document.getElementsByClassName("value4")[0].innerText = value4+STRbonus;
        update5 = document.getElementsByClassName("value5")[0].innerText = value5+STRbonus;
        update6 = document.getElementsByClassName("value6")[0].innerText = value6+STRbonus;

        STRAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 2:
      if(DEXbonus < 2) {
        DEXbonus++;

        update1 = document.getElementsByClassName("value1")[1].innerText = value1+DEXbonus;
        update2 = document.getElementsByClassName("value2")[1].innerText = value2+DEXbonus;
        update3 = document.getElementsByClassName("value3")[1].innerText = value3+DEXbonus;
        update4 = document.getElementsByClassName("value4")[1].innerText = value4+DEXbonus;
        update5 = document.getElementsByClassName("value5")[1].innerText = value5+DEXbonus;
        update6 = document.getElementsByClassName("value6")[1].innerText = value6+DEXbonus;

        DEXAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 3:
      if(CONbonus < 2) {
        CONbonus++;

        update1 = document.getElementsByClassName("value1")[2].innerText = value1+CONbonus;
        update2 = document.getElementsByClassName("value2")[2].innerText = value2+CONbonus;
        update3 = document.getElementsByClassName("value3")[2].innerText = value3+CONbonus;
        update4 = document.getElementsByClassName("value4")[2].innerText = value4+CONbonus;
        update5 = document.getElementsByClassName("value5")[2].innerText = value5+CONbonus;
        update6 = document.getElementsByClassName("value6")[2].innerText = value6+CONbonus;

        CONAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 4:
      if(INTbonus < 2) {
        INTbonus++;

        update1 = document.getElementsByClassName("value1")[3].innerText = value1+INTbonus;
        update2 = document.getElementsByClassName("value2")[3].innerText = value2+INTbonus;
        update3 = document.getElementsByClassName("value3")[3].innerText = value3+INTbonus;
        update4 = document.getElementsByClassName("value4")[3].innerText = value4+INTbonus;
        update5 = document.getElementsByClassName("value5")[3].innerText = value5+INTbonus;
        update6 = document.getElementsByClassName("value6")[3].innerText = value6+INTbonus;

        INTAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 5:
      if(WISbonus < 2) {
        WISbonus++;

        update1 = document.getElementsByClassName("value1")[4].innerText = value1+WISbonus;
        update2 = document.getElementsByClassName("value2")[4].innerText = value2+WISbonus;
        update3 = document.getElementsByClassName("value3")[4].innerText = value3+WISbonus;
        update4 = document.getElementsByClassName("value4")[4].innerText = value4+WISbonus;
        update5 = document.getElementsByClassName("value5")[4].innerText = value5+WISbonus;
        update6 = document.getElementsByClassName("value6")[4].innerText = value6+WISbonus;

        WISAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 6:
      if(CHAbonus < 2) {
        CHAbonus++;

        update1 = document.getElementsByClassName("value1")[5].innerText = value1+CHAbonus;
        update2 = document.getElementsByClassName("value2")[5].innerText = value2+CHAbonus;
        update3 = document.getElementsByClassName("value3")[5].innerText = value3+CHAbonus;
        update4 = document.getElementsByClassName("value4")[5].innerText = value4+CHAbonus;
        update5 = document.getElementsByClassName("value5")[5].innerText = value5+CHAbonus;
        update6 = document.getElementsByClassName("value6")[5].innerText = value6+CHAbonus;

        CHAAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
  }
    
  }else {
    alert("You've reached the limit");
  }
  
  bonusOverall = STRbonus+DEXbonus+CONbonus+INTbonus+WISbonus+CHAbonus;
  
  if(bonus > bonusOverall) {
    bonus = bonusOverall;
  }
  
  console.log(bonus, STRbonus, DEXbonus, CONbonus, INTbonus, WISbonus, CHAbonus, bonusOverall);
}

function decreaseStat(Types) {
  if(bonus > 0) {
    bonus--;
    
    bonusType = Types;
    
    switch (bonusType) {
    case 1: 
      if(STRbonus > 0) {
        STRbonus--;

        update1 = document.getElementsByClassName("value1")[0].innerText = value1+STRbonus;
        update2 = document.getElementsByClassName("value2")[0].innerText = value2+STRbonus;
        update3 = document.getElementsByClassName("value3")[0].innerText = value3+STRbonus;
        update4 = document.getElementsByClassName("value4")[0].innerText = value4+STRbonus;
        update5 = document.getElementsByClassName("value5")[0].innerText = value5+STRbonus;
        update6 = document.getElementsByClassName("value6")[0].innerText = value6+STRbonus;

        STRAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 2:
      if(DEXbonus > 0) {
        DEXbonus--;

        update1 = document.getElementsByClassName("value1")[1].innerText = value1+DEXbonus;
        update2 = document.getElementsByClassName("value2")[1].innerText = value2+DEXbonus;
        update3 = document.getElementsByClassName("value3")[1].innerText = value3+DEXbonus;
        update4 = document.getElementsByClassName("value4")[1].innerText = value4+DEXbonus;
        update5 = document.getElementsByClassName("value5")[1].innerText = value5+DEXbonus;
        update6 = document.getElementsByClassName("value6")[1].innerText = value6+DEXbonus;

        DEXAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 3:
      if(CONbonus > 0) {
        CONbonus--;

        update1 = document.getElementsByClassName("value1")[2].innerText = value1+CONbonus;
        update2 = document.getElementsByClassName("value2")[2].innerText = value2+CONbonus;
        update3 = document.getElementsByClassName("value3")[2].innerText = value3+CONbonus;
        update4 = document.getElementsByClassName("value4")[2].innerText = value4+CONbonus;
        update5 = document.getElementsByClassName("value5")[2].innerText = value5+CONbonus;
        update6 = document.getElementsByClassName("value6")[2].innerText = value6+CONbonus;

        CONAbilityScore()
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 4:
      if(INTbonus > 0) {
        INTbonus--;

        update1 = document.getElementsByClassName("value1")[3].innerText = value1+INTbonus;
        update2 = document.getElementsByClassName("value2")[3].innerText = value2+INTbonus;
        update3 = document.getElementsByClassName("value3")[3].innerText = value3+INTbonus;
        update4 = document.getElementsByClassName("value4")[3].innerText = value4+INTbonus;
        update5 = document.getElementsByClassName("value5")[3].innerText = value5+INTbonus;
        update6 = document.getElementsByClassName("value6")[3].innerText = value6+INTbonus;

        INTAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 5:
      if(WISbonus > 0) {
        WISbonus--;

        update1 = document.getElementsByClassName("value1")[4].innerText = value1+WISbonus;
        update2 = document.getElementsByClassName("value2")[4].innerText = value2+WISbonus;
        update3 = document.getElementsByClassName("value3")[4].innerText = value3+WISbonus;
        update4 = document.getElementsByClassName("value4")[4].innerText = value4+WISbonus;
        update5 = document.getElementsByClassName("value5")[4].innerText = value5+WISbonus;
        update6 = document.getElementsByClassName("value6")[4].innerText = value6+WISbonus;

        WISAbilityScore
      }else {
        alert("You've reached the limit");
      }
    break;
    
    case 6:
      if(CHAbonus > 0) {
        CHAbonus--;

        update1 = document.getElementsByClassName("value1")[5].innerText = value1+CHAbonus;
        update2 = document.getElementsByClassName("value2")[5].innerText = value2+CHAbonus;
        update3 = document.getElementsByClassName("value3")[5].innerText = value3+CHAbonus;
        update4 = document.getElementsByClassName("value4")[5].innerText = value4+CHAbonus;
        update5 = document.getElementsByClassName("value5")[5].innerText = value5+CHAbonus;
        update6 = document.getElementsByClassName("value6")[5].innerText = value6+CHAbonus;

        CHAAbilityScore();
      }else {
        alert("You've reached the limit");
      }
    break;
  }
    
  }else {
    alert("You've reached the limit");
  }
  
  bonusOverall = STRbonus+DEXbonus+CONbonus+INTbonus+WISbonus+CHAbonus;
  
  if(bonus > bonusOverall) {
    bonus = bonusOverall;
  }
  
  console.log(bonus, STRbonus, DEXbonus, CONbonus, INTbonus, WISbonus, CHAbonus, bonusOverall);
}

function STRAbilityScore() {
  let val = document.getElementById("Strength").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+STRbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+STRbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+STRbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+STRbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+STRbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+STRbonus)-10)/2);
  }

 var test = document.getElementById("001").innerText = AA1;
 console.log(AA1);
}

function DEXAbilityScore() {
  let val = document.getElementById("Dexterity").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+DEXbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+DEXbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+DEXbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+DEXbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+DEXbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+DEXbonus)-10)/2);
  }

 var test2 = document.getElementById("002").innerText = AA1;
 console.log(AA1);
}


function CONAbilityScore() {
  let val = document.getElementById("Constitution").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+CONbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+CONbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+CONbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+CONbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+CONbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+CONbonus)-10)/2);
  }

 var test3 = document.getElementById("003").innerText = AA1;
 console.log(AA1);
}


function INTAbilityScore() {
  let val = document.getElementById("Intelligence").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+INTbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+INTbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+INTbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+INTbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+INTbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+INTbonus)-10)/2);
  }

 var test4 = document.getElementById("004").innerText = AA1;
 console.log(AA1);
}


function WISAbilityScore() {
  let val = document.getElementById("Wisdom").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+WISbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+WISbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+WISbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+WISbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+WISbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+WISbonus)-10)/2);
  }

 var test5 = document.getElementById("005").innerText = AA1;
 console.log(AA1);
}


function CHAAbilityScore() {
  let val = document.getElementById("Charisma").value;
  if(val === "1"){
  AA1 = Math.floor(((value1+CHAbonus)-10)/2);
  }else if(val === "2") {
  AA1 = Math.floor(((value2+CHAbonus)-10)/2);
  }else if(val === "3") {
  AA1 = Math.floor(((value3+CHAbonus)-10)/2);
  }else if(val === "4") {
  AA1 = Math.floor(((value4+CHAbonus)-10)/2);
  }else if(val === "5"){
  AA1 = Math.floor(((value5+CHAbonus)-10)/2);
  }else if(val === "6"){
  AA1 = Math.floor(((value6+CHAbonus)-10)/2);
  }

 var test6 = document.getElementById("006").innerText = AA1;
 console.log(AA1);
}
