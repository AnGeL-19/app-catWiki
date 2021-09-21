import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { getAllBreeds } from '../action/breeds';
import { Loading } from '../components/Loading';
import { DiscoverBreedsPage } from '../pages/DiscoverBreedsPage';

import { HomePage } from '../pages/HomePage';
import { InformationPage } from '../pages/InformationPage';
import { TopCatsPage } from '../pages/TopCatsPage';
  

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {startLoading} = useSelector(state => state.ui);

    useEffect( () => {
          
       dispatch(getAllBreeds()); 

    }, [dispatch])


    return (
        <Router>
            <div>
                <Switch>
                    
                    {   
                        startLoading 
                        ?
                        (<>

                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/infoCat/:id" component={InformationPage}/>
                            <Route exact path="/topBreed" component={TopCatsPage}/>
                            <Route exact path="/discover" component={DiscoverBreedsPage}/>                  
                            
                            <Redirect to="/" />
                        </>)
                        :
                        <Loading />
                    }
                </Switch>
            </div>
        </Router>
    )
}
