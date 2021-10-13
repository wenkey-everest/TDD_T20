let playerNames:string[]=["kirat Boli", "N.s Nodhi", "R Rumrah", "Shashi Henra"];
let probablity:any=[{"Dot":.05,1:.3, 2:.25, 3:.1, 4:.15, 5:.01, 6:.09,"out":.05},
    {"Dot":.1,1:.4, 2:.2, 3:.05, 4:.1, 5:.01, 6:.04,"out":.1},
    {"Dot":.2,1:.3, 2:.15, 3:.05, 4:.05, 5:.01, 6:.04,"out":.2},
    {"Dot":.3,1:.25, 2:.05, 3:0, 4:.05, 5:.01, 6:.04,"out":.3}];
    let strike=playerNames[0];
    let score:any;
    let p1Score=0 ,p1balls=0;  
    let p2Score=0 ,p2balls=0; 
    let p3Score=0 ,p3balls=0; 
    let p4Score=0, p4balls=0;
    let wicket=0, remScore=0; 
    let count=0;
    let total_ball=24 ,total_score=0 ,total_overs=0, total_wickets=4;
    let rem_balls:any;
    let playPerson=playerNames[1];
    let score_need:number=40;

let oneBall:number;
let oneOver:number;
let total_balls:number=0;
function randTest(spec:any):any {
    var i, sum=0, r=Math.random();
    for (i in spec) {
      sum += spec[i];
      if (r <= sum) return i;
    }
  }  
  function swap(strike:string, playPerson:string){
    let temp:string;
    temp=strike;
    strike=playPerson;
    playPerson=temp;
    return strike;
  }
function scoreBoard(){
     console.log("Sample commentary");
        console.log("4 overs left, " +score_need+ " runs to win");
    for( oneOver=0; oneOver<=3; oneOver++){
        for( oneBall=1; oneBall<=6; oneBall++){
            total_balls++;
            if(+total_score<=score_need){
              switch (strike) {
                  case "kirat Boli":
                      score=randTest(probablity[0]);
                      break;
                  case "N.s Nodhi":
                      score=randTest(probablity[1]);
                      break; 
                  case "R Rumrah":
                      score=randTest(probablity[2]);
                      break;
                  case "Shashi Henra":
                      score=randTest(probablity[3]);
                      break;
                  default:
              }
              console.log(wicket);
            //   strikeChangingWithOver();
            if(wicket!==3){
            console.log(+oneOver+"."+oneBall+" "+strike+ " scores " +score);
                }
          
            // if((score==1)||(score==3)||(score==5)){
            //     strikeChangingWithScore(score);
            // }else if(score=="out"){
            //     playerOut();
            // }else if(score=="Dot"){
            //     dotBalls();
            // }else{
            //     evenScore();
            // }  
            // if(wicket==3){
            //     break;
            // }   
        
}
//totalScore();
    }
    if(wicket!==3){
        switch(oneOver){
         case 0:
             console.log("3 overs left, " +remScore+ " runs to win");
             break;   
         case 1:
             console.log("2 overs left, " +remScore+ " runs to win");
             break;
         case 2:
             if(remScore>=0){
             console.log("1 overs left, " +remScore+ " runs to win");
             }
             break;    
        }
        }
  }
 
    return total_balls;
}
//function strikeChangingWithOver(){
function strikeChangingWithOver(oneBall:number,oneOver:number, strike:string, playPerson:string){ //USE THIS FOR TESTING 
  if((oneBall==1) && (oneOver!==0)){
   let temp:string=strike;
            strike=playPerson;
            playPerson=temp;
}return strike;
}
//function strikeChangingWithScore(score:number){
function strikeChangingWithScore(score:number,strike:string,playPerson:string){ //USE THIS FOR TESTING 
  let temp:string;
  if(strike==playerNames[0]){
    p1Score= +p1Score + +score;
    p1balls= +p1balls + 1;
     switch (playPerson) {
         case "N.s Nodhi":
            temp=strike;
            strike=playPerson;
            playPerson=temp;
            break; 
        case "R Rumrah":
            temp=strike;
            strike=playPerson;
            playPerson=temp;
            break;
        case "Shashi Henra":
            temp=strike;
            strike=playPerson;
            playPerson=temp;
            break;
        default:
}
}else
if(strike==playerNames[1]){
    p2Score= +p2Score + +score;
    p2balls= +p2balls + 1;
switch (playPerson) {
    case "kirat Boli":
        temp=strike;
            strike=playPerson;
            playPerson=temp;
        break;
    case "R Rumrah":
        temp=strike;
            strike=playPerson;
            playPerson=temp;
        break;
    case "Shashi Henra":
        temp=strike;
            strike=playPerson;
            playPerson=temp;
        break;
    default:
}
}else if(strike==playerNames[2]){
    p3Score= +p3Score + +score;
    p3balls= +p3balls + 1;
 switch (playPerson) {
    case "kirat Boli":
            temp=strike;
            strike=playPerson;
            playPerson=temp;
        break;
    case "N.s Nodhi":
        temp=strike;
           strike=playPerson;
            playPerson=temp;
        break; 
    case "Shashi Henra":
            temp=strike;
            strike=playPerson;
            playPerson=temp;
        break;
    default:     
}
}return strike;
}
//function playerOut(){
function playerOut(strike:string,score:string){ //USE THIS FOR TESTING 
     let j:number=0;
      if(strike==playerNames[j]){
          strike=playerNames[j+2];
          playPerson=playerNames[j+1];
          wicket++;
      }else if(strike==playerNames[j+1]){
          if(playPerson!==playerNames[j+2]){
          strike=playerNames[j+2];
          playPerson=playerNames[j];
          wicket++;
          }else{
          strike=playerNames[j+3];
          wicket++;
          }
      }else if(strike==playerNames[j+2]){ 
          strike=playerNames[j+3];
          playPerson=playerNames[j+1];
          wicket++;     
      }else {
          console.log('Banglore lost the match...');
          return;
      }
     return strike; 
}


 function dotBalls(score:string,strike:string,p1Score:number){ //USE THIS FOR TESTING 
 // function dotBalls(){  
    switch (strike) {
        case "kirat Boli":
            p1Score = p1Score;
            break;
        case "N.s Nodhi":
            p2Score = p2Score;
            break; 
        case "R Rumrah":
            p3Score = p3Score;
            break;
        case "Shashi Henra":
            p4Score = p4Score;
            break;
    default:
}
return p1Score;
}

//function evenScore(){
function evenScore(strike:string, score:number,p1Score:number,p1balls:number){ //USE THIS FOR TESTING 
  switch (strike) {     
    case "kirat Boli":
            p1Score= +p1Score + +score;
            p1balls= +p1balls + 1;
        break;
    case "N.s Nodhi":
            p2Score= +p2Score + +score;
            p2balls= +p2balls + 1;
        break; 
    case "R Rumrah":
            p3Score= +p3Score + +score;
            p3balls= +p3balls + 1;
        break;
    case "Shashi Henra":
            p4Score= +p4Score + +score;
            p4balls= +p4balls + 1;
        break;
    default:
}
return [p2Score,p2balls];
}
//function totalScore(){
function totalScore(p1Score:number,p2Score:number,p3Score:number,p4Score:number){ //USE THIS FOR TESTING 
    total_score = +p1Score + +p2Score + +p3Score + +p4Score; 
    remScore=score_need-total_score;
    rem_balls=total_ball-total_balls;
    return total_score;
}
function display():void{
    let outPlayer=total_wickets-wicket;
    if((wicket!==3) || (remScore==0)){
    console.log("Banglore won by "+ outPlayer +"wickets and "+rem_balls+" balls ");
    }else{
        console.log("Banglore lost the mastch..");
    }
    if((strike==playerNames[0]) && (playPerson==playerNames[1] )){
            console.log("Kirat Boli* - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi* - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra - "+p4Score+"( "+p4balls+" ) ");
        }else if((strike==playerNames[1]) && (playPerson==playerNames[2] )){           
            console.log("Kirat Boli - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi* - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah* - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra - "+p4Score+"( "+p4balls+" ) ");
        }else if((strike==playerNames[2]) && (playPerson==playerNames[3] )){                      
            console.log("Kirat Boli - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah* - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra* - "+p4Score+"( "+p4balls+" ) ");
        }else if((strike==playerNames[1]) && (playPerson==playerNames[3] )){        
            console.log("Kirat Boli - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi* - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra* - "+p4Score+"( "+p4balls+" ) ");
        }else if((strike==playerNames[0]) && (playPerson==playerNames[2] )){         
            console.log("Kirat Boli* - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah* - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra - "+p4Score+"( "+p4balls+" ) ");
        }else if((strike==playerNames[0]) && (playPerson==playerNames[2] )){
            console.log("Kirat Boli* - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra* - "+p4Score+"( "+p4balls+" ) ");
        }else{
            console.log("Kirat Boli - "+p1Score+"( "+p1balls+" ) ");
            console.log("N.s Nodhi - "+p2Score+"( "+p2balls+" ) ");
            console.log("R Rumrah - "+p3Score+"( "+p3balls+" ) ");
            console.log("Shashi Henra - "+p4Score+"( "+p4balls+" ) "); 
        }
    }

// scoreBoard();
// display();
   

   

export{scoreBoard};
export{randTest};
export{strikeChangingWithScore};         //USE THESE FOR TESTING
export{strikeChangingWithOver};
export{playerOut};
export{swap};
export{dotBalls}
export{evenScore}
export{totalScore}