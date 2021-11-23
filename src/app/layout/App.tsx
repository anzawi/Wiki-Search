import React from 'react';
import {useStore} from "../stores/store";
import {observer} from "mobx-react-lite";
import SearchBox from "../../features/SearchBox";
import SearchResults from "../../features/SearchResults";

function App() {
  const {ArticleStore} = useStore();
  const {loading, keyWord, Articles, keWordChanged} = ArticleStore;

  return (
    <div className="App">
        <SearchBox
            keyWord={keyWord}
            keWordChanged={keWordChanged}
            startSearch={ArticleStore.loadArticles}
        />

        {!loading?  <SearchResults
            articles={Articles}
        /> : 'Loading ....'}

      {/*{ Articles.map((item, index) => (*/}
      {/*    <div key={index}>{item.title}</div>*/}
      {/*)) }*/}
    </div>
  );
}
// if you want to learn more about -observer- function visit MobX documentation.
export default observer(App);
