// components
import PluginStatus from "../components/PluginStatus"
import { UserMain } from "../containers/UserMain/UserMain"

export default function Home() {  
  return (
    <main className="Main__wrapper">
      <section className="Main__header">
        <PluginStatus date="08/02/2022" />
        <UserMain userName="Jito" currentToken="f9d5d5a8a4h7k7y2l8"/>
      </section>
    </main>
  )
  
}
