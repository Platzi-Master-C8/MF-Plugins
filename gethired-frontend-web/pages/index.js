import Image from "next/image"
import Path from "../components/Path"
import TechImg from "../public/technology.png"
import ButtonCTA from "../components/ButtonCTA/ButtonCTA"

export default function Home() {
  
  return (
    <main className="main">
      <section className="main__content">
        <h2>What is GH-Code Tracking?</h2>
        <div>
          <p>
          GH-Code Tracking is an extension for your VSCode text editor. It was built focusing on tech professional looking for mesuring their time and performance while writing code. With this extension you can track, share and visualize information about your time using VSCode only a click away. Show off your stats with recruiters and partners now!
          </p>

          <Image src={TechImg} />
        </div>
        <ButtonCTA name="Get the extension in VSCode" />
      </section>

      <Path active={1}/>
    </main>
  )
  
}
