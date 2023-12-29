import Link from 'next/link'

export default function Navbar(){
    return (
        <nav className="navbar">
            <Link href="/" className="navbar-brand">Discord resources</Link>
            <Link href="/" className="navbar-link">Home</Link>
            <Link href="#" className="navbar-link">Templates</Link>
            <Link href="#" className="navbar-link">Android app assets</Link>
            
            
        <div>
          
        </div>
        </nav>
    )
}