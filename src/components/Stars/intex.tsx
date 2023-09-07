import { Star } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Box } from '../Box'
import { StarContainer } from './style'

export interface StarProps extends ComponentProps<typeof Box> {
    ratingStar?: number
}


export function StarList({ratingStar, ...props}: StarProps) {

    const [rating, setRating] = useState(0 || ratingStar)
    const [hover, setHover] = useState(0 || ratingStar)

    return (
        <StarContainer {...props}>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                        <input 
                            type="radio" 
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <Star
                            weight={currentRating <= (rating || hover) ? 'fill' : 'thin'}
                            color="#8381D9"
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                )
            })}
        </StarContainer>
    )
}