import { useState } from "react"

export default function Home() {
  const [on ,setOn] = useState(false)


  if(on === false) {
    return (

    <div className=" slowshow     bg-black flex flex-col text-pink-200 min-h-dvh justify-center items-center">
      <h1>Говорят это особый день для влебленных...</h1>
      <h2>Но чем он важен для меня ?</h2>
      <button onClick={() => setOn(true)} className=" text-pink-700 font-bold w-1/5 rounded-lg shadow-md transition ease-out delay-50 active:scale-110  duration-50">Узнать</button>
    </div>
  )
  }else {
    return (
      <div className="bg-black flex flex-col text-pink-200 min-h-dvh  items-center">
          <h1 className="mt-9 flex">Потому что я тебя очень сильно люблю и ты для меня... </h1>
          <h1>Все в этом мире</h1>
          <div className="flex ">
            <div>
              <div className="  show1    m-5 border border-solid border-pink-300 rounded-lg">
              <img  className="h-[300px] w-[200px] rounded-t-lg" src="/das.jpg" />
              <h2 className="flex justify-center">Обожаю</h2>
            </div>
            <div className="   show2  m-5 border border-solid border-pink-300 rounded-lg">
              <img  className="h-[300px] w-[200px] rounded-t-lg" src="/das2.jpg" />
              <h2 className="flex justify-center">Любуюсь</h2>
            </div>
            </div>
            <div>
              <div className="   show3  m-5 border border-solid border-pink-300 rounded-lg">
              <img  className="h-[300px] w-[200px] rounded-t-lg" src="/das3.jpg" />
              <h2 className="flex justify-center">Целую</h2>
            </div>
            <div className="   show4  m-5 border border-solid border-pink-300 rounded-lg">
              <img  className="h-[300px] w-[200px] rounded-t-lg" src="/das4.jpg" />
              <h2 className="flex justify-center">Восхищаюсь</h2>
            </div>
            </div>
            
          </div>      
      </div>
    )
  }
  
}
