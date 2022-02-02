import {useState} from "react";

function AppAbout () {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    return (
        <div className="AboutMe">
            <Lol title="A propos de moi" input="Contactez Moi">
            Lorem ipsum dolor sit amet. Qui nostrum pariatur architecto facere quo sunt officia eos omnis nihil aut aspernatur neque. Aut modi consequatur et voluptatibus nihil et similique officiis est ratione suscipit aut inventore ut magnam autem est consequatur reprehenderit.
            <br></br>
            <br></br>
            Qui enim sint vel similique tempore a laudantium expedita ut internos id distinctio explicabo ut earum commodi. Et quasi rerum qui velit provident et adipisci quia ea voluptas voluptate et molestiae recusandae. Qui optio qui deserunt quod quo tempore voluptatibus.
            <br></br>
            <br></br>
            Qui nostrum illum rem deleniti eveniet est iusto quia ut voluptate quia ut repudiandae assumenda. Non autem optio non quas molestiae qui dolorem eius et aspernatur quos ea sint odio ex quia totam. Et accusantium tempore non omnis quas id cumque maxime ut repudiandae recusandae. Ab mollitia doloremque qui neque quia ea laboriosam illum hic illo labore aut dolor adipisci.
            </Lol>
            <Lol>
                <h1>Dis moi ce que tu en penses</h1>
                <div className="form">
                    <div className="form1">
            <form>
                <label>Votre nom: 
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label>
            </form>
            <form>
                <label>Votre Adresse E-Mail: 
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
            </form>
                </div>
            <form>
                <label>Votre Message
                    <input
                    className="inputMessage"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                </label>
            </form>
            <button className="ButtonSub">Envoyez</button>
            </div>
            </Lol>
        </div>
    );
}

function Lol (props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
;    return (
        <article className="aPropos">
            <h1 className="leTitre">{props.title}</h1>
            <p className="aProposContainer">{props.children}</p>
        </article>
    )
}


export default AppAbout