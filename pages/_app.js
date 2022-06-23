import '../styles/globals.css'
import '../styles/prism-nord.css'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SlimeLoading from '../components/SlimeLoading'

const MyApp = ({ Component, pageProps }) => {

    const router = useRouter()
    const [pageLoading, setPageLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => setPageLoading(true)
        const handleComplete = () => setPageLoading(false)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
    }, [router])

    return (
        <Layout>
            {pageLoading ? (
                <div className="min-h-screen flex items-center justify-center">
                    <SlimeLoading />
                </div>
            ) : (
                <Component {...pageProps} />
            )
            }
        </Layout>
    )
}

export default MyApp