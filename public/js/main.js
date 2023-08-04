const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector(".middle_layer");

const getInfo = async(e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if( cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=993f08323fbbd7b41b2dde531daffd8e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(data);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            // temp status
            if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68'></i>";
      }

        datahide.classList.remove('data_hide');
        } catch {
        city_name.innerText = `Plz enter correct city name`;
        datahide.classList.add('data_hide');
        }
    }
};

submitBtn.addEventListener('click', getInfo);

const day = document.getElementById("day");
const getCurrentDay = () => {
    var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thur";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    day.innerText = days;
};

getCurrentDay();

const today_date = document.getElementById("today_date");
const getCurrentDate = () => {
    var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ];

    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    today_date.innerText = `${date} ${month}`;
};

getCurrentDate();