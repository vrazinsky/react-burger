import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import draggableConstructorElementStyles from './DraggableConstructorElement.module.css'
import { useDrag, useDrop } from 'react-dnd'
import { useRef, useState } from 'react'
import { ingredientShape } from '../../utils/prop-types'
import PropTypes from 'prop-types';


const DraggableConstructorElement = ({ ingredient, onInnerIngredientRemove, index, moveCard, onDrop }) => {
    const { type, name, price, _id, image, uuid } = ingredient;
    const [style, setStyle] = useState({ opacity: 1 })
    const ref = useRef(null)

    const [{ handlerId }, drop] = useDrop({
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
                setStyle({ opacity: 0 })
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
            setStyle({ opacity: 1 })
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
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
            setStyle({ opacity: 1 })
            onDrop(monitor.didDrop())
        }
    })
    drop(drag(ref))
    return (
        <div className={draggableConstructorElementStyles.item + ' pb-4 ml-4 mr-4'} ref={ref} style={style} data-handler-id={handlerId} >
            <div className={draggableConstructorElementStyles.drag_icon}>
                <DragIcon />
            </div>
            <div className={draggableConstructorElementStyles.drag_item}>
                <ConstructorElement
                    type={type}
                    isLocked={false}
                    text={name}
                    price={price}
                    thumbnail={image}
                    handleClose={() => onInnerIngredientRemove(_id, index)} />
            </div>
        </div>
    )
}

DraggableConstructorElement.propTypes = {
    ingredient: ingredientShape.isRequired,
    onInnerIngredientRemove: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    moveCard: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default DraggableConstructorElement;