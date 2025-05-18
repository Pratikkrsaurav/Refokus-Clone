import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {
  const initialImages = [
    {
      url: "https://imgs.search.brave.com/ncJ2kHwjuhrfYLF0ybs85cnAuVD9Nkb4pyeGutF4MMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjRkYzhiNmJjNTJi/NTA0NTA5MTk3ZTQv/NjY3NTk1YWNmYzk3/MWM1NWU4NmQ5NzZk/X3JlZm9rdXNfaHlw/ZV92aWRlb19pbWFn/ZXNfMDUud2VicA",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://imgs.search.brave.com/4xwr3PNmYYO_GLUYx7ctqMQsGXwhD--gas2ExUlt9D0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjRkYzhiNmJjNTJi/NTA0NTA5MTk3ZTQv/NjZjNjMxMzQ2NzAy/ZDhiNjQ5MDkwZTU2/X3dlYmRlc2lnbi53/ZWJw",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://imgs.search.brave.com/OsSKKa2bH0XAa1i1R--N3Mq_qCO4VKs-MZwLChMm0_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjRkYzhiNmJjNTJi/NTA0NTA5MTk3ZjAv/Njc4ZmQ5Mjc0MWE0/MjhkM2MzNzg0ZmMx/X3JlZm9rdXNfaG93/X3N0YXJ0dXBzX2Rv/bWluYXRlX2JyYW5k/X3N0cmF0ZWdpZXMu/cG5n",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXi5SDRik44XifHs9y6DVCgndxyjSvLkYyw&s",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.ytimg.com/vi/Vlji0MHCo40/sddefault.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  const [images, setImages] = useState(initialImages);
  const { scrollYProgress } = useScroll();


scrollYProgress.on("change", (data)=>{
  function imageShow(arr){
    setImages((prevImages)=>
    prevImages.map((image, index)=>
      arr.indexOf(index) === -1
      ? {...image, isActive: false}
      : {...image, isActive: true}
     ))
  }

switch(Math.floor(data * 100)) {
  case 0:
    imageShow([])
    break;
  case 2:
    imageShow([0])
    break;
  case 3:
    imageShow([0, 1])
    break;
  case 4:
    imageShow([0, 1, 2])
    break;
  case 6:
    imageShow([0, 1, 2, 3])
    break;
  case 8:
    imageShow([0, 1, 2, 3, 4])
    break;
    case 9:
      imageShow([0, 1, 2, 3, 4, 5])
      break;
}
})

  return (
    <div className="w-full pt-16">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[28vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;