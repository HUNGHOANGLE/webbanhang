import React, {useState} from 'react'

const Table = props => {

    // Hiển thị dòng số dưới cái page
    const initialDataShow = props.limit && props.bodyData ? props.bodyData.slice(0,Number(props.limit)): props.bodyData

    const [datashow, setdatashow] = useState(initialDataShow);

    let pages = 1;

    let range =[];

    if (props.limit !== undefined){
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length & Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage,setCurrPage] = useState(0)

    const selectPage = page =>{
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setdatashow(props.bodyData.slice(start,end))
        setCurrPage(page)
    }

  return (
    <div>
        <div className='table-wrapper'>
            <table className='table-basic'>
                {
                    props.headData && props.renderHead ? (
                        <thead className='table-basic-thead'>
                            <tr>
                                {
                                    props.headData.map((item,index) => props.renderHead(item,index))
                                }
                            </tr>
                        </thead>
                    ) : null
                }
                {
                    props.bodyData && props.renderBody ? (
                        <tbody className='table-basic-tbody'>
                            {
                                datashow.map((item,index) => props.renderBody(item,index))
                            }
                        </tbody>
                    ) : null
                }
            </table>
        </div>
        {
            pages > 1 ? (
                <div className="table__pagination">
                    {
                        range.map((item,index)=>(
                            <div key = {index} className={`table__pagination-item ${currPage === index ? 'active': ''}`} 
                                onClick ={() => selectPage(index)}
                            >
                                
                                {item + 1}
                            </div>
                        ))
                    }
                </div>
            ) : null
        }
    </div>
  )
}

export default Table
