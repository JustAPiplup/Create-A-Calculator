// Create a Calculator Module Project

// Velocity function
document.getElementById("velo-btn").addEventListener("click", calSpeed);

function calSpeed() {
  // Input
  var input1 = +document.getElementById("D").value;
  var input2 = +document.getElementById("t").value;

  // Process
  var speed = input1 / input2;
  var round = speed.toFixed(2);
  speed = round;

  // Output
  document.getElementById("d-output").innerHTML = input1;
  document.getElementById("t-output").innerHTML = input2;
  document.getElementById("D").value = "";
  document.getElementById("t").value = "";

  document.getElementById("v-output").innerHTML = speed;
}

// Acceleration function

document.getElementById("Acce-btn").addEventListener("click", calAcce);

function calAcce() {
  // Input
  var Ainput1 = +document.getElementById("Vf").value;
  var Ainput2 = +document.getElementById("Vi").value;
  var Ainput3 = +document.getElementById("t2").value;

  // Process
  var Acceleration = (Ainput1 - Ainput2) / Ainput3;
  var round1 = Acceleration.toFixed(2);
  Acceleration = round1;

  // Output
  document.getElementById("vf-output").innerHTML = Ainput1;
  document.getElementById("vi-output").innerHTML = Ainput2;
  document.getElementById("t-output2").innerHTML = Ainput3;
  document.getElementById("Vf").value = "";
  document.getElementById("Vi").value = "";
  document.getElementById("t2").value = "";

  document.getElementById("a-output").innerHTML = Acceleration;
}

// Force Function

document.getElementById("force-btn").addEventListener("click", calForce);

function calForce() {
  // Input
  var Finput1 = +document.getElementById("m").value;
  var Finput2 = +document.getElementById("a").value;

  // Process
  var force = Finput1 * Finput2;
  var round2 = force.toFixed(1);
  force = round2;

  // Output
  document.getElementById("mass-output").innerHTML = Finput1;
  document.getElementById("a-output2").innerHTML = Finput2;
  document.getElementById("m").value = "";
  document.getElementById("a").value = "";

  document.getElementById("f-output").innerHTML = force;
}

// Force Gravity Function

document.getElementById("gravity-btn").addEventListener("click", calForceg);

function calForceg() {
  // Input
  var Fginput = +document.getElementById("m2").value;

  // Process
  var forceG = Fginput * 9.81;
  var round = forceG.toFixed(1);
  forceG = round;

  // Output
  document.getElementById("mass-output2").innerHTML = Fginput;

  document.getElementById("m2").value = "";

  document.getElementById("fg-output").innerHTML = forceG;
}

// Work Function

document.getElementById("work-btn").addEventListener("click", calWork);

function calWork() {
  // Input
  var Winput1 = +document.getElementById("f-input").value;
  var Winput2 = +document.getElementById("d-input").value;

  // Process
  var work = Winput1 * Winput2;
  var round = work.toFixed(1);
  work = round;

  // Output
  document.getElementById("f-output2").innerHTML = Winput1;
  document.getElementById("d-output2").innerHTML = Winput2;
  document.getElementById("f-input").value = "";
  document.getElementById("d-input").value = "";

  document.getElementById("w-output").innerHTML = work;
}

// Potential Energy Function
document.getElementById("Ep-btn").addEventListener("click", calEnergy);

function calEnergy() {
  // Input
  var Epinput1 = +document.getElementById("h-input").value;
  var Epinput2 = +document.getElementById("m3").value;

  // Process
  var Energy = Epinput2 * 9.81 * Epinput1;
  var round = Energy.toFixed(1);
  Energy = round;

  // Output
  document.getElementById("h-output").innerHTML = Epinput1;
  document.getElementById("mass-output3").innerHTML = Epinput2;
  document.getElementById("h-input").value = "";
  document.getElementById("m3").value = "";

  document.getElementById("Ep-output").innerHTML = Energy;
}

// Kinetic Energy Function
document.getElementById("Ek-btn").addEventListener("click", calEnergyk);

function calEnergyk() {
  // Input
  var Ekinput1 = +document.getElementById("v-input").value;
  var Ekinput2 = +document.getElementById("m4").value;

  // Process
  var Energyk = (1 / 2) * Ekinput2 * (Ekinput1 * Ekinput1);
  var round = Energyk.toFixed(1);
  Energyk = round;

  // Output
  document.getElementById("v-output2").innerHTML = Ekinput1;
  document.getElementById("mass-output4").innerHTML = Ekinput2;
  document.getElementById("v-input").value = "";
  document.getElementById("m4").value = "";

  document.getElementById("Ek-output").innerHTML = Energyk;
}

// Mechanical Energy Function
document.getElementById("Em-btn").addEventListener("click", calEnergym);

function calEnergym() {
  // Input
  var Eminput1 = +document.getElementById("Ep-input").value;
  var Eminput2 = +document.getElementById("Ek-input").value;

  // Process
  var Energym = Eminput2 + Eminput1;
  var round = Energym.toFixed(1);

  // Output
  document.getElementById("Ep-output2").innerHTML = Eminput1;
  document.getElementById("Ek-output2").innerHTML = Eminput2;
  document.getElementById("Ep-input").value = "";
  document.getElementById("Ek-input").value = "";

  document.getElementById("Em-output").innerHTML = round;
}

// Effciency Energy Function
document.getElementById("Eff-btn").addEventListener("click", calEfficiency);

function calEfficiency() {
  // Input
  var Effinput1 = +document.getElementById("Win-input").value;
  var Effinput2 = +document.getElementById("Wout-input").value;

  // Process
  var Eff = (Effinput2 / Effinput1) * 100;
  var round = Eff.toFixed(0);

  // Output
  document.getElementById("Win-output").innerHTML = Effinput1;
  document.getElementById("Wout-output").innerHTML = Effinput2;
  document.getElementById("Win-input").value = "";
  document.getElementById("Wout-input").value = "";

  document.getElementById("percent-output").innerHTML = round;
}

// Light and Dark Mode

// Dark Mode Button
document.getElementById("darkmode-btn").addEventListener("click", dark);

function dark() {
  document.getElementById("the-html").classList.add("darkmode");
  document.getElementById("table").classList.add("darkmode2");
  document.getElementById("table2").classList.add("darkmode2");
  document.getElementById("table3").classList.add("darkmode2");
  document.getElementById("table4").classList.add("darkmode2");
  document.getElementById("the-body").classList.add("darkmode3");
  document.getElementById("div").classList.add("darkmode4");
}

// Light mode Button
document.getElementById("lightmode-btn").addEventListener("click", light);

function light() {
  document.getElementById("the-html").classList.remove("darkmode");
  document.getElementById("table").classList.remove("darkmode2");
  document.getElementById("table2").classList.remove("darkmode2");
  document.getElementById("table3").classList.remove("darkmode2");
  document.getElementById("table4").classList.remove("darkmode2");
  document.getElementById("the-body").classList.remove("darkmode3");
  document.getElementById("div").classList.remove("darkmode4");
}
