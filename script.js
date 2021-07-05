/* .js files add interaction to your website */
var factList = [
  "According to the American Medical Women's Association, 'In other countries, 2 out of 3 girls may avoid school because they haven't been educated about their period.'", /*0*/
  "28% of girls in Uganda miss school when they are menstruating.", /*1*/
  "Nearly 1 in 5 American girls have either left school early or skipped school because they did not have access to period products.", /*2*/
  "Studies in Kenya have shown that school-age girls engage in transactional sex to pay for menstrual products; this increases their risk of experiencing violence, sexually transmitted infections, and other dangers.", /*3*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
myButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count = count+1;
  if (count == factList.length) {
    count = 0;
  }
}
