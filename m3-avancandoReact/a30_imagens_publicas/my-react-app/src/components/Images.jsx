import Paisagem from '../assets/paisagem.jpg';

const Images = () => {
  return (
    <div>
      <h2>Imagem Public</h2>
      {/*Imagens em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      <h2>Imagem Assets</h2>
      {/* Imagens em assets */}
      <div>
      <img src={Paisagem} alt="Paisagem" />
      </div>
    </div>
  )
}

export default Images