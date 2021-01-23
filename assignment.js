// https://github.com/omar-faruk02/assignment-js

// kilometerToMeter

function kilometerToMeter(kilometer)
{
  var meter=kilometer*1000;
  return meter;
}
kilometerToMeter(5);




// budgetCalculator

function budgetCalculator(watch,mobile,laptop) //function define
{
    var total=watch*50+mobile*100+laptop*500;
    return total;
}
budgetCalculator(3,5,7);//function call




// hotelCost

function hotelCost(nightstay) //function define
{
    var totalCost=0;
     if(nightstay<=10)
{
     totalCost=nightstay*100;
}
else if(nightstay<=20){
     var first10Night=10*100;  //cost 1st 10 night
    var remainingNight=nightstay-10;
     totalCost=remainingNight*80+first10Night;
}
else{
    var first20Night=10*100+10*80; //cost 1st 20 night
    var remainingNight=nightstay-20;
     totalCost=remainingNight*50+first20Night;

}
return totalCost;

}
hotelCost(23) //function call





//megaFriend


var namesOfFrinends=["nuruzzaman","rakkib","anis","bishal","omarfaruk"];
var largeName,NameLength;
NameLength=0;
function megaFriend(name) //function define
{
    for(var i=0;i<name.length;i++)
    {
        var frinedsName=name[i];
        
        if(frinedsName.length>NameLength){
            NameLength=frinedsName.length;
            largeName=frinedsName;
            
           
        }
        
       
    }
    return largeName;
   
}
megaFriend(namesOfFrinends); //function call






