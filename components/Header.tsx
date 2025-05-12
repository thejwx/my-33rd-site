import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">My Next.js Site!*33</h1>
      <p className="site-tagline">Converted to Next.js framework.</p>
      <nav className="nav-container nav-links">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/about">About</Link>
        <Link className="nav-link" href="/style-guide">Style Guide</Link>
      </nav>
    </header>
  )
}
