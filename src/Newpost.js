

function Newpost(){
    return <form action="post" >
        <div >
        <input type="file" required />
        </div>
        <div >
            <input typeof="text" placeholder="Author" required/>
            <span>
                <input typeof="text" placeholder="Location" required/>
            </span>
        </div>
        
        <div>
            <input typeof="text" placeholder="Description"/>

        </div>
        <button type="submit">Post</button>
        
    </form>
}
export {
    Newpost
}