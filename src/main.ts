import request from './reuest'

const btn = document.querySelector('button');
btn.onclick =  async ()=>{
    const res = await request.test();
    console.log(res.data)
}