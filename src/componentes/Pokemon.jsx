import React, {useState} from 'react'
import axios from 'axios'
import './Pokemon.css'


const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const buscarDatos = () =>{

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=>{
    
    setPokemons(response.data.results.map((pokemon)=> pokemon.name)); //en Axios se pone .data.results pq axios manda un DATA
})
    }

    // useEffect(() => { //codigo que quiero que se ejecute cuando este componente se cargue
    //   buscarDatos();
    // }, []) //q se actualiza para que se ejecute el useeffect, si es un corchete vacio signicia que se ejecuta 1 sola vez nunca mas, si queremos que se ejecute una funcion cuando apretaos un boton ponemos el nombre de la funcion dentro del corchete
    

    return (
      <div className='container-pokemon'>
        <div className='resultadosPokemon'>
          <button onClick={buscarDatos}>Fetch Pokemon</button>
          <ul className='listaPokemons'>
              {
                  pokemons.map((pokemon, indice)=> <li key={indice}>{pokemon}</li>) //mostrar solo el name del result obtenido en el response si usamos llave podemos agarrar dos cosas, modificando el map y ponerle name, planeta.dato que queramos por ej planeta.population se pone planeta.name y - planeta.population en ese caso ocupamos el objeto con el nombre que le pusimos planeta es el objeto y name la clave, se obvia el valor por que ya se declara
              }
          </ul>
        </div>
      </div>
    )
  }
  
  export default Pokemon