import {Post} from "./components/Post"  // com s chaves 
import {Header} from "./components/Header";
import { Sidebar } from "./components/SideBar/Sidebar";
import "./global.css";
import styles from "../src/App.module.css";

// div ou fragment <></> em volta dos componentes 
// npm run dev para rodar a aplicação

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/diego3.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraaa'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. Espero que vocês possam dá uma passada lá;'},
      {type: 'link', content:'jane.design/doctorcarcare'}
    ],
    publishedAt: new Date('2023-08-29T15:38:00'),
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/mandiegr.png',
      name: 'Amanda G Rebolsas ',
      role: 'Dev FrontEnd react/react native'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraaa'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. Espero que vocês possam dá uma passada lá;'},
      {type: 'link', content:'jane.design/doctorcarcare'}
    ],
    publishedAt: new Date('2023-09-02T15:38:00'),
  },
];


function App() {
  return ( 

    <div> 
    <Header/>

   
   <div className={styles.wrapper}>

    <Sidebar/>

    <main>
      {posts.map(post => {
        return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          
          />
        )
       
      })}
   
    </main>


   </div>
 

    </div>
   
  )
}

export default App
