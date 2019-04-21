function solve(carOrder) {
    let engine = {};
    let carriage = {
        type: carOrder.carriage,
        color: carOrder.color
    };
    if(carOrder.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (carOrder.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    let wheels = [];

    if(carOrder.wheelsize % 2 === 0) {
        let wheel = carOrder.wheelsize - 1;

        wheels = [wheel, wheel, wheel, wheel];
    } else {
        let wheel = carOrder.wheelsize;
        wheels = [wheel, wheel, wheel, wheel];
    }



    return {
        model: carOrder.model,
        engine,
        carriage,
        wheels
    };
}



console.log(solve({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
    }));

