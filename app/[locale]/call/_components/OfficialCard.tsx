import { Official } from '../_lib/types'
import { Text } from '@/app/_components'
import Image from 'next/image'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

interface OfficialCardProps {
  official: Official & {
    officeName?: string;
    divisionId?: string;
  }
}

const getSocialUrl = (type: string, id: string) => {
  switch (type.toLowerCase()) {
    case 'twitter':
      return `https://twitter.com/${id}`
    case 'facebook':
      return `https://facebook.com/${id}`
    case 'youtube':
      return `https://youtube.com/${id}`
    case 'instagram':
      return `https://instagram.com/${id}`
    default:
      return `https://${type}.com/${id}`
  }
}

const getSocialIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'twitter':
      return <TwitterIcon fontSize="small" />
    case 'facebook':
      return <FacebookIcon fontSize="small" />
    case 'youtube':
      return <YouTubeIcon fontSize="small" />
    case 'instagram':
      return <InstagramIcon fontSize="small" />
    default:
      return <LanguageIcon fontSize="small" />
  }
}

export function OfficialCard({ official }: OfficialCardProps) {
  const { name, party, phones, emails, urls, photoUrl, address, channels, officeName } = official

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Photo Section */}
        <div className="relative flex-shrink-0 h-48 w-full md:h-auto md:w-48 bg-gray-100">
          {photoUrl ? (
            <Image
              src={photoUrl || '/default-photo.jpg'}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
              unoptimized
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/5">
              <Text variant="p" size="lg" className="text-primary font-medium">
                {name.split(' ').map(n => n[0]).join('')}
              </Text>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-5">
          <div className="mb-4">
            <Text variant="h3" size="md" className="font-semibold text-gray-900">
              {name}
            </Text>
            {party && (
              <Text variant="p" size="sm" className={`mt-1 ${party.includes('Republican') ? 'text-red-600' : party.includes('Democratic') ? 'text-blue-600' : 'text-gray-600'}`}>
                {party}
              </Text>
            )}
            {officeName && (
              <Text variant="p" size="sm" className="mt-1 text-gray-600">
                {officeName}
              </Text>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Contact Info */}
            <div className="space-y-2">
              {phones && phones.length > 0 && (
                <div className="flex items-center gap-2">
                  <PhoneIcon fontSize="small" className="text-primary" />
                  <a href={`tel:${phones[0]}`} className="text-sm text-gray-700 hover:text-primary hover:underline">
                    {phones[0]}
                  </a>
                </div>
              )}
              
              {emails && emails.length > 0 && (
                <div className="flex items-center gap-2">
                  <EmailIcon fontSize="small" className="text-primary" />
                  <a href={`mailto:${emails[0]}`} className="text-sm text-gray-700 hover:text-primary hover:underline truncate max-w-[200px]">
                    {emails[0]}
                  </a>
                </div>
              )}
              
              {urls && urls.length > 0 && (
                <div className="flex items-center gap-2">
                  <LanguageIcon fontSize="small" className="text-primary" />
                  <a 
                    href={urls[0]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-700 hover:text-primary hover:underline truncate max-w-[200px]"
                  >
                    {urls[0].replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>

            {/* Address */}
            {address && address.length > 0 && (
              <div className="flex items-start gap-2">
                <LocationOnIcon fontSize="small" className="text-primary mt-0.5" />
                <address className="text-sm text-gray-700 not-italic">
                  {address[0].line1}
                  {address[0].line2 && <span><br />{address[0].line2}</span>}
                  <br />
                  {address[0].city}, {address[0].state} {address[0].zip}
                </address>
              </div>
            )}
          </div>

          {/* Social Media */}
          {channels && channels.length > 0 && (
            <div className="mt-auto pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {channels.map((channel, index) => (
                  <a
                    key={index}
                    href={getSocialUrl(channel.type, channel.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${channel.type} profile`}
                  >
                    {getSocialIcon(channel.type)}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
