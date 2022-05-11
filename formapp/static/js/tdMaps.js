//The game area is a 32 x 15 square grid
//In general, maps should start and end a half-square outside this area
//Avoid the tower icons at the bottom, the buttons in the top-left, and the info in the top-right
//Maps should always start in the middle of a square
//New maps must be added to the end of the list
//The array of waves needs to have 75 items. If it is not included, the default waves will be used

//Map object template:
/*{
  name: Map name,
  author: Your name,
  start: [column, row],
  lines: [
    [direction, length],
    [direction, length],
    …
  ],
  waves: See below
}*/

//Waves array example:
/*[
  //Each array is a wave
  ["g", pause, "y", pause, "o"], A green, a yellow, and an orange, with pauses in between
  [[10, "r"], ["alert", "This is a message that will be shown onscreen."]], //10 reds followed by a message for the player
  [[5, "pa", "bh"]], //A purple with acceleration and a brown with healing, repeated 5 times
  …
]*/

//ENEMY CODES:
//Types (first charcter):
//"g" — green
//"y" — yellow
//"o" — orange
//"r" — red
//"p" — purple
//"b" — brown
//"x" — boss
//"z" — brown-boss
//"u" — purple-boss
//Abilities (second character):
//"h" — healing
//"a" — acceleration
//"s" — split
//"k" — blink
//"d" — shield

let maps = [
  {
    name: "Map #01",
    author: "Oley Birkeland",
    start: [6.5, -0.5],
    lines: [
      ["down", 13],
      ["left", 3],
      ["up", 3],
      ["right", 7],
      ["down", 2],
      ["right", 2],
      ["up", 6],
      ["left", 3],
      ["up", 3],
      ["right", 7],
      ["down", 8],
      ["right", 6],
      ["down", 3],
      ["left", 3],
      ["up", 8],
      ["right", 9],
      ["down", 4],
      ["left", 4],
      ["down", 2],
      ["right", 8]
    ]
  },
  {
    name: "Map #02",
    author: "Oley Birkeland",
    start: [-0.5, 12.5],
    lines: [
      ["right", 9],
      ["up", 10],
      ["right", 13],
      ["down", 8],
      ["left", 2],
      ["up", 6],
      ["left", 9],
      ["down", 8],
      ["right", 2],
      ["up", 6],
      ["right", 5],
      ["down", 6],
      ["right", 6],
      ["up", 10],
      ["right", 9]
    ]
  },
  {
    name: "Map #03",
    author: "Oley Birkeland",
    start: [23.5, -0.5],
    lines: [
      ["down", 3],
      ["right", 5],
      ["down", 4],
      ["left", 4],
      ["down", 3],
      ["right", 2],
      ["down", 4],
      ["left", 9],
      ["up", 4],
      ["right", 2],
      ["down", 2],
      ["left", 8],
      ["down", 1],
      ["left", 7],
      ["up", 5],
      ["right", 9],
      ["up", 5],
      ["left", 4],
      ["down", 2],
      ["right", 8],
      ["up", 1],
      ["right", 1],
      ["up", 1],
      ["right", 1],
      ["up", 1],
      ["right", 1],
      ["up", 2]
    ]
  },
  {
    name: "Map #04",
    author: "Oley Birkeland",
    start: [8.5, -0.5],
    lines: [
      ["down", 13],
      ["right", 6],
      ["up", 5],
      ["right", 4],
      ["down", 4],
      ["left", 9],
      ["up", 6],
      ["right", 7],
      ["down", 4],
      ["right", 9],
      ["down", 3],
      ["left", 5],
      ["up", 7],
      ["right", 2],
      ["down", 2],
      ["right", 4],
      ["up", 3],
      ["left", 9],
      ["up", 1],
      ["right", 4],
      ["up", 1],
      ["left", 22]
    ]
  },
  {
    name: "Map #05",
    author: "Oley Birkeland",
    start: [32.5, 7.5],
    lines: [
      ["left", 4],
      ["down", 2],
      ["left", 4],
      ["up", 2],
      ["left", 3],
      ["up", 5],
      ["left", 4],
      ["down", 5],
      ["left", 3],
      ["down", 5],
      ["left", 4],
      ["up", 5],
      ["left", 3],
      ["up", 2],
      ["left", 4],
      ["down", 2],
      ["left", 4]
    ]
  },
  {
    name: "Celtic Knot",
    author: "Mr. Smith",
    start: [-0.5, 12.5],
    lines: [
      ["right", 9],
      ["up", 7],
      ["left", 5],
      ["down", 3],
      ["right", 12],
      ["up", 6],
      ["left", 4],
      ["down", 3],
      ["right", 9],
      ["up", 3],
      ["left", 4],
      ["down", 6],
      ["right", 12],
      ["up", 3],
      ["left", 5],
      ["down", 7],
      ["right", 9]
    ]
  },
  {
    name: "Outer Loop",
    author: "Mr. Smith",
    start: [15.5, -0.5],
    lines: [
      ["down", 2],
      ["left", 15],
      ["down", 13],
      ["right", 15],
      ["up", 4],
      ["left", 3],
      ["down", 3],
      ["right", 8],
      ["up", 3],
      ["left", 3],
      ["down", 4],
      ["right", 14],
      ["up", 13],
      ["left", 13],
      ["up", 2]
    ]
  },
  {
    name: "Where'dja Go?",
    author: "Mr. Smith",
    start: [-0.5, 7.5],
    lines: [
      //jiggle
      ["right", 4],
      ["left", 2],
      ["right", 10],
      ["up", 8],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],
      //loop
      ["right", 2],
      ["up", 1],
      ["left", 1],
      ["down", 1],
      ["right", 1],

      ["down", 8],
      ["right", 4],
      ["left", 2],
      ["right", 9]
    ]
  },
  {
    name: "Jiggle'n'Juke",
    author: "Mr. Smith",
    start: [-0.5, 7.5],
    lines: [
      //jiggle
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2],
      ["left", 1],
      ["right", 2]
    ]
  },

  //↑ New maps go here ↑
];
