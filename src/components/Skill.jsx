import React from 'react'

function Skill() {
    const skillArray = [
        {
            id:1,
            imgUrl:"image/html.png",
            title: "HTML",
        },
        {
            id:2,
            imgUrl:"image/css.jpg",
            title: "CSS",
        },
        {
            id:3,
            imgUrl:"image/javascript.png",
            title: "Javascript",
        },
        {
            id:4,
            imgUrl:"image/oracle.png",
            title: "Oracle",
        },
        {
            id:5,
            imgUrl:"image/cpp.png",
            title: "C++",
        },
        {
            id:6,
            imgUrl:"image/github.png",
            title: "Github",
        },
        {
            id:7,
            imgUrl:"image/dsa.webp",
            title: "DSA",
        },
        {
            id:8,
            imgUrl:"image/reactjs.png",
            title: "React",
        }

    ]

  return (
    <>
        <div name="Explore" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-12'>
            <div className="flex flex-col space-y-4 mb-5">
            <h1 className="text-3xl font-bold">Skills</h1>
            <p>I've Explored These Skills</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 space-y-2">

                {skillArray.map(({id, imgUrl, title})=>{
                    return (
                        <div key={id} className="h-[9rem] w-[9rem] border-2 rounded-full flex flex-col justify-center items-center hover:scale-105 duration-200">
                           <img src={imgUrl} className=" w-[6rem] rounded-full" alt="" />
                           <h1>{title}</h1>
                       </div>
                    )
                })}

            </div>
        </div>
        <hr />
    </>
  )
}

export default Skill