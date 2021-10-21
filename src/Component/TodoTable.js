import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'

export default function TodoTable() {
    const [TodoList, setTodoList] = useState({List:[]})
    const [Style, setStyle] = useState({styleid:'',styleclass:""})
    const [complete, setcomplete] = useState([])
    let keys=JSON.parse(localStorage.getItem('keys'))
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
        if(keys!=null){
            if(keys.includes(key)!=true){
                setStyle({
                    styleid:key,
                    styleclass:"cont2"
                })
                complete.push(key)
                localStorage.setItem('keys',JSON.stringify(complete))
            }
            else{
                setStyle({
                styleid:key,
                styleclass:""
                })
                let carr=[]
                carr=complete.filter(ele=>ele!=key)
                console.log(carr);
                setcomplete(carr)
                localStorage.setItem('keys',JSON.stringify(carr))
                console.log(complete);
            }
        }
        else{
            setStyle({
                styleid:key,
                styleclass:"cont2"
            })
            complete.push(key)
            localStorage.setItem('keys',JSON.stringify(complete))
        }
        
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
                        <td><label className={element.id===Style.styleid || complete.includes(Style.styleid) ? Style.styleclass: ''}>{element.task}</label></td>
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
