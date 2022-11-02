//   function getUserRole(name , role){
//     switch(role){
//         case "admin":
//             return `${name} is admin with all access.`
//             break; // this is not necessary.
//         case "subadmin":
//             return `${name} is subadmin with access to create and delete courses.`;
//             break;
//         case "testprep":
//             return `${name} is a test prep with access to create and delete test.`;
//             break;
//         case "user":
//             return `${name} is a user to consume content.`;
//             break;
//         default:
//             return `${name} is a trial user.`;
//             break;

//     }


// }




// var getUserRole = function(name , role){
//     switch(role){
//         case "admin":
//             return `${name} is admin with all access.`
//             break; // this is not necessary.
//         case "subadmin":
//             return `${name} is subadmin with access to create and delete courses.`;
//             break;
//         case "testprep":
//             return `${name} is a test prep with access to create and delete test.`;
//             break;
//         case "user":
//             return `${name} is a user to consume content.`;
//             break;
//         default:
//             return `${name} is a trial user.`;
//             break;

//     }


// }


var getUserRole = (name , role) => {
    switch(role){
        case "admin":
            return `${name} is admin with all access.`
             
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses.`;
            
        case "testprep":
            return `${name} is a test prep with access to create and delete test.`;
            
        case "user":
            return `${name} is a user to consume content.`;
            
        default:
            return `${name} is a trial user.`;
            

    }


}




var getRole = getUserRole("Darshan","user");
console.log(getRole);


// console.log(getUserRole("Darshan", "testprep"));
















