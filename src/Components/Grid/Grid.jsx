export default function Grid() {
  return (
    <div className="body">
      {/* <!-- CSS Grid --> */}
      <h1 className="title">CSS GRID</h1>
      <div className="wrapper">
        <div className="header">HEADER</div>
        <div className="menu">MENU</div>
        <div className="content">CONTENT</div>
        <div className="footer">FOOTER</div>
      </div>

      <h1 className="title">BOOTSTRAP</h1>
      <div className="row">
        <div className="col-xs-12 header">HEADER</div>
      </div>
      <div className="row">
        <div className="col-xs-4 menu">MENU</div>
        <div className="col-xs-8 content">CONTENT</div>
      </div>
      <div className="row">
        <div className="col-xs-12 footer">FOOTER</div>
      </div>
    </div>
  );
}
