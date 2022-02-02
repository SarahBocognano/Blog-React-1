import {useState} from "react";

function AppArticle () {
    
    return (
        <div id="mainContainer">
            <Article title="Le circuit du thé" img="./thailande.jpg">
            En 2015 j'ai eu la chance de parcourir ce beau pays qu'est la Thailande avec mon sac à dos ! Au cours de ce périple solitaire, mes yeux se sont émerveillés sur ces immenses champs de thé que nous offrait les terres du bouddha couché. 
            <br></br><a href="#" className="lireLaSuite">Lire la suite...</a>
            
            </Article>
            <Article title="Bienvenue au Souk !" img="./maroc.jpeg">
            Le Maroc, ce pays aux milles couleurs, aux milles senteurs et aux milles saveurs. Je me souviendrais toujours des premières émotions qui m'ont traversé quand je suis entrée dans mon premier souk.  
            <br></br><a href="#" className="lireLaSuite">Lire la suite...</a>
            </Article>
            <Article title="Desert Américain" img="./arizona.jpg">
            Grandes étendues faites de sable et de roche, l'ouest Américain nous fait rêver avec son immensité. La chaleur est très présente en journée, alors que la nuit tout devient glacial ! Gares aux scorpions et autres prédateurs.
            <br></br><a href="#" className="lireLaSuite">Lire la suite...</a>
            </Article>
        </div>
    );


function Article(props) {
    const [likes,setLikes] = useState (0);
    function handleClick() {
        setLikes(likes +1);
    }
    return (
        <article className="article">
            <img src={props.img} className="img"></img>
                <div className="content">
                    <h2>{props.title}</h2>
                        <p className="contentArticle">{props.children}</p>
                            <div className="likeCounter">
                                <p className ="likeCount">Vous avez {likes} like</p>
                                <button onClick={handleClick} className="Button">Like</button>
                            </div>
                </div>
        </article>
    );
}
}


export default AppArticle;
