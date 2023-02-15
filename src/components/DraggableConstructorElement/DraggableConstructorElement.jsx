import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import draggableConstructorElementStyles from './DraggableConstructorElement.module.css' 
import { useDrag, useDrop } from 'react-dnd'
import { useRef, useState } from 'react'


const DraggableConstructorElement = ({ingredient, onInnerIngredientRemove, index, moveCard, onDrop}) => {
    const {type, name, price, _id, image, uuid} = ingredient;    
    const [isHovering, setIsHovering] = useState(false)
    const ref = useRef(null)      
 
    const [{handlerId}, drop] = useDrop({    
        accept: 'sort',
        collect(monitor) {
            return {
              handlerId: monitor.getHandlerId(),
            }
          },       
        hover(item, monitor) {
            
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index            
            if (dragIndex === hoverIndex) {
                setIsHovering(true)
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()    
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2    
            const clientOffset = monitor.getClientOffset()    
            const hoverClientY = clientOffset.y - hoverBoundingRect.top    
            
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }      
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            setIsHovering(false)
            moveCard(dragIndex, hoverIndex)          
            item.index = hoverIndex
        },
        // drop() {            
        //     setIsHovering(false)
        // },
    })    
    const [, drag] = useDrag({  
        type: 'sort',      
        item: () => {
          return { uuid, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end(item, monitor) {
            setIsHovering(false)
            onDrop(monitor.didDrop())
        }
      })    
    drop(drag(ref))
    return (        
    <div className={draggableConstructorElementStyles.item + ' pb-4 ml-4 mr-4'} ref={ref}  style={{opacity: (isHovering ? 0: 1)}} data-handler-id={handlerId} >
         <div style={{width: '36px' }}>
            <DragIcon />
        </div>
        <div style={{width: '536px'}}>
            <ConstructorElement  
            type={type}
            isLocked={false}
            text ={name}
            price={price}
            thumbnail={image}
            handleClose={() => onInnerIngredientRemove(_id, index) }/>
        </div>
    </div>
    )
}

export default DraggableConstructorElement;