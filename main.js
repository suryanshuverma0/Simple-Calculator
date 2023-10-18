function funcNumber(value) {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue + value;
}

function clearInput() {
  document.getElementById("result").value = "";
}

function backspaceResult() {
  const resultValue = document.getElementById("result").value;
  document.getElementById("result").value = resultValue.slice(0, -1);
}

function finalResult() {
  const finalExpression = document.getElementById("result").value;
  try {
    document.getElementById("result").value = eval(finalExpression);
  } catch {
    document.getElementById("result").value = "0";
  }
}

function findSqrt() {
  const finalExpression = document.getElementById("result").value;
  try {
    document.getElementById("result").value = Math.sqrt(finalExpression);
  } catch {
    document.getElementById("result").value = "0";
  }
}

function findPercentage() {
  const finalExpression = document.getElementById("result").value;
  try {
    document.getElementById("result").value = finalExpression / 100;
  } catch {
    document.getElementById("result").value = "0";
  }
}

function trigonometricEvaluation(event) {
  const finalExpression = document.getElementById("result").value;
  const targetId = event.target.id;
  if (targetId == "sin") {
    try {
      const finalExpressionRadian = (finalExpression * Math.PI) / 180;
      document.getElementById("result").value = Math.sin(finalExpressionRadian);
    } catch {
      document.getElementById("result").value = "0";
    }
  } else if (targetId == "cos") {
    try {
      const finalExpressionRadian = (finalExpression * Math.PI) / 180;
      document.getElementById("result").value = Math.cos(finalExpressionRadian);
    } catch {
      document.getElementById("result").value = "0";
    }
  } else if (targetId == "tan") {
    try {
      const finalExpressionRadian = (finalExpression * Math.PI) / 180;
      document.getElementById("result").value = Math.tan(finalExpressionRadian);
    } catch {
      document.getElementById("result").value = "0";
    }
  }
}

function power(event) {
  const finalExpression = parseFloat(document.getElementById("result").value);
  const targetButtonId = event.target.id;
  if (targetButtonId == "power-square") {
    try {
      document.getElementById("result").value = Math.pow(finalExpression, 2);
    } catch {
      document.getElementById("result").value = "0";
    }
  } else if (targetButtonId == "power-inverse") {
    try {
      document.getElementById("result").value = Math.pow(finalExpression, -1);
    } catch {
      document.getElementById("result").value = "0";
    }
  }
}

function findLog() {
  const finalExpression = document.getElementById("result").value;
  if (document.getElementById("log")) {
    try {
      document.getElementById("result").value = Math.log(finalExpression);
    } catch {
      document.getElementById("log").value = "0";
    }
  }
}
