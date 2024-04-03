// NOTE: This is a simple example of how to use the worker_threads module in Node.js
// The worker_threads module is used to run JavaScript code in parallel in Node.js
// All of this is done in a single process, so it is not a true multi-threading

const { isMainThread, workerData, Worker } = require("worker_threads");
// We can now import the workerData from the worker_threads since we have passed it as an argument

if (isMainThread) {
  console.log(`Main thread is running: ${process.pid}`);
  new Worker(__filename, {
    workerData: [1,7,3,5]
  });

  new Worker(__filename, {
    workerData: [9,3,7,8]
  });
}else{
  console.log(`Worker thread is running: ${process.pid}`);
  console.log(`Worker data: ${workerData} is now sorted in ascending order: ${workerData.sort()}`);
}