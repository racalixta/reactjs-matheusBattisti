import { useState } from "react"


const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Carlos']);
  const [users] = useState([
    {id: 0, nome: 'Mat', age:32},
    {id: 1, nome: 'John', age:44},
    {id: 2, nome: 'Mikal', age:23},
    {id: 3, nome: 'Cam', age:28},
    
  ]);
  return (
    <div>
      {/* Nao é recomedado utilizar o index */}
      <h2>Usando index na key, não é recomendado</h2>
      <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h2>Usando object e seu id na key</h2>
      <ul>
        {users.map((item) => (
            <li key={item.id}>{item.nome}</li>
        ))}
      </ul>

    </div>


  )
}

export default ListRender