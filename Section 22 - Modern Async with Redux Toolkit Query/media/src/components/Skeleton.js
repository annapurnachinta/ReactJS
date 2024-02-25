import classNames from 'classnames'

function Skeleton({times, className}) {
    const outDiv = classNames(
        'relative', 'overflow-hidden', 'bg-gray-200', 'rounded', 'mb-2.5', className
    )
    const interDiv = classNames(
        'animate-shimmer', 'absolute', 'inset-0', '-translate-x-full', 'bg-gradient-to-r',
        'from-gray-200', 'via-white', 'to-gray-200'
    )

    const boxes = Array(times).fill(0).map((_, i) => {
        return( <div key={i} className={outDiv}>
            <div className={interDiv}></div>
        </div>)
    })

    return boxes
}

export default Skeleton