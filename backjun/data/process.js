console.log(records);
console.log(players);


let p1_win = 0
let p1_lose = 0
let p1_foul = 0

let p2_win = 0
let p2_lose = 0
let p2_foul = 0

let roundResult = {}
let result = []
let round = 0
let bool = false

records.map(record => {

    console.log(record)

    let keys = Object.keys(record).sort((a,b)=> a-b)
    console.log('keys: ', keys);
    // console.log(`p1 => `,record[keys[0]]);
    // console.log(`p2 => `,record[keys[1]]);

    if(record[keys[0]]?.round !== round){
        p1_win = 0
        p1_lose = 0
        p1_foul = 0
    
        p2_win = 0
        p2_lose = 0
        p2_foul = 0
    
        round++
        roundResult = {}
        bool = true
    } 

    switch(record[keys[0]]?.result){
        case "win":
            p1_win++
        break
        case "lose":
            p1_lose++
        break
        case "foul":
        case "draw":
            p1_foul++
        break
    }
    switch(record[keys[1]]?.result){
        case "win":
            p2_win++
        break
        case "lose":
            p2_lose++
        break
        case "foul":
        case "draw":
            p2_foul++
        break
    }

    roundResult = { ...roundResult, [record[keys[0]].id] :  { id : players[keys[0]].id, win: p1_win, lose : p1_lose, foul : p1_foul, round : record[keys[0]].round }}
    roundResult = { ...roundResult, [record[keys[1]].id] :  { id : players[keys[1]].id, win: p2_win, lose : p2_lose, foul : p2_foul, round : record[keys[1]].round }}
    
    bool ? result = [ ...result, roundResult ] : null
    bool = false
 

    console.log(`roundResult =>`, roundResult);
    
    
    
})

console.log(`최종결과 =====>`,result);

// records.map(record => {

//     console.log(record)

//     let keys = Object.keys(record).sort((a,b)=> a-b)
//     console.log('keys: ', keys);
//     // console.log(`p1 => `,record[keys[0]]);
//     // console.log(`p2 => `,record[keys[1]]);

//     if(record[keys[0]]?.round !== round){
//         p1_win = 0
//         p1_lose = 0
//         p1_foul = 0
    
//         p2_win = 0
//         p2_lose = 0
//         p2_foul = 0
    
//         round++
//         result = [ ...result, roundResult ]
//         roundResult = {}
//     } 

//     switch(record[keys[0]]?.result){
//         case "win":
//             p1_win++
//         break
//         case "lose":
//             p1_lose++
//         break
//         case "foul":
//         case "draw":
//             p1_foul++
//         break
//     }
//     switch(record[keys[1]]?.result){
//         case "win":
//             p2_win++
//         break
//         case "lose":
//             p2_lose++
//         break
//         case "foul":
//         case "draw":
//             p2_foul++
//         break
//     }

//     roundResult = { ...roundResult, [record[keys[0]].id] :  { id : players[keys[0].id], win: p1_win, lose : p1_lose, foul : p1_foul, round : record[keys[0]].round }}
//     roundResult = { ...roundResult, [record[keys[1]].id] :  { id : players[keys[1].id], win: p2_win, lose : p2_lose, foul : p2_foul, round : record[keys[1]].round }}

 

//     console.log(`roundResult =>`, roundResult);
    
    
    
// })

// console.log(`최종결과 =====>`,result);



