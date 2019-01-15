const ById = (id, value) => {
    document.getElementById(id).innerHTML = value;
}

const letsgo = () => {
    const User_url = 'https://api.github.com/users/';

    const inputValue = document.getElementById('input').value;

    const levels = {
        name:undefined,
        folowers: undefined,
        folowings:undefined,
        location:undefined,
        publicRepos:undefined,
        picture:undefined,
    }

    if(inputValue) { 
        fetch(`https://api.github.com/users/${inputValue}`)
        .then(resp => resp.json())
        .then(data => {
         levels.name = data.name;
         levels.folowers = data.followers;
         levels.folowings = data.followings;
         levels.location = data.location;
         levels.publicRepos = data.public_repos;
         levels.picture = data.avatar_url;
         console.log(data);

         document.getElementById('loginPicture').innerHTML=`<img src='${levels.picture}'>`;

         ById('name', `User name : ${levels.name}`);
         ById('folowers', `Followers : ${levels.folowers}`);
         ById('folowings', `Followings : ${levels.folowings}`);
         ById('location', `Location : ${levels.location}`);
         ById('publicRepos', `Repositories : ${levels.publicRepos}` );
         ById('forError', '');
        })
        .catch(error => {
            ById('forError', 'There is no such of users');
            ById('folowers', '');
            ById('folowings', '');
            ById('location', '');
            ById('publicRepos', '');
        })
     }else {
        ById('forError', 'Please enter the user login');
        ById('folowers', '');
            ById('folowings', '');
            ById('location', '');
            ById('publicRepos', '');
     }
}