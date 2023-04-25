/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employee) {
   const record = {
        firstName:employee[0],
        familyName:employee[1],
        title: employee[2],
        payPerHour:employee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return record
}

function createEmployeeRecords(records) {
    const employeeRecords = []
    for (let record of records) {
        employeeRecords.push(createEmployeeRecord(record))
    }
    return employeeRecords
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate(eventDate) {
    let eventIn = this.timeInEvents.find(element => element.date === eventDate)
    let eventOut = this.timeOutEvents.find(element => element.date === eventDate)
    return (eventOut.hour - eventIn.hour)/ 100
}

function wagesEarnedOnDate(dateInput) {
    let hourWage = hoursWorkedOnDate.call(this, dateInput)
    
    return hourWage * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
   return srcArray.find(element => {
      return  element.firstName === firstName
    })
}

function calculatePayroll(arrayRecords) {
   let payRoll = arrayRecords.reduce((element, curr) => {
    return element + allWagesFor.call(curr)
   }, 0)
   return payRoll
}