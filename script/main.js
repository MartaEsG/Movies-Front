//#region Login

const drawFormLogin = () => {
  const form$$ = document.createElement("form");
  const mainForm$$ = document.querySelector(".header-login");
  form$$.setAttribute("id", "flogin");
  mainForm$$.innerHTML = '';
  form$$.innerHTML = `
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
          
          <input type="submit" value="login" />
    `;
  form$$.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newLogin = {
      email: formData.get("email"), 
      password: formData.get("password")
    }

    fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(newLogin),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    .then(function (response) {
      return response.json();
      
    })
    .then(function (data) {
      if (!data.message) {
        alert("Estás dentro");
        drawButtons(data)
       } else { alert (data.message)}
    })
    .catch((error) => console.error("Error:", error));
;
  })
  mainForm$$.appendChild(form$$);
}

const drawButtons = () => {
  drawBtnMovies();
  drawBtnActors();
  drawBtnDirector();
}

//#endregion


//#region Movies

const drawBtnMovies = () => {
  const mainModel$$ = document.querySelector(".main-model");
  const btn$$ = document.createElement("button");
  btn$$.textContent = "PELICULAS";
  btn$$.addEventListener("click", () => drawFormMovies());
  mainModel$$.appendChild(btn$$);
};

const drawFormMovies = () => {
  const form$$ = document.createElement("form");
  const mainForm$$ = document.querySelector(".main-form");
  form$$.setAttribute("id", "fmovie");
  mainForm$$.innerHTML = '';
  form$$.innerHTML = `
          <label for="title">Titulo:</label>
          <input type="text" id="title" name="title" />
          <label for="country">Pais:</label>
          <input type="text" id="country" name="country" />
          <label for="img">Imagen:</label>
          <input type="text" id="img" name="img" />
          <input type="submit" value="Insert" onclick="insertMovie()"/>
    `;
  mainForm$$.appendChild(form$$);
  getMovies();
};

const getMovies = async () => {
  const response = await fetch("http://localhost:5000/Movies");
  const resJson = await response.json();
  drawMovies(resJson);
};

const drawMovies = (movies) => {
  const result$$ = document.querySelector(".main-result");
  result$$.innerHTML = "";
  for (const movie of movies) {
    let figure$$ = document.createElement("figure");
    figure$$.className = "main-figure";
    figure$$.innerHTML = `
            <h3>${movie.title}</h3>
            <img src=${movie.img} alt=${movie.name} class="main-figure-img"/>
        `;
    result$$.appendChild(figure$$);
  }
};

//#endregion

//#region Actors

const drawBtnActors = () => {
  const mainModel$$ = document.querySelector(".main-model");
  const btn$$ = document.createElement("button");
  btn$$.textContent = "ACTORES";
  btn$$.addEventListener("click", () => drawFormActors());
  mainModel$$.appendChild(btn$$);
};

const drawFormActors = () => {
  const form$$ = document.createElement("form");
  const mainForm$$ = document.querySelector(".main-form");
  mainForm$$.innerHTML = '';
  form$$.setAttribute("id", "factors");
  form$$.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label for="country">Pais:</label>
            <input type="text" id="country" name="country" />
            <label for="img">Imagen:</label>
            <input type="text" id="img" name="img" />
            <input type="submit" value="Submit" />
      `;
  mainForm$$.appendChild(form$$);
  getActors();
};

const getActors = async () => {
  const response = await fetch("http://localhost:5000/Actors");
  const resJson = await response.json();
  drawActors(resJson);
};

const drawActors = (actors) => {
    console.log("Actores")
  
  const result$$ = document.querySelector(".main-result");
  result$$.innerHTML = "";
  for (const actor of actors) {
    let figure$$ = document.createElement("figure");
    figure$$.className = "main-figure";
    figure$$.innerHTML = `
              <h3>${actor.name}</h3>
              <img src=${actor.img} alt=${actor.name} class="main-figure-img"/>
          `;
    result$$.appendChild(figure$$);
  }
};

//#endregion

//#region Director

const drawBtnDirector = () => {
    const mainModel$$ = document.querySelector(".main-model");
    const btn$$ = document.createElement("button");
    btn$$.textContent = "DIRECTORES";
    btn$$.addEventListener("click", () => drawFormDirector());
    mainModel$$.appendChild(btn$$);
  };
  
  const drawFormDirector = () => {
    const form$$ = document.createElement("form");
    const mainForm$$ = document.querySelector(".main-form");
    form$$.setAttribute("id", "fdirector");
    mainForm$$.innerHTML = '';
    form$$.innerHTML = `
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label for="country">Pais:</label>
              <input type="text" id="country" name="country" />
              <label for="img">Imagen:</label>
              <input type="text" id="img" name="img" />
              <input type="submit" value="Submit" />
        `;
    mainForm$$.appendChild(form$$);
    getDirector();
  };
  
  const getDirector = async () => {
    const response = await fetch("http://localhost:5000/Directors");
    const resJson = await response.json();
    drawDirector(resJson);
  };
  
  const drawDirector = (directors) => {
      console.log("Directores")
    
    const result$$ = document.querySelector(".main-result");
    result$$.innerHTML = "";
    for (const director of directors) {
      let figure$$ = document.createElement("figure");
      figure$$.className = "main-figure";
      figure$$.innerHTML = `
                <h3>${director.name}</h3>
                <img src=${director.img} alt=${director.name} class="main-figure-img"/>
            `;
      result$$.appendChild(figure$$);
    }
  };
  
  //#endregion

const init = async () => {
  drawFormLogin();
  
};

init();
