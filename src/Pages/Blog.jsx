// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// export default function Blog()
// {
//     const[items, setitems]= useState([])
//     useEffect(()=>{
//         fetch("http://localhost:5000/api/getblog")
//         .then(response=>response.json())
//         .then(data=>setitems(data))
//         .catch(err=>console.log(err))
//     },[])

//     return(
//         <>
//         <h1>Blogs</h1>
//         <div className="row p-5">
//             {items.map((item, index)=>
//             <div className="col-lg-4">
//                 <div className="card">
//                     <img src={item.photopath} />
//                     <div className="card-body">
//                         <h4>{item.title}</h4>
//                         <p>{item.category}</p>
//                         <Link to={`/blogdetail/${item._id}`}>
//                         <button className="btn btn-success">Read More..</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             )}
//         </div>
//         </>
//     )
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/getblog")
      .then((response) => response.json())
      .then((data) => setitems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-secondary text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Fashion Journal</h1>
          <p className="mt-3 fs-5 text-black">
            Explore premium trends, styling ideas & latest fashion stories.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container py-5">
        <div className="row g-4">

          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden"
                style={{ transition: "0.3s ease" }}
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.photopath}
                    className="card-img-top"
                    height="280"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>

                {/* Body */}
                <div className="card-body p-4">

                  <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                    {item.category}
                  </span>

                  <h4 className="fw-bold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-muted">
                    Discover premium fashion updates and modern styling inspiration.
                  </p>

                  <Link to={`/blogdetail/${item._id}`}>
                    <button className="btn btn-dark px-4 rounded-pill mt-2">
                      Read More →
                    </button>
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}