import '@styles/globals.css'
import {AppContainer} from "@components/templates";

function MyApp({Component, pageProps}) {
    return (
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    )
}

export default MyApp
