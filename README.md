# Maze Runner

This a single player game where the player guides their character from the start of a maze to the end within a time limit. There are multiple mazes to explore and each one is more complex and challenging than the last.  

The game is compatible with mobile devices as well as desktop computers in a variety of browsers. The player controls the character by clicking or tapping the part of the screen that they want to move to.

### How to play

The player controls the green square and must guide it to the exit (a yellow square). To get to the exit, the player must navigate the maze. This is acheived by clicking or tapping the point in the map where the player would like to go. The green square will then travel to that location.
 
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

The game features sound effects that are played using standard Javascript functionality.

### Multiple levels

The player can progress through a number of levels. When an exit is reached, the code will select another level and load it to the gameplay screen.

### Responsive play area

The play area will shrink or grow depending on the size of the host device. This feature ensures that the player can always see the entire play area.

### Features left to implement

It would be very interesting if an algorithm could be written that would auto generate random levels. This would give the player much more variety than the pre-built levels available at the moment.

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

## Testing

The game was tested on a number of devices in order to ensure compatibility.

![Chrome](/images/chrome.jpg)

**Image 4.** *The game running on a desktop computer running the Chrome browser*

![Firefox](/images/firefox.jpg)

**Image 5.** *The game running on a desktop computer running the Firefox browser*

![IPad](/images/ipad.jpg)

**Image 6.** *The game running on an emulated IPad*

![IPhone 6](/images/iphone6.jpg)

**Image 7.** *The game running on an emulated IPhone 6*

![Galaxy](/images/galaxy.jpg)

**Image 8.** *The game running on a Samsung Galaxy smartphone, deployed from Github pages*

## Deployment

The source code for the game is hosted on GitHub and the page that the game run within is hosted on GitHub pages and is an instance of the index.html page on the master branch.

[Deployed game link](https://andrewdempsey2018.github.io/Maze-Runner/ "Maze Runner")

## Git commit log

There were 18 commits in total for this project

1. Initial commit
2. Added a basic level & player character
3. Added some styles to the css file to improve visibility
4. Made some layout changes with Bootstrap
5. Bug fixes on player movement code
6. Fixed bug where player sprite position reset after every move
7. Added assets folder, moved level data to external file
8. Added to UI, improved player movement
9. Worked on README.md
10. Updated the README.md file
11. Updated README.md, added styling
12. Refactor index.html, add comments
13. Added sound effects
14. Added exit level functionality
15. Added more levels
16. Fixed error where character was not spawning properly
17. Updated README.md, added some styling
18. Updated README.md, added button functionality

### Running the game locally

In order to run the game on a smartphone/tablet or desktop PC, simply open the file "index.html" in any browser. Be sure that the directory structure is maintained as it is in the zip file.

## Acknowledgements

- The team on the Code Institute "Slack" channel were a great help with this project.
