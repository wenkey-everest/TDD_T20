let oneBall:number;
let oneOver:number;
let total_balls:number=0;
function ballsRemaining(){
    for( oneOver=0; oneOver<=3;oneOver++){
        for( oneBall=1;oneBall<=6;oneBall++){
            total_balls++;
}
    }
    return total_balls;
}

export{ballsRemaining};