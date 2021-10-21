# Matching Pairs Game

<p> This game was created to test a users memory in a fun and interactive way. The user will be playing against a timer to match all the pairs of cards. It will also provide the user with the amount of flips they used to accomplish the game. The user will be able to play the game multiple times to try and achieve a better time and a lower number of flips. The target audience is for people who want to play a game online and test their memory.
</p>

## User Experience:

### Project Goals:
<p> The goal of this project is to provide a user a fun way to test their memory and allow them to challenge themselves.
</p>

### Target Audience Goals:

* A game that is easy to navigate on mobile, tablet and desktop.
* A game that is appealing and interactive.
* A game that will test a users memory.
* A game that will allow a user to play as many times as they wish.
* A game that a user can challenge themselves to try and decrease their time and the number of flips it took to complete the game.

### Site Owner Goals:

* Offer users a fun and interactive way to test their memory.
* The user must try and complete the game before the time runs out.
* The user will be able to see how any flips it took them to complete the game.
* Allow the user to play the game an unlimited amount of times. 
* A user can challenge themselves and try to beat their previous time and flips.


### User Stories:

* As a site owner:
    * I want a game that is easy to navigate and user friendly.
    * I want the user to have fun while testing their memory.
    * I want the game to be interactive.
    * I want the user to play the game multiple times.
    * I want to have an easy to digest interface for the user.

* As a site user:
    * I want to be able to test my memory in an enjoyable way.
    * I want the game to be easily navigated.
    * I want the game to be visually appealing.
    * I want to be aware of the time and number of flips it took to accomplish the game.
    * I want to play the game multiple times to challege myself and improve my memory.

### User Requirements and Expectations:

### Requirements:
* The game to be visually appealing and easy to navigate.
* A game that tests memory.
* When the game ends a user is made aware if the game was accomplished or not.

### Expectations:
* The game to have a particular theme.
* A game that provides you with information in order to challege your memory further.
* A game that can be payed an unlimmited amount of times.

## Design Choices:
<p> The design of this game must to be simple and clean to ensure the user in not distracted while playing the game. The colours must be applealing and bold, so the cards are easily distinguishable. The design will ensure the site is easily navigated which will result in users playing mutliple times and returning.
</p>

### Theme:
<p> I chose a particular theme for this game which is tarot card themed. This is an elegant an unquie theme. It has a playful spin on the cards aspect of the game. 
</p>


### Fonts: 
* (https://fonts.googleapis.com/css2?family=Playball&display=swap)
<p> I chose this font for the game as it is really suits the theme and compliments the color scheme and content well.
</p>

### Icons:
*

### Colours:
 <p> I chose the colours below as they suit the theme of the game, which is tarot cards. They compliment themselves along with the images used for the cards. The content is clearly readable and the site navigates well due to the colours. It increases the appeal of the game and the user experience.
</p>

* Primary Colour: rgb(209, 179, 112) - Pastel gold, This is used for the heading, the victory text, try again text and the border colour for the card images.
* Secondary Colour: rgb(246, 234, 176) - Cream, This is used for the click to start text and the click to restart text.
* Background Colour: rgb(0, 0, 0) - Black, This is used for the overall background colour.
* Background Overlay Colour: rgb(10, 9, 9, 0.9) - Black opacity, this color is used for the backgorund overlay.

### Images: 
<p> The images I used in the game complimented the colours used. The images were in contrast with the theme of tarot cards. The images were sourced from <a href="https://www.pinterest.com/" target="_blank">Pintrest</a>
</p>

### Wireframes: 
<p> 
</p>

## Features:

### Features that have been developed:
*<p> A timer, the user must work to complete the game before the time runs out.</p>
*<p> A flip counter, to show the user how many flips it took them to complete the game.</p>
*<p> A feature to prevent the user from clicking more cards while the current cards are being checked for a match.</p>
*<p> A start game feature, to begin the game for the user.</p>
*<p> A restart game feature, so the user can replay the game after the game ends.</p>

### Features that will be implemented in the future:
*<p> An option for the user to enter a username.</p>
*<p> A leader board that holds the highest scoring players.</p>
*<p> Audio, this would play at start game, victory and try again to increase the user experience.</p>

## Planning and Testing:
<p> The planning began by sketching the website on paper and then led to creating the wireframes. Creating the wireframes really helped me plan this project. It layed out what I wanted to achieve and you could visually see what would work and what wouldn't work.</p>
<p> I started by adding the basic strucutre to the html and then adding my placeholder cards and styling the grid. I then continued onto each section seperatly using a check list to make sure I was making progress and not vering from the overall objectives.</p> 
<p> I then selected the desired images to use for the cards, to really portray the theme of the game.</p>
<p> A part of my planning was using <a href="https://coolors.co/" target="_blank">coolors</a> to chose the correct colour palette.</p>

#### Feature Testing:

### Testing 
<p> The testing carried out on this project was conducted using google chrome dev tools and basic user testing by myself to verify functionality. I originally built this project to be on a desktop screen and then tablet and then mobile. Testing was done throughout using the console and console.logs within my js. All testing was validated when each feature was added to confirm the functionality had not changed after a significant piece of code or change was added.
</p>

<p> The areas this project should be most visible on are as follows.

- Iphone 6/7/8
- Iphone 6/7/8 plus

- Iphone x
- Ipad
- Ipad pro

- small laptop 1280 x 802
- 24 inch screen - 1920 x 1080
- 1440p screen 2560 x 1440
</p>

### User Testing
*<p> As a user who lands on the main page, I expect the heading of the game to give me an indication on what is required. This test passed as the heading explains I must try to find the matching pairs.</p>
*<p> As a user I then expect to see an option to start the game. This test has passed as it loads the card and the timer begins.</p>
*<p> As a user I expect the cards to flip when the are clicked. This test has passed as the cards roatate once they are clicked.</p>
*<p> As a user I expect it to be clear when two cards are match. This test has passed as the matched cards stay visable to indicate a match and they can no longer be clicked.<p>
*<p> As a user I expect it to be clear when two cards do not match. This test hass passed the the cards that do not match rotate back and they can be clicked again.</p>
*<p> As a user I expect to be working against a timer. This test has passed, as soon I select to start the game the timer counds down from 90 seconds.</p>
*<p> As a user I expect to see how many flips I have used while the game is in progress. This test has passed as the flip counter increases each time a card is selected.</p>
*<p> As a user I expect to be made aware if the timer runs out. This test has passed as I am made aware I need to try again.</p>
*<p> As a user I expect to know how I performed when the game is over. This test has passed as the I am made aware if I have succeeded and completed the game before the timer ran out.</p>






### Bugs
<p>
#1 after completing a game, restartin you could no longer click a card because the cards array was not being emptied.

possible side case being, if playing mulitple games in a row array could fill as no clearing, would break game.
</p>

## Know Bugs
<p>
</p>

### References
<p>
</P>

### Acknowledgements
<p>
</p>

