import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Link } from '@/lib/i18n/routing'

type CardActionProps = {
  title: string
  link: string
  description: string
  linkText: string
}

export const CardAction = ({
  title,
  link,
  description,
  linkText
}: CardActionProps) => {
  return (
    <div className="card bg-[#1c5ba1] text-white">
      <div className="card-body gap-4">
        <h2 className="card-title text-4xl font-bold md:text-6xl">{title}</h2>
        <p className="text-lg md:text-2xl">{description}</p>
        <div className="card-actions justify-start">
          <Link
            role="button"
            target="_blank"
            href={link}
            className="btn bg-yellow-400 text-lg text-black hover:bg-yellow-100 md:text-2xl"
          >
            {linkText}
            <KeyboardArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
