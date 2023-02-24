import bootstrap from 'bootstrap'

function Newpost(){
    return <form action="post" className="col">
        <div className="col">
        <input type="file" required />
        </div>
        <div className="col-md-6">
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