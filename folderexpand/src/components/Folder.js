import React,{useState} from 'react'

function Folder({explorer}) {
    const [expand,setExpand]= useState(false)
    console.log(explorer)
    if(explorer.isFolder){
        return (
            <div>
            <span onClick={()=> setExpand(!expand)}>{explorer.name}
           <br />
           </span>
           <div style={{display:expand ? "block": "none"}}>
           { explorer.items.map((exp)=>{
                   return  <Folder explorer={exp} />
                     // return <span>{exp.name}</span>
                      
                })
            }

           </div>

        
           </div>
          
           
          );

   }
 else 
    return <span>{explorer.name}</span>
 
}

export default Folder