import React from "react";
import NoImage from "../../assets/images/160x90_NoImage.jpg";
import PDFImage from "../../assets/images/img_icon_64x64_pdf.png";
import DocImage from "../../assets/images/img_icon_64x64_word.png";
import { WEB_URL } from "../../config";
import { isPDF } from "./CommonFunctions";

export default function ThumbnailDocument({ file }) {
  return (
    <>
      {file.length === 0 ? (
        <img
          src={NoImage}
          className="img img-fluid img-thumbnail img-responsive d-block float-right"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        <a href={`${WEB_URL}/Documents/${file}`} alt="" target="_blank">
          <img
            src={isPDF(file) ? PDFImage : DocImage}
            className="img img-fluid img-responsive d-block float-right"
          />
        </a>
      )}
    </>
  );
}
