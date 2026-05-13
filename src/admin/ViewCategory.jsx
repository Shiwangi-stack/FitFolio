import { useEffect, useState } from "react"
import $ from "jquery"

import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

import { useEditor, EditorContent } from "@tiptap/react"
import  StarterKit from "@tiptap/starter-kit"
import * as bootstrap from "bootstrap"

export default function ViewCategory()
{
const [items, setitems]=useState([])
    useEffect(()=>{
        fetch("https://fitfolio-9u7p.onrender.com/api/getcategory")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
    },[])

useEffect(()=>{
    if(items.length>0)
    {
        $('#categoryTable').DataTable({
        destroy: true,
        // pageLength: 5,
        responsive:true
        })
    }
    },[items])

    const handleDelete=async(categoryid)=>{
        console.log(categoryid)
        if(!window.confirm("Are you sure to delete ?"))
            return
        try{
            const response=await fetch("https://fitfolio-9u7p.onrender.com/api/deletecategory/"+categoryid,{
                method:"delete"
            })
            if (response.ok)
            {
                alert("Category Deleted")
                setitems(items.filter(item => item._id !== categoryid))
            }
            else{
                alert('Error in Deletion')
            }
      }
      catch(err){
      alert("error")
      console.log(err)
    }
}

// update

const [formdata, setformdata]= useState ({
    title:"",
    photo:"",
})

const [editid, seteditid]= useState("")
const editor= useEditor({
    extensions:[StarterKit],
    content:"",
    onUpdate: ({editor})=>{
        setformdata(prev=>({...prev, description:editor.getHTML()}))
    }
})

const handleChange=(e)=>{
    const{name,value}=e.target 
    setformdata({...formdata,[name]:value})
}
    
    const openModal=(item)=>{
        setformdata({
            title:item.title,
            photo:item.photo,
        })
        seteditid(item._id)

        if(editor) {
            editor.commands.setContent(item.description)
        }

        const modal=new bootstrap.Modal(document.getElementById("editModal"))
        modal.show()
    }

    const handlephoto=async (e)=>{
    const file=e.target.files[0]
    console.log(file['name'])
    const data=new FormData()
    data.append("file",file)
    data.append("upload_preset","appointment")
    data.append("cloud_name","dryjnqnl9")

    try{
        const response=await fetch('https://api.cloudinary.com/v1_1/dryjnqnl9/image/upload',{
            method:"post",
            body:data
        })
        const result=await response.json()
        setformdata({
            ...formdata,
            photo:file['name'],
            photopath:result.url
    })

    }
    catch(err)
    {
        alert(err)
        console.log(err)
    }


}
const handleSubmit=async (e)=>
    {
        e.preventDefault()
        console.log(formdata)
        
        try{

          const response=await fetch("https://fitfolio-9u7p.onrender.com/api/updatecategory/"+editid,{
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(formdata)
          })
          if(response.ok)
          {
            alert('Category Updated')
            setitems(items.map(item=>item._id === editid ?
                {...item,...formdata}: item
            ))
            const modalE1 =  document.getElementById('editModal')
                const modal = bootstrap.Modal.getInstance(modalE1) 
                modal.hide()
                // window.location.reload()

          }
          else{
            alert('Error')
          }
        }
        catch(error)
        {
          console.log(error)
          alert("error")
        }
    }


    return(
        <>
        <h1>View Categories</h1>
        <div className="col">
            <table  id="categoryTable"  className="table table-bordered table-striped" >
            <thead>
<tr>
    <th>Title</th>
    <th>Photo</th>
</tr>
            </thead>
            <tbody>
{items.map((item, index)=>
<tr key={item._id}>
    <td>{item.title}</td>
    <td><img src={item.photopath} height={100} width={100}/></td>
    {/* <td>
            <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}><i class="bi bi-trash"></i></button>
            <button className="btn btn-warning" onClick={()=>openModal(item)}><i class="bi bi-pencil-square"></i></button>
    </td> */}
</tr>
)}
            </tbody>
            </table>

        {/* Modal */}
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={formdata.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <img src={formdata.photopath} height={100} width={100} />
                    <label>Photo</label>
                    <input type="file" className="form-control" name="photo"  onChange={handlephoto} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success">Update</button>
                </div>
            </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}






