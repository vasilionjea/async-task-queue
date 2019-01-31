/**
 * Async Task Queue
 */
class AsyncTaskQueue {
  get isRunning () {
    return this._isRunning;
  }
  
  get length() {
    return this._tasks.length;
  }
  
  constructor() {
    this._tasks = [];
    this._isRunning = false;
  }

  push(name = '', callback) {
    if (!callback) {
      return;
    }
    
    const task = { name, callback };

    if (this._isRunning) {
      this._tasks.push(task);
    } else {
      this._runTask(task);
    }
  }

  _runTask(task) {
    this._isRunning = true;
    
    // Assume tasks return promises
    task.callback().then(() => {
      const tasks = this._tasks;
      
      this._isRunning = false;
      
      if (tasks.length > 0) {
        this._runTask(tasks.shift());
      }
    });
  }
}
