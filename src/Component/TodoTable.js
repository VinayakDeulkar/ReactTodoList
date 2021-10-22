import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'

export default function TodoTable() {
    const [TodoList, setTodoList] = useState({List:[]})
    useEffect(() => {
        let arr=[]
        arr=JSON.parse(localStorage.getItem('mylist'))
        
        if(arr!=undefined){
            let stor=arr.sort((a,b)=>b.level-a.level);
            console.log(stor);
            console.log(arr);
            setTodoList({
                List:arr
            })
        }
        
        
        console.log(TodoList);
        
    },[])
    const completeitem=(key)=>{
        console.log(key);
        console.log(TodoList.List);
        TodoList.List.map((element)=>{
            if(element.id==key){
                console.log(element.id);
                if(element.status===false){
                    element.status=true
                }
                else{
                    element.status=false
                }
            }
         } )
         localStorage.setItem('mylist',JSON.stringify(TodoList.List))
         let arr=[]
         arr=JSON.parse(localStorage.getItem('mylist'))
         setTodoList({
            List:arr
        })
        
    }
    const deleteItem=(key)=>{
        console.log(key);
        console.log(TodoList.List);
        let arr=TodoList.List.filter(todo=>todo.id!==key)
        console.log(arr);
        localStorage.setItem('mylist',JSON.stringify(arr))
        setTodoList({
            List:arr
        })

    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th></th></tr>
                </thead>
                
                    {TodoList.List.map((element)=>
                    <tbody key={element.id}>
                        <tr>
                        <td><label className={element.status?"cont":"cont2"}>{element.task}</label></td>
                        <td><label>{element.level}</label></td>
                        <td>
                            <Button variant="outline-success" onClick={()=>completeitem(element.id)} ><i className="fa fa-check" aria-hidden="true"></i></Button>{' '}
                            <Button variant="outline-danger" onClick={()=>deleteItem(element.id)}><i className="fa fa-times" aria-hidden="true"></i></Button>{' '}
                        </td>
                        </tr>
                    </tbody>
                        )}
                
            </Table>
        </div>
    )
}
