import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'

export default function TodoTable() {
    const [TodoList, setTodoList] = useState({List:[]})
    const [Style, setStyle] = useState({styleid:'',styleclass:""})
    const [complete, setcomplete] = useState({clist:[]})
    useEffect(() => {
        let arr=[]
        arr=JSON.parse(localStorage.getItem('mylist'))
        let stor=arr.sort((a,b)=>b.level-a.level);
        console.log(stor);
        setTodoList({
            List:arr
        })
        
        
    },[])
    const completeitem=(key)=>{
        console.log(key);
        console.log(complete.clist.includes(key));
        if(complete.clist.includes(key)!=true){
            
        setStyle({
            styleid:key,
            styleclass:"cont2"
        })
        complete.clist.push(key)}
        else{
            setStyle({
            styleid:key,
            styleclass:""
        })
        let carr=[]
        carr=complete.clist.filter(ele=>ele.id===key)
        setcomplete({
            clist:carr
        })
    }
    }
    const deleteItem=(key)=>{
        console.log(key);
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
                    <tbody key={element.id+element.task+element.level}>
                        <tr>
                        <td><label className={element.id===Style.styleid || complete.clist.includes(element.id) ? Style.styleclass: ''}>{element.task}</label></td>
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
