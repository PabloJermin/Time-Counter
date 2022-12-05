const Months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const heading = document.querySelectorAll(".deadline-format h4");
const aliveDead = document.querySelector(".alive");

// Call the given time
// let futureDate = new Date(2022,5,9, 8,0,0);  


// Call the current date of the computer plus 10days
let tempDate = new Date();
let tempYear =tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 20, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes(); 
const date = futureDate.getDate();
let day = futureDate.getDay();

day = (weekdays[day-1]);
  

let month = futureDate.getMonth();
month = (Months[month-1]);

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`

// future time in milisecs
const futureTime = futureDate.getTime();
// console.log(futureTime)

function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    // console.log(t);


    // 1s = 1000mls
    // 1m = 60s
    // 1hr = 60min
    // 1day = 24hr

    // calculating mls in 1 day

    const oneDay = 24*60*60*1000;
    const oneHr = 60*60*1000;
    const oneMin = 60*1000;

    // calculating the days
    let days = t/oneDay
    days = Math.floor(days)
    // console.log(days);

    // calculating for hours
    let hours = (t%oneDay) / oneHr
    hours = Math.floor(hours)
    // console.log(hours);

    // calculating for minutes
    let mins = Math.floor((t%oneHr / oneMin));
    // console.log(mins);

    // calculating for seconds
    let sec = Math.floor((t%oneMin / 1000));
    // console.log(sec);


    // setting arays for values
function zero (ite){
    if( ite < 10){
        return (ite = `0${ite}`);
    }
    return ite;
}

    let array =[days, hours, mins, sec]

   heading.forEach(function(lit, index){
    lit.textContent = zero(array[index])
   })

   if ( t< 0){
       clearInterval(countdown);
       deadline.innerHTML = `${""}`
    //    `<h2 class="alert">Sorry, You missed the giveaway
    //    </h2>`
       aliveDead.classList.remove("alive");
       aliveDead.classList.add("dead");
   }
}

// setting the countdown

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();