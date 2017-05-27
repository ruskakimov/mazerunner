//global variables
var DOMmatrix = [];
var mazeMatrix = [];
var botCoord = [28,3], goalCoord = [25,40];
var currentTool = "Wall";
var step = 100;
var timer;
var directionsToUnvisited = [];
var opposite = [2, 3, 0, 1];

var row, string;
for (var r = 1; r <= 30; r++) {
  row = [];
  for (var c = 1; c <= 50; c++) {
    string = "#row" + r + " > " + "#col" + c;
    row.push( $(string) );
  }
  DOMmatrix.push(row);
}

// for (var r = 1; r <= 30; r++) {
//   row = [];
//   for (var c = 1; c <= 50; c++) {
//     row.push('-');
//   }
//   mazeMatrix.push(row);
// }

mazeMatrix = [
["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
["#", "-", "-", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "#", "#", "#", "#", "-", "#", "-", "-", "-", "#", "-", "#", "#", "#", "#", "#", "-", "#", "-", "-", "#", "#", "#", "#", "#", "#", "#", "#", "#", "-", "#", "#", "#", "#", "#", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "-", "-", "-", "#", "-", "#", "#", "-", "#", "#", "-", "-", "-", "-", "-", "#", "-", "#", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "-", "-", "#", "#", "#", "#", "#", "-", "#", "-", "#", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "-", "-", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "-", "#", "-", "#", "#", "#", "-", "#", "-", "-", "-", "#", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "#", "#", "#", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "#", "-", "#", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "#", "#", "#", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "#", "#", "#", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "#", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "#", "#", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "-", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "#", "#", "-", "-", "-", "-", "-", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "#", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "-", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "#", "#", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "#", "-", "#", "-", "-", "-", "#", "-", "#", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "#", "#", "-", "#", "#", "-", "#", "-", "-", "#", "-", "#", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "-", "-", "-", "-", "#", "#", "#", "#", "#", "#", "#"],
["#", "-", "-", "-", "#", "-", "#", "#", "-", "#", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "-", "-", "#", "#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "#", "#", "#", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "g", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "#", "#", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "#", "-", "#", "-", "-", "-", "#", "-", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "#", "-", "#", "-", "#", "#", "#", "#", "#", "#", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "-", "#", "b", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "#", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#"],
["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
];

// //place bot and goal
// var r = botCoord[0], c = botCoord[1];
// mazeMatrix[r][c] = 'b';
// r = goalCoord[0];
// c = goalCoord[1];
// mazeMatrix[r][c] = 'g';
// //borders
// for (var c = 0; c < 50; c++) {
//   mazeMatrix[0][c] = '#';
//   mazeMatrix[29][c] = '#';
// }
// for (var r = 0; r < 30; r++) {
//   mazeMatrix[r][0] = '#';
//   mazeMatrix[r][49] = '#';
// }
updateDOM();


//ui control
(function() {
  var tools = $(".tool");
  tools.click(function() {
    tools.removeClass("active");
    $(this).addClass("active");
    currentTool = $(this).text();
  });
  var cells = $("td");
  cells.click(function() {
    var coordinates = [];
    var rowName = $(this).parent().attr('id');
    coordinates[0] = parseInt( rowName.slice(3) ) - 1;
    var colName = $(this).attr('id');
    coordinates[1] = parseInt( colName.slice(3) ) - 1;
    if (coordinates[0] === 0 || coordinates[1] === 0 ||
       coordinates[0] === 29 || coordinates[1] === 49) {
      window.alert("Can't change borders!");
      return 0;
    }
    switch (currentTool) {
      case "Wall":
        $(this).removeClass();
        $(this).addClass("wall");
        mazeMatrix[coordinates[0]][coordinates[1]] = '#';
        break;
      case "Space":
        $(this).removeClass();
        mazeMatrix[coordinates[0]][coordinates[1]] = '-';
        break;
      case "Bot":
        $(cells).removeClass("bot");
        mazeMatrix[botCoord[0]][botCoord[1]] = '-';
        $(this).removeClass();
        $(this).addClass("bot");
        mazeMatrix[coordinates[0]][coordinates[1]] = 'b';
        botCoord = coordinates;
        break;
      case "Goal":
        $(cells).removeClass("goal");
        mazeMatrix[goalCoord[0]][goalCoord[1]] = '-';
        $(this).removeClass();
        $(this).addClass("goal");
        mazeMatrix[coordinates[0]][coordinates[1]] = 'g';
        goalCoord = coordinates;
        break;
    }
  });
  var play = $(".play");
  var result;
  play.click(function() {
    result = botExplore();
    console.log(result);
    if (result === 0) {
      window.alert('Impossible to reach destination!');
    }
    else if (result === 1) {
      window.alert('Destination has been reached!');
    }
  });
  var pause = $(".pause");
  pause.click(function() {
    stop();
  });

  function stop() {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
  }
  var clear = $(".clear");
  clear.click(function() {
    clearMemory();
  });
})();







function botExplore() {
  var nearby, r, c, choice;
  r = botCoord[0];
  c = botCoord[1];
  nearby = [mazeMatrix[r-1][c],
            mazeMatrix[r][c+1],
            mazeMatrix[r+1][c],
            mazeMatrix[r][c-1]
           ];
  if (nearby.indexOf('g') !== -1) {
    return 1;
  }
  for (var i = 0; i < 4; i++) {
    if (nearby[i] === '-') {
      directionsToUnvisited.push("" + i);
      nearby[i] = '?';
    }
  }
  if (directionsToUnvisited.length === 0) {
    return 0;
  }
  choice = getDirection();
  updateDirections(choice);
  nearby[choice] = 'b';
  switch (choice) {
    case 0:
      botCoord = [r-1, c];
      break;
    case 1:
      botCoord = [r, c+1];
      break;
    case 2:
      botCoord = [r+1, c];
      break;
    case 3:
      botCoord = [r, c-1];
      break;
  }
  mazeMatrix[r-1][c] = nearby[0];
  mazeMatrix[r][c+1] = nearby[1];
  mazeMatrix[r+1][c] = nearby[2];
  mazeMatrix[r][c-1] = nearby[3];

  if (isDead(nearby, choice)) {
    mazeMatrix[r][c] = 'd';
  } else {
    mazeMatrix[r][c] = '+';
  }
  updateDOM();
  timer = setTimeout(botExplore, step);
}





function getDirection() {
  var min = directionsToUnvisited[0], currentDirections;
  for (var i = 0; i < directionsToUnvisited.length; i++) {
    currentDirections = directionsToUnvisited[i];
    if (min.length > currentDirections.length) {
      min = currentDirections;
    }
  }
  return parseInt( min[min.length - 1] );
}

function updateDirections(wentTo) {
  pushToAllDirections('' + opposite[wentTo]);
  removeRedundancies();
  deleteEmptyDirection();
}
function pushToAllDirections(step) {
  directionsToUnvisited = directionsToUnvisited.map(function (dir) {
    return dir + step;
  })
}
function generateRules () {

}
function removeRedundancies() {
  var directions, rules;
  rules = [
    [/02/g, ''],
    [/13/g, ''],
    [/20/g, ''],
    [/31/g, ''],
    [/012/g, '1'],
    [/210/g, '1'],
    [/123/g, '2'],
    [/321/g, '2'],
    [/230/g, '3'],
    [/032/g, '3'],
    [/301/g, '0'],
    [/103/g, '0'],
  ];
  for (var i = 0; i < directionsToUnvisited.length; i++) {
    directions = directionsToUnvisited[i];
    for (var r = 0; r < rules.length; r++) {
      directions = directions.replace(rules[r][0], rules[r][1]);
    }
    directionsToUnvisited[i] = directions;
  }
}
function deleteEmptyDirection() {
  for (var i = 0; i < directionsToUnvisited.length; i++) {
    if (directionsToUnvisited[i].length === 0) {
      directionsToUnvisited.splice(i, 1);
      break;
    }
  }
}

function isDead(neigbours, choice) {
  neigbours[choice] = '0';
  var dead = true;
  for (var i = 0; i < neigbours.length; i++) {
    if (neigbours[i] === '?' || neigbours[i] === '+') {
      dead = false;
      break;
    }
  }
  return dead;
}


function rnd(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function replaceInArray(array, find, replace) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === find) {
      array[i] = replace;
    }
  }
  return array;
}

function clearMemory() {
  for (var r = 0; r < 30; r++) {
    for (var c = 0; c < 50; c++) {
      if (mazeMatrix[r][c] === '?' ||
          mazeMatrix[r][c] === 'd' ||
          mazeMatrix[r][c] === '+') {
            mazeMatrix[r][c] = '-';
          }
    }
  }
  directionsToUnvisited = [];
  updateDOM();
}

function updateDOM() {
  var currentInM, currentInDOM;
  for (var r = 0; r < 30; r++) {
    for (var c = 0; c < 50; c++) {
      currentInDOM = DOMmatrix[r][c];
      currentInDOM.removeClass();
      currentInM = mazeMatrix[r][c];
      switch (currentInM) {
        case '#':
          currentInDOM.addClass('wall');
          break;
        case 'g':
          currentInDOM.addClass('goal');
          break;
        case 'b':
          currentInDOM.addClass('bot');
          break;
        case '?':
          currentInDOM.addClass('unvisited');
          break;
        case '+':
          currentInDOM.addClass('visited');
          break;
        case 'd':
          currentInDOM.addClass('dead');
          break;
      }
    }
  }
}
