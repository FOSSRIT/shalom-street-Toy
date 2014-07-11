shalom-street-Toy
=================

A build-you-own superhero app for the Shalom Street Museum

##Building

Open index.html in either Firefox or Chrome.  We haven't tested in IE, but it might work, so best of luck there.


##Modex.js

Our game relies on Modex.js, which is included as a submodule.  Instructions for usage are in the index, but basically boil down to including the parts of the engine you care about, and not the parts that you do care about.

##Pulling and pulling from the engine.

When you open up the shalom-street-Toy repository, you should see a dropdown menu on the left bar called 'submodules'.  Click that, then open up the Modex.js submodule.  From there you can update the base engine.

**Caution!** Editing Modex.js will effect every project that uses it (both the Superhero app and the AR experience).  You should avoid doing so unless you're sure the changes you're making are non-destructive (ie, won't change any existing functionality or break any existing code).

You should also avoid making project specific changes in this location.  We have extensions/game-specific modules to do that in.

By default, Modex.js is paused at the commit it was last pulled from.  In order to get updates from the engine, you must open the submodule it and do a pull request.
