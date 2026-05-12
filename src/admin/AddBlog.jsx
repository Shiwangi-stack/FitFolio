import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"


export default function AddBlog()
{
    const [formdata, setformdata]=useState({
        title:"",
        description:"",
        photo:"",
        postby:"Admin",
        category:"",
        photopath:""
    })

    const editor = useEditor({
extensions:[StarterKit],
content:"",
onUpdate:({editor})=>{
setformdata({
...formdata,
description:editor.getHTML()
})
}
})

    const handleChange=(e)=>{
        const {name, value}=e.target
        setformdata({
            ...formdata,
            [name]:value
    })
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

          const response=await fetch("http://localhost:5000/api/insertblog",{
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(formdata)
          })
          if(response.ok)
          {
            alert('Blog Added')
          }
          else{
            alert('Error ')
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
        <h1>Add Blog</h1>
        <div className="container px-5 ">
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
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
        </>
    )
}


// npm install @tiptap/react @tiptap/starter-kit