#Foundation Starter
A starting point for foundation-based projects

##Features
Bower as a Package Manager and Grunt tasks to get moving fast

##Installation
- Clone this repo
-- ```git clone https://github.com/Boo-urns/foundation-starter.git```
- ```cd foundation-starter``` <small>(feel free to rename folder)</small>
- ```npm install```
- ```bower install```
- ```grunt init``` <small>(copies js files from bower over to js/build and creates styles.min.css)</small>
- if you get an error pointing to line 13 functions.scss go to bower_components/foundation-sass/foundation/_functions.scss  **remove *!global* **on line 13 and line 17
- ```grunt``` 


---

## Additional Grunt Tasks

```grunt images```

Further compression of images. It will crawl the images folder.

```grunt concatJS```

Need to set up which files you are concating and uglifying in Gruntfile

```grunt build-modernizr```

Creates a custom build of what modernizr tests you are using. 
If you want specific tests edit Gruntfile at line 120


###Happy coding! 