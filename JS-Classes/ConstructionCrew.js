function solve (worker) {
    if(worker.handsShaking) {
        let requiredAmount = (0.1 * worker.weight) * worker.experience;
        worker.bloodAlcoholLevel += requiredAmount;
        worker.handsShaking = false;
    }

    return worker;
}

let worker = { 
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true 
}

console.log(solve(worker));
