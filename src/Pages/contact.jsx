// import { useState } from "react"

// function ContactInfo(props) {

//   return(
//     <div className='d-flex'>
//       <span className='bg-light p-2 text-primary'><i class={`bi bi-${props.icon}`}></i></span>
//       <p className='ms-3'><span className='fw-bold'>{props.heading} : </span>{props.text}</p>
//     </div>
//   )
// }

// function Contact() {

//   const [formdata, setformdata]=useState({
//     name:"",
//     email:"",
//     contact:"",
//     subject:"",
//     message:""
//   })

//   const handleChange=(e)=>{
//     const {name, value}= e.target
//     setformdata({...formdata, [name]: value})
//   }

//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     console.log(formdata)

//     try{
//     const response=await fetch("https://fitfolio-9u7p.onrender.com/api/insertcontact",{
//     headers:{"Content-Type":"application/json"},
//     method:"POST",
//     body:JSON.stringify(formdata)
//   });
//   if(response.ok)
//   {
//   alert("Message Sent");
//   }
//   else{
//   alert("Error")
//   }
//   }

//   catch(err){
//     alert("err");
//     console.log(err);
//   }
// };

//   return (
//     <>

//     <div className='container p-5'>
//       <div className='row'>
//         <h1 className='text-center'>Need Help</h1>
//         <p className='text-center'>Our team is available to provide prompt and helpful responses to all inquiries. You can reach us via phone, email, or by filling out the contact form below.</p>
//         <hr />
//         <form id='contactform' onSubmit={handleSubmit}>
//         <div className='row' id='border'>
//           <div className='col-lg-6' id='bg'>
//             <h1 className='text-center'>Get in touch</h1>
//             <p className='text-center'>We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.</p>
//             <h4><i class="bi bi-geo-fill"></i> Address</h4>
//             <p>8014 Edith Blvd NE, Albuquerque, New York, United States</p>
//             <h4><i class="bi bi-telephone-inbound"></i> Phone</h4>
//             <p>(505) 792-2430</p>
//             <h4><i class="bi bi-envelope-at"></i> E-Mail</h4>
//             <p>demo@yourdomain.com</p>
//             <h4><i class="bi bi-alarm"></i> Opening Hours</h4>
//             <p>Mon - Fri 9am - 5pm
//               Sat - Sun 9am - 2pm</p>
//           </div>
//            <div className='col-lg-6 p-5'>
//             <label htmlFor="Name">Full Name</label>
//             <input type="text" value={formdata.name} className='form-control' placeholder='' onChange={handleChange} name="name"/>
//             <div className='row mb-3 mt-3'>
//               <div className='col-lg-6'>
//                 <label htmlFor="Email">E-mail</label>
//                 <div className='input-group'>
//                   <span className='input-group-text'><i class="bi bi-envelope"></i></span>
//                   <input type="text" value={formdata.email} className='form-control' placeholder='' onChange={handleChange} name="email"/>
//                 </div>
//               </div>
//               <div className='col-lg-6 '>
//                 <label htmlFor="Phone Number">Phone Number</label>
//                 <div className='input-group'>
//                   <span className='input-group-text'><i class="bi bi-telephone"></i></span>
//                   <input type="text" value={formdata.contact} className='form-control' placeholder='' onChange={handleChange} name="contact"/>
//                 </div>
//               </div>
//             </div>
//             <label htmlFor="Subject">Subject</label>
//               <input type="text" value={formdata.subject} className='form-control' placeholder='' onChange={handleChange} name="subject"/>
//             <label htmlFor="Message" className='mt-3'>Message</label>
//               <input type="text" value={formdata.message} className='form-control' placeholder='' onChange={handleChange} name="message"/>
//             <button className='btn btn-primary mt-5' type="submit">Send Message</button>
//             </div>
//             </div>
//             </form>
//             <div className='row mt-5 p-0'>
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.8906912730076!2d74.94970877463888!3d30.21166711063008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a43c41eed7%3A0xf1bc9286b47f5ea9!2sSoftwizz%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1772432621392!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//           </div> 
//         </div>


        
//     </>
//   )
// }
// export default Contact

import { useState } from "react";

export default function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fitfolio-9u7p.onrender.com/api/insertcontact",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(formdata),
        }
      );

      if (response.ok) {
        alert("Message Sent Successfully");
      } else {
        alert("Error");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
<div
  className="container-fluid text-light py-5"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
>
  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}
  ></div>

  <div
    className="container text-center position-relative"
    style={{ zIndex: 1 }}
  >
    <h1 className="display-4 fw-bold">Contact Us</h1>

    <p className="mt-3 fs-5">
      We’d love to hear from you. Reach out for support,
      inquiries or collaborations.
    </p>
  </div>
</div>

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-5">

          {/* Left Info Card */}
          <div className="col-lg-5">
            <div className="bg-dark text-light p-5 rounded-4 shadow-lg h-100">

              <h2 className="fw-bold mb-4">Get In Touch</h2>

              <p className="text-secondary mb-5">
                We're always available to help and answer any questions.
              </p>

              <div className="mb-4">
                <h5 className="text-warning">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Address
                </h5>
                <p>8014 Edith Blvd NE, Albuquerque, New York</p>
              </div>

              <div className="mb-4">
                <h5 className="text-warning">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Phone
                </h5>
                <p>(505) 792-2430</p>
              </div>

              <div className="mb-4">
                <h5 className="text-warning">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email
                </h5>
                <p>demo@yourdomain.com</p>
              </div>

              <div>
                <h5 className="text-warning">
                  <i className="bi bi-clock-fill me-2"></i>
                  Opening Hours
                </h5>
                <p>Mon - Fri : 9AM - 5PM</p>
                <p>Sat - Sun : 9AM - 2PM</p>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-7">
            <div className="bg-white shadow-lg rounded-4 p-5">

              <h2 className="fw-bold mb-4">Send Message</h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control p-3"
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control p-3"
                      name="email"
                      value={formdata.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control p-3"
                      name="contact"
                      value={formdata.contact}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control p-3"
                    name="subject"
                    value={formdata.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    className="form-control p-3"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button className="btn btn-dark px-5 py-3 rounded-pill">
                  Send Message →
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* Google Map */}
        <div className="mt-5 rounded-4 overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.8906912730076!2d74.94970877463888!3d30.21166711063008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a43c41eed7%3A0xf1bc9286b47f5ea9!2sSoftwizz%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1772432621392!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>
        </div>

      </div>
    </>
  );
}

