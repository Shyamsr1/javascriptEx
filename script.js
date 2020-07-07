// 1. accept an array from user upto 10 numbers, take 1st number and check Prime or not

function checkPrimeorNot() {
  var sizeofarray = parseInt(document.getElementById("sizeofarray").value);
  console.log(sizeofarray);
  var ar = [sizeofarray],
    i,
    temp,
    fl;
  if (
    sizeofarray <= 0 ||
    sizeofarray === null ||
    sizeofarray === undefined ||
    sizeofarray > 10
  ) {
    alert("Array detail is invalid and enter number between 1 to 10");
  } else {
    for (i = 0; i < sizeofarray; i++) {
      temp = parseInt(prompt(`Entered array content : ${i + 1}`));
      ar[i] = temp;
      console.log(ar[i]);
    }
    document.getElementById("ar").innerHTML = "The array detail: " + ar;

    if (ar[0] === 0 || ar[0] < 0) {
      console.log(ar[0]);
      document.getElementById(
        "result"
      ).innerHTML = `Entered first array ${ar[0]} is not Prime.`;
    } else {
      //usage of flag to set the value and break n continue statements
      console.log(fl, ar[0]);
      fl = true;
      for (var i = 2; i < ar[0] - 1; i++) {
        if (ar[0] % i === 0) {
          fl = false;
          break;
        } else continue;
      }
      if (fl == true) {
        document.getElementById(
          "result"
        ).innerHTML = `Entered first array ${ar[0]} is Prime.`;
      } else
        document.getElementById(
          "result"
        ).innerHTML = `Entered first array ${ar[0]} is NOT Prime.`;
    }
  }
}

// 2. accept an array from user upto 10 items, Most frequent Item in an array

function mostFrequentItem() {
  var sizeofarray = parseInt(document.getElementById("sizeofarray2").value);
  console.log(sizeofarray);
  var ar = [sizeofarray],
    i,
    mf = 1,
    m = 0,
    item;
  if (
    sizeofarray <= 0 ||
    sizeofarray === null ||
    sizeofarray === undefined ||
    sizeofarray > 10 ||
    sizeofarray < 2
  ) {
    alert("Array detail is invalid, Please enter number between 2 to 10");
  } else {
    for (i = 0; i < sizeofarray; i++) {
      temp = parseInt(prompt(`Entered array content : ${i + 1}`));
      ar[i] = temp;
      console.log(ar[i]);
    }
    document.getElementById("ar2").innerHTML = "The array detail: " + ar;

    for (i = 0; i < ar.length; i++) {
      {
        for (let j = i; j < ar.length; j++) {
          if (ar[i] == ar[j]) m++;
          if (mf < m) {
            mf = m;
            item = ar[i];
          }
        }
        m = 0;
      }
    }
    document.getElementById(
      "result2"
    ).innerHTML = `${item}, gets repeated ${mf} time /s.`;
  }
}

//3. Accept string and swap the case
function swapCharac() {
  var textcontent1 = document.getElementById("textcontent").value;
  var str = "",
    i;

  // to check for any number in the statement and ASCII values of AtoZ and atoz = 65 to 90 and 97 to 122
  console.log(Number.isNaN(parseInt(textcontent1)));
  if (!Number.isNaN(parseInt(textcontent1))) {
    alert(
      "The content cannot begin with a number and please enter only string !"
    );
    return false;
  } else {
    for (i = 0; i < textcontent1.length; i++) {
      console.log(textcontent1.charCodeAt(i), textcontent1.charAt(i));
      if (
        textcontent1.charCodeAt(i) >= 65 &&
        textcontent1.charCodeAt(i) <= 90
      ) {
        str += textcontent1.charAt(i).toLowerCase();
      } else if (
        textcontent1.charCodeAt(i) >= 97 &&
        textcontent1.charCodeAt(i) <= 122
      ) {
        str += textcontent1.charAt(i).toUpperCase();
      }
      // for all the empty space and spl characters..
      else str += textcontent1.charAt(i);
    }
  }
  document.getElementById("ar3").innerHTML =
    "The original string : " + ">>" + textcontent1;
  document.getElementById("result3").innerHTML =
    "The case swapped string : " + ">>" + str;
}

//4.Accept array and find sum of squares
function sumofSq() {
  var size = parseInt(document.getElementById("sizeofarray3").value);
  var ar1 = [size],
    i,
    temp,
    sum = 0;
  if (size <= 0 || size === null || size === undefined || size > 10 || size<2) {
    alert("Please enter number between 2 to 10 only");
    return false;
  } else {
    for (i = 0; i < size; i++) {
      temp = parseInt(prompt(`Entered array size : ${i + 1}`));
      ar1[i] = temp;
      if (!isNaN(ar1[i])) {
        sum += ar1[i] * ar1[i];
      } else {
        alert("The entered content is not proper");
        return false;
      }
    }
    document.getElementById("ar4").innerHTML =
      "The size of array :" + size + "<br>";
  }
  document.getElementById("result4").innerHTML =
    "The sum of squares of the array content is : " + sum;
}

//5. Check odd or even from 1 to 15.
function checkoddorEven() {
  var li = "",
    i;
  for (i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
      li += `<li> ${i} number is even </li>`;
    } else {
      li += `<li> ${i} number is odd </li>`;
    }
  }
  document.getElementById("list").innerHTML = li;
}

//6.Truncate the string from position mentioned
function truncString() {
  var newstr = "",
    i,
    pos;
  var str1 = document.getElementById("str").value;
  var sa = parseInt(document.getElementById("sizeofarray4").value);
  console.log(sa);
  if(sa==0||sa==null||sa==undefined||sa==-0||Number.isNaN(sa)==true||sa<0){
    alert("Please enter proper position detail");
    return false;
  }

  if (sa < str1.length) {
    newstr = str1.substring(0, sa);
    document.getElementById("ar6").innerHTML = "The original text : " + str1;
    document.getElementById("result6").innerHTML =
      "The truncated text: " + newstr + "****";
  } else {
    document.getElementById("result6").innerHTML =
      "Mismatch of size and string length!";
  }
}

//  7. Find the larger number after getting 2 numbers
function findLarge() {
  var no1 = parseFloat(document.getElementById("num1").value);
  var no2 = parseFloat(document.getElementById("num2").value);
  console.log(no1, no2);

  if (no1 > no2) {
    document.getElementById(
      "result7"
    ).innerHTML = `First Number "${no1}" is greater than Second Number "${no2}"`;
  } else if (no2 > no1) {
    document.getElementById(
      "result7"
    ).innerHTML = `Second Number "${no2}" is larger than First Number "${no1}"`;
  } else if ((no2 = no1)) {
    document.getElementById(
      "result7"
    ).innerHTML = `Second Number "${no2}" is equal to First Number "${no1}"`;
  } else {
    document.getElementById(
      "result7"
    ).innerHTML = `Please check the provided numbers`;
  }
}

//8. Use (for in)loop to read Object from an Array and Sort Alphabetically
function sortObjects() {
  var size = parseInt(document.getElementById("q8Size").value);
  console.log(size);
  if (
    size <= 0 ||
    size === null ||
    size === undefined ||
    size > 10 ||
    size ==-0 ||
    Number.isNaN(size)==true
  ) {
    alert("Array detail is invalid and enter number between 1 to 10");
    return false;
  }
  

  class obj {
    
    constructor(str) {
      this.str = str;
    
    }
  }
  
  var i,
    tempStr,
    tempNum,
    arr = [],
    arrOriginal = "",
    arrString = "",
    arrNum = "";
  if (
    size >= 20 ||
    size == NaN ||
    size == undefined ||
    size == 0 ||
    size == -0
  ) {
    document.getElementById("q8Result").style.color;
    document.getElementById("q8Result").innerHTML = "Enter valid number";
    
  } else {
    for (i = 0; i < size; i++) {
      tempStr = prompt(`Enter the string for object ${i + 1}`);
      arr[i] = new obj(tempStr);
    }
    
    for (const index in arr) {
      const object = arr[index];
      arrOriginal += "{";
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          console.log(key, element);
          arrOriginal +=  element ;
        }
      }
      arrOriginal += "},<br>";
    }
    document.getElementById("q8Original").innerHTML =
      "Original array of objects : " + "["+ arrOriginal + "]";

    arr.sort((a, b) => {
      var x = a.str.toLowerCase(),
        y = b.str.toLowerCase();
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
    for (const index in arr) {
      const object = arr[index];
      arrString += "{";
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          console.log(key, element);
          arrString +=  element;
        }
      }
      arrString += "},<br>";
    }
    document.getElementById("q8String").innerHTML =
      "<b><u>The Alphabetically sorted objects from the array  :</u></b>" +"<br>"+ arrString;
    
  }
}


//9. Print Javascript in the desired pattern
function printJavascript() {
  var str = new String("Javascript");
  var ns = "",
    res = "",
    i;
  for (i of str) {
    ns += i;
    res += ns + "<br>";
  }
  document.getElementById("result9").innerHTML = res;
}

//10. Print the pattern as desired :
function printPattern() {
  var arsize = parseInt(document.getElementById("size").value);
  var i,
    j,
    res = "";
  if (
    arsize <= 0 ||
    arsize == undefined ||
    arsize == null ||
    arsize > 20 ||
    Number.isNaN(arsize)==true||
    arsize == -0
  ) {
    console.log(arsize);
    alert("Please enter a number between 1 to 20");
    return false;
  }
  if (arsize <= 20) {
    console.log(arsize);
    for (i = 0; i <= arsize; i++) {
      for (j = 0; j < i; j++) {
        console.log(i, j);
        res += "*";
      }
      res += "<br>";
    }
    document.getElementById("result10").innerHTML = res;
  }
}


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
