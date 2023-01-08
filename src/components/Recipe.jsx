
export const Recipe = ({ recipe: { name, image } }) => {
    return <div>
        <h2>{name}</h2>
        <img src={image} alt={name} width='240'/>
    </div>
}