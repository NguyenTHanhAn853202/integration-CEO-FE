import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import styles from "./pageNumber.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PageNumber({ currentPage = 1, setCurrentPage, count = 0, limit = 5 }) {
  const maxPage = Math.ceil(count / limit);
  const handleIncrement = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={cx("wrapper-pagenumber")}>
      <span>
        Showing {currentPage} of {maxPage} entries
      </span>
      <div className={cx("contain-btn")}>
        <span onClick={handleDecrement}>
          <GrFormPrevious />
        </span>
        <span onClick={handleIncrement}>
          <MdOutlineNavigateNext />
        </span>
      </div>
    </div>
  );
}

export default PageNumber;
