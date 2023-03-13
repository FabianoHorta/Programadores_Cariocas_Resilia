import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';

export const Funcionalidades = () => {
    
    const [funcionalidadeItems, setFuncionalidadesItems] = useState([]);
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:3001/funcionalidades');
            const data = await response.json();
            setFuncionalidadesItems(data.funcionalidadeData);
          }
          fetchItems();
    }, []);
    
    return (
        <section className="skill" id="funcionalidades" style={{ height: '900px' }}>
            <div className="container" style={{ height: '500px' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn text-light" style={{ height: '720px', marginTop: '100px' }}>
                            <h2>Funcionalidades</h2>
                            <p>Abaixo uma lista das vantagens de usar a nossa plataforma.</p>
                            <ul style={{ listStyle: 'none' }}>
                              {funcionalidadeItems.map((funcionalidades, index) => (
                                <li className='fs-1' index={index}>{funcionalidades.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}