// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function BlogDetail() {
    
//     const { id } = useParams();
//     console.log(id)

//     const [item, setitem]=useState()
//     useEffect(()=>{
//         fetch("http://localhost:5000/api/getblogbyid/"+id)
//         .then(response=>response.json())
//         .then(data=>setitem(data))
//         .catch(err=>console.log(err))
//     },[])

//     return(
//         <>
//         <h1>Blogs</h1>
//         <div className="row p-5">
//             {item&&
//             <div className="col-lg-12">
//                 <div className="card">
//                     <img src={item.photopath}/>
//                     <div className="card-body">
//                         <h4>{item.category}</h4>
//                         <p>{item.category}</p> | By {item.postby} | {new Date(item.poston).toLocaleString}
//                         <p dangerouslySetInnerHTML={{__html: item.description}}></p>

//                     </div>
//                 </div>
//             </div>}
//         </div>
//         </>
//     )
// }


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { id } = useParams();

  const [item, setitem] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/getblogbyid/" + id)
      .then((response) => response.json())
      .then((data) => setitem(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {item && (
        <>
          {/* Hero Banner */}
          <div className="container-fluid bg-secondary text-light py-5">
            <div className="container text-center">
              <p className="text-warning mb-2">{item.category}</p>

              <h1 className="display-5 fw-bold">
                {item.title}
              </h1>

              <p className="mt-3 text-black">
                By {item.postby} |{" "}
                {new Date(item.poston).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Blog Detail */}
          <div className="container py-5">

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

              {/* Blog Image */}
              <img
                src={item.photopath}
                className="img-fluid w-100"
                style={{ maxHeight: "500px", objectFit: "cover" }}
                alt=""
              />

              {/* Blog Content */}
              <div className="card-body p-5">

                <span className="badge bg-warning text-dark px-3 py-2 mb-4">
                  {item.category}
                </span>

                <h2 className="fw-bold mb-4">
                  {item.title}
                </h2>

                <div
                  className="text-muted fs-5 lh-lg"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                ></div>

                {/* Buttons */}
                <div className="mt-5 d-flex gap-3">
                  <Link to="/Blogs">
                    <button className="btn btn-dark px-4 rounded-pill">
                      ← Back Blogs
                    </button>
                  </Link>

                  <button className="btn btn-outline-dark px-4 rounded-pill">
                    Share Blog
                  </button>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}