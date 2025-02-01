'use client'

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import { useTranslations } from 'next-intl'

export const ButtonDownload = () => {
  const t = useTranslations('HomePage')

  return (
    <button className="btn btn-lg self-start bg-yellow-400 text-black hover:bg-yellow-100">
      <DownloadForOfflineIcon />
      {t('downloadReport')}
    </button>
  )
}
