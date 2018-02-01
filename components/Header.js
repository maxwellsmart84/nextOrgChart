import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
}

const Header = (props) => (
  <div>
    <Link href="/">
      <a style={linkstyle}>Home</a>
    </Link>
     <Link href="/csvimport">
        <a style={linkStyle}>CSV Import</a>
    </Link>
    <Link href="/logout">
        <a style={linkStyle}>Log Out</a>
    </Link>
  </div>
)
