const calculateavgrating=reviews=>{
    const totalrating=reviews?.reduce((acc,item)=>acc+item.rating ,0)
    const avgrating=totalrating===0?"":totalrating===1?totalrating:(totalrating/reviews?.length).toFixed(1);

    return {
        totalrating,
        avgrating
    }
}
export default calculateavgrating