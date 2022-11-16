import React from "react";
import "./LoadDataError.css";
import CloudErrorIcon from "src/modules/common/components/CloudErrorIcon/CloudErrorIcon";

type Props = {
  iconWidth?: string;
  iconHeight?: string;
  onReload: React.MouseEventHandler;
};

const LoadDataError: React.FC<Props> = (props) => {
  const { iconWidth, iconHeight, onReload } = props;
  return (
    <div className="load-data-error">
      <CloudErrorIcon width={iconWidth} height={iconHeight} />
      <p className="load-data-error__upper-text">
        Chưa hoàn tất xử lí dữ liệu.
      </p>
      <p className="load-data-error__lower-text">Vui lòng ấn Tải lại.</p>
      <button
        onClick={onReload}
        className="btn btn--active load-data-error__btn"
      >
        Tải lại
      </button>
    </div>
  );
};

export default LoadDataError;
