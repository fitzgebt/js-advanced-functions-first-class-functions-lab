// Code your solution in this fil
const returnFirstTwoDrivers = (arr) => {
    const innerArr = [arr[0], arr[1]]
    return innerArr 
}
const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (value) {
       return int * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, driverFn) {
    return driverFn(arr)
}