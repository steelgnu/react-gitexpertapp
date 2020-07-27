import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

const GitExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map( category => 
                       <GitGrid 
                            key = {category}
                            category = {category} 
                       />
                    )
                }
            </ol>
        </div>
    );
}

export default GitExpertApp;