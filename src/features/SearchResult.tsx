import React from "react";
import {Article} from "../app/models/Article";
import {observer} from "mobx-react-lite";

interface Props {
    article: Article
}

function SearchResult({article}: Props) {
    const url = 'https://en.wikipedia.org/?curid=';
    return (
        <>
            <div className={'item'}>
                <h3>{article.title}</h3>
                <p dangerouslySetInnerHTML={{__html: article.snippet}}/>

                <a href={`${url}${article.pageid}`} target={'_blank'} rel="noreferrer">Read More</a>
            </div>
        </>
    )
}

export default observer(SearchResult)