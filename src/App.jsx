import { useState } from "react";

function App() {
    const [Titles, setTitles] = useState("");
    const [posts, setPosts] = useState([]);

    const handleInputChange = (e) => {
        setTitles(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!Titles) {
            alert("Inserisci un titolo valido");
            return;
        }

        setPosts([...posts, { name: Titles }]);
        setTitles("");
    };

    const handleDelete = (name) => {
        setPosts([...posts.filter((post) => post.name !== name)]);
    };
    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <h1>REACT BLOG</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className="form-input"
                            name="blog-title"
                            value={Titles}
                        />
                        <button className="form-button">AGGIUNGI</button>
                    </form>
                    <div className="d-flex">
                        <ul className="titles-list">
                            {posts.map((post) => (
                                <li
                                    className="titles-list-item"
                                    key={post.name}
                                >
                                    {post.name}
                                    <div>
                                        <i class="fa-solid fa-pen"></i>
                                        <i
                                            onClick={() =>
                                                handleDelete(post.name)
                                            }
                                            className="fa-solid fa-trash"
                                        ></i>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
