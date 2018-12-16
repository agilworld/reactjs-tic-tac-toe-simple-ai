## Philosophy

The human must take AI & AI must under human.

## Explanation 

Please look up App.js and Board.js, especially board.js. Board.js is main of codes of the TicTacToe algorithm.
The game show board with consist of 9 squares, each sqaure has index number that number 0 starts at top left corner and number 9 ends at bottom right corner.

The game rule has 2 player, human player is marked by O sign and computer (AI) player is marked by X sign. Human player (us) must take start of the game and AI player responses moving of the human player until the board is fullfill and AI will choose a winner by combination of index numbers. The combinations are [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6].

The game has AI player with inteligentially checking empty indexes and put random index number. The second intelligence, it will broke the moving of opponent player in an effort to complete the combination of index numbers.
Based on Philosophy, the AI player no allowed to dominate any moves from human player, which means the AI player has few of winning chances from us ( human player ), perhaps will be categorized as an easy game.

# Development Purpose

## Requirements

- node version minimum 10.0.0 or greather
- npm version version 6.3.0 or greather
- terminal/bash/cmd

## Available Scripts

Please open terminal/bash/cmd you desired. cd to project directory, you can run : 

### `npm install`

Install package dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**