# this a simple React App
the main objective for this app is search in wikipedia using wikipedia-api  

### Technologies
* React [React Documentation](https://reactjs.org/docs/getting-started.html)
* MobX [MobX Documentation](https://mobx.js.org/react-integration.html)
* Axios [Axios Documentation](https://axios-http.com/docs/intro)

## to make this application run
* clone this repo
* open CMD/terminal
* navigate to application root directory
* run `npm install`
* run `npm start`

--------
# Files Structure

please note: I tried to document all files , please open file to read notes

```
- 📂 __Project root directory
   - 📄 [package.json](package.json)
   - 📂 __public__
     - static files (files we wont in production as is)
   - 📂 __src__
     - 📂 __app__
       - 📂 __api__ 
            handel our request
         - 📄 [agent.ts](src/app/api/agent.ts)
       - 📂 __layout__
            Main Loayout for our application
         - 📄 [App.tsx](src/app/layout/App.tsx)
         - 📄 [styles.css](src/app/layout/styles.css)
       - 📂 __models__
            interfaces Models (Types)
         - 📄 [Article.ts](src/app/models/Article.ts)
       - 📂 __stores__
            Application Stores
         - 📄 [ArticleStore.ts](src/app/stores/ArticleStore.ts)
         - 📄 [store.ts](src/app/stores/store.ts)
     - 📂 __features__
          Application Components
       - 📄 [SearchBox.tsx](src/features/SearchBox.tsx)
       - 📄 [SearchResult.tsx](src/features/SearchResult.tsx)
       - 📄 [SearchResults.tsx](src/features/SearchResults.tsx)
     - 📄 [index.tsx](src/index.tsx)
```

