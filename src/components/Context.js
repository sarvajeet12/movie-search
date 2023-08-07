
import React, {useContext, useEffect, useState} from "react";

const MOVIE_API_URL = ` http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;


const AppContext = React.createContext();

//we need to create a provider function 
const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg:""});
    const [enterMovieName, setEnterMovieName] = useState("titanic");

    const getMovies = async (url) =>{
        setIsLoading(true);
        try{
            const resp = await fetch(url); 
            const data = await resp.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show:false,
                    msg:""
                });
                setMovie(data.Search);
            }else{
                setIsError({
                    show:true,
                    msg:data.Error
                });
                
            }
        }catch(error){
            console.log(error);
        }
    }

    // debouncing
    useEffect(() =>{
        let time = setTimeout(()=>{
            getMovies(`${MOVIE_API_URL}&s=${enterMovieName}`);
        },800);
        return () => clearTimeout(time);
    }, [enterMovieName]);

    return (
        <AppContext.Provider value={{isLoading, isError, movie, enterMovieName, setEnterMovieName }}>
            {children}
        </AppContext.Provider>
    )
};

//global custom hooks
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};