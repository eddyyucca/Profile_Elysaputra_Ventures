'use client'

import dynamic from 'next/dynamic'

const ModernCompanyProfile = dynamic(() => import('./ModernCompanyProfile'), { ssr: false })

export default function ClientPage() {
  return <ModernCompanyProfile />
}