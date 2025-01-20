import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Layout({ children }) {
  const page = usePage()
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}
