// 提供单例工厂函数
export const singleton = (target: any, propertyKey: string): void => {
    if(propertyKey === 'instance'){
        target.instance = new target();
    }else{
        throw Error('此注解只用于静态属性instance，用于构造单例对象');
    }
}