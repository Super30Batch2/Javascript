
// console.log(new Date().getDay());
var day = 5;
switch(day){

    case 0:
    day ='Sunday';
    break;
    
    case 1:
    day ='Monday Hello Nice day';
    break;

    case 2:
    day ='Tuesday';
    break;

    case 3:
    day ='Wednseday';
    break;

    case 4:
    day ='Thrusday';
    break;

    case 5:
    day ='Friday';
    break;

    default:
    day ='Saturday';
    break;
}


console.log(day);


// example : 2 

const grade = 'D';
 switch(grade) {
    case 'A' :
        marks = '90 % ~ 100% '
        break;
    case 'B' :
        marks = '75 % ~ 89% '
        break;
    case 'B' :
        marks = '51 % ~ 75% '
        break;
    case 'D' :
        marks = '36 % ~ 50% '
        break;
    case 'E' :
        marks = '20 % ~ 35% '
        break;
    default :
    marks = 'Failed'
    break;
 }
 console.log(marks);
