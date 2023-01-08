import PropTypes from 'prop-types'

import { BsAlarm } from "react-icons/bs"; 
import { HiOutlineChartPie } from "react-icons/hi"
import { HiOutlineChartBar } from "react-icons/hi"

export const Recipe = ({ recipe: { name, image, time, servings, calories } }) => {
    return <div>
        <h2>{name}</h2>
        <img src={image} alt={name} width='240'/>
        <div>
            <BsAlarm />{time} min
            <HiOutlineChartPie />{servings} servings
            <HiOutlineChartBar />{calories} calories
        </div>
        <div>
            <h3>Difficulty</h3>
            <div>
            <span>Easy</span>
            <span>Medium</span>
            <span>Hard</span>
            </div>
        </div>
    </div>
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
