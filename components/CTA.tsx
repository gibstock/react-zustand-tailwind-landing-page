import Button from "./Button"
import {BsFillPlayFill} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className="flex flex-row gap-5">
      <Button bg="#111928">Get 6 months free</Button>
      <Button bg="#ffffff" color="#000000" outline="1px solid black"><BsFillPlayFill color="#1c64f2"/>Watch video</Button>
    </div>
  )
}

export default CTA