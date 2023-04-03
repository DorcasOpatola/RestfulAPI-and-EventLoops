## Building Restful API using Express and understanding Event Loops in NodeJS

##### The Event Loop
> The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program.
> It works by making a request to some internal or external "event provider", then calls the relevant event handler.

##### Six Phases of the Event Loop
1. <b>Timers</b>- executes callbacks using timers. If there are timers set to 0 ms or setImmediate(), they will run here. Incomplete timers will run in later iterations of the loop.
2. <b>Pending</b> - internal phase
3. <b>Idle/Prepare</b> - internal phase
4. <b>Poll</b> - process I/O callbacks
5. <b>Check</b> - execute any setImediate() timers added in the Poll phase
6. <b>Close</b> - loop continues if there are more timers or I/O calls. If all timers and I/O calls are done, the loop closes and the process ends.

##### Best Practices for Server-side development
1. Focus on code quality
2. Prefer ES6+ and Async/Await
3. Keep your code small
4. Handle Errors
5. Wrap common utilities as npm packages

#### NPM5
