const dayInput = document.querySelector('#day-input')
const monthInput = document.querySelector('#month-input')
const yearInput = document.querySelector('#year-input')
const form = document.getElementById('form1')
const submitBtn = document.querySelector('.submitBtn')
const inputContainerDay = document.getElementById('inputContainer1')
const inputContainerMonth = document.getElementById('inputContainer2')
const inputContainerYear = document.getElementById('inputContainer3')
const dayErrorMsg = document.getElementById('dayErrorMsg')
const monthErrorMsg = document.getElementById('monthErrorMsg')
const yearErrorMsg = document.getElementById('yearErrorMsg')
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const yearOutput = document.querySelector('#year')
const monthOutput = document.querySelector('#month')
const dayOutput = document.querySelector('#day')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInputs()
    updateAge()
})

const setError = (element, errorMsg) => {
    element.innerHTML = errorMsg
}
const isEmpty = (element) => {
    return element.value.trim() == ''
}
const isTrueDay = (element) => {
    const day = parseInt(element.value)
    return day >=1 && day <= 31
}
const isTrueMonth = (element) => {
    const month = parseInt(element.value)
    return month >=1 && month <= 12
}
const isTrueYear = (element) => {
    const year = parseInt(element.value)
    return year <= currentYear
}

const validateInputs = () => {
    //Day Validation
    if(isEmpty(dayInput)){
        setError(dayErrorMsg, 'This field is required')
        inputContainerDay.classList.add('error')
    }
    else if(!isTrueDay(dayInput)){
        setError(dayErrorMsg, 'Must be a valid day')
        inputContainerDay.classList.add('error')
    }
    else{
        setError(dayErrorMsg, '')
        inputContainerDay.classList.remove('error')
    }

    //Month Validation
    if(isEmpty(monthInput)){
        setError(monthErrorMsg, 'This field is required')
        inputContainerMonth.classList.add('error')
    }
    else if(!isTrueMonth(monthInput)){
        setError(monthErrorMsg, 'Must be a valid month')
        inputContainerMonth.classList.add('error')
    }
    else{
        setError(monthErrorMsg, '')
        inputContainerMonth.classList.remove('error')
    }
    
    //Year Validation
    if(isEmpty(yearInput)){
        setError(yearErrorMsg, 'This field is required')
        inputContainerYear.classList.add('error')
    }
    else if(!isTrueYear(yearInput)){
        setError(yearErrorMsg, 'Must be a valid year')
        inputContainerYear.classList.add('error')
    }
    else{
        setError(yearErrorMsg, '')
        inputContainerYear.classList.remove('error')
    }
}

console.log(currentDate.getFullYear());

const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
  
    const yearsDiff = currentDate.getUTCFullYear() - birthDate.getUTCFullYear();
    const monthsDiff = currentDate.getUTCMonth() - birthDate.getUTCMonth();
    const daysDiff = currentDate.getUTCDate() - birthDate.getUTCDate();
  
    let years = yearsDiff;
    let months = monthsDiff;
    let days = daysDiff;
  
    // If the current day of the month is before the birth date's day,
    // adjust months and days accordingly
    if (daysDiff < 0) {
      months -= 1;
      const lastMonthDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), 0);
      days = lastMonthDate.getUTCDate() - birthDate.getUTCDate() + currentDate.getUTCDate();
    }
  
    // If the current month is before the birth month, adjust years and months accordingly
    if (monthsDiff < 0) {
      years -= 1;
      months = 12 - birthDate.getUTCMonth() + currentDate.getUTCMonth();
    }
  
    return {
      years: years,
      months: months,
      days: days
    };
  };
  
const updateHTML = (age) => {
    dayOutput.innerHTML = age.days.toString()
    monthOutput.innerHTML = age.months.toString()
    yearOutput.innerHTML = age.years.toString()
}
const updateAge = () => {
    const age = calculateAge(`${dayInput.value}/${monthInput.value}/${yearInput.value}`);
    console.log(`${dayInput.value}/${monthInput.value}/${yearInput.value}`);
    updateHTML(age)
}