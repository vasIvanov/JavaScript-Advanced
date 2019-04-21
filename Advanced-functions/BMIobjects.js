function solve(name, age, weight, height) {
    let heightInMeters = (height / 100);
    let BMI = Math.round(weight / (heightInMeters * heightInMeters));
    let status = function (){
        if(BMI < 18.5) {
            return 'underweight';
        } else if (BMI < 25 && BMI > 18.4) {
            return 'normal';
        } else if (BMI > 24 && BMI < 30){
            return 'overweight';
        } else {
            return 'obese';
        }
    } 
    if(status() === 'obese') {
        return {
            name,
            personalInfo: {
                age,
                weight,
                height
            },
            BMI,
            status: status(),
            recommendation: 'admission required'
        }

    } else {
        return {
            name,
            personalInfo: {
                age,
                weight,
                height
            },
            BMI,
            status: status(),
        }
    }

}

console.log(solve('Petkan', 20, 80, 178));
