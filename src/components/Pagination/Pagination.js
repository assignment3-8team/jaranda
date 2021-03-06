import { useCallback } from 'react';
import "./style.css";

const Pagination = props => {
  const { maxIndex, pageIndex, setPageIndex } = props;

    const handleOnClickTd = useCallback((leftOrRight) => {
        leftOrRight === 'left' ?
            setPageIndex(prevState => prevState - 1)
        :
            setPageIndex(prevState => prevState + 1)
    },[setPageIndex]) 

  return (
    <section className="pagination-wrap">
      <table className="pagination">
        <tbody>
          <tr>
            <td>{pageIndex - 1 === 0 ? null : <img onClick={() => handleOnClickTd('left')} alt="leftPage" src="/assets/leftPage.png" />}</td>
            <td onClick={pageIndex - 1 === 0 ? null : () => handleOnClickTd('left')}>
              {pageIndex - 1 === 0 ? null : <span>{pageIndex - 1}</span>}
            </td>
            <td><span>{pageIndex}</span></td>
            <td onClick={pageIndex + 1 > maxIndex ? null : () => handleOnClickTd('right')}>
              {pageIndex + 1 > maxIndex ? null : <span>{pageIndex + 1}</span>}
            </td>
            <td>{pageIndex + 1 > maxIndex ? null : <img onClick={() => handleOnClickTd('right')} alt="rightPage" src="/assets/rightPage.png" />}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Pagination;
