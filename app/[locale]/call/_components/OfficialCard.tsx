import { Official } from '../_lib/types'
import Image from 'next/image'
import { Link } from '@/lib/i18n/routing'

function getSocialMediaUrl(channel: { type: string; id: string }) {
  switch (channel.type.toLowerCase()) {
    case 'facebook':
      return `https://facebook.com/${channel.id}`
    case 'twitter':
      return `https://twitter.com/${channel.id}`
    default:
      return '#'
  }
}

export const OfficialCard = ({ official }: { official: Official }) => {
  return (
    <div className="flex gap-6 rounded-lg bg-white p-6 shadow-md">
      {official.photoUrl && (
        <Image
          src={official.photoUrl}
          alt={official.name}
          className="h-32 w-32 rounded-lg object-cover"
          width={128}
          height={128}
          unoptimized
        />
      )}
      <div className="card">
        <h3 className="mb-2 text-xl font-semibold">
          {official.name}
          {official.party && (
            <span className="ml-2 text-sm text-gray-600">
              ({official.party})
            </span>
          )}
        </h3>

        {official.phones && official.phones.length > 0 && (
          <div className="mb-2">
            <h4 className="font-medium text-gray-700">Phone:</h4>
            {official.phones.map((phone) => (
              <Link key={phone} href={`tel:${phone}`} className="link">
                {phone}
              </Link>
            ))}
          </div>
        )}

        {official.emails && official.emails.length > 0 && (
          <div className="mb-2">
            <h4 className="font-medium text-gray-700">Email:</h4>
            {official.emails.map((email) => (
              <Link key={email} href={`mailto:${email}`} className="link">
                {email}
              </Link>
            ))}
          </div>
        )}

        {official.urls && official.urls.length > 0 && (
          <div className="mb-2">
            <h4 className="font-medium text-gray-700">Websites:</h4>
            {official.urls.map((url) => (
              <Link
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {url}
              </Link>
            ))}
          </div>
        )}

        {official.address && official.address.length > 0 && (
          <div className="mb-2">
            <h4 className="font-medium text-gray-700">Address:</h4>
            {official.address.map((addr, index) => (
              <div key={index} className="text-gray-600">
                {addr.line1 && <div>{addr.line1}</div>}
                <div>
                  {[addr.city, addr.state, addr.zip].filter(Boolean).join(', ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {official.channels && official.channels.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-700">Social Media:</h4>
            <div className="flex gap-2">
              {official.channels.map((channel, index) => (
                <Link
                  key={`${channel.id}-${index}`}
                  href={getSocialMediaUrl(channel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {channel.type}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
