import {useState}from 'react'

export const TableProduction = ({data}) => {
  console.log("table",data)
  const [dataProduction, setDataProduction] = useState(data);

  console.log(dataProduction,"dataProduction")
  const handleChangeInput = (propertyName, propertyValue, envId, col) => {

  console.log(propertyName,"gg")
    // let index = col.index;
    // dispatch(
    //   setDataProduction({
    //     propertyName,
    //     propertyValue,
    //     envId,
    //     index,
    //   })
    // );
   
  };




  const buildGroup = (col, envId,name) => {
 
    return (
      <>
       <tr key={`${envId}`}>
        <th key={`${envId}`}>
          <input
            name={`${envId}`}
            value={col.year}
            onChange={(e) =>
              handleChangeInput(e.target.value, envId,`${name}`)
            }
            type="tel"
          />
        </th>
        </tr>
      </>
    );
  };
  return (
    <div>
      <table>
      <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr> */}
 

                    {data?.map((col,index) => {
                      return buildGroup(col, index,"year");
                    })}

     
  </tbody>

      </table>

    </div>
  )
}
