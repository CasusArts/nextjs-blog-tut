import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'
import ProfilePic from '../../public/images/profile_black.jpg'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>

      <Image
        src="/images/profile_black.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  )
}
