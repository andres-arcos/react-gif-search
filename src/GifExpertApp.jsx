import {useState} from 'react';
import {AddCategory,GifGrid} from './components';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Mario Bros']);
    const onAddCategory  =(newCategory)=>{
      if(categories.includes(newCategory))return;
      setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory={(value)=>onAddCategory(value)}
        />
        
        {
          categories.map(category=>(<GifGrid key={category} category={category} />))
        }  
    </>
  )
}
