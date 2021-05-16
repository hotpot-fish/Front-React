import axios from "axios"
export function  GetUser(){
    axios.get("http://www.reddit.com")

        .then(res => {

            const posts = res.data.data.children.map(obj => obj.data);

            this.setState({ posts });

        });
}