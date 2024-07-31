html, body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: rgb(39, 35, 35);
    color: white;
    box-sizing: border-box;
}

.navbar{
    background-color: rgb(39, 35, 35);;
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(110, 109, 49, 0.2);
    height: 50px;
    top: 0;
    width: 100%;
    position: fixed;
    z-index: 1;
}

.nav-ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
}
.logo{
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(206, 179, 25);
    text-decoration: none;
}
form {
    display: flex;
    flex-direction: row;
}
.search {
    display: flex;
}
.search input[type="text"] {
    padding: 8px 10px;
    border: none;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
    width: 300px;
}
.search input[type="text"]:focus {
    outline: none;
    border: none;
}
.search button {
    padding: 8px 10px;
    border: none;
    border-radius: 0 4px 4px 0;
    background-color: rgb(206, 179, 25);
    color: white;
    font-size: 14px;
    cursor: pointer;
}
.search button:hover {
    background-color: rgb(206, 179, 25);
}

.container {
    display: flex;
    flex-direction: row;
}
.sidebar {
    position: fixed;
    top: 80px;
    left: 0;
    background-color: rgb(39, 35, 35);
    width: 250px;
    height: 100vh;
    padding: 20px;
    overflow: hidden;
    box-shadow: 0 10px 5px rgba(153, 151, 60, 0.2);
}
.links {
    list-style: none;
    margin: 10px;
    padding: 0;
}

.links a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 800;
    margin-top: 2px;
}
.links a:hover {
    color: rgb(206, 179, 25);
}
.link {
    margin: 30px 0;
    padding: 0;
}
.links h2 {
    color: rgb(206, 179, 25);
    margin-bottom: 20px;
}
.albums {
    flex: 1;
    padding: 20px;
    margin-top: 80px;
    padding: 20px;
    margin-left: 300px;
    overflow-y: auto;
}
.covers {
    margin-top: 80px;
}
.cover-album {
    display: flex;
    overflow-x: auto;
    gap: 20px;
}
h1 {
    color: rgb(206, 179, 25); 
}
.cover-album div {
    width: 250px; 
    background-color: #352c2c;
    padding: 10px; 
    text-align: center; 
    border-radius: 8px; 
    flex-shrink: 0;
}
.cover-album img {
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
}
.cover-album::-webkit-scrollbar {
    display: none;
}

footer {
    background-color: rgb(39, 35, 35);
    border-top: 1px solid rgb(206, 179, 25);
    color: white;
    box-shadow: 5px 10px 0px rgba(153, 151, 60, 0.2);
    text-align: center;
    padding: 10px 0; 
    bottom: 0;
    margin-top: 100px;
    width: 100%;
}
