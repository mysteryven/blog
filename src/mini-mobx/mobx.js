class DependenceManager {
    Dep = null;
    _store = {};

    trigger(id) {
        const store = this._store[id];
        if (store && store.watchers) {
            store.watchers.forEach(s => {
                s.call(this);
            });
        }
    }
    collect(id) {
        if (DependenceManager.Dep) {
            this._store[id] = this._store[id] || {}
            this._store[id].watchers = this._store[id].watchers || []
            this._store[id].watchers.push(DependenceManager.Dep);
        }
    }

    beginCollection(handler) {
        DependenceManager.Dep = handler
    }

    endCollection() {
        DependenceManager.Dep = null
    }
}

class Observable {
    id = 0
    constructor(v) {
        this.id = observableId++;
        this.value = v;
    }
    set(v) {
        // 如果是数组，那么就对数组做特殊的处理
        if (Array.isArray(v)) {
            this._wrapArray(v);
        } else {
            this.value = v;
        }
        dependenceManager.trigger(this.id);
    }
    get() {
        dependenceManager.collect(this.id);
        return this.value;
    }
    _wrapArray(arr) {
        this.value = new Proxy(arr, {
            set(obj, key, value) {
                obj[key] = value;
                // 如果是修改数组项的值，那么就触发通知
                if(key !== 'length') {
                    dependenceManager.trigger(this.id);
                }
                return true;
            }
        });
    }
}

const dependenceManager = new DependenceManager();

function observable(target, name, descriptor) {
    const v = descriptor.initializer.call(this);
    const o = new Observable(v);
    return {
        enumerable: true,
        configurable: true,
        get: function () {
            return o.get();
        },
        set: function (v) {
            return o.set(v);
        }
    };
};



function autorun(handler) {
    dependenceManager.beginCollection(handler)
    handler()
    dependenceManager.endCollection()
}


class Store {
    @observable list = [1, 2, 3];
    increment() {
        this.list[0]++
    }
}
const store = new Store()
autorun(() => {
    console.log(store.list[0])
})
store.list[0]++;
