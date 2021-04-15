function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  for(let index1 = 0; index1 < dezDaysList.length; index1 +=1) {
      let dayCalendar = document.createElement("li");
      dayCalendar.innerHTML = dezDaysList[index1];
      dayCalendar.className = "day";
      document.getElementById("days").appendChild(dayCalendar);
      if (dezDaysList[index1] === 24 || dezDaysList[index1] === 25 || dezDaysList[index1] === 31) {
        dayCalendar.className = "day holiday";
      }
      if (dezDaysList[index1] === 4 || dezDaysList[index1] === 11 || dezDaysList[index1] === 18 || dezDaysList[index1] === 25) {
        dayCalendar.className += " friday";
      }
  }
  function buttonCreation(string) {
   let buttonCreate = document.createElement("button");
   buttonCreate.innerHTML = string;
   buttonCreate.setAttribute("id", "btn-holiday");
   document.querySelectorAll(".buttons-container")[0].appendChild(buttonCreate);
  }
  buttonCreation("Feriados")

  let holiday = document.querySelectorAll(".holiday");

  document.getElementById("btn-holiday").addEventListener("click",changeBackgroundColor)

  function changeBackgroundColor() {
    for (let index3 = 0; index3 <holiday.length; index3 += 1 ){
      if (holiday[index3].style.backgroundColor !== "red"){

        holiday[index3].style.backgroundColor = "red"
      } else {
        holiday[index3].style.backgroundColor = "rgb(238,238,238)"
      }
    }
  }
  function buttonCreationfriday(string) {
    let buttonCreate = document.createElement("button");
    buttonCreate.innerHTML = string;
    buttonCreate.setAttribute("id", "btn-friday");
    document.querySelectorAll(".buttons-container")[0].appendChild(buttonCreate);
   }
   buttonCreationfriday("Sexta-feira")

   document.getElementById("btn-friday").addEventListener("click",changeFriday);
   let friday = document.querySelectorAll(".friday");
   
   
   let fridayArray = ["4", "11", "18", "25"];

  function changeFriday() {
    for (let index4 = 0; index4 < friday.length; index4 += 1 ){
      if(friday[index4].innerText !== "Sexta-feira!" ){

        friday[index4].innerText =  "Sexta-feira!";
      } else {
        friday[index4].innerText = fridayArray[index4];
      }
    }
  }

  function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '50px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();