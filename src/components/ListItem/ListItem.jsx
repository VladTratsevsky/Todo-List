export function ListItem({
  text,
  id,
  onClickDelete,
  onClickDon,
  classNameDon,
  buttonText,
  todoDon,
  onClickDbl,
}) {
  return (
    <div className={todoDon} onDoubleClick={() => onClickDbl(id)}>
      <div className="todo-container">
        <button className="button-delete" onClick={() => onClickDelete(id)}>
          &#215;
        </button>
        <p className={classNameDon}>{text}</p>
      </div>
      <button className="button-done" onClick={() => onClickDon(id)}>
        {buttonText}
      </button>
    </div>
  );
}
