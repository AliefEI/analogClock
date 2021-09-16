const hourHandArrow = document.querySelector('.hourHand')
const minuteHandArrow = document.querySelector('.minuteHand')
const secondHandArrow = document.querySelector('.secondHand')

function clockFunction(){
  let today = new Date();

  let hour = today.getHours()
  let degHour = ((hour/12)*360) + 90
  hourHandArrow.style.transform = `rotate(${degHour}deg)`
  //console.log(hour)

  let second = today.getSeconds()
  let degSecond= ((second/60)*360) + 90
  secondHandArrow.style.transform = `rotate(${degSecond}deg)`
  //console.log(second)

  let min = today.getMinutes()
  let degMinute = ((min/60)*360)+ ((second/60)*6) + 90
  minuteHandArrow.style.transform = `rotate(${degMinute}deg)`
  //console.log(min)
}
const interval = setInterval(clockFunction, 1000)



 
