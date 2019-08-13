# Maze Runner

This a single player game where the player guides their character from the start of a maze to the end within a time limit. There are multiple mazes to explore and each one is more complex and challenging than the last.  

The game is compatible with mobile devices as well as desktop computers in a variety of browsers.
 
## UX

## User Stories

### User story 1

As a teacher of young children, I use this game with my students to help them improve their memory and learn problem solving skills. The game is compatible with a variety of tablets that my students bring to school.

### User story 2

As a tourist who travels on public transport often, it is good to have a game  that works on my smartphone to pass the time on long journeys.

### User story 3

As a game player, it is good to have a game that is compatible with my desktop computer that provides a good challenge.

## Design and planning

A high level plan for the game was first drawn out on paper...

![Main Game Screen](/images/main.jpg)

**Image 1.** *Here we see a mock up of the main game screen. We can see the main title text at the top of the screen, this text should be large and eye catching using a nice font. We can see the obstacles and corridors that the player will be navigating. The main game screen should shrink or expand depending on the screen size of the device being used. Note the buttons on the bottom of the main screen. These should be styled with CSS and Bootstrap and provide a way for the player to start the game or restart it should the game enter gameover state. Note also the "exit" marker. This is the goal that the player must reach in order to move on to the next level.*

![Main Game Screen](/images/howtoplay.jpg)

**Image 2.** *This is a mockup of the "how to play" screen. This screen should give the player information about how to play the game, what the goals are. It should also inform the player about how to interact with the UI etc.*

![Main Game Screen](/images/gameover.jpg)

**Image 3.** *Here we see a mock up of the Game Over screen. This is what the player will see if they do not find the exit in a level before the timer runs out. We see that a message should appear on screen, informing the user that time has run out and that the game has ended. Not seen in this diagram is a message that should probably be included that informs the player how to restart the game should they wish to play again.*

## Features

### Sound effects

### Multiple levels

## Technologies Used

### Languages

The game was written using Javascript and styling was done with CSS. The game itself is housed in a webpage using HTML.

### Libraries and software packages

- [Google Fonts](https://fonts.google.com/)
    - Google Fonts provides free fonts that were used to improve the asthetic appeal of the application.

- [Tiled](https://www.mapeditor.org/)
    - A 2 dimensional map editor that was used to build the levels used in the game. Levels can be exported in a number of different ways. In the case of this game, the levels were build and exported as CSV files. These CSV files because the two dimensional arrays we see in the levels.js file.

- [GitHub](https://github.com/)
    - Version control and hosting were implemented using Git and GitHub.

- [Bootstrap](https://getbootstrap.com/)
    - Used for styling dom elements and page layout needs.

- [SFXR](http://www.drpetter.se/project_sfxr.html)
    - A sound effects generating software package used for creating the sounds used in game. The program provides a simple user interface allowing fast creation of unique sounds.

- [Audacity](https://www.audacityteam.org/)
    - Free sound editing software. Used to convert sound files into differnt formats to ensure game sounds play on a wide variety of devices and browsers.

- [D3](https://d3js.org/)
    - A Javascript library that is used mainly for the creation of data driven documents. In the case of this game, D3's drawing functions were used to create the player character as well as the building blocks for each maze.

- [Google Chrome](https://www.google.com/chrome/b/)
    - Chrome browser was used for running and testing the game. Chrome was chosen because it features a rich set of developer tools such as simulation of a variety of mobile devices as well as useful debugging tools.

- [VSCode](https://code.visualstudio.com/)
    - Coding was done using Microsoft VSCode which is a bare bones IDE that works with a number of languages. Features include smart code indentation and auto completeion.

- [Jasmine](https://jasmine.github.io/)
    - For Testing !!!!!!!!






## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

The source code for the game is hosted on GitHub and the page that the game run within is hosted on GitHub pages and is an instance of the index.html page on the master branch.

[Deployed game link](https://andrewdempsey2018.github.io/Maze-Runner/ "Maze Runner")

## Git commit log

### Running the game locally

In order to run the game on a smartphone/tablet or desktop PC, simply open the file "index.html" in any browser. Be sure that the directory structure is maintained as it is in the zip file.



## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- The team on the Code Institute "Slack" channel were a great help with this project.
