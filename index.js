// BMI Calculation

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);

  const category = (bmi < 18.5) ? "Underweight" :
                   (bmi >= 18.5 && bmi < 25) ? "Normal weight" :
                   (bmi >= 25 && bmi < 30) ? "Overweight" :
                   "Obese";

  return { bmi, category };
}

const weight = 87
const height = 1.79   // meter

const result = calculateBMI(parseFloat(weight), parseFloat(height));

console.log("BMI: " + result.bmi);
console.log("Category: " + result.category);


// BorgoKhetro Nirnoy

function SquareCalculation(val){
  const result = val * val;
  return result;
}
const SquareSize = 20
const SquareResult = SquareCalculation(parseFloat(SquareSize))

console.log('Square Calculation',SquareResult )


// Ayoto Calculation

function AyotoCalculation(val1, val2){
  const result = val1 * val2;
  return result;
}
const AyotoLength = 20
const AyotoHeight = 30
const AyotoResult = AyotoCalculation(parseFloat(AyotoLength), parseFloat(AyotoHeight))

console.log('Ayoto Calculation',AyotoResult )


// Tryangle Calculation

function TryangleCalculation(val1, val2){
  const result = (val1 * val2)/2;
  return result;
}
const TryangleLength = 20
const TryangleHeight = 30
const TryangleResult = TryangleCalculation(parseFloat(TryangleLength), parseFloat(TryangleHeight))

console.log('Tryangle Calculation',TryangleResult )



// Tryangle Calculation

function RoundCalculation(val){
  const result = Math.PI * val * val;
  return result;
}
const RoundLength = 20
const RoundResult = RoundCalculation(parseFloat(RoundLength))

console.log('Round Calculation',RoundResult )
