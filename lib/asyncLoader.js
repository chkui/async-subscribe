"use strict";

function AsyncLoader() {
  this.data = false;
  this.isInit = false;
  this.initEvent = new AsyncInitEvent();
  this.modifyEvent = new AsyncModifyEvent();
}

AsyncLoader.prototype.setValue = function (value) {
  this.data = value;

  if (!this.isInit) {
    this.isInit = true;
    this.initEvent.subscribe(value);
  }

  this.modifyEvent.subscribe(value);
};

function Event() {
  this.data = false;
  this.listeners = [];
} //===================初始化時監聽


function AsyncInitEvent() {
  Event.call(this);
}

AsyncInitEvent.prototype.listener = function (listener) {
  this.data ? listener() : this.listeners.push(listener);
};

AsyncInitEvent.prototype.subscribe = function (data) {
  this.data = data;

  while (0 < this.listeners.length) {
    const fun = this.listeners.pop();
    fun(data);
  }
}; //===================修改就監聽

/**
 * 當數據發生變動時通知所有監聽器
 * @constructor
 */


function AsyncModifyEvent() {
  Event.call(this);
}

;

AsyncModifyEvent.prototype.listener = function (listener) {
  this.data && listener();
  this.listeners.push(listener);
};

AsyncModifyEvent.prototype.subscribe = function (data) {
  this.data = data;

  for (let listener of this.listeners) {
    listener(data);
  }
};

module.exports = AsyncLoader;