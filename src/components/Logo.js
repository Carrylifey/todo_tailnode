export default function Logo({ onClickClear }) {
    return (
      <div className="logo-container">
        <h1 className="app-title">TODO App</h1>
        <span>
          <button className="reset-btn" onClick={onClickClear}>
            Clear list
          </button>
        </span>
      </div>
    );
  }
  