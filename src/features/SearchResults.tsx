import React from "react";
import {observer} from "mobx-react-lite";
import SearchResult from "./SearchResult";
import {Article} from "../app/models/Article";

interface Props {
    articles: Article[],
}

function SearchResults({articles}: Props) {
    return (
        <>
            <div className={'search-results'}>
                {articles.map((article, i) => (
                    <SearchResult
                        key={i}
                        article={article}
                    />
                ))}
            </div>
        </>
    )
}

export default observer(SearchResults)