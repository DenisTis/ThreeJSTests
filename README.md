# ThreeJSTests
Tests of three.js project implementation

Learning of three.js library and what could be achieved with it.

1.2 React-native setup:
Scope is to be able to build two version: web and android in same project

React native should have different entry point
React native should have its own views
Only JS components can be reused

[] install react-native and react-native cli
[] react-native init native (create react-native project in folder native)
[] configure gitignore to skip generated code in native folder
[] configure npm script to run code to deploy it on android



Decide how to implement navigation to different views inside of single-page-application?
[X] Decided to user React with Router
[X] Setup React: needed to install all babel plugins, as w/o them there is an error (see "babel-loader-jsx-syntaxerror-unexpected-token")
[X] Setup and test Routing
[ ] Important: for react, view (similar to html+css), should be separated from viewmodel, because React itself can have it in one file
[ ] Implement internationalization

[ ] Build start page of the application with multi-language support
[X] Enable bootstrap for the page

========Next branch================
[ ] THREEJS + CANNON initialization and finalization
[ ] Correct adding and removal of scene objects
[ ] Memory management tests


