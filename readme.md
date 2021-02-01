介绍aixos在ts中如何封装，使用    
本项目没采用任何框架   
自己搭建的webpack编译   
所以代码比较精简

decorators 是装饰器类   
http是封装的aixos基类   
main是入口   
request是封装的请求层   


知识点   
装饰器的使用：利用装饰器来方便实现单例模式   
继承的使用：通过继承http，来实现对请求的统一控制




这种办法更好 用来注入实例更好
```java
// any parameters, even optional ones!
export function Autowired(prop: any) {
    // the original decorator
    return function actualDecorator(target: Object, property: string | symbol): void {
        // do something with the stuff
        target[property] = new prop();
    }
}
```


```java
export default class Util{
    public getTime(){
        return new Date();
    }
}
```


```java
import Util from './Util';
import { Autowired } from './decorators'

class Main{
    @Autowired(Util)
    private util;

    @overWrite
    public getTime(){
        return this.util.getTime();
    }
}

// 测试
console.log(new Main().getTime());
```
