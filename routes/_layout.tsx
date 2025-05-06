import { PageProps } from "$fresh/server.ts";
import Head from "../components/Head.tsx";

const Layout = ({Component}: PageProps) => {
    return(
        <div>
            <Head/>
            <div>
                <Component/>
            </div>
        </div>
    );
}

export default Layout;