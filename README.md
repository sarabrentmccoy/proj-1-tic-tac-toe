# proj-1-tic-tac-toe
My game doesn't yet successfully report score, nor does it report a tie. It doesn't use AJAX. I know these are learning objectives of the project, and I am at peace with an unsatisfactory score, so long as I can continue to work on this and have the resulting work, for which I will feel more pride, reviewed.

This game, though its visuals and functionality prove less than stellar, did function quite well (in a different sense) as a tool to teach me how to learn, how to plan, how to ask for help. In these earlier stages, when finding and remembering tools takes a good bit of collaboration and research (and is not something that comes naturally), I should leave the paper sooner, even if I don't fully understand each bit of logic; I should timebox my research and iterations and tinkering, and ask for help more frequently.

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
