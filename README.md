# MoodTracker

## About the project
The project is implemented in react-native, with native for more straight forward testing and TypeScript. 
The project uses eslint/tsling rules for easier development and prettier code formatter to enforce consistent coding rules.

### Architecture decisions
 The project is implemented taking under account scalability and extensibility.
 
 - To add additional mood choices we just need to include them in the models section. To add new mood values we need to also include a color and icon in the corresponding mappers.
 - The main react components are broken down to simpler ones and kept pretty small. For that reason I chose to include the styles inside the components, in contrast to my usual practice in larger projects.
  
## Instructions
- Clone or download the project
- Install expo CLI: Open a terminal and run `npm install --global expo-cli`
- Navigate to the project's root and run `npm install`
- For Android: run npm `run android`
- For iOS: run npm `run ios`
