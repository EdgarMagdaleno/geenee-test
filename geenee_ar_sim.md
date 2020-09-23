~~~markdown
# Geenee FE test

### Objective
Objective is to make a small interactive 3D experience, as a primitive simulation of a spacial-oriented application.

- We wanna create a primitive rectangular 3D model that will emulate a screen size constrains, ex:
- We want to have a plane which has
  - default width of 30% of screen width in pixels
  - default height 30% of screen height in pixels
  - texture showing camera feed
  - camera feed texture should be autoplaying

- On top of the plane place a box with sides equal to the 1/3 of the plane height.
- We want to position box on plane as follows (ROUGH sketch from bird's perspective) on example block as in Figure A.

- Box should have a simple texture too.
- On click on the box, we want to move the box from Figure A to Figure B.
- Mentioned movement should be animated in a simple manner.
- We should be able to orbit the space, in order to see the scene in space.

##### EXAMPLE BLOCK
```
-----------------------TOP -----------------------
=                                                =
=                                                =
=         PLANE WITH CAMERA FEED TEXTURE         =
=                                                =
=                                                =
=             ---------------------              =
=             =                   =              =
=             =                   =              =
=             =                   =              =
=             =      Figure A     =              =
=             =                   =              =
=             =                   =              =
=             =                   =              =
=             ---------------------              =
=                       |                        =
=                       |                        =
=                       | animation              =
=                       |                        =
=                       v                        =
=             ---------------------              =
=             =                   =              =
=             =                   =              =
=             =                   =              =
=             =      Figure B     =              =
=             =                   =              =
=             =                   =              =
=             =                   =              =
=             ---------------------              =
=                                                =
=                                                =
=                                                =
=                                                =
--------------------- BOTTOM ---------------------

```


### Tooling
- React
- Three.js
- ...make your pick for everything else!


### Guidelines
- Obviously, app should be modular, meaning Scene, Plane and Box should be separate reusable components
- App should work in the latest mobile Chrome
- There's no need to make a native, hybrid, or progressive web apps
- Accent of the test is on getting insight into candidates understanding in composing 3d UIs in the browser
- Testing your code is not required, but is always welcome
- Feel free to bootstrap your app with any additional tools beyond React & THREE (CRA, boilerplates, snippets etc.).
Would be nice to credit sources if you take someone else's code (legit engineering decision, but give credit where credit is due ;)).
- It's not mandatory to document your code, but comments are very welcome as they give insight into your personal approach
- Please read the requirements well and you're encouraged to leave remarks on test itself or what you would do differently below
- Anything undefined in the requirements is left to your personal choice
- If plane/box sizes aren't appropriate, feel free to change them and elaborate decision below
- When finished, please raise pull request and assign it to @budimirbudimir
- Good luck! :)


### Candidate's comments
- 
- 
- 
~~~