//Second aproach using promises

const asyncHandler= (requestHandler)=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}




// first approach using try catch

// // const asyncHandler=()=>{}
// // const asyncHandler=(func)=>{}
// // const asyncHandler=(func)=>{()=>{}}  //higher order function
// // const asyncHandler=(func)=>()=>{}  
// const asyncHandler=(func)=> async (req,res,next)=>{
//     try{
//            await func(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 400).json({
//             success:false,
//             message:err.message
//         })
//     }
// }  

export { asyncHandler }