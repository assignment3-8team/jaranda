import "./style.css";

const Pagination = props => {
  const { maxIndex, pageIndex, setPageIndex } = props;

  return (
    <section className="pagination-wrap">
      <table className="pagination">
        <tbody>
          <tr>
            <td>{pageIndex - 1 === 0 ? null : <img onClick={() => setPageIndex(prevState => prevState - 1)} src="/assets/leftPage.png" />}</td>
            <td onClick={pageIndex - 1 === 0 ? null : () => setPageIndex(prevState => prevState - 1)}>
              {pageIndex - 1 === 0 ? null : pageIndex - 1}
            </td>
            <td>{pageIndex}</td>
            <td onClick={pageIndex + 1 > maxIndex ? null : () => setPageIndex(prevState => prevState + 1)}>
              {pageIndex + 1 > maxIndex ? null : pageIndex + 1}
            </td>
            <td>{pageIndex + 1 > maxIndex ? null : <img onClick={() => setPageIndex(prevState => prevState + 1)} src="/assets/rightPage.png" />}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Pagination;
