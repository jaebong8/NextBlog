import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div>
    <h2>Not Found</h2>
    <p>Could not find requested resource</p>
    <Link href="/">Return Home</Link>
  </div>
  )
}
