// given an amount, you need to specify the minimun way to give the ammount
//for example: for 30 should be 3 coins of 10
//for example: for 23 should be 2 coins of 10 and 

const calculateCoins = (coin, ammount) => {
    const result = ammount / coin;
    const mod = ammount % coin;
    return [Math.floor(result), mod]
}

const getCoinsAmount = (ammount)=>{
    let total = ammount
    const posiblesCoins = [1,2,5,10];
    const indexObject = {}
    for (const coin of posiblesCoins.reverse()) {
        const [result, mod] = calculateCoins(coin, total);
        indexObject[coin] = result;
        total = mod;
        if(mod === 0) break;
    }
    return indexObject;
}

console.log(getCoinsAmount(23))
