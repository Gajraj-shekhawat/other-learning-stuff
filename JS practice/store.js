// class person {
//   constructor(name, age,fun1) {
//     this.name = name;
//     this.age = age;
//     this.fun=fun1
//   }
//   data(x){
//     console.log(this.fun(this.age))
//   }
// }

// const fun1=(a)=>{
//     return a
// }
// const Gajraj = new person("gaju", 21,fun1);

// Gajraj.data()

class Store {
  constructor(reducer, state) {
    this.state = state;
    this.reducer = reducer;
  }
  getstate() {
    return this.state;
  }
  dispatch(action){
   this.state= this.reducer(this.state,action)
  }
}
const red =(state,action)=>{
    if(action.type==="aa"){
        
        return {...state,a:action.payload}
    }
}

const store=new Store(red, {a:0})

console.log(store.getstate())


store.dispatch({type:"aa",payload:1})

console.log(store.getstate())