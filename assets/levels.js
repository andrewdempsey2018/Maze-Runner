/* A series of multidimensional arrays that hold
information regarding the layout of each level
an element of 1 indicates a solid tile while 0
indicates a walkway. These arrays are iterated over
with the loadLevel() function in the index.html file */

var level1 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
[1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
[1,0,1,0,1,0,0,0,0,0,0,0,2,1,0,1,0,1,0,1],
[1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
[1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var level2 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
		[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
		[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
		[0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
		[0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0],
		[0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
		[0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
		[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
		[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
		[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var level3 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
	[1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
	[1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1],
	[1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
	[1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1],
	[1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];