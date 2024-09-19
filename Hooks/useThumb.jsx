import { useState } from 'react'

const useThumb = () => {
    const [ thumb, setThumb ] = useState( null )
    const makeThumb = ( file ) => {
        if ( file ) {
            let reader = new FileReader()
            reader.onload = ( r ) => {

                setThumb( <img src={ r.target.result } width="100" alt="" /> )

            }
            reader.readAsDataURL( file )
        } else {
            setThumb( null ) // tøm state = thumb fjernes
        }
    }
    // returner (send ud) thumb-image-tag'et + funktionen som sætter det hele i gang
    return [ thumb, makeThumb ]
}

export default useThumb