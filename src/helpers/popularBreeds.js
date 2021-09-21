

export const popularBreeds = (allBreeds) => {


    const popular = allBreeds.filter( breed => breed.social_needs === 5 
                                      && breed.adaptability === 5
                                      && breed.affection_level === 5
                                      && breed.child_friendly >= 4);

    return popular;

}




