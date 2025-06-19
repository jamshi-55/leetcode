/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num=new Set()
    while(n!=1 && !num.has(n)){
        num.add(n)
        let newnum = String(n).split("")
        let sum =0
        for(let x of newnum){
            let y=Number(x)
            sum+=y*y
        }
        n=sum

    }
    return n===1
    
};