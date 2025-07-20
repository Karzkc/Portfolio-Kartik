'use client'

import { useEffect, useState } from 'react'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    fetch(`/api/views/${slug}`)
      .then(res => res.json())
      .then(data => {
        setViews(data.views)
      })
  }, [slug])

  return <p className="text-sm text-gray-500">Views: {views}</p>
}
