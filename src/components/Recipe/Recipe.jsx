import PropTypes from 'prop-types'


import { BsAlarm } from "react-icons/bs"; 
import { HiOutlineChartPie } from "react-icons/hi"
import { HiOutlineChartBar } from "react-icons/hi"
import { CardWrapper, Image, 
    RecipeInfo, InfoBlock, BageList, Bage } from './Recipe.Styled' 

export const Recipe = ({ recipe: { name, image, time, servings, calories, difficulty } }) => {
    return <CardWrapper>
        <h2>{name}</h2>
        <Image src={image} alt={name} width='240'/>
        <RecipeInfo>
            <InfoBlock><BsAlarm size={24}/>{time} min</InfoBlock>
            <InfoBlock><HiOutlineChartPie size={24} />{servings} servings</InfoBlock>
            <InfoBlock><HiOutlineChartBar size={24} />{calories} calories</InfoBlock>
        </RecipeInfo>
        <div>
            <h3>Difficulty</h3>
            <BageList>
            <Bage variant='easy' isActive={difficulty === 'easy'}>Easy</Bage>
            <Bage variant='medium' isActive={difficulty === 'medium'}>Medium</Bage>
            <Bage variant='hard' isActive={difficulty === 'hard'}>Hard</Bage>
            </BageList>
        </div>
    </CardWrapper>
}

Recipe.propTypes = {
    recipe: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy', 'medium', 'hard'])
    }).isRequired,
}
