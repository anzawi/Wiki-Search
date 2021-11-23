/**
 * Article Store class
 */

import {makeAutoObservable} from "mobx";
import {Article} from "../models/Article";
import agent from "../api/agent";
import {FormEvent} from "react";

export default class ArticleStore {

    /**
     * init vars
     */
    keyWord: string = "";
    Articles: Article[] = [];
    loading: boolean = false;

    /**
     * constructor
     * using makeAutoObservable function from MobX
     * to observe changes automatically
     */
    constructor() {
        makeAutoObservable(this);
    }

    /**
     * this method triggered when we submit search form
     * it's fetch data from wikipedia API
     * and store it in `Articles` variable
     * @param e
     */
    loadArticles = async (e: FormEvent<HTMLFormElement> | undefined) => {
        // if event is undefined dont do anything
        if (e === undefined) return;

        e.preventDefault() // to prevent page reloading

        this.loadingIs(true); // to inform the application that we are bringing the data
        try {
            // get data
            this.setArticles(await agent.Articles.list(this.keyWord));
            this.loadingIs(false);
        } catch (error) {
            // if there any error
            console.log(error);
            this.loadingIs(false);
        }
    }

    /**
     * we have 2 ways to sort data in variable when we using MobX observer
     * using function like this
     * or using InAction method
     */
    setArticles = (data: Article[]) => {
        this.Articles = data
    }

    loadingIs = (state: boolean) => {
        this.loading = state;
    }

    keWordChanged = (val: string) => {
        this.keyWord = val;
        if (val === '') {
            this.Articles = [];
        }
    }
}