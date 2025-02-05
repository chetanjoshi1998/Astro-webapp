
// import { useEffect, useState } from "react";
// import data  from "./data.json"

// const footer =()=>{
//     // console.log(data)
//     const [data,Setdata]=useState([]);
//     const getdata=async()=>{
//         const res= await fetch("https://json.freeastrologyapi.com/d2-chart-info");
//         const actualData= await res.json();
//         console.log(actualData);
//         Setdata(actualData);
//     }
//     useEffect(()=>{
//         getdata();
//     },[]);
    
//     return(
//         <>

//         {/* <div>
//            { console.log(data)}
//             {
//                  data.map((data, ind) => {
//                     return (
//                         <div className="Created_Task" key={ind}>
                            
//                             <div className="addedTask">
//                                 <p>
//                                     {data.id}
//                                     {console.log(data.gan)}
//                                 </p>
//                                 <p>
//                                     {data.nadi}
//                                     {console.log(data.gan)}
//                                 </p>
//                                 <p>
//                                     {data.yoni}
//                                     {console.log(data.gan)}
//                                 </p>
//                                 <p>
//                                     {data.gan}
//                                     {console.log(data.gan)}
//                                 </p>
//                             </div>

                           

//                         </div>
//                     )
//                 })
//         //     } */}
//         // {/* </div> */}
      
//         </>
//     )
// };
// export default footer;