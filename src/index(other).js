function createMatrix(rowsCount, columnsCount) {
  var matrix = [];

  if (rowsCount !== 0 && columnsCount !== 0) {
    for (var i = 0; i < rowsCount; i++) {
      matrix[i] = [];
      for (var j = 0; j < columnsCount; j++) {
        matrix[i].push(0);
      }
    }

    return matrix;
  }else {
    alert('No valids arguments');
    return;
  }
}

///////////////////////////////////////////////////////////////
function renderPlainText(data) {

  var rows = [];
  data.forEach(function (columns) {
    var rowString = columns.join('');
    rows.push(rowString);
  });

  return rows.join('\n');

}

///////////////////////////////////////////////////////////////////

function renderTableHTMLString(data) {
  var htmlString = '';

  data.forEach(function (columns) {
    htmlString += '<tr>';

    columns.forEach(function (cell) {
      htmlString += '<td>' + cell + '</td>';
    });

    htmlString += '</tr>';
  });

  return htmlString;
}

///////////////////////////////////////////////////////////

function matrixFillSequence(data) {
  var temp = [];
  var counter = 0;
  for (var i = 0; i < data.length; i++) {
    temp[i] = [];
    for (var j = 0; j < data[i].length; j++) {
      temp[i].push(counter);
      counter++;
    }
  }

  return temp;
}

//////////////////////   5 and 6    ////////////////////////////////////

function matrixFillRowNum(data) {
  var counter = 0;
  console.log(data);
  var newArray = [];

  /*for(var i = 0; i < data.length; i++){
    newArray[i] = [];
    for(var j = 0; j < data[i].length; j++){
      newArray[i].push(counter);

    }
    counter++;
  }*/

  data.forEach(function (columns, i) {
    newArray[i] = [];
    columns.forEach(function (item) {
      newArray[i].push(counter);
    });

    counter++;
  });

  return newArray;
}

////////////////  7       /////////////////////////

function matrixIncrement(data) {
  var newArray = [];
  var counter = 1;
  data.forEach(function (columns, i) {
    newArray[i] = [];
    columns.forEach(function (item) {
      newArray[i].push(counter);
      counter++;
    });

  });

  return newArray;
}

//////////////////   8     ///////////////////////
function matrixFillText(data, text) {
  var array = [];
  var counter = 0;
  for (var i = 0; i < data.length; i++) {
    array[i] = [];
    for (var j = 0; j < data[i].length; j++) {
      array[i].push(text.charAt(counter));
      counter++;
    }
  }

  return array;
}

//////////////// bonus /////////////////////////
function renderTableDom(table, data) {

  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 0; j < data[i].length; j++) {
      var td = document.createElement('td');
      td.innerHTML = data[i][j];
      tr.appendChild(td);
    }
  }

  return table;

}

//////Calling all functions//////////////
var newMatrix = createMatrix(2, 4);

////Step 2//////////////////
document.getElementById('step-2').textContent = renderPlainText(newMatrix);

//////step 3//////////////////
document.querySelector('#step-3').innerHTML = renderTableHTMLString(newMatrix);

//////Step 4/////////////////
newMatrix = matrixFillSequence(createMatrix(4, 4));
document.getElementById('step-4').innerHTML = renderTableHTMLString(newMatrix);

//////Step 5////////////////
newMatrix = createMatrix(5, 2);
console.log(newMatrix);
newMatrix = matrixFillRowNum(newMatrix);
console.log(newMatrix);
document.querySelector('#step-5').textContent = renderPlainText(newMatrix);

///////Step 6////////////////
newMatrix = matrixFillRowNum(createMatrix(4, 5));
document.querySelector('#step-6').textContent = renderPlainText(newMatrix);

///////Step 7////////////////
newMatrix = matrixFillSequence(createMatrix(3, 5));
newMatrix = matrixIncrement(newMatrix);
document.querySelector('#step-7').innerHTML = renderTableHTMLString(newMatrix);

///////Step 8////////////////
var text = 'abcdefghijkl';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
document.querySelector('#step-8').innerHTML = renderTableHTMLString(newMatrix);

/////////Bonus///////////////
var text = 'abcdefghijkl';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
renderTableDom(document.querySelector('#bonus'), newMatrix);
