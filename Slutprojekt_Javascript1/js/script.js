// Fetch funktion för att hämta user info samt att lägga till datan i HTML
showUserInfo = () => {
    fetch("https://randomuser.me/api/")
    .then(response => {
      if (!response.ok) {
        throw new Error("Response not OK");
    }
      return response.json();
    })
    .then(data => {
        let user = data.results[0];
        let userInfo = {
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            firstName: user.name.first,
            lastName: user.name.last,
            picture: user.picture.large
        };
        document.getElementById("userPicture").src = userInfo.picture;
        document.getElementById("userName").textContent = `Name: ${userInfo.firstName} ${userInfo.lastName}`;
        document.getElementById("userGender").textContent =  `Gender: ${userInfo.gender}`;
        document.getElementById("userEmail").textContent =  `Email: ${userInfo.email}`;
        document.getElementById("userPhone").textContent =  `Phone: ${userInfo.phone}`;
    })
    .catch(error => {
    console.error('Fetch-error:', error);
    });
    }
