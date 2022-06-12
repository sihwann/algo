const fs = require('fs');
const os = require('os');
const path = os.platform() === "linux" ? "/dev/stdin" : __dirname+"/input.txt";

const input = fs.readFileSync(path).toString().trim().split("\n")

function process(input){
    let total = Number(input[0])
    let time = input.slice(1).map((data,i) => data.split(' ')).map(data => data.map(d => Number(d)))
    return { total, time }
}

const data = process(input)
solution(data)

function solution({ total, time }){
    // console.log('total,time: ', total, time);

    time.sort((a,b)=> {
        if(a[1] === b[1]){ return a[0] - b[0] } else{ return a[1] - b[1]; }

    })

    console.log(time);

}