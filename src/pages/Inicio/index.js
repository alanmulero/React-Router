import styles from './Inicio.module.css'


import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import videos from 'json/db.json';
function Inicio (){
    return(
     <div>

    <Banner imagem={'home'} />
    <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
    </Titulo>
    <section className={styles.container}>
        {videos.map((item,id )=> {
         return   <Card {...item} key={item.id} />
        })}
    </section>



    </div>

    )
}

export default Inicio