export default function Button(props){
    const { text,color,size,width,height } = props
    const Btnclass = `button button-${color} button-${size}`
    const BtnStyle = `width:${width};height:${height}`

    return (
        <button className={Btnclass} Style={BtnStyle}>{text}</button>
    )

}