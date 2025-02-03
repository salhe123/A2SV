import Image from "next/image";

const Navigation = () => {
  return (
    <div>
      <div className="flex gap-[11.5px] ml-28 opacity-100 ">
        <Image
          src="/image.png"
          width={197}
          height={37}
          alt="Picture of the brand"
          className="gap-11.5px"
        />
       
      </div>
      
    
      
     
    </div>
  );
};

export default Navigation;
