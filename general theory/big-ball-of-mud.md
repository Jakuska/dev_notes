![london to ny](images/big-ball-of-mud.png)

# Big Ball of Mud

The "Big Ball of Mud" is a paper by Brian Foote and Joseph Yoder. 

It's a really old paper, released in 1999. It attempts to describe and analyze the "de-facto software architecture" the big ball of mud. I think this is an interesting paper, though ironincally not well organized. Below are some of my notes on that paper. 

The codebase is "sprawling, sloppy, duct-taped" and "Information is shared promiscuously among distant elements of the system."Such system becomes harder and harder to work with and modify, and cost of just maintainance grows. 

The paper asks why such thing emerges? 
* Time: Deadlines and time-to-market will pressure programmers to get it done quickly. 
* Pay off: Architecture takes long time to pay off. 
* Risk: The application may not even be successful.
* Experiece: Programmers need to know what is good code. And also things like high employee turn over rate can damage quality.
* Visibility: Code can only be read by programmer. To managers and customers, only the end result can be seen.
* Complexity: "the software is ugly because the problem is ugly, or at least not well understood."
* Change

There is a paragraph on bad code that I found interesting: 

*"Variable and function names might be uninformative, or even misleading. Functions themselves may make extensive use of global variables, as well as long lists of poorly defined parameters. The function themselves are lengthy and convoluted, and perform several unrelated tasks. Code is duplicated. The flow of control is hard to understand, and difficult to follow. The programmer’s intent is next to impossible to discern. The code is simply unreadable, and borders on indecipherable. The code exhibits the unmistakable signs of patch after patch at the hands of multiple maintainers, each of whom barely understood the consequences of what he or she was doing. Did we mention documentation? What documentation?"*
