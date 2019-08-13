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

![Main Game Screen](/images/main.jpg)

**Image 1.** *Here we see a mock up of the main game screen. We can see the main title text at the top of the screen, this text should be large and eye catching using a nice font. We can see the obstacles and corridors that the player will be navigating. The main game screen should shrink or expand depending on the screen size of the device being used. Note the buttons on the bottom of the main screen. These should be styled with CSS and Bootstrap and provide a way for the player to start the game or restart it should the game enter gameover state. Note also the "exit" marker. This is the goal that the player must reach in order to move on to the next level.*

![Main Game Screen](/images/howtoplay.jpg)

**Image 2.** *This is a mockup of the "how to play" screen. This screen should give the player information about how to play the game, what the goals are. It should also inform the player about how to interact with the UI etc.*

![Main Game Screen](/images/gameover.jpg)

**Image 3.** *Here we see a mock up of the Game Over screen. This is what the player will see if they do not find the exit in a level before the timer runs out. We see that a message should appear on screen, informing the user that time has run out and that the game has ended. Not seen in this diagram is a message that should probably be included that informs the player how to restart the game should they wish to play again.*

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

- [Google Fonts](https://fonts.google.com/)
    - Google Fonts provides free fonts that were used to improve the asthetic appeal of the application.

- [Tiled](https://www.mapeditor.org/)
    - A 2 dimensional map editor that was used to build the levels used in the game. Levels can be exported in a number of different ways. In the case of this game, the levels were build and exported as CSV files. These CSV files because the two dimensional arrays we see in the levels.js file.


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

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- The team on the Code Institute "Slack" channel were a great help with this project.
