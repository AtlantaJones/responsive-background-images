Responsive Background Images
====================

A technique for responsive background images using jQuery and Modernizr
--------------------

I've found that for certain layout elements like header images, mastheads, banners, large hero images, etc, it's often more effective to mark them up as background images on a wrapping container. This way, you can use things like *background-size: cover* to more easily get the image to fill the entire space.

That's all well and good if the background image is specific to a section of your site, or part of a recurring, global element like a masthead or nav bar. It gets trickier when that background image has to be specified dynamically, by a CMS template, for instance. You can't just declare the different images in a static CSS file with media queries.

This technique is what I've been using to get around this. You use the 'data-lowres', 'data-mediumres', and 'data-highres' data attributes to specify the images on any container. Then just specify your breakpoints in the JavaScript and it will use the media query functions built into Modernizr (which you're likely to already be using) to determine when to swap the image sizes.

One thing to note, is that a background image is not specified inline by default. This is to keep *any* image from downloading until the script determines which one is best suited for the screen width. If lack of JavaScript on your user's end is a concern, just manually specify the smallest image with 'style="background-image:url(small-image.jpg)"'. Just be aware that this image will **always** be downloaded, even if the user is on a large screen.

I'm still tweaking this a bit, including making medium-sized breakpoints optional.