let king = ""
let queen = ""
let resultImage = ["pic/friends.png", "pic/lovers.png", "pic/affectionative.png",
  "pic/kalyanam.png", "pic/enemies.png", "pic/Sisterr.png"
];
console.log(resultImage);

let flamesObject = {
  0: 'Friends',
  1: 'Love',
  2: 'Affection',
  3: 'Married',
  4: 'Enemies!!',
  5: 'Sister',
}

function predict() {
  king = document.getElementById("kingName").value;
  queen = document.getElementById("queenName").value;

  let kingArray = king.split('');
  let queenArray = queen.split('');

  console.log(kingArray, queenArray)
  let uniqueValue = 0;
  if (kingArray.length > queenArray.length) {
    uniqueValue = getUniqueChar(kingArray, queenArray);
  } else {
    uniqueValue = getUniqueChar(queenArray, kingArray);
  }

  let relationship = getRelationship(uniqueValue);
  let imageSrc = resultImage[relationship];
  console.log(imageSrc);
  console.log(relationship);

  let mainElement = document.getElementById("mainInterface");
  mainElement.classList.add("hide");
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = flamesObject[relationship];
  let imageElement = document.getElementById("resultImage");
  console.log(imageSrc, imageElement);
  imageElement.src = imageSrc;
}

function getUniqueChar(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let foundIndex = array2.indexOf(array1[i]);
    if (foundIndex >= 0) {
      array2[foundIndex] = 0;
      array1[i] = 0;
    }
  }
  let combinedArray = array1.concat(array2);
  console.log(combinedArray);

  let resultArray = [];
  for (let i = 0; i < combinedArray.length; i++) {
    if (combinedArray[i] != 0) {
      resultArray.push(combinedArray[i]);
    }
  }
  return resultArray.length;
}

function getRelationship(uniqueValue) {

  if (uniqueValue > 1) {
    var flames = "FLAMES";
    c = 0;
    l = 1;
    for (i = 0; flames.length != 1; i++) {
      if (l == uniqueValue) {
        if (c >= flames.length) {
          c = 0;
        }
        flames = replaceAt(flames, c, "");
        l = 1;
      }
      if (c >= flames.length) {
        c = 0;
      }
      l++;
      c++;
    }
    switch (flames) {
      case 'F':
        flames = 0;
        break;
      case 'L':
        flames = 1;
        break;
      case 'A':
        flames = 2;
        break;
      case 'M':
        flames = 3;
        break;
      case 'E':
        flames = 4;
        break;
      case 'S':
        flames = 5;
        break;
    }
  }
  if (uniqueValue == 1) {
    flames = 5;
  }
  if (uniqueValue == 0) {
    flames = "Its Same Name";
  }
  console.log("fl" + flames);
  return flames;
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
