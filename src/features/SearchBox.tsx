import React, {FormEvent} from "react";
import {observer} from "mobx-react-lite";

interface Props {
    keyWord: string,
    keWordChanged: (val: string) => void
    startSearch: (e: FormEvent<HTMLFormElement> | undefined) => void,
}

function SearchBox({keyWord, keWordChanged, startSearch}:Props) {
    return (
        <>
            <header>
                <h2>Wiki Search</h2>
                <a className={'random-art'} href={'https://en.wikipedia.org/wiki/Special:Random'} target={'_blank'} rel="noreferrer">
                    Click here for a random article</a>
                <form className={'search-form'} onSubmit={e => startSearch(e)}>
                    <input value={keyWord} onChange={e => keWordChanged(e.target.value)} type="search" placeholder={'Type anything you want to search!'}/>
                    <input type="submit" value={'Search'}/>
                </form>
            </header>
        </>
    )
}

export default observer(SearchBox)