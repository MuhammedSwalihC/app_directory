import ReactHtmlParser from "react-html-parser";

interface Props {
  description?: any;
}

const Details: React.FC<Props> = ({ description }) => {
  return (
    <>
      <div className="ProseMirror">{ReactHtmlParser(description)}</div>
    </>
  );
};

export default Details;
