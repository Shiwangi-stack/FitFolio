import { useEffect, useState } from "react"
import $ from "jquery"

import "datatables.net-bs5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"

import { useEditor, EditorContent } from "@tiptap/react"
import  StarterKit from "@tiptap/starter-kit"
import * as bootstrap from "bootstrap"

export default function ViewBlog()
{
const [items, setitems]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/getblog")
        .then(response=>response.json())
        .then(data=>setitems(data))
        .catch(err=>console.log(err))
    },[])

useEffect(()=>{
    if(items.length>0)
    {
        $('#blogTable').DataTable({
        destroy: true,
        // pageLength: 5,
        responsive:true
        })
    }
    },[items])

    const handleDelete=async(blogid)=>{
        console.log(blogid)
        if(!window.confirm("Are you sure to delete ?"))
            return
        try{
            const response=await fetch("http://localhost:5000/api/deleteblog/"+blogid,{
                method:"delete"
            })
            if (response.ok)
            {
                alert("Blog Deleted")
                setitems(items.filter(item => item._id !== blogid))
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
    description:"",
    photo:"",
    postby:"Admin",
    category:"",
    photopath:"",

})

const [editid, seteditid]= useState(" ")
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
            postby:item.postby,
            description:item.description,
            category:item.category,
            photopath:item.photopath
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

          const response=await fetch("http://localhost:5000/api/updateblog/"+editid,{
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(formdata)
          })
          if(response.ok)
          {
            alert('Blog Updated')
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
        <h1>View Blogs</h1>
        <div className="col">
            <table  id="blogTable"  className="table table-bordered table-striped" >
            <thead>
<tr>
    <th>Srno</th>
    <th>Title</th>
    <th>Category</th>
    <th>Photo</th>
    <th>Post By</th>
    <th>Description</th>
    <th>Date</th>
    <th>Action</th>
</tr>
            </thead>
            <tbody>
{items.map((item, index)=>
<tr>
    <td>{index+1}</td>
    <td>{item.title}</td>
     <td>{item.category}</td>
      <td><img src={item.photopath} height={100} width={100}/></td>
       <td>{item.postby}</td>
       {/* <td dangerouslySetInnerHTML={{__html: item.description}} ></td> */}

       <td>
{
item.description
.replace(/<[^>]+>/g,'')
.substring(0,100)
}
...
</td>
        <td>{item.poston}</td>
        <td>
            <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}><i class="bi bi-trash"></i></button>
            <button className="btn btn-warning" onClick={()=>openModal(item)}><i class="bi bi-pencil-square"></i></button>
        </td>
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
                    <label>Category</label>
                    <input type="text" className="form-control" name="category" value={formdata.category} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <img src={formdata.photopath} height={100} width={100} />
                    <label>Photo</label>
                    <input type="file" className="form-control" name="photo"  onChange={handlephoto} />
                </div>
                <div className="mb-3">
                    <label>Post By</label>
                    <input type="text" className="form-control" name="postby" value={formdata.postby} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    {/* <textarea className="form-control" name="description" value={formdata.description} onChange={handleChange} ></textarea> */}

                    <div style={{border:"1px solid #ccc",padding:"10px"}}>
<EditorContent editor={editor} />
</div>
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






