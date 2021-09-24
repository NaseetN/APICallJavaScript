
const request = require('request');

const getURL = 'https://interview.adpeai.com/api/v1/get-task';
const postURL = 'https://interview.adpeai.com/api/v1/submit-task';

// Make a GET request call
request({url: getURL, json: true}, (errorOfGet, responseOfGet)=>{

    let data = responseOfGet.body;
    //console.log(data);

    let id = data.id;
    let operation = data.operation;
    let left = data.left;
    let right = data.right;

    result = performOperation(operation,left,right);

    // Make a POST request call
    request.post({url: postURL, body: {id:id, result: result}, json:true},(errorOfPost, responseOfPost)=>{
        // console.log(responseOfPost);

        console.log("Response of POST request = " + responseOfPost.body); 
        console.log("\nStatus Code\tDescription")
        
        if(responseOfPost.statusCode == 200)
            console.log(responseOfPost.statusCode +"\t\t" + responseOfPost.statusMessage);
        else
            console.log(responseOfPost.statusCode +"\t\t" + responseOfPost.body);

    });

})

// Function to do Operation
function performOperation(operation, left, right)
{
    if(operation == 'addition')
    {
        return left + right;
    }
    else if(operation == 'subtraction')
    {
        return left - right;
    }
    else if(operation == 'multiplication')
    {
        return left * right;
    }
    else if (operation == 'division')
    {
        return left / right;
    }
    else if (operation == 'remainder')
    {
        return left % right;
    }

}


