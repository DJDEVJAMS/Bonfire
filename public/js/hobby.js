
const messageEl = "This is great article I found.......";
const titleEl ="This just in";
const hobbyName = 1;

const addPost = async () => {
    const post ={
        title: titleEl,
         message: messageEl,
            hobby_id: hobbyName,
    }
    console.log(post);
    const response = await fetch('/api/post/',{
        method: 'POST',
        body: JSON.stringify({post}),
        headers:{"Content-Type": "application/json"}
    })
    console.log(response);
}
addPost();