const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const btnStart = document.querySelector(".btn-start");
const divGrandfather = document.querySelector(".divGrandfather");
const divFather = document.querySelector(".divFather");
const btnSend = document.querySelector("#btnSend");
const btnClean = document.querySelector("#btnClean");
const formCheckBoxes = document.querySelector(".checkBoxes");
const discoverResistance = document.querySelector("#discoverResistance");
const discoverColors = document.querySelector("#discoverColors");

const colors = [
  {
    number: "none",
    colorName: "None",
    color: "none",
    multiplier: "none",
    unitMeasure: "none",
    tolerance: "none",
    temperatureCoefficient: "none",
  },
  {
    number: 0,
    colorName: "Black",
    color: "#1f1e1eff",
    multiplier: 10 ** 0,
    unitMeasure: "\u2126",
    tolerance: "none",
    temperatureCoefficient: "250 ppm/k",
  },
  {
    number: 1,
    colorName: "Brown",
    color: "#6b3a3a",
    multiplier: 10 ** 1,
    unitMeasure: "\u2126",
    tolerance: "+- 1%",
    temperatureCoefficient: "100 ppm/k",
  },
  {
    number: 2,
    colorName: "Red",
    color: "#fa1a1aff",
    multiplier: 10 ** 2,
    unitMeasure: "\u2126",
    tolerance: "+- 2%",
    temperatureCoefficient: "50 ppm/k",
  },
  {
    number: 3,
    colorName: "Orange",
    color: "#f56f42",
    multiplier: 10 ** 3,
    unitMeasure: "K\u2126",
    tolerance: "none",
    temperatureCoefficient: "15 ppm/k",
  },
  {
    number: 4,
    colorName: "Yellow",
    color: "#efff17",
    multiplier: 10 ** 4,
    unitMeasure: "K\u2126",
    tolerance: "none",
    temperatureCoefficient: "25 ppm/k",
  },
  {
    number: 5,
    colorName: "Green",
    color: "#31e31e",
    multiplier: 10 ** 5,
    unitMeasure: "K\u2126",
    tolerance: "+- 0.5%",
    temperatureCoefficient: "20 ppm/k",
  },
  {
    number: 6,
    colorName: "Blue",
    color: "#0000ff",
    multiplier: 10 ** 6,
    unitMeasure: "M\u2126",
    tolerance: "+- 0.25%",
    temperatureCoefficient: "10 ppm/k",
  },
  {
    number: 7,
    colorName: "Violet",
    color: "#dd42f5",
    multiplier: 10 ** 7,
    unitMeasure: "M\u2126",
    tolerance: "+- 0.1%",
    temperatureCoefficient: "5 ppm/k",
  },
  {
    number: 8,
    colorName: "Gray",
    color: "#665f5fff",
    multiplier: 10 ** 8,
    unitMeasure: "M\u2126",
    tolerance: "+- 0.05%",
    temperatureCoefficient: "1 ppm/k",
  },
  {
    number: 9,
    colorName: "White",
    color: "#FFFFFF",
    multiplier: 10 ** 9,
    unitMeasure: "G\u2126",
    tolerance: "none",
    temperatureCoefficient: "none",
  },
  {
    number: "none",
    colorName: "Gold",
    color: "#d4af37",
    multiplier: 10 ** -1,
    unitMeasure: "\u2126",
    tolerance: "+- 5%",
    temperatureCoefficient: "none",
  },
  {
    number: "none",
    colorName: "Silver",
    color: "#c0c0c0",
    multiplier: 10 ** -2,
    unitMeasure: "\u2126",
    tolerance: "+- 10%",
    temperatureCoefficient: "none",
  },
];

const createInputsColors = () => {
  const divColor4 = document.createElement("div");
  const divColorFather = document.createElement("div");
  const numberOfColor4 = document.createElement("input");
  const label4 = document.createElement("label");

  const divColor5 = document.createElement("div");
  const numberOfColor5 = document.createElement("input");
  const label5 = document.createElement("label");

  const divColor6 = document.createElement("div");
  const numberOfColor6 = document.createElement("input");
  const label6 = document.createElement("label");
  const p = document.createElement("p");

  p.textContent = "How many color bands does the resistor have?";
  p.id = "pNumberColors"

  divColor4.className = "boxColors";
  divColor5.className = "boxColors";
  divColor6.className = "boxColors";
  divColorFather.className = "divColorFather";

  numberOfColor4.type = "checkbox";
  numberOfColor4.id = "numberOfColor4";
  label4.textContent = " Four colors ";

  numberOfColor5.type = "checkbox";
  numberOfColor5.id = "numberOfColor5";
  label5.textContent = " Five colors ";

  numberOfColor6.type = "checkbox";
  numberOfColor6.id = "numberOfColor6";
  label6.textContent = " Six colors ";

  formCheckBoxes.appendChild(p);
  formCheckBoxes.appendChild(divColorFather);

  divColorFather.appendChild(divColor4);
  divColor4.appendChild(numberOfColor4);
  divColor4.appendChild(label4);

  divColorFather.appendChild(divColor5);
  divColor5.appendChild(numberOfColor5);
  divColor5.appendChild(label5);

  divColorFather.appendChild(divColor6);
  divColor6.appendChild(numberOfColor6);
  divColor6.appendChild(label6);

  const unSelectInputColors = (input) => {
    if (input === numberOfColor4) {
      numberOfColor5.checked = false;
      numberOfColor6.checked = false;
      discoverColors.checked = false;
    }
    if (input === numberOfColor5) {
      numberOfColor4.checked = false;
      numberOfColor6.checked = false;
      discoverColors.checked = false;
    }
    if (input === numberOfColor6) {
      numberOfColor4.checked = false;
      numberOfColor5.checked = false;
      discoverColors.checked = false;
    }
  };

  numberOfColor4.addEventListener("click", () => {
    unSelectInputColors(numberOfColor4);
  });
  numberOfColor5.addEventListener("click", () => {
    unSelectInputColors(numberOfColor5);
  });
  numberOfColor6.addEventListener("click", () => {
    unSelectInputColors(numberOfColor6);
  });
};

const unCheckBoxInput = (input) => {
  if (input === discoverResistance) {
    if (discoverColors.checked == true) {
      location.reload();
    }
    if (discoverResistance.checked == false) {
      location.reload();
    }
  }

  if (input === discoverColors) {
    if (discoverColors.checked == false) {
      location.reload();
    }
    if (discoverResistance.checked == true) {
      location.reload();
    }
  }
};

discoverColors.addEventListener("click", () => {
  unCheckBoxInput(discoverColors);
});
discoverResistance.addEventListener("click", () => {
  unCheckBoxInput(discoverResistance);
});

const drawLeadsResistor = (initialX, endX) => {
  ctx.beginPath();
  ctx.lineTo(initialX, 120);
  ctx.lineTo(endX, 120);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 5;
  ctx.stroke();
};

const drawResistor2 = (initialX, endX) => {
  ctx.fillStyle = "#3489eb";
  const sizeResistor2 = { x: initialX, y: 90 };
  ctx.fillRect(sizeResistor2.x, sizeResistor2.y, 90 + endX, 60);
};

const selectedColors = [];
const selectedColors2 = [];

const drawBands = (number) => {
  if (number === 4) {
    for (i = 203; i < 356; i += 30) {
      ctx.beginPath();
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);

      if (i == 203) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[0].value)
          : (ctx.strokeStyle = selectedColors2[0]);
      }
      if (i == 233) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[1].value)
          : (ctx.strokeStyle = selectedColors2[1]);
      }
      if (i === 263) {
        i += 44;
      }
      if (i === 307) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[2].value)
          : (ctx.strokeStyle = selectedColors2[2]);
      }
      if (i === 337) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[3].value)
          : (ctx.strokeStyle = selectedColors2[3]);
      }

      ctx.lineWidth = 15;
      ctx.stroke();
    }

    for (i = 196; i <= 354; i += 15) {
      ctx.beginPath(); // Evita que a proxima linha não pegue a anterior
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (i == 271) {
        i += 43;
      }
    }
  }

  if (number === 5) {
    for (i = 174; i < 360; i += 32) {
      ctx.beginPath();
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);
      if (i == 174) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[0].value)
          : (ctx.strokeStyle = selectedColors2[0]);
      }
      if (i == 206) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[1].value)
          : (ctx.strokeStyle = selectedColors2[1]);
      }
      if (i == 238) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[2].value)
          : (ctx.strokeStyle = selectedColors2[2]);
      }
      if (i == 270) {
        i += 33;
      }
      if (i == 303) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[3].value)
          : (ctx.strokeStyle = selectedColors2[3]);
      }
      if (i == 335) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[4].value)
          : (ctx.strokeStyle = selectedColors2[4]);
      }
      ctx.lineWidth = 15;
      ctx.stroke();
    }

    for (i = 166; i <= 344; i += 16) {
      ctx.beginPath(); // Evita que a proxima linha não pegue a anterior
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (i == 278) {
        i += 33;
      }
    }
  }

  if (number === 6) {
    for (i = 175; i < 390; i += 32) {
      ctx.beginPath();
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);
      if (i == 175) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[0].value)
          : (ctx.strokeStyle = selectedColors2[0]);
      }
      if (i == 207) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[1].value)
          : (ctx.strokeStyle = selectedColors2[1]);
      }
      if (i == 239) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[2].value)
          : (ctx.strokeStyle = selectedColors2[2]);
      }
      if (i == 271) {
        i += 31;
      }
      if (i == 302) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[3].value)
          : (ctx.strokeStyle = selectedColors2[3]);
      }
      if (i == 334) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[4].value)
          : (ctx.strokeStyle = selectedColors2[4]);
      }
      if (i == 366) {
        selectedColors.length !== 0
          ? (ctx.strokeStyle = selectedColors[5].value)
          : (ctx.strokeStyle = selectedColors2[5]);
      }
      ctx.lineWidth = 15;
      ctx.stroke();

      if (i == 276) {
        i += 30;
      }
    }

    for (i = 167; i <= 388; i += 16) {
      ctx.beginPath(); // Evita que a proxima linha não pegue a anterior
      ctx.lineTo(i, 90);
      ctx.lineTo(i, 150);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (i == 279) {
        i += 31;
      }
    }
  }
};

const createselectedColors = () => {
  const generateId = () => Math.round(Math.random() * 1000);
  if (!divFather) {
    console.error("O elemento 'divFather' não foi encontrado no DOM.");
    return;
  }

  if (numberOfColor4.checked === true) {
    for (let i = 0; i < 4; i++) {
      const divChild = document.createElement("div");
      const pBandsName = document.createElement("p");
      const select = document.createElement("select");

      select.id = generateId();
      select.name = "marker";
      divChild.className = "divChild";
      pBandsName.className = "pBandsName";

      divFather.appendChild(divChild);
      divChild.appendChild(pBandsName);
      divChild.appendChild(select);

      colors.forEach((colorName) => {
        const isNotExcludedColors =
          colorName.colorName !== "Gold" && colorName.colorName !== "Silver";
        const isExcludedColors =
          colorName.colorName == "Gold" || colorName.colorName == "Silver";
        const isNotTolerance =
          colorName.colorName !== "Black" &&
          colorName.colorName !== "Orange" &&
          colorName.colorName !== "Yellow" &&
          colorName.colorName !== "White";

        let option = document.createElement("option");

        if (i == 0) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
            resistanceValue = colorName.number;

            if (colorName.colorName == "None") {
              option.value = "";
              option.textContent = "First band";
              option.disabled = true;
              option.selected = true;
              option.hidden = true;
            }
          }
        }

        if (i == 1) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Second band";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (i == 2) {
          if (isExcludedColors || isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Multiplier";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (i == 3) {
          if (isNotTolerance) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Tolerance";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (option.textContent) {
          select.appendChild(option);
          

        }
      });
      selectedColors.push(select);
      console.log(select)
    
    }

    drawLeadsResistor(120, 420);
    drawResistor2(180, 90);
  }

  if (numberOfColor5.checked === true) {
    for (let i = 0; i < 5; i++) {
      const divChild = document.createElement("div");
      const pBandsName = document.createElement("p");
      const select = document.createElement("select");

      select.id = generateId();
      select.name = "marker";
      divChild.className = "divChild";
      pBandsName.className = "pBandsName";

      divFather.appendChild(divChild);
      divChild.appendChild(pBandsName);
      divChild.appendChild(select);

      colors.forEach((colorName) => {
        const isNotExcludedColors =
          colorName.colorName !== "Gold" && colorName.colorName !== "Silver";
        const isExcludedColors =
          colorName.colorName == "Gold" || colorName.colorName == "Silver";
        const isNotTolerance =
          colorName.colorName !== "Black" &&
          colorName.colorName !== "Orange" &&
          colorName.colorName !== "Yellow" &&
          colorName.colorName !== "White";

        let option = document.createElement("option");

        if (i == 0) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "First band";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }
        if (i == 1 || i == 2) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Secod band";
            i == 1
              ? (option.textContent = "Second band")
              : (option.textContent = "Third band");
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }
        if (i == 3) {
          if (isExcludedColors || isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Multiplier";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (i == 4) {
          if (isNotTolerance) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }
          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Tolerance";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (option.textContent) {
          select.appendChild(option);
        }
      });
      selectedColors.push(select);
    }
    drawLeadsResistor(90, 420);
    drawResistor2(150, 120);
  }

  if (numberOfColor6.checked === true) {
    for (let i = 0; i < 6; i++) {
      const divChild = document.createElement("div");
      const pBandsName = document.createElement("p");
      const select = document.createElement("select");

      select.id = generateId();
      select.name = "marker";
      divChild.className = "divChild";
      pBandsName.className = "pBandsName";

      divFather.appendChild(divChild);
      divChild.appendChild(pBandsName);
      divChild.appendChild(select);

      colors.forEach((colorName) => {
        const isNotExcludedColors =
          colorName.colorName !== "Gold" && colorName.colorName !== "Silver";
        const isExcludedColors =
          colorName.colorName == "Gold" ||
          colorName.colorName == "Silver" ||
          colorName.colorName == "Black";
        const isNotTemperatureCoefficient =
          colorName.colorName !== "White" &&
          colorName.colorName !== "Gold" &&
          colorName.colorName !== "Silver";
        const isNotTolerance =
          colorName.colorName !== "Black" &&
          colorName.colorName !== "Orange" &&
          colorName.colorName !== "Yellow" &&
          colorName.colorName !== "White";
        let option = document.createElement("option");

        if (i == 0) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "First band";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }
        if (i == 1 || i == 2) {
          if (isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            i == 1
              ? (option.textContent = "Second band:")
              : (option.textContent = "Third band:");
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (i == 3) {
          if (isExcludedColors || isNotExcludedColors) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Multiplier";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (i == 4) {
          if (isNotTolerance) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Tolerance";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }
        if (i == 5) {
          if (isNotTemperatureCoefficient) {
            option.textContent = colorName.colorName;
            option.value = colorName.color;
            option.style.backgroundColor = colorName.color;
          }

          if (colorName.colorName == "None") {
            option.value = "";
            option.textContent = "Temperature Coefficient";
            option.disabled = true;
            option.selected = true;
            option.hidden = true;
          }
        }

        if (option.textContent) {
          select.appendChild(option);
        }
      });
      selectedColors.push(select);
    }

    drawLeadsResistor(90, 450);
    drawResistor2(150, 150);
  }

  const addListCheckBox = () => {
    if (numberOfColor4.checked === true) {
      drawBands(4);
    }

    if (numberOfColor5.checked === true) {
      drawBands(5);
    }

    if (numberOfColor6.checked === true) {
      drawBands(6);
    }
    const calculateResistance = () => {
      const pResistanceValue = document.querySelector("#resistanceValue");
      const pToleranceValue = document.querySelector("#toleranceValue");
      const pTemperatureCoefficientValue = document.querySelector("#temperatureCoefficientValue");
      let resistanceValue = "";
      let toleranceValue = "";
      let temperatureCoefficientValue = "";

      if (numberOfColor4.checked === true) {
        for (let i = 0; i < selectedColors.length; i++) {
          colors.forEach((color) => {
            switch (i) {
              case 0: //First color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 1: //Second color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 2: //Third color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue =
                    parseInt(resistanceValue) * color.multiplier;

                  resistanceValue = resistanceValue.toString();
                  if (resistanceValue < 1000) {
                    resistanceValue = resistanceValue + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000 + "K\u2126";
                  }

                  if (
                    resistanceValue > 1000 &&
                    resistanceValue < 10000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "K\u2126";
                  }

                  if (resistanceValue >= 10000 && resistanceValue < 1000000) {
                    resistanceValue =
                      resistanceValue / 1000 + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000 + "M\u2126";
                  }

                  if (
                    resistanceValue > 1000000 &&
                    resistanceValue < 10000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "M\u2126";
                  }

                  if (
                    resistanceValue >= 10000000 &&
                    resistanceValue < 1000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000 + color.unitMeasure;
                  }
                  if (
                    resistanceValue >= 1000000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000000 + "G\u2126";
                  }

                  if (
                    resistanceValue > 1000000000 &&
                    resistanceValue < 10000000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "G\u2126";
                  }

                  if (
                    resistanceValue >= 10000000000 &&
                    resistanceValue < 1000000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000000 + color.unitMeasure;
                  }
                }
                break;
              case 3: //Fourth color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue = `Resistance: ${resistanceValue}`
                  toleranceValue = `Tolerance: ${color.tolerance}`
                }
                break;
            }
          });
        }
      }

      if (numberOfColor5.checked === true) {
        for (let i = 0; i < selectedColors.length; i++) {
          colors.forEach((color) => {
            switch (i) {
              case 0: //First color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 1: //Second color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 2: //Third color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 3: //Fourth color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue =
                    parseInt(resistanceValue) * color.multiplier;

                  resistanceValue = resistanceValue.toString();
                  if (resistanceValue < 1000) {
                    resistanceValue = resistanceValue + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000 + "K\u2126";
                  }

                  if (
                    resistanceValue > 1000 &&
                    resistanceValue < 10000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "K\u2126";
                  }

                  if (resistanceValue >= 10000 && resistanceValue < 1000000) {
                    resistanceValue =
                      resistanceValue / 1000 + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000 + "M\u2126";
                  }

                  if (
                    resistanceValue > 1000000 &&
                    resistanceValue < 10000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "M\u2126";
                  }

                  if (
                    resistanceValue >= 10000000 &&
                    resistanceValue < 1000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000 + color.unitMeasure;
                  }
                  if (
                    resistanceValue >= 1000000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000000 + "G\u2126";
                  }

                  if (
                    resistanceValue > 1000000000 &&
                    resistanceValue < 10000000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "G\u2126";
                  }

                  if (
                    resistanceValue >= 10000000000 &&
                    resistanceValue < 1000000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000000 + color.unitMeasure;
                  }
                }
                break;
              case 4: //Fifth color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue = `Resistance: ${resistanceValue}`
                  toleranceValue = `Tolerance: ${color.tolerance}`
                }
                break;
            }
          });
        }
      }

      if (numberOfColor6.checked === true) {
        for (let i = 0; i < selectedColors.length; i++) {
          colors.forEach((color) => {
            switch (i) {
              case 0: //First color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 1: //Second color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 2: //Third color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue += +color.number;
                }
                break;
              case 3: //Fourth color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue =
                    parseInt(resistanceValue) * color.multiplier;

                  resistanceValue = resistanceValue.toString();
                  if (resistanceValue < 1000) {
                    resistanceValue = resistanceValue + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000 + "K\u2126";
                  }

                  if (
                    resistanceValue > 1000 &&
                    resistanceValue < 10000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "K\u2126";
                  }

                  if (resistanceValue >= 10000 && resistanceValue < 1000000) {
                    resistanceValue =
                      resistanceValue / 1000 + color.unitMeasure;
                  }

                  if (
                    resistanceValue >= 1000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000 + "M\u2126";
                  }

                  if (
                    resistanceValue > 1000000 &&
                    resistanceValue < 10000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "M\u2126";
                  }

                  if (
                    resistanceValue >= 10000000 &&
                    resistanceValue < 1000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000 + color.unitMeasure;
                  }
                  if (
                    resistanceValue >= 1000000000 &&
                    resistanceValue[1] == 0 &&
                    resistanceValue < 10000000000
                  ) {
                    resistanceValue =
                      parseInt(resistanceValue) / 1000000000 + "G\u2126";
                  }

                  if (
                    resistanceValue > 1000000000 &&
                    resistanceValue < 10000000000 &&
                    resistanceValue[1] !== 0
                  ) {
                    resistanceValue = parseInt(resistanceValue) / 100000000;
                    resistanceValue = resistanceValue.toString();
                    resistanceValue =
                      resistanceValue[0] + "." + resistanceValue[1] + "G\u2126";
                  }

                  if (
                    resistanceValue >= 10000000000 &&
                    resistanceValue < 1000000000000
                  ) {
                    resistanceValue =
                      resistanceValue / 1000000000 + color.unitMeasure;
                  }
                }
                break;
              case 4: //Fifth color band
                if (color.color === selectedColors[i].value) {
                  resistanceValue = `Resistance: ${resistanceValue}`
                  toleranceValue = `Tolerance: ${color.tolerance}`
                }
                break;
              case 5: //Sixth color band
                if (color.color === selectedColors[i].value) {
                  temperatureCoefficientValue = `Temperature coefficient: ${color.temperatureCoefficient}`
                 
                }
                break;
            }
          });
        }
      }
      return (pResistanceValue.textContent = resistanceValue, pToleranceValue.textContent = toleranceValue, 
          pTemperatureCoefficientValue.textContent = temperatureCoefficientValue);
    };
    calculateResistance();

    btnSend.value = "Clean";

    const cleanListCheckBox = () => {
      location.reload();

      btnSend.removeEventListener("click", cleanListCheckBox);
      //btnSend.addEventListener('click', createselectedColors);
    };

    btnSend.removeEventListener("click", addListCheckBox);
    btnSend.addEventListener("click", cleanListCheckBox);
  };

  btnSend.removeEventListener("click", createselectedColors);
  btnSend.addEventListener("click", addListCheckBox);
  btnSend.value = "Calculate";
};

const drawGrid = () => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#191919";
  for (i = 30; i < canvas.width; i += 30) {
    ctx.beginPath(); // Evita que a proxima linha não pegue a anterior
    ctx.lineTo(i, 0);
    ctx.lineTo(i, 600);
    ctx.stroke();

    ctx.beginPath(); // Evita que a proxima linha não pegue a anterior
    ctx.lineTo(0, i);
    ctx.lineTo(600, i);
    ctx.stroke();
  }
};

const reset = () => {
  location.reload();
};

const discoverColorsResistanceValue = () => {
  const pResistanceValue2 = document.querySelector("#resistanceValue");
  const pToleranceValue2 = document.querySelector("#toleranceValue");
  const pTemperatureCoefficientValue2 = document.querySelector("#temperatureCoefficientValue");

  let resistanceValue = "";
  let toleranceValue = "";
  let temperatureCoefficientValue = "";

  const input = document.createElement("input");
  input.placeholder = "Resistance value";
  input.id = "inputResistance"

  formCheckBoxes.appendChild(input);

  const selectUnitMeasure = document.createElement("select");
  selectUnitMeasure.name = "marker";
  selectUnitMeasure.id = "idUnitMeasure";
  formCheckBoxes.appendChild(selectUnitMeasure);

  let optionOhm = document.createElement("option");
  optionOhm.textContent = "\u2126";
  optionOhm.value = "\u2126";

  let optionKOhm = document.createElement("option");
  optionKOhm.textContent = "K\u2126";
  optionKOhm.value = "K\u2126";

  let optionMOhm = document.createElement("option");
  optionMOhm.textContent = "M\u2126";
  optionMOhm.value = "M\u2126";

  let optionGOhm = document.createElement("option");
  optionGOhm.textContent = "G\u2126";
  optionGOhm.value = "G\u2126";

  selectUnitMeasure.appendChild(optionOhm);
  selectUnitMeasure.appendChild(optionKOhm);
  selectUnitMeasure.appendChild(optionMOhm);
  selectUnitMeasure.appendChild(optionGOhm);

  const selectTolerance = document.createElement("select");
  selectTolerance.name = "marker";
  selectTolerance.id = "idTolerance";
  formCheckBoxes.appendChild(selectTolerance);

  const selectTemperatureCoefficient = document.createElement("select");
  selectTemperatureCoefficient.name = "marker";
  selectTemperatureCoefficient.id = "idTemperatureCoefficient";
  formCheckBoxes.appendChild(selectTemperatureCoefficient);

  colors.forEach((colorName) => {
    let optionTolerance = document.createElement("option");
    let optionTemperatureCoefficient = document.createElement("option");

    if (colorName.colorName == "None") {
      optionTolerance.value = "";
      optionTolerance.textContent = "Tolerance";
      optionTolerance.disabled = true;
      optionTolerance.selected = true;
      optionTolerance.hidden = true;

      optionTemperatureCoefficient.value = "";
      optionTemperatureCoefficient.textContent = "TemperatureCoefficient";
      optionTemperatureCoefficient.disabled = true;
      optionTemperatureCoefficient.selected = true;
      optionTemperatureCoefficient.hidden = true;
    }

    if (colorName.tolerance != "none") {
      optionTolerance.textContent = colorName.tolerance;
      optionTolerance.value = colorName.tolerance;
    }
    if (optionTolerance.textContent) {
      selectTolerance.appendChild(optionTolerance);
    }

    if (colorName.temperatureCoefficient != "none") {
      optionTemperatureCoefficient.textContent =
        colorName.temperatureCoefficient;
      optionTemperatureCoefficient.value = colorName.temperatureCoefficient;
    }
    if (optionTemperatureCoefficient.textContent) {
      selectTemperatureCoefficient.appendChild(optionTemperatureCoefficient);
    }
  });

  const addResistanceValue = () => {
    btnSend.value = "Clean";

    const cleanResistanceValue = () => {
      location.reload();

      btnSend.removeEventListener("click", cleanResistanceValue);
    };

    btnSend.removeEventListener("click", addResistanceValue);
    btnSend.addEventListener("click", cleanResistanceValue);
    let message = "Please, enter only numbers or '.' for decimal numbers";
    let message2 = "The value entered does not exist in resistors";
    const characters = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chosenCharacters = [];
    if (input.value.length <= 4) {
      for (i = 0; i <= input.value.length; i++) {
        characters.forEach((charcter) => {
          if (input.value[i] == charcter) {
            chosenCharacters.push(characters[i]);
          }
        });
      }
    }
    if (input.value.length > 4) {
      alert(message2);
    }
    if (input.value.length != chosenCharacters.length) {
      alert(message);
    }
    /*The first three/four bands for whole numbers*/
    if (input.value.length <= 3 && input.value[1] != ".") {
      for (i = 0; i < input.value.length; i++) {
        colors.forEach((number) => {
          if (input.value[i] == number.number) {
            if (i === 0 && selectedColors2.length == 0) {
              //First color band
              selectedColors2.push(number.color);
            }
            if (i === 1 && selectedColors2.length == 1) {
              //Second color band
              selectedColors2.push(number.color);
            }
            if (i === 2 && selectedColors2.length == 2) {
              //Third color band
              selectedColors2.push(number.color);
            }
          }
        });
      }

      if (selectedColors2.length <= 3) {
        //Multiplier
        if (selectUnitMeasure.value == "\u2126") {
          if (input.value.length <= 3) {
            selectedColors2.push("#1f1e1eff");
          }
        }
        if (selectUnitMeasure.value == "K\u2126") {
          if (input.value.length <= 3) {
            selectedColors2.push("#f56f42");
          }
        }
        if (selectUnitMeasure.value == "M\u2126") {
          if (input.value.length <= 3) {
            selectedColors2.push("#0000ff");
          }
        }
        if (selectUnitMeasure.value == "G\u2126") {
          if (input.value.length <= 3) {
            selectedColors2.push("#FFFFFF");
          }
        }
      }
      if (selectTolerance.value == "") {
        return alert(message2);
      }
    }
    if (input.value.length == 4) {
      return alert(message2);
    }

    /*The first three bands for decimal numbers*/
    if (input.value[1] == "." && input.value[0] == 0) {
      if (input.value[0] == 0) {
        if (selectedColors2.length == 0) {
          //First color band
          selectedColors2.push("#1f1e1eff");
        }

        if (selectedColors2.length == 1) {
          //Second color band
          if (input.value.length == 3) {
            colors.forEach((colorNumber) => {
              if (input.value[2] == colorNumber.number) {
                selectedColors2.push(colorNumber.color);
              }
            });
          }

          if (input.value.length == 4) {
            colors.forEach((colorNumber) => {
              if (input.value[3] == colorNumber.number) {
                selectedColors2.push(colorNumber.color);
              }
            });
          }
        }

        if (selectedColors2.length == 2) {
          //Multiplier
          if (input.value.length == 3) {
            if (selectUnitMeasure.value == "\u2126") {
              selectedColors2.push("#d4af37");
            }
            if (selectUnitMeasure.value == "K\u2126") {
              selectedColors2.push("#fa1a1aff");
            }
            if (selectUnitMeasure.value == "M\u2126") {
              selectedColors2.push("#31e31e");
            }
            if (selectUnitMeasure.value == "G\u2126") {
              selectedColors2.push("#665f5fff");
            }
          }

          if (input.value.length == 4) {
            if (input.value[1] == ".") {
              if (selectUnitMeasure.value == "\u2126") {
                selectedColors2.push("#c0c0c0");
              }
              if (selectUnitMeasure.value == "K\u2126") {
                selectedColors2.push("#6b3a3a");
              }
              if (selectUnitMeasure.value == "M\u2126") {
                selectedColors2.push("#efff17");
              }
              if (selectUnitMeasure.value == "G\u2126") {
                selectedColors2.push("#dd42f5");
              }
            }
          }
        }

        if (selectTolerance.value == "") {
          return alert(message2);
        }
      }
    }
    if (input.value[1] == "." && input.value[0] != 0) {
      alert(message2);
    }

    if (selectedColors2.length <= 4) {//Tolerance
      colors.forEach((tolerance) => {
        if (selectTolerance.value == tolerance.tolerance) {
          selectedColors2.push(tolerance.color);
        }
      });
    }

    colors.forEach((temperatureCoefficien) => {
      //Temperature coefficient
      if (
        selectTemperatureCoefficient.value ==
        temperatureCoefficien.temperatureCoefficient
      ) {
        selectedColors2.push(temperatureCoefficien.color);
      }
    });
    resistanceValue = `Resistance: ${input.value + selectUnitMeasure.value}`
    toleranceValue = `Tolerance ${selectTolerance.value}`
    if(selectTemperatureCoefficient.value != ""){
      temperatureCoefficientValue = `Temperature coefficient: ${selectTemperatureCoefficient.value}`
    }
     

    if (input.value.length == 2 || input.value[1] == ".") {
      drawLeadsResistor(120, 420);
      drawResistor2(180, 90);
      drawBands(4);
    }
    if (input.value.length == 3 && input.value[1] != ".") {
      drawLeadsResistor(90, 420);
      drawResistor2(150, 120);
      drawBands(5);
    }
    if (
      input.value.length == 3 &&
      input.value[1] != "." &&
      selectTemperatureCoefficient.value != ""
    ) {
      drawLeadsResistor(90, 450);
      drawResistor2(150, 150);
      drawBands(6);
    }
    return (pResistanceValue2.textContent = resistanceValue, pToleranceValue2.textContent = toleranceValue, 
        pTemperatureCoefficientValue2.textContent = temperatureCoefficientValue);
  };

  btnSend.removeEventListener("click", discoverColorsResistanceValue);
  btnSend.addEventListener("click", addResistanceValue);
};



const init = () => {
  drawGrid();
  btnSend.addEventListener("click", createselectedColors);
  discoverResistance.addEventListener("click", () => {
    createInputsColors();
  });
  btnClean.addEventListener("click", reset);
  discoverColors.addEventListener("click", discoverColorsResistanceValue);
 
}

init();
