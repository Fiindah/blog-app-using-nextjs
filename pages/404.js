import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Terima kasih<br> atas kesabarannya.</h1>
      <h2>InsyaAllah loading tidak akan lama.</h2>
      <p>Kembali ke <Link href="/"><a>Homepage</a></Link> dalam 3 detik...</p>
    </div>
  );
}
 
export default NotFound;
