import { Timeline } from "../components/Timeline"
import { experiences } from "../constants"

export const Experiences = () => {
  return (
    <section id="experience" className="w-full">
      <Timeline data={experiences} />
    </section>
  )
}
