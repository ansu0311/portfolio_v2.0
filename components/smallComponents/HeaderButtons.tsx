import Link from 'next/link'
import { MagneticFramer} from "../smallComponents/MagneticFramer";

type Props = {
    name: string,
    to?:string,
}

export default function HeaderButtons({name,to}: Props) {
  return (
    <MagneticFramer><div>
        <Link href={(to)?to:""}>
            <div className='font-medium'>{name}</div>
        </Link>
    </div></MagneticFramer>
  )
}