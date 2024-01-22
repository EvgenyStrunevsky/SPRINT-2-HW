import React from 'react'
import {Slider, SliderProps} from '@mui/material'

// type SuperRangePropsType = {
//     value: number | number[]
// }

const SuperRange: React.FC<SliderProps > = (props) => {
    return (
        <Slider
            sx={{width: 147,color: 'success.main',}}
            value={props.value} 
            onChange={props.onChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
