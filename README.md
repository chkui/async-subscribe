# async-notify
Async data bind for JavaScript。

# How to User

1. Install Async Notify
    ```javascript 1.8
    $ npm i --save async-notify
    ```

2. Import 
    ```javascript 1.8
    import AsyncNotify from 'async-notify'
    //OR require('async-notify')
    ```
3. User
```javascript 1.8
//Create new instance. Each instance has different data and event
const asyncNotify = new AsyncNotify();

// Add a handle function. 
// It will be subscribe When data in the asyncNotify instance has been modified,
asyncLoader.modifyEvent.listener((data) => {
    console.log('init:' + data);
});
// It will be subscribe at the first time of data  has been modified,
asyncLoader.initEvent.listener((data) => {
    console.log('init:' + data);
});

//Set the value in the asyncNotify, each handle above will be notified;
asyncLoader.setValue("1");
asyncLoader.setValue("2");
asyncLoader.setValue("3");
```

