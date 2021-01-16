const axios = require('axios').default
exports.homeRoutes = (req,res)=> {
    res.render('index')
}

exports.searchQuery = (req,res) => {
    if(!req.body)
    {
        res.status(400).send({message:'Content cannot be empty!'})
        return;
    }
    let query = req.body.query.trim() 
    // res.send(query.split(" ").join("%20"))
    const uri =  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=`;
    
    axios.get(uri+query)
  .then(function (response) {
    // handle success
    let result = response.data.results.map( movie => {
        return {
            id:movie.id,
            title: movie.title,
            poster:"https://image.tmdb.org/t/p/w500" + movie.poster_path,
            overview:movie.overview,
            release_date:movie.release_date,
            popularity : movie.popularity,


        }
    } 
    );
    res.render('index',{results:result})
    console.log(result.length);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}