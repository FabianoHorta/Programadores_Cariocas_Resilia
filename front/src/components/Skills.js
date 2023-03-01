import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';

export const Skills = () => {
    const [sobre, setSobre] = useState('');

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:3001/sobre');
            const data = await response.json();

            if(data.sobreData[0] === undefined){
                setSobre('');
             } else {
            setSobre(data.sobreData[0])
            }

          }
          fetchItems();
    }, []);

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Sobre</h2>
                        <p className='fs-4'>{sobre.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
