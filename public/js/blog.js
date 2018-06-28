const BLOG_JSON_PATH = "/Users/shayansh/Documents/Programming/eclipce_workspace_Org/Client-Server-Project/public/data/blog.json";

fetch('./api/blog')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function(data) {
                console.log(data);
                dataInjection(data)
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });


// This function can be improved so that all the data
// can be injected automatically.
// Idea: for( child : data.children)
function dataInjection(data) {
    for(let i=0; i<data.length ; i++){
        addBlog(data[i].heading, data[i].paragraphs, data[i].date);
    }
}

function addBlog(heading, content, date) {
    const $blog = document.createElement('article');
    $blog.classList.add('heading');
    $blog.setAttribute('date', date);
    $blog.innerHTML = `<h3>${heading}</h3>`;
    for(let i=0; i<content.length ;i++){
        let p= document.createElement('p');
        p.innerHTML = content[i];
        $blog.appendChild(p);
    }
    document.getElementById("blog").insertBefore($blog,document.getElementById("p1-test"));
}