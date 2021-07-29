
import {React,useEffect,useState} from 'react'
import{ Component } from 'react';
export default function Home() {
    const [table2data, settable2data] = useState()
    const [table1data, settable1data] = useState()
    const [arr, setarr] = useState([

    ])
    const [output, setoutput] = useState(
    [ 
    ]

    )

    const [input, setinput] = useState([
     {
         skill : "skill2"
     },
     {
        skill : "skill3"
    },
    {
        skill : "skill4"
    },
    {
        skill : "skill5"
    },
    {
        skill : "skill6"
    },
    {
        skill : "skill7"
    },
    {
        skill : "skill8"
    },
    {
        skill : "skill9"
    },
    {
        skill : "skill10"
    },
    {
        skill : "skill11"
    },
    {
        skill : "skill12"
    },
    {
        skill : "skill13"
    },
    {
        skill : "skill14"
    },
    {
        skill : "skill15"
    },
    {
        skill : "skill16"
    },
    {
        skill : "skill17"
    },
    {
        skill : "skill18"
    },
    {
        skill : "skill19"
    },
    {
        skill : "skill20"
    },
    {
        skill : "skill21"
    },



    ])

    const pushToOutput=(e)=>{
        
        let chu ={
            skill:e.target.value
        }
        setoutput(output => output.concat(chu))
        
        for(let i=0;i<input.length;i++)
        {
          if(typeof input[i]!== "undefined" && input[i].skill==e.target.value)
          {
            delete(input[i])
          }
        }
        // input.filter((x)=>{
        //   return x.skill !== e.target.value
        // })

          
        
    }
    const pushToInput=(e)=>{
      console.log(e.target.value)
      let chu =[{
          skill:e.target.value
      }]
      let x= chu.concat(input)
      console.log("x",x)
      setinput(x)
     
      for(let i=0;i<output.length;i++)
        {
          if(typeof output[i]!== "undefined" && output[i].skill==e.target.value)
          {
            delete(output[i])
          }
        }
        
      
  }
  

  // if(document.getElementById('table2') !="null" )
  // {
  //   let elHeight = document.getElementById('table2').clientHeight
  //   console.log("div",elHeight)
  // }
  
    
    useEffect(() => {

        settable2data(
            input.map((object,index)=>(
              
                <button key={index}   className="h-12 text-xl m-2 border-2 border-dashed p-2 text-gray-600 inline-block">
                <button className=" text-lg inline-block mr-2" onClick={(e)=>{pushToOutput(e)}} value={object.skill}>
                 +
                </button>
                
                  {object.skill}
                  
                </button>


))
        )
    }, [input,output])

    useEffect(() => {
        settable1data(
            output.map((object,index)=>(
             
                <button key={index}  className="h-12 text-xl m-2 bg-blue-600 p-2 text-gray-50 inline-block" style={{backgroundColor: "#0f7bcc"}}>
                      {object.skill}{" "} 
                      <button className=" text-lg inline-block" onClick={(e)=>{pushToInput(e)}} value={object.skill}>
                        ✕
                      </button>
                    </button>


            ))
        )
    }, [output,input])
  

    
    // componentDidMount()
    // {
      
    // }
   

    return (
        <div className=" bg-gray-100 w-full h-full  items-center  justify-center flex-col  p-10">

            <div className=" w-2/3  mx-auto p-0 -mb-2">
                <div className=" w-1/3 inline-block  h-3 bg-blue-500">

                </div>

                <div className="w-2/3 inline-block h-3 bg-gray-400">

                </div>

            </div>
           
            <div className=" bg-white w-2/3  mx-auto  p-10 text-left pl-10 ">
                  
                <div className=" font-bold text-4xl text-gray-600 ">
                What are your top skills in design? 
                </div>

                <div className=" mt-5 text-xl text-gray-500">
                    Highlight your top skills , languages or frameworks
                </div>
                
                <div className=" inline-block w-3/4 pl-6 py-2 pr-8 mr-8 border-2 mt-10 border-blue-500">
                     
                     <button className="h-12 text-xl m-2 bg-blue-600 p-2 text-gray-50 inline-block" style={{backgroundColor: "#0f7bcc"}}>
                      Dummy{" "} 
                      <div className=" text-lg inline-block">
                        ✕
                      </div>
                    </button>

                    
                    {table1data}

                </div>

                <div className=" mt-8 ml-1 text-xl text-gray-500">
                    Suggested skills
                </div>

                <div id="table2" className=" max-h-52 overflow-hidden inline-block w-3/4  py-2 pr-8 mr-8  mt-5 ">
                

                    {table2data}
                    {/* {arr} */}

                </div>
                <button className=" block ml-2 text-lg text-center w-36 py-2 px-4 bg-red-700 text-white mt-4">
                    Next
                </button>
                
            </div>
            
        </div>
    )
}
