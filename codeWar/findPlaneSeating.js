// Đề bài yêu cầu
// @@ 1-20 phía trước @@ 21-40 phía giữa @@ 41-60 phía cuối
// @@ A-C bên trái    @@ D-F giữa	      @@ G-K bên phải
// '2B' phía trước bên trái
// - Cách làm: Phân loại từng vị trí số và chữ -> rồi join lại với nhau
// dùng if, arrays, string

function planeSeat(a) {
  let letter = "";
  let number = "";
  let positionNumber = "";
  let positionLetter = "";
  let arrStr = a.split("");

  for (let i = 0; i < arrStr.length; i++) {
    if (!isNaN(arrStr[i])) {
      number += arrStr[i];
    } else {
      letter += arrStr[i];
    }
  }

  number = parseInt(number);
  if (isNaN(number) || number < 1 || number > 60) {
    return "No Seat!!";
  }
  if (number >= 1 && number <= 20) {
    positionNumber = "Front";
  } else if (number >= 21 && number <= 40) {
    positionNumber = "Middle";
  } else if (number >= 41 && number <= 60) {
    positionNumber = "Back";
  } 

  if (letter >= "A" && letter <= "C") {
    positionLetter = "Left";
  } else if (letter >= "D" && letter <= "F") {
    positionLetter = "Middle";
  } else if (letter === "G" || letter === "H" || letter === "K") {
    positionLetter = "Right";
  } else {
    return "No Seat!!";
  }

  return `${positionNumber}-${positionLetter}`;
}
console.log(planeSeat("57I"));
