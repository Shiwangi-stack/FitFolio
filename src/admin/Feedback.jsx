import { useEffect, useState } from "react"
import $ from "jquery"

import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

export default function Feedback()
{
    const [items, setitems]=useState([])
        useEffect(()=>{
            fetch("https://fitfolio-9u7p.onrender.com/api/getfeedback")
            .then(response=>response.json())
            .then(data=>setitems(data))
            .catch(err=>console.log(err))
        },[])

        useEffect(()=>{
    if(items.length>0)
    {
        $('#feedbackTable').DataTable({
        destroy: true,
        // pageLength: 5,
        responsive:true
        })
    }
    },[items])
    
    return(
        <>
        <h1>Feedback</h1>
        <div className="col">
            <table id="feedbackTable" className="table table-bordered table striped">
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.subject}</td>
                        <td>{item.message}</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}