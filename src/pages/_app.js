import '@styles/globals.css'
import {AppContainer} from "@components/templates";

function MyApp({Component, pageProps, router}) {
    return (
        <AppContainer route={router.asPath}>
            <Component {...pageProps} />
        </AppContainer>
    )
}

export default MyApp
