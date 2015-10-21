I used jQuery, Javascript, HTML/CSS to build this game as part of GA WDI cohort 9 in fall 2015.


Below are some of the notes that informed not just my code but also my strategy, including my preliminary wireframe and list of components.

----

THINGS IT DOES when these things happen
physical things that are always there
things that physical things become

Start! button clicked
  to clear gameboard
  to store win in scoreboard
  to switch starter

Square clicked
$(.board).click(square, function() {
  to (on empty board) initiate starter
  to (always) place piece(s)
  to (always) change turns

Meet winner (or tie) criterion
  to disable gameboard
  to find winner

------

Things to count
-How many squares are filled
-How many games have been won by x and by y
-How many of the three members of a class (< 3 or not) evaluate the same

-----


<img src="https://cloud.githubusercontent.com/assets/14168220/10540504/9787704e-73d6-11e5-80b3-ca256ae0f512.JPG" width="90%"></img> <img src="https://cloud.githubusercontent.com/assets/14168220/10540507/9cbe9916-73d6-11e5-860e-b7ce099f7426.JPG" width="90%"></img> <img src="https://cloud.githubusercontent.com/assets/14168220/10540510/a0ad8fdc-73d6-11e5-831c-97248b270a40.JPG" width="90%"></img> <img src="https://cloud.githubusercontent.com/assets/14168220/10540512/a226349a-73d6-11e5-8853-b1fa1e74fc1f.JPG" width="90%"></img> <img src="https://cloud.githubusercontent.com/assets/14168220/10540513/a3cba6a4-73d6-11e5-9a51-0a2f72ecfe3d.JPG" width="90%"></img> <img src="https://cloud.githubusercontent.com/assets/14168220/10540514/a6908152-73d6-11e5-83e7-eca918da430a.JPG" width="90%"></img>
