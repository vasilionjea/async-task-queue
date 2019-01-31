# async-task-queue
`experimental` A JavaScript async task queue.

```javascript
function createTask(delay = 1000) {  
  return function task() {
    const promise = new Promise(resolve => {
      setTimeout(() => resolve(), delay);
    });
    
    return promise;
  };
}

const asyncQueue = new AsyncTaskQueue();

asyncQueue.push('initialize', createTask(2200));
asyncQueue.push('upload files', createTask(1800));
asyncQueue.push('configure', createTask(2500));
asyncQueue.push('restart', createTask(1200));
asyncQueue.push('send email', createTask(2000));
asyncQueue.push('clean up', createTask(1600));
```

Live example: https://bit.ly/2D0J5Hj
