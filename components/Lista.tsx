import { FunctionalComponent } from "preact";
import { Signal } from "@preact/signals";
import { Post } from "../types.ts";

const Lista: FunctionalComponent<{Bool: Signal<boolean>, posts: Post[]}> = ({Bool, posts}) => {
    console.log(posts);
    if(Bool.value){
        return(
            <>
                <div>
                    <button type="submit" onClick={(e) => Bool.value = !Bool.value}>Cambiar a cuadrícula</button>
                </div>
                <div>
                    {
                        posts.map((p) =>
                            <div key={p._id} class="border">
                                <table class="espaciar">
                                        <td>
                                            <tr>
                                                <span>Titulo: {p.title}</span>
                                            </tr>
                                            <tr>
                                                <span>Autor: {p.author}</span>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <span>Likes: {p.likes}</span>
                                            </tr>
                                        </td>
                                    </table>
                            </div>
                        )
                    }
                </div>
            </>
        );
    }
    return(
        null
    );
}

export default Lista;