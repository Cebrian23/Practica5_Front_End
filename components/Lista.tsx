import { FunctionalComponent } from "preact";
import { Signal } from "@preact/signals";
import { Post } from "../types.ts";

const Lista: FunctionalComponent<{Bool: Signal<boolean>, posts: Post[]}> = ({Bool, posts}) => {
    if(!Bool.value){
        return(
            <>
                <div>
                    <button type="submit" onClick={(e) => Bool.value = !Bool.value}>Cambiar</button>
                </div>
                <div>
                    {
                        posts.map((p) =>
                            <div key={p.id}>
                                <table>
                                        <td>
                                            <tr>
                                                <span>Titulo: {p.titulo}</span>
                                            </tr>
                                            <tr>
                                                <span>Autor: {p.autor}</span>
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