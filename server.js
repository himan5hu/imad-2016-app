var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Himanshu Ginkal',
    heading: 'Article one',
    date: 'October 13, 2016',
    content: `<p>
                This is the content for the Article one on my webapp! Nice to see this is good going uptill now. Thanks Tanmai for doing this! This is helping a lot of people understand the concepts and how web applications work! Hopefully all of us make our own webApp in future and then surely remember IMAD-Team for this!
                Cheers to this!
            </p>
            <p>
                This is the content for the Article one on my webapp! Nice to see this is good going uptill now. Thanks Tanmai for doing this! This is helping a lot of people understand the concepts and how web applications work! Hopefully all of us make our own webApp in future and then surely remember IMAD-Team for this!
                Cheers to this!
            </p>
            <p>
                This is the content for the Article one on my webapp! Nice to see this is good going uptill now. Thanks Tanmai for doing this! This is helping a lot of people understand the concepts and how web applications work! Hopefully all of us make our own webApp in future and then surely remember IMAD-Team for this!
                Cheers to this!
            </p>`
};

function createTemplate(data){
        var title = data.title, heading = data.heading, date=data.date, content=data.content;
        var htmlTemplate = `
                <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="container">
                    <div>
                        <a href="/">Home</a>
                        <hr/>
                        <h3>${heading}</h3>
                    </div>
                    <div>
                        ${date}
                    </div>
                    <div>
                    ${content}
                    </div>
                    <h4>Thank You for all of this! </h4>
                    You may not be seeing this but still
                    </div>
                </body>
                </html>
        `;
        return htmlTemplate
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function(req, res)
{
   res.send(createTemplate(articleOne));
});
app.get('/article-two', function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
