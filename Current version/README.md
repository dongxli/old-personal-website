This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Deploy the project to github pages`

1. In the project folder, run `npm run build`

2. Delete all static files in the main directory. So we can replace new static files by step 1.

3. In the project folder, run `mv -v ./build/* ../`. It moves the static files to the main directory for github pages.

4. In the project folder, run `rm -rf build`. It deletes the empty build folder.
