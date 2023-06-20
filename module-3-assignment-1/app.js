
function dayOfTheWeek(date = null){
    if(date == null){
        return 'Please provide valid date format like YYYY-MM-DD'
    }

    let dateParse = new Date(date);
    let day = dateParse.getDay();

    if( day == 0){
        return "Sunday"
    }else if(day == 1){
        return "Monday";
    }else if(day == 2){
        return "Tuesday";
    }else if(day == 3){
        return "Wednesday";
    }else if(day == 4){
        return "Thursday";
    }else if(day == 5){
        return "Friday";
    }else if(day == 6){
        return "Saturday";
    }else{
        return "Wrong day number!";
    }
}

document.getElementById('dayOftheWeek').innerHTML = dayOfTheWeek(Date());

function sqrtRootOfsumOfAllNumberSquare(numbers = []){
    let sum = 0;

    for (let number of numbers) {
      sum += number * number;
    }
    return Math.sqrt(sum);

}

document.getElementById('squarRoot').innerHTML = sqrtRootOfsumOfAllNumberSquare([2, 2,4]);

function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}

document.getElementById('isPrime').innerHTML = isPrime(17);


function openWindow(url, width, height) {
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    var newWindow = window.open(url, '_blank', windowFeatures);
    
    return newWindow;
  }
//If uncomment then open window
//   openWindow('https://google.com', 500, 5000);
  
function detectBrowser() {
    var userAgent = navigator.userAgent;
    var browserName;
    var browserVersion;
  
    // Detect browser name and version
    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
      browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
      browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
      browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Opera") > -1) {
      browserName = "Opera";
      browserVersion = userAgent.match(/Opera\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
      browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
      browserName = "Internet Explorer";
      browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+\.\d+)/)[1];
    } else {
      browserName = "Unknown";
      browserVersion = "Unknown";
    }
  
    // Return the detected browser name and version
    return {
      name: browserName,
      version: browserVersion
    };
  }
  const detectBrowserInfo = detectBrowser();
  document.getElementById('detectBrowser').innerHTML = 'Browser Name : '+ detectBrowserInfo.name +"and Version "+ detectBrowserInfo.version;

  //Geo Location
function getUserLocation() {
    const navigator = window.navigator;
    const geolocation = navigator.geolocation;
  
    if (geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
      };
  
      geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
         
  
          console.log(`Your current location is ${latitude}, ${longitude}`);
        },
        (error) => {
          console.log(`Error getting location: ${error.message}`);
        },
        options,
      );
    } else {
      console.log("Geolocation API is not supported");
    }
  }

  getUserLocation();


  //Alert with coordinate
//   document.addEventListener('click', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     alert('Clicked at coordinates (x, y): ' + x + ', ' + y);
//   });

  //Keyboard key event
//   document.addEventListener('keydown', function(event) {
//     var keyCode = event.keyCode || event.which;
//     alert('Pressed key code: ' + keyCode);
//   });


  //MouseOut event image src change
var image = document.getElementById('myImage');

// Event handler for mouseover
image.addEventListener('mouseover', function() {
image.src = 'img/2.png';
});

//OnClick Event
function updateText(){
    const textInnerHtml = document.getElementById('updateText').innerHTML = 'Button Clicked!';
}



//Form with validation
var form = document.getElementById('myForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Validate name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
  } else if (!/^[A-Za-z]+$/.test(nameInput.value)) {
    nameError.textContent = 'Name should contain only letters';
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailError.textContent = 'Invalid email address';
  }

  // Validate password
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password should have a minimum length of 8 characters';
  } else if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
    passwordError.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, and one digit';
  }

  // Validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  }

  // If there are no errors, the form is valid
  if (!nameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
    // Form is valid, you can perform further actions (e.g., submit the form)
    console.log('Form submitted successfully');
  }
});

//CSS manupulation
var highlightButton = document.getElementById('highlightButton');
var myParagraph = document.getElementById('myParagraph');

highlightButton.addEventListener('click', function() {
  myParagraph.classList.add('highlight');
});


//Element create
var myList = document.getElementById('myList');

function createListItems() {
  for (var i = 1; i <= 5; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    myList.appendChild(listItem);
  }
}

createListItems();


//Change Image

function ChangeImgSrc(){
    var myImage = document.getElementById('originalImg');
    myImage.src = 'img/2.png';
}


//Change colour 
function changeTextColor() {
    var paragraphs = document.querySelectorAll('.myClass');
  
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'red';
    }
  }
  changeTextColor();

  //Axios get request 
  function sendGetRequest() {
    axios.get('https://api.example.com/data')
      .then(function (response) {
        // Handle the response data
        console.log(response.data);
      })
      .catch(function (error) {
        // Handle any errors
        console.error(error);
      });
  }


  //Axios POST request
  function sendPostRequest() {
    var data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };
  
    axios.post('https://api.example.com/submit', data)
      .then(function (response) {
        // Handle the response data
        console.log(response.data);
      })
      .catch(function (error) {
        // Handle any errors
        console.error(error);
      });
  }
  