# Responsive Timeline

Vertical timeline which i created for a personal project.
Created using [Gulp][1] and Sass.

To free edit install all dependencies:

```sh
$ npm install
```
Use the default task from Gulp for run all tasks:
```sh
$ gulp
```
And for watch changes in project use:
```sh
$ gulp watch
```

## How to use

### Style
If you can use timeline in your project, first add the timeline stylesheet or import via `Sass`

**HTML** - you can see the compiled file [here][3]
```html
<link rel="stylesheet" href="styles-path/timeline.css">
```
**SCSS** - import the scss file into your base file: [`timeline.scss`][2]. if you use this way, copy `_mixins.scss` to
same folder.
```scss
@import 'styles-path/timeline';
```

### Markup
Each timeline box content is used within `timeline-item`, to create ilimited boxes, copy and paste all content from `timeline-item`.  

Paste the following markup in your main file.
```html
<!-- Timeline -->
<div id="timeline">
	<!-- Timeline Item, copy from here to create various boxes -->
	<div class="timeline-item">
		<!--Icon inside the circle-->
		<div class="timeline-icon">
			<img src="assets/images/star.svg" width="25px" alt="">
		</div>
		<!-- Content from timeline box and position (right or left)-->
		<div class="timeline-content right">
			<h2>LOREM IPSUM DOLOR</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
			</p>
			<a href="#" class="btn">button</a>
		</div>
	</div>
</div>
```

### License
[MIT License][4] © Bruno Rodrigues

[1]: http://gulpjs.com/
[2]: https://github.com/itbruno/responsive-timeline/tree/master/dev/sass/timeline.scss
[3]: http://bit.ly/rtimeline
[4]: http://github.com/itbruno/responsive-timeline/tree/master/LICENSE.txt