const AsyncLoader = require('../index'),
    asyncLoader = new AsyncLoader();

asyncLoader.initEvent.listener((data) => {
    console.log('init:' + data);
});

asyncLoader.modifyEvent.listener((data) => {
    console.log('modify:' + data);
});

asyncLoader.setValue("1");
asyncLoader.setValue("2");
asyncLoader.setValue("3");
asyncLoader.setValue("4");
asyncLoader.setValue("5");
asyncLoader.setValue("6");