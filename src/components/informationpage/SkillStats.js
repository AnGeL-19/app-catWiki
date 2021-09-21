import React from 'react';

export const SkillStats = ({stat}) => {

    const stats = [1,2,3,4,5];
    
    return (
        
        <div className="skills">
            {
                stats.map( s => (
                   
                    (s <= stat) ?
                        <div key={s} 
                        className="stats active"></div>
                    :
                        <div key={s} 
                        className="stats"></div>
                ))

            }
        </div>
        
    )
}
