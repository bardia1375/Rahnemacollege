
interface Todo{
    title:string,
    state:string,
    id:string
}


class ToDoList{
    private todos : Todo[] = [];

  constructor(initialTodos?: Todo[]) {
    if (initialTodos) {
      this.todos = initialTodos;
    }
   }
   show(): Todo[]{
       return this.todos
   }
   add(items:Todo){
     const newTodos={...this.todos}
     return newTodos.push(items)
   }
   remove(id:string){
    const newTodos={...this.todos}
    const index=newTodos.findIndex((el)=>el.id===id)
    newTodos.splice(index,1)
    return  this.todos=newTodos
   }
   filterIndex(id:string){
     return this.todos.filter((el)=>{
          return el.id===id
      })
   }    
   updateState(index:string,state:string):Todo[]{
    const Index=this.todos.findIndex((el)=>{
        return el.id===index 
    })
     this.todos[Index].state==state
     
     return this.todos
    }
   filter(item:Todo){
    return this.todos.filter((el)=>{
        return el.id===item.id || el.title===item.title || el.state===item.state
    })
    

 }
   // جستجو در عنوان تسک‌ها

 search(str:string):Todo[]{
     const newSearch=[...this.todos]
     newSearch.filter((el)=>{
             return el.title.includes(str)
         })
    this.todos=newSearch
    return this.todos
 }
}

  // جستجو در عنوان تسک‌ها
//   search(str: string): Todo[] {
//     const newSearch = this.todos.filter(el => el.title.includes(str));
//     return newSearch;
//   }
//قابلیت فیلتر کردن تسک‌ها بر اساس هر یک از متغیرها

const Instance = new ToDoList()
console.log(Instance.show());
console.log(Instance.add({ id: '1', title: 'تسک ۱', state: 'در حال انجام' }));
console.log(Instance.filterIndex("1"));
console.log(Instance.filter({
    title:"1",
    state:"dsf",
    id:"string"
}));
console.log(Instance.remove("1"));

//قابلیت پاک کردن تسک‌ها
