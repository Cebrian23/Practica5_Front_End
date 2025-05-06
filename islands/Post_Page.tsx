import { useSignal } from "@preact/signals";
import { FunctionalComponent } from "preact/src/index.d.ts";
import Cuadricula from "../components/Cuadricula.tsx";
import Lista from "../components/Lista.tsx";
import { Post } from "../types.ts";

const Post_Page: FunctionalComponent<{Bool: boolean, posts: Post[]}> = ({Bool, posts}) => {
    const bool_value = useSignal<boolean>(Bool);
    const posts_data = posts;
    
    return(
        <>
            <Lista Bool={bool_value} posts={posts_data}/>
            <Cuadricula Bool={bool_value} posts={posts_data}/>
        </>
    );
}

export default Post_Page;