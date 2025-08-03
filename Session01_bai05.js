const response = {
                data: {
                    id: 1,
                    title: "Destructuring in JavaScript",
                    author: {
                        name: "Dev",
                        email: "Dev@gmail.com",
                    },
                },
            };

 const extractData = (response) => console.log(`ID: ${response.data.id} , Title: ${response.data.title}, Author: ${response.data.author.name}, Email: ${response.data.author.email}`);
extractData(response);