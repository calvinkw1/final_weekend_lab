### Final weekend lab

For your last weekend lab, we'd like you to use your knowledge of Node.js, Socket.io and even Redis to build a multiplayer application or game. Some ideas include:

1. Build a multiplayer tic-tac-toe game using socket.io and redis for storing game information (leaderboard, winning streak, etc.)
2. Build a chat application using socket.io and redis (to store recent messages and a list of people in the chat room)
3. Add two player functionality to your project 1 (if you built a game)
4. Come up with your own multiplayer game and include redis to store information!

#### Some things to consider when using redis with socket.io

When using socket.io, you will make calls to your redis server inside of the `io.on` callbacks. 

#### Bonus

1. Style your application
2. Experiment with different Redis data structures 

#### Super bonus
3. Research promises and implement them as an alternative to callbacks (this will involve understanding what promises are and researching a promise library to include)