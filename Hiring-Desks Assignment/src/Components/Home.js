
import {React,useEffect,useState} from 'react'
export default function Home() {
    
    //usestate for displaying details in upper table
    const [table2data, settable2data] = useState()

    //usestate for displaying details in lower table
    const [table1data, settable1data] = useState()
    
    //Output API (Initially empty as no skils are added)
    const [output, setoutput] = useState(
    [ 
    ]

    )

    //Input API of 50 skills
    const [input, setinput] = useState(
    [

     {
         skill : "InDesign"
     },
     {
        skill : "UI Design"
    },
    {
        skill : "Illustrator"
    },
    {
        skill : "User Research"
    },
    {
        skill : "Virtual Design"
    },
    {
        skill : "User-Centered Design"
    },
    {
        skill : "Wireframes"
    },
    {
        skill : "Adobe Creative Suite"
    },
    {
        skill : "Product Design"
    },
    {
        skill : "Design Thinking"
    },
    {
        skill : "Sketch"
    },
    {
        skill : "Photoshop"
    },
    {
        skill : "Creative Direction"
    },
    {
        skill : "Usability Testing"
    },
    {
        skill : "Design Strategy"
    },
    {
        skill : "UX Design"
    },
    {
        skill : "Interaction Design"
    },
    {
        skill : "Graphic Design"
    },
    {
        skill : "skill1"
    },
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
    {
        skill : "skil22"
    },
    {
        skill : "skill23"
    },
    {
        skill : "skill24"
    },
    {
        skill : "skil25"
    },
    {
        skill : "skill26"
    },
    {
        skill : "skill27"
    },
    {
        skill : "skil28"
    },
    {
        skill : "skill29"
    },
    {
        skill : "skill30"
    },
    {
        skill : "skil31"
    },
    {
        skill : "skill32"
    },
 ])

console.log(input.length)
    //function to put data in upper table
    const pushToOutput=(e)=>{
        
        let dict ={
            skill:e.target.value
        }
        
        setoutput(output => output.concat(dict))
        
        //to delete selected elements
        for(let i=0;i<input.length;i++)
        {
          if(typeof input[i]!== "undefined" && input[i].skill==e.target.value)
          {
            delete(input[i])
          }
        }
 

          
        
    }

    //function to put data in lower table
    const pushToInput=(e)=>{
      console.log(e.target.value)
      let dict =[{
          skill:e.target.value
      }]

      let x= dict.concat(input)
      console.log("x",x)
      setinput(x)
     
       //to delete selected elements
      for(let i=0;i<output.length;i++)
        {
          if(typeof output[i]!== "undefined" && output[i].skill==e.target.value)
          {
            delete(output[i])
          }
        }
        
      
  }
  
    //Rerennder lower table when Input API / Output API changes
    useEffect(() => {

        settable2data(
            input.map((object,index)=>(
              
                <button key={index}   className="h-12 text-lg md:text-xl m-1 md:m-2 border-2 border-dashed p-1 md:p-2 text-gray-600 inline-block">
                <button className=" text-lg inline-block mr-2" onClick={(e)=>{pushToOutput(e)}} value={object.skill} >
                 +
                </button>
                
                  {object.skill}
                  
                </button>


))
        )
    }, [input,output])


    //Rerennder upper table when Input API / Output API changes
    useEffect(() => {
        settable1data(
            output.map((object,index)=>(
             
                <button key={index}  className="h-12 text-lg md:text-xl m-1 md:m-2  bg-blue-600 p-1 px-2  md:px-2 md:p-2 text-gray-50 inline-block" style={{backgroundColor: "#0f7bcc"}}>
                      {object.skill}{" "} 
                      <button className=" text-lg inline-block" onClick={(e)=>{pushToInput(e)}} value={object.skill}>
                        ✕
                      </button>
                    </button>


            ))
        )
    }, [output,input])
  
    return (
        <div className=" bg-gray-100  w-full h-screen md:h-full  items-center  justify-center flex-col  p-4 md:p-10">

            <div className="  md:w-2/3  mx-auto p-0 -mb-2">
                <div className=" w-1/3 inline-block  h-3 bg-blue-500">

                </div>

                <div className="w-2/3 inline-block h-3 bg-gray-400">

                </div>

            </div>
           
            <div className=" bg-white md:w-2/3  mx-auto p-6 md:p-10 text-left pl-10 ">
                  
                <div className=" font-bold text-3xl md:text-4xl text-gray-600 ">
                What are your top skills in design? 
                </div>

                <div className=" mt-2 md:mt-5 text-lg md:text-xl  text-gray-500">
                    Highlight your top skills , languages or frameworks
                </div>
                
                <div className="  inline-block w-full md:w-3/4 pl-2 md:pl-4 py-2 md:pr-8 mr-8 border-2 mt-5 md:mt-10 border-blue-500">
                    
                    
                    {table1data}
                    

                </div>

                <div className="mt-4 md:mt-8 ml-1 text-xl text-gray-500">
                    Suggested skills
                </div>

                <div id="table2" className=" max-h-44 md:max-h-52 overflow-hidden inline-block w-full md:w-3/4  py-2 pr-2 md:pr-8 mr-8 mt-2 md:mt-5 ">
                

                    {table2data}
                   

                </div>
                <button className=" block ml-2 text-base md:text-lg text-center w-24 md:w-36 py-2 px-2 md:px-4 bg-red-700 text-white mt-4">
                    Next
                </button>
                
            </div>
            
        </div>
    )
}
