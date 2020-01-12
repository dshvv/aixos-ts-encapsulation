import Http from './http'
import { singleton } from './decorators'

class Rquest extends Http{
    // 将实例对象以单例模式注入
    @singleton
    public static instance: Rquest;
    
    // 指定构造私有，不允许别的地方new
    private constructor(){
        super();
    }

    // 获取老师接口
    public test(): Promise<any>{
        return this.get('/getTeachers');
    }
    
}
export default Rquest.instance;