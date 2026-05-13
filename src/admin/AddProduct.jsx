import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"


export default function AddProduct()
{
const [formdata, setformdata] = useState({
    title: "",
    category: "",
    mrp: "",
    sellingprice: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo1path: "",
    photo2path: "",
    photo3path: "",
    description: "",
    gender: "",
    availablesize: "",
    material: ""
});

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

const handlephoto = async (e) => {
    const file = e.target.files[0];
    const name = e.target.name; // photo1, photo2, photo3

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "appointment");
    data.append("cloud_name", "dryjnqnl9");

    try {
        const response = await fetch(
            "https://api.cloudinary.com/v1_1/dryjnqnl9/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const result = await response.json();

        // SET CORRECT FIELD
        setformdata((prev) => ({
            ...prev,
            [name]: result.url,          // save in photo1 / photo2 / photo3
            [`${name}path`]: result.url  // for preview
        }));

    } catch (err) {
        console.log(err);
        alert("Image upload failed");
    }
};

    const handleSubmit=async (e)=>
    {
        e.preventDefault()
        console.log(formdata)
        
        try{

          const response=await fetch("https://fitfolio-9u7p.onrender.com/api/insertproduct",{
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(formdata)
          })
          if(response.ok)
          {
            alert('Product Added')
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
        <h1>Add Product</h1>
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
                    <label>MRP</label>
                    <input type="text" className="form-control" name="mrp" value={formdata.mrp} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Selling Price</label>
                    <input type="text" className="form-control" name="sellingprice" value={formdata.sellingprice} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <img src={formdata.photo1path} height={100} width={100} />
                    <label>Photo 1</label>
                    <input type="file" className="form-control" name="photo1"  onChange={handlephoto} />
                </div>
                <div className="mb-3">
                    <img src={formdata.photo2path} height={100} width={100} />
                    <label>Photo 2</label>
                    <input type="file" className="form-control" name="photo2"  onChange={handlephoto} />
                </div>
                <div className="mb-3">
                    <img src={formdata.photo3path} height={100} width={100} />
                    <label>Photo 3</label>
                    <input type="file" className="form-control" name="photo3"  onChange={handlephoto} />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    {/* <textarea className="form-control" name="description" value={formdata.description} onChange={handleChange} ></textarea> */}

                    <div style={{border:"1px solid #ccc",padding:"10px"}}>
<EditorContent editor={editor} />
</div>
                </div>
                <div className="mb-3">
                    <label>Gender</label>
                    <input type="text" className="form-control" name="gender" value={formdata.gender} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Available Size</label>
                    <input type="text" className="form-control" name="availablesize" value={formdata.availablesize} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Material</label>
                    <input type="text" className="form-control" name="material" value={formdata.material} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success">Update</button>
                </div>
            </form>
        </div>
        </>
    )
}


