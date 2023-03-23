import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import draggableConstructorElementStyles from './DraggableConstructorElement.module.css'
import { useDrag, useDrop } from 'react-dnd'
import { useRef, useState, FunctionComponent } from 'react'
import { TIngredient } from '../../types/types'


type TDraggableConstructorProps = {
    ingredient: TIngredient;
    onInnerIngredientRemove: (id: string, index: number) => void;
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    onDrop: (isDropSuccessful: boolean) => void;
}

type TDragItem = {
    uuid: string,
    index: number
}

const DraggableConstructorElement: FunctionComponent<TDraggableConstructorProps> = ({ ingredient, onInnerIngredientRemove, index, moveCard, onDrop }) => {
    const { type, name, price, _id, image, uuid } = ingredient;
    const [style, setStyle] = useState({ opacity: 1 })
    const ref = useRef<HTMLDivElement>(null)

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
            const dragIndex = (item as TDragItem).index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                setStyle({ opacity: 0 })
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset?.y || 0) - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            setStyle({ opacity: 1 });
            moveCard(dragIndex, hoverIndex);
            (item as TDragItem).index = hoverIndex
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
                <DragIcon type="primary" />
            </div>
            <div className={draggableConstructorElementStyles.drag_item}>
                <ConstructorElement
                    type={type as "bottom" | "top"}
                    isLocked={false}
                    text={name}
                    price={price}
                    thumbnail={image}
                    handleClose={() => onInnerIngredientRemove(_id, index)} />
            </div>
        </div>
    )
}

export default DraggableConstructorElement;