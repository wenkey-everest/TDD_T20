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
function ballsRemaining(){
    console.log("Sample Commentary");
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
          
          // strikeChangingWithScore(score);
          // strikeChangingWithOver();
         
}
    }
  }
    return total_balls;
}

function strikeChangingWithOver(oneBall:number,oneOver:number, strike:string, playPerson:string){
  if((oneBall==1) && (oneOver!==0)){
   let temp:string=strike;
            strike=playPerson;
            playPerson=temp;
}return strike;
}
function strikeChangingWithScore(score:number,strike:string,playPerson:string){
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

export{ballsRemaining};
export{randTest};
export{strikeChangingWithScore};
export{strikeChangingWithOver};

export{swap};