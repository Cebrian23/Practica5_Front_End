import { FunctionalComponent } from "preact/src/index.d.ts";

const Head: FunctionalComponent = () => {
    return(
        <div class="row">
            <a href={`/search`}>Buscar</a>
            <a href={`/post/create`}>Crear Post</a>
        </div>
    );
}

export default Head;