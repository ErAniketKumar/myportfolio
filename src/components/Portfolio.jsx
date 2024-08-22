import React from "react";
import Card from "./Card"

function Portfolio() {
  const cardArray = [
    {
      id:1,
      imgUrl:"/image/todo_img.png",
      title:"mongoDb",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:2,
      imgUrl:"/image/express.png",
      title:"Express JS",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:3,
      imgUrl:"/image/reactjs.png",
      title:"React JS",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:4,
      imgUrl:"/image/node.png",
      title:"Node JS",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:5,
      imgUrl:"/image/java.png",
      title:"Java",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:6,
      imgUrl:"/image/python.webp",
      title:"Python",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
    {
      id:7,
      imgUrl:"/image/javascript.png",
      title:"Javascript",
      paragraph:"Lorem ipsum dolor sit amet fhdjwebfijsn",
      btn1:"Video",
      btn2:"Source Code",
    },
  
  ]
	return (
		<>
			<div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">
				<div>
					<h1 className="text-3xl font-bold">PortFolio</h1>
					<p className="text-lg font-semibold underline mb-5 mt-2">Featured Project</p>
				</div>
				<div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {
            cardArray.map(({id, imgUrl, title, paragraph, btn1, btn2})=>(
                <Card key={id} imgUrl={imgUrl} title={title} paragraph={paragraph} btn1={btn1} btn2={btn2} ></Card>
            ))
          }

				</div>
			</div>
      
      <hr />
		</>
	);
}

export default Portfolio;
