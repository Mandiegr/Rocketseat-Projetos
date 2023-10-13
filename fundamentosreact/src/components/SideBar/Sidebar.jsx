import { Avatar } from "../Avatar";
import styles from "../SideBar/Sidebar.module.css";
import { PencilLine } from "phosphor-react";

//https://avatars.githubusercontent.com/u/92495654?v=4

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img  className={styles.cover}  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=500&q="  />
       
       <div className={styles.profile}>
        <Avatar src="https://github.com/diego3g.png"/>

       <strong>Amanda Gomes Rebolsas </strong>
       <span>Dev. Frontend and UI</span>

       <footer>

       
        <a href="#">
          <PencilLine size={20}/>
          Editar Perfil
          </a>

       </footer>
       
       </div>
    </aside>
  )
}