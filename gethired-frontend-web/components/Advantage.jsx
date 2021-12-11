import Image from "next/image";

const Advantage = ({ img, alt, title }) => (
  <div className="advantage">
    <Image width={60} height={60} src={img} alt={alt}/>
    <h3>{ title }</h3>
  </div>
)

export default Advantage;